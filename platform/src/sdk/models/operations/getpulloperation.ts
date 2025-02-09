/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPullOperationRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for the dataset that completed its sync.
   */
  datasetId: string;
};

/** @internal */
export const GetPullOperationRequest$inboundSchema: z.ZodType<
  GetPullOperationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  datasetId: z.string(),
});

/** @internal */
export type GetPullOperationRequest$Outbound = {
  companyId: string;
  datasetId: string;
};

/** @internal */
export const GetPullOperationRequest$outboundSchema: z.ZodType<
  GetPullOperationRequest$Outbound,
  z.ZodTypeDef,
  GetPullOperationRequest
> = z.object({
  companyId: z.string(),
  datasetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPullOperationRequest$ {
  /** @deprecated use `GetPullOperationRequest$inboundSchema` instead. */
  export const inboundSchema = GetPullOperationRequest$inboundSchema;
  /** @deprecated use `GetPullOperationRequest$outboundSchema` instead. */
  export const outboundSchema = GetPullOperationRequest$outboundSchema;
  /** @deprecated use `GetPullOperationRequest$Outbound` instead. */
  export type Outbound = GetPullOperationRequest$Outbound;
}

export function getPullOperationRequestToJSON(
  getPullOperationRequest: GetPullOperationRequest,
): string {
  return JSON.stringify(
    GetPullOperationRequest$outboundSchema.parse(getPullOperationRequest),
  );
}

export function getPullOperationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPullOperationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPullOperationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPullOperationRequest' from JSON`,
  );
}
