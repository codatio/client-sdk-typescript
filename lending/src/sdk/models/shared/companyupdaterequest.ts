/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CompanyUpdateRequest = {
  /**
   * Name of company being connected.
   */
  name?: string | undefined;
  /**
   * Additional information about the company. This can be used to store foreign IDs, references, etc.
   */
  description?: string | undefined;
  /**
   * A collection of user-defined key-value pairs that store custom metadata against the company.
   */
  tags?: { [k: string]: string } | undefined;
};

/** @internal */
export const CompanyUpdateRequest$inboundSchema: z.ZodType<
  CompanyUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string()).optional(),
});

/** @internal */
export type CompanyUpdateRequest$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  tags?: { [k: string]: string } | undefined;
};

/** @internal */
export const CompanyUpdateRequest$outboundSchema: z.ZodType<
  CompanyUpdateRequest$Outbound,
  z.ZodTypeDef,
  CompanyUpdateRequest
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyUpdateRequest$ {
  /** @deprecated use `CompanyUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CompanyUpdateRequest$inboundSchema;
  /** @deprecated use `CompanyUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CompanyUpdateRequest$outboundSchema;
  /** @deprecated use `CompanyUpdateRequest$Outbound` instead. */
  export type Outbound = CompanyUpdateRequest$Outbound;
}

export function companyUpdateRequestToJSON(
  companyUpdateRequest: CompanyUpdateRequest,
): string {
  return JSON.stringify(
    CompanyUpdateRequest$outboundSchema.parse(companyUpdateRequest),
  );
}

export function companyUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CompanyUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompanyUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompanyUpdateRequest' from JSON`,
  );
}
