/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RefreshAllDataTypesRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const RefreshAllDataTypesRequest$inboundSchema: z.ZodType<
  RefreshAllDataTypesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type RefreshAllDataTypesRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const RefreshAllDataTypesRequest$outboundSchema: z.ZodType<
  RefreshAllDataTypesRequest$Outbound,
  z.ZodTypeDef,
  RefreshAllDataTypesRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshAllDataTypesRequest$ {
  /** @deprecated use `RefreshAllDataTypesRequest$inboundSchema` instead. */
  export const inboundSchema = RefreshAllDataTypesRequest$inboundSchema;
  /** @deprecated use `RefreshAllDataTypesRequest$outboundSchema` instead. */
  export const outboundSchema = RefreshAllDataTypesRequest$outboundSchema;
  /** @deprecated use `RefreshAllDataTypesRequest$Outbound` instead. */
  export type Outbound = RefreshAllDataTypesRequest$Outbound;
}
