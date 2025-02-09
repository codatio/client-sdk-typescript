/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSyncFlowUrlRequest = {
  /**
   * Commerce platform key
   */
  commerceKey: string;
  /**
   * Accounting platform key
   */
  accountingKey: string;
  /**
   * Identifier for your merchant, can be the merchant name or Codat company id.
   */
  merchantIdentifier?: string | undefined;
};

/** @internal */
export const GetSyncFlowUrlRequest$inboundSchema: z.ZodType<
  GetSyncFlowUrlRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  commerceKey: z.string(),
  accountingKey: z.string(),
  merchantIdentifier: z.string().optional(),
});

/** @internal */
export type GetSyncFlowUrlRequest$Outbound = {
  commerceKey: string;
  accountingKey: string;
  merchantIdentifier?: string | undefined;
};

/** @internal */
export const GetSyncFlowUrlRequest$outboundSchema: z.ZodType<
  GetSyncFlowUrlRequest$Outbound,
  z.ZodTypeDef,
  GetSyncFlowUrlRequest
> = z.object({
  commerceKey: z.string(),
  accountingKey: z.string(),
  merchantIdentifier: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSyncFlowUrlRequest$ {
  /** @deprecated use `GetSyncFlowUrlRequest$inboundSchema` instead. */
  export const inboundSchema = GetSyncFlowUrlRequest$inboundSchema;
  /** @deprecated use `GetSyncFlowUrlRequest$outboundSchema` instead. */
  export const outboundSchema = GetSyncFlowUrlRequest$outboundSchema;
  /** @deprecated use `GetSyncFlowUrlRequest$Outbound` instead. */
  export type Outbound = GetSyncFlowUrlRequest$Outbound;
}

export function getSyncFlowUrlRequestToJSON(
  getSyncFlowUrlRequest: GetSyncFlowUrlRequest,
): string {
  return JSON.stringify(
    GetSyncFlowUrlRequest$outboundSchema.parse(getSyncFlowUrlRequest),
  );
}

export function getSyncFlowUrlRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSyncFlowUrlRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSyncFlowUrlRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSyncFlowUrlRequest' from JSON`,
  );
}
