/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConnectionWebhookPayload,
  ConnectionWebhookPayload$inboundSchema,
  ConnectionWebhookPayload$Outbound,
  ConnectionWebhookPayload$outboundSchema,
} from "./connectionwebhookpayload.js";

export type ConnectionWebhook = {
  /**
   * Unique identifier of the event.
   */
  id?: string | undefined;
  /**
   * The type of event.
   */
  eventType?: string | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  generatedDate?: string | undefined;
  payload?: ConnectionWebhookPayload | undefined;
};

/** @internal */
export const ConnectionWebhook$inboundSchema: z.ZodType<
  ConnectionWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  eventType: z.string().optional(),
  generatedDate: z.string().optional(),
  payload: ConnectionWebhookPayload$inboundSchema.optional(),
});

/** @internal */
export type ConnectionWebhook$Outbound = {
  id?: string | undefined;
  eventType?: string | undefined;
  generatedDate?: string | undefined;
  payload?: ConnectionWebhookPayload$Outbound | undefined;
};

/** @internal */
export const ConnectionWebhook$outboundSchema: z.ZodType<
  ConnectionWebhook$Outbound,
  z.ZodTypeDef,
  ConnectionWebhook
> = z.object({
  id: z.string().optional(),
  eventType: z.string().optional(),
  generatedDate: z.string().optional(),
  payload: ConnectionWebhookPayload$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionWebhook$ {
  /** @deprecated use `ConnectionWebhook$inboundSchema` instead. */
  export const inboundSchema = ConnectionWebhook$inboundSchema;
  /** @deprecated use `ConnectionWebhook$outboundSchema` instead. */
  export const outboundSchema = ConnectionWebhook$outboundSchema;
  /** @deprecated use `ConnectionWebhook$Outbound` instead. */
  export type Outbound = ConnectionWebhook$Outbound;
}

export function connectionWebhookToJSON(
  connectionWebhook: ConnectionWebhook,
): string {
  return JSON.stringify(
    ConnectionWebhook$outboundSchema.parse(connectionWebhook),
  );
}

export function connectionWebhookFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionWebhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionWebhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionWebhook' from JSON`,
  );
}