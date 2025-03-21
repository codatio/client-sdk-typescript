/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type SetCompanyConfigurationRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  companyConfiguration?: shared.CompanyConfiguration | undefined;
};

/** @internal */
export const SetCompanyConfigurationRequest$inboundSchema: z.ZodType<
  SetCompanyConfigurationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  CompanyConfiguration: shared.CompanyConfiguration$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "CompanyConfiguration": "companyConfiguration",
  });
});

/** @internal */
export type SetCompanyConfigurationRequest$Outbound = {
  companyId: string;
  CompanyConfiguration?: shared.CompanyConfiguration$Outbound | undefined;
};

/** @internal */
export const SetCompanyConfigurationRequest$outboundSchema: z.ZodType<
  SetCompanyConfigurationRequest$Outbound,
  z.ZodTypeDef,
  SetCompanyConfigurationRequest
> = z.object({
  companyId: z.string(),
  companyConfiguration: shared.CompanyConfiguration$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    companyConfiguration: "CompanyConfiguration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetCompanyConfigurationRequest$ {
  /** @deprecated use `SetCompanyConfigurationRequest$inboundSchema` instead. */
  export const inboundSchema = SetCompanyConfigurationRequest$inboundSchema;
  /** @deprecated use `SetCompanyConfigurationRequest$outboundSchema` instead. */
  export const outboundSchema = SetCompanyConfigurationRequest$outboundSchema;
  /** @deprecated use `SetCompanyConfigurationRequest$Outbound` instead. */
  export type Outbound = SetCompanyConfigurationRequest$Outbound;
}

export function setCompanyConfigurationRequestToJSON(
  setCompanyConfigurationRequest: SetCompanyConfigurationRequest,
): string {
  return JSON.stringify(
    SetCompanyConfigurationRequest$outboundSchema.parse(
      setCompanyConfigurationRequest,
    ),
  );
}

export function setCompanyConfigurationRequestFromJSON(
  jsonString: string,
): SafeParseResult<SetCompanyConfigurationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SetCompanyConfigurationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SetCompanyConfigurationRequest' from JSON`,
  );
}
