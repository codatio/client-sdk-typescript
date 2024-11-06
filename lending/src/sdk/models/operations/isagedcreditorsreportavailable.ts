/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type IsAgedCreditorsReportAvailableRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const IsAgedCreditorsReportAvailableRequest$inboundSchema: z.ZodType<
  IsAgedCreditorsReportAvailableRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type IsAgedCreditorsReportAvailableRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const IsAgedCreditorsReportAvailableRequest$outboundSchema: z.ZodType<
  IsAgedCreditorsReportAvailableRequest$Outbound,
  z.ZodTypeDef,
  IsAgedCreditorsReportAvailableRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IsAgedCreditorsReportAvailableRequest$ {
  /** @deprecated use `IsAgedCreditorsReportAvailableRequest$inboundSchema` instead. */
  export const inboundSchema =
    IsAgedCreditorsReportAvailableRequest$inboundSchema;
  /** @deprecated use `IsAgedCreditorsReportAvailableRequest$outboundSchema` instead. */
  export const outboundSchema =
    IsAgedCreditorsReportAvailableRequest$outboundSchema;
  /** @deprecated use `IsAgedCreditorsReportAvailableRequest$Outbound` instead. */
  export type Outbound = IsAgedCreditorsReportAvailableRequest$Outbound;
}
