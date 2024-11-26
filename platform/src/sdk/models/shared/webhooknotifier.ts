/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhookNotifier = {
  emails?: Array<string> | undefined;
  /**
   * The URI the webhook service will use to post events.
   */
  webhook?: string | undefined;
};

/** @internal */
export const WebhookNotifier$inboundSchema: z.ZodType<
  WebhookNotifier,
  z.ZodTypeDef,
  unknown
> = z.object({
  emails: z.array(z.string()).optional(),
  webhook: z.string().optional(),
});

/** @internal */
export type WebhookNotifier$Outbound = {
  emails?: Array<string> | undefined;
  webhook?: string | undefined;
};

/** @internal */
export const WebhookNotifier$outboundSchema: z.ZodType<
  WebhookNotifier$Outbound,
  z.ZodTypeDef,
  WebhookNotifier
> = z.object({
  emails: z.array(z.string()).optional(),
  webhook: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookNotifier$ {
  /** @deprecated use `WebhookNotifier$inboundSchema` instead. */
  export const inboundSchema = WebhookNotifier$inboundSchema;
  /** @deprecated use `WebhookNotifier$outboundSchema` instead. */
  export const outboundSchema = WebhookNotifier$outboundSchema;
  /** @deprecated use `WebhookNotifier$Outbound` instead. */
  export type Outbound = WebhookNotifier$Outbound;
}

export function webhookNotifierToJSON(
  webhookNotifier: WebhookNotifier,
): string {
  return JSON.stringify(WebhookNotifier$outboundSchema.parse(webhookNotifier));
}

export function webhookNotifierFromJSON(
  jsonString: string,
): SafeParseResult<WebhookNotifier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookNotifier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookNotifier' from JSON`,
  );
}
