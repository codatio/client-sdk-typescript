/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompanyInfoRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const GetCompanyInfoRequest$inboundSchema: z.ZodType<
  GetCompanyInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type GetCompanyInfoRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const GetCompanyInfoRequest$outboundSchema: z.ZodType<
  GetCompanyInfoRequest$Outbound,
  z.ZodTypeDef,
  GetCompanyInfoRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanyInfoRequest$ {
  /** @deprecated use `GetCompanyInfoRequest$inboundSchema` instead. */
  export const inboundSchema = GetCompanyInfoRequest$inboundSchema;
  /** @deprecated use `GetCompanyInfoRequest$outboundSchema` instead. */
  export const outboundSchema = GetCompanyInfoRequest$outboundSchema;
  /** @deprecated use `GetCompanyInfoRequest$Outbound` instead. */
  export type Outbound = GetCompanyInfoRequest$Outbound;
}

export function getCompanyInfoRequestToJSON(
  getCompanyInfoRequest: GetCompanyInfoRequest,
): string {
  return JSON.stringify(
    GetCompanyInfoRequest$outboundSchema.parse(getCompanyInfoRequest),
  );
}

export function getCompanyInfoRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCompanyInfoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCompanyInfoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCompanyInfoRequest' from JSON`,
  );
}