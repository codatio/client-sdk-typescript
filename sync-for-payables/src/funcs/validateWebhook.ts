/* tslint:disable */
/* eslint-disable */

import type { CodatSyncPayablesCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import { OK, ERR } from "../sdk/types/fp";
import type { Result } from "../sdk/types/fp";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror";
import type * as shared from "../sdk/models/index";

type ValidateWebhookResult = shared.ClientRateLimitWebhook | undefined;

type WebhookMatchSpec =
    | "string"
    | "number"
    | "boolean"
    | "any"
    | { kind: "nullable"; inner: WebhookMatchSpec }
    | { kind: "array"; items: WebhookMatchSpec }
    | { kind: "object"; required: string[]; props: Record<string, WebhookMatchSpec> };

function conformsToWebhookSpec(value: unknown, spec: WebhookMatchSpec): boolean {
    if (spec === "any") { return true; }
    if (spec === "string") { return typeof value === "string"; }
    if (spec === "number") { return typeof value === "number"; }
    if (spec === "boolean") { return typeof value === "boolean"; }
    if (spec.kind === "nullable") { return value === null || conformsToWebhookSpec(value, spec.inner); }
    if (spec.kind === "array") { return Array.isArray(value) && value.every((item) => conformsToWebhookSpec(item, spec.items)); }
    if (value === null || typeof value !== "object" || Array.isArray(value)) { return false; }
    const object = value as Record<string, unknown>;
    for (const key of spec.required) {
        if (object[key] === undefined) { return false; }
    }
    for (const key of Object.keys(spec.props)) {
        if (object[key] === undefined) { continue; }
        if (!conformsToWebhookSpec(object[key], spec.props[key])) { return false; }
    }
    return true;
}

function normalizeWebhookRequest(
    request: { body: string; method: string; url: string; headers: Record<string, string> | Headers } | Request,
): Request {
    if (typeof Request !== "undefined" && request instanceof Request) { return request; }
    return new Request(request.url, request);
}

const WEBHOOK_NO_MATCH_MESSAGE = "No matching schema found for the given webhook payload";

const WEBHOOK_MATCH_ORDER: { name: string; spec: WebhookMatchSpec }[] = [
    { name: "ClientRateLimitWebhook", spec: {"kind": "object", "required": [], "props": {"id": "string", "eventType": "string", "generatedDate": "string", "payload": {"kind": "object", "required": [], "props": {"dailyQuota": "number", "quotaRemaining": "number", "expiryDate": "string"}}}} }
];

export function validateWebhook(_client: CodatSyncPayablesCore, { request }: { request: { body: string; method: string; url: string; headers: Record<string, string> | Headers } | Request }): APIPromise<Result<ValidateWebhookResult, SDKValidationError>> {
    void _client;
    return new APIPromise((async (): Promise<Result<ValidateWebhookResult, SDKValidationError>> => {
        const normalized = normalizeWebhookRequest(request);
        const jsonString = await normalized.text();
        let parsed: unknown;
        try {
            parsed = JSON.parse(jsonString);
        } catch {
            return ERR(new SDKValidationError(WEBHOOK_NO_MATCH_MESSAGE, jsonString, jsonString));
        }
        for (const member of WEBHOOK_MATCH_ORDER) {
            if (conformsToWebhookSpec(parsed, member.spec)) {
                return OK(parsed as ValidateWebhookResult);
            }
        }
        return ERR(new SDKValidationError(WEBHOOK_NO_MATCH_MESSAGE, jsonString, jsonString));
    })());
}
