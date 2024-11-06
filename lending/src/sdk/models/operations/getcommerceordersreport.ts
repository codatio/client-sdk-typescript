/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetCommerceOrdersReportRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
   */
  reportDate: string;
  /**
   * The number of months per period. E.g. 2 = 2 months per period.
   */
  periodLength: number;
  /**
   * The number of periods to return. There will be no pagination as a query parameter.
   */
  numberOfPeriods: number;
  /**
   * The period unit of time returned.
   */
  periodUnit: shared.PeriodUnit;
  /**
   * Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.
   */
  includeDisplayNames?: boolean | undefined;
};

/** @internal */
export const GetCommerceOrdersReportRequest$inboundSchema: z.ZodType<
  GetCommerceOrdersReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  reportDate: z.string(),
  periodLength: z.number().int(),
  numberOfPeriods: z.number().int(),
  periodUnit: shared.PeriodUnit$inboundSchema,
  includeDisplayNames: z.boolean().optional(),
});

/** @internal */
export type GetCommerceOrdersReportRequest$Outbound = {
  companyId: string;
  connectionId: string;
  reportDate: string;
  periodLength: number;
  numberOfPeriods: number;
  periodUnit: string;
  includeDisplayNames?: boolean | undefined;
};

/** @internal */
export const GetCommerceOrdersReportRequest$outboundSchema: z.ZodType<
  GetCommerceOrdersReportRequest$Outbound,
  z.ZodTypeDef,
  GetCommerceOrdersReportRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  reportDate: z.string(),
  periodLength: z.number().int(),
  numberOfPeriods: z.number().int(),
  periodUnit: shared.PeriodUnit$outboundSchema,
  includeDisplayNames: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommerceOrdersReportRequest$ {
  /** @deprecated use `GetCommerceOrdersReportRequest$inboundSchema` instead. */
  export const inboundSchema = GetCommerceOrdersReportRequest$inboundSchema;
  /** @deprecated use `GetCommerceOrdersReportRequest$outboundSchema` instead. */
  export const outboundSchema = GetCommerceOrdersReportRequest$outboundSchema;
  /** @deprecated use `GetCommerceOrdersReportRequest$Outbound` instead. */
  export type Outbound = GetCommerceOrdersReportRequest$Outbound;
}
