/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLatestSyncRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const GetLatestSyncRequest$inboundSchema: z.ZodType<
  GetLatestSyncRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type GetLatestSyncRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const GetLatestSyncRequest$outboundSchema: z.ZodType<
  GetLatestSyncRequest$Outbound,
  z.ZodTypeDef,
  GetLatestSyncRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestSyncRequest$ {
  /** @deprecated use `GetLatestSyncRequest$inboundSchema` instead. */
  export const inboundSchema = GetLatestSyncRequest$inboundSchema;
  /** @deprecated use `GetLatestSyncRequest$outboundSchema` instead. */
  export const outboundSchema = GetLatestSyncRequest$outboundSchema;
  /** @deprecated use `GetLatestSyncRequest$Outbound` instead. */
  export type Outbound = GetLatestSyncRequest$Outbound;
}

export function getLatestSyncRequestToJSON(
  getLatestSyncRequest: GetLatestSyncRequest,
): string {
  return JSON.stringify(
    GetLatestSyncRequest$outboundSchema.parse(getLatestSyncRequest),
  );
}

export function getLatestSyncRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLatestSyncRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLatestSyncRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLatestSyncRequest' from JSON`,
  );
}
