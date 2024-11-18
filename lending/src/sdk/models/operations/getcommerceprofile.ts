/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCommerceProfileRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const GetCommerceProfileRequest$inboundSchema: z.ZodType<
  GetCommerceProfileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetCommerceProfileRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetCommerceProfileRequest$outboundSchema: z.ZodType<
  GetCommerceProfileRequest$Outbound,
  z.ZodTypeDef,
  GetCommerceProfileRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommerceProfileRequest$ {
  /** @deprecated use `GetCommerceProfileRequest$inboundSchema` instead. */
  export const inboundSchema = GetCommerceProfileRequest$inboundSchema;
  /** @deprecated use `GetCommerceProfileRequest$outboundSchema` instead. */
  export const outboundSchema = GetCommerceProfileRequest$outboundSchema;
  /** @deprecated use `GetCommerceProfileRequest$Outbound` instead. */
  export type Outbound = GetCommerceProfileRequest$Outbound;
}

export function getCommerceProfileRequestToJSON(
  getCommerceProfileRequest: GetCommerceProfileRequest,
): string {
  return JSON.stringify(
    GetCommerceProfileRequest$outboundSchema.parse(getCommerceProfileRequest),
  );
}

export function getCommerceProfileRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCommerceProfileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCommerceProfileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCommerceProfileRequest' from JSON`,
  );
}
