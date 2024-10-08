/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCompanyRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const GetCompanyRequest$inboundSchema: z.ZodType<
  GetCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type GetCompanyRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const GetCompanyRequest$outboundSchema: z.ZodType<
  GetCompanyRequest$Outbound,
  z.ZodTypeDef,
  GetCompanyRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompanyRequest$ {
  /** @deprecated use `GetCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = GetCompanyRequest$inboundSchema;
  /** @deprecated use `GetCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = GetCompanyRequest$outboundSchema;
  /** @deprecated use `GetCompanyRequest$Outbound` instead. */
  export type Outbound = GetCompanyRequest$Outbound;
}
