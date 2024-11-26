/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSyncByIdRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a sync.
   */
  syncId: string;
};

/** @internal */
export const GetSyncByIdRequest$inboundSchema: z.ZodType<
  GetSyncByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  syncId: z.string(),
});

/** @internal */
export type GetSyncByIdRequest$Outbound = {
  companyId: string;
  syncId: string;
};

/** @internal */
export const GetSyncByIdRequest$outboundSchema: z.ZodType<
  GetSyncByIdRequest$Outbound,
  z.ZodTypeDef,
  GetSyncByIdRequest
> = z.object({
  companyId: z.string(),
  syncId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSyncByIdRequest$ {
  /** @deprecated use `GetSyncByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetSyncByIdRequest$inboundSchema;
  /** @deprecated use `GetSyncByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetSyncByIdRequest$outboundSchema;
  /** @deprecated use `GetSyncByIdRequest$Outbound` instead. */
  export type Outbound = GetSyncByIdRequest$Outbound;
}

export function getSyncByIdRequestToJSON(
  getSyncByIdRequest: GetSyncByIdRequest,
): string {
  return JSON.stringify(
    GetSyncByIdRequest$outboundSchema.parse(getSyncByIdRequest),
  );
}

export function getSyncByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSyncByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSyncByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSyncByIdRequest' from JSON`,
  );
}
