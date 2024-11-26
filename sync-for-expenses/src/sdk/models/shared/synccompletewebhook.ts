/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SyncCompleteWebhookData,
  SyncCompleteWebhookData$inboundSchema,
  SyncCompleteWebhookData$Outbound,
  SyncCompleteWebhookData$outboundSchema,
} from "./synccompletewebhookdata.js";

/**
 * Webhook request body used to notify that a sync has completed.
 */
export type SyncCompleteWebhook = {
  /**
   * Unique identifier for your client in Codat.
   */
  clientId?: string | undefined;
  /**
   * Name of your client in Codat.
   */
  clientName?: string | undefined;
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId?: string | undefined;
  /**
   * Unique identifier for the rule.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  ruleId?: string | undefined;
  /**
   * The type of rule.
   */
  ruleType?: string | undefined;
  /**
   * Unique identifier of the webhook event.
   */
  alertId?: string | undefined;
  /**
   * A human-readable message about the webhook.
   */
  message?: string | undefined;
  data?: SyncCompleteWebhookData | undefined;
};

/** @internal */
export const SyncCompleteWebhook$inboundSchema: z.ZodType<
  SyncCompleteWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  ClientId: z.string().optional(),
  ClientName: z.string().optional(),
  CompanyId: z.string().optional(),
  RuleId: z.string().optional(),
  RuleType: z.string().optional(),
  AlertId: z.string().optional(),
  Message: z.string().optional(),
  Data: SyncCompleteWebhookData$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ClientId": "clientId",
    "ClientName": "clientName",
    "CompanyId": "companyId",
    "RuleId": "ruleId",
    "RuleType": "ruleType",
    "AlertId": "alertId",
    "Message": "message",
    "Data": "data",
  });
});

/** @internal */
export type SyncCompleteWebhook$Outbound = {
  ClientId?: string | undefined;
  ClientName?: string | undefined;
  CompanyId?: string | undefined;
  RuleId?: string | undefined;
  RuleType?: string | undefined;
  AlertId?: string | undefined;
  Message?: string | undefined;
  Data?: SyncCompleteWebhookData$Outbound | undefined;
};

/** @internal */
export const SyncCompleteWebhook$outboundSchema: z.ZodType<
  SyncCompleteWebhook$Outbound,
  z.ZodTypeDef,
  SyncCompleteWebhook
> = z.object({
  clientId: z.string().optional(),
  clientName: z.string().optional(),
  companyId: z.string().optional(),
  ruleId: z.string().optional(),
  ruleType: z.string().optional(),
  alertId: z.string().optional(),
  message: z.string().optional(),
  data: SyncCompleteWebhookData$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    clientId: "ClientId",
    clientName: "ClientName",
    companyId: "CompanyId",
    ruleId: "RuleId",
    ruleType: "RuleType",
    alertId: "AlertId",
    message: "Message",
    data: "Data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SyncCompleteWebhook$ {
  /** @deprecated use `SyncCompleteWebhook$inboundSchema` instead. */
  export const inboundSchema = SyncCompleteWebhook$inboundSchema;
  /** @deprecated use `SyncCompleteWebhook$outboundSchema` instead. */
  export const outboundSchema = SyncCompleteWebhook$outboundSchema;
  /** @deprecated use `SyncCompleteWebhook$Outbound` instead. */
  export type Outbound = SyncCompleteWebhook$Outbound;
}

export function syncCompleteWebhookToJSON(
  syncCompleteWebhook: SyncCompleteWebhook,
): string {
  return JSON.stringify(
    SyncCompleteWebhook$outboundSchema.parse(syncCompleteWebhook),
  );
}

export function syncCompleteWebhookFromJSON(
  jsonString: string,
): SafeParseResult<SyncCompleteWebhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SyncCompleteWebhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SyncCompleteWebhook' from JSON`,
  );
}
