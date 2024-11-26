/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSyncStatusRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const GetSyncStatusRequest$inboundSchema: z.ZodType<
  GetSyncStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type GetSyncStatusRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const GetSyncStatusRequest$outboundSchema: z.ZodType<
  GetSyncStatusRequest$Outbound,
  z.ZodTypeDef,
  GetSyncStatusRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSyncStatusRequest$ {
  /** @deprecated use `GetSyncStatusRequest$inboundSchema` instead. */
  export const inboundSchema = GetSyncStatusRequest$inboundSchema;
  /** @deprecated use `GetSyncStatusRequest$outboundSchema` instead. */
  export const outboundSchema = GetSyncStatusRequest$outboundSchema;
  /** @deprecated use `GetSyncStatusRequest$Outbound` instead. */
  export type Outbound = GetSyncStatusRequest$Outbound;
}

export function getSyncStatusRequestToJSON(
  getSyncStatusRequest: GetSyncStatusRequest,
): string {
  return JSON.stringify(
    GetSyncStatusRequest$outboundSchema.parse(getSyncStatusRequest),
  );
}

export function getSyncStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSyncStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSyncStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSyncStatusRequest' from JSON`,
  );
}
