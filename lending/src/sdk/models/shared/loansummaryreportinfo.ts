/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LoanSummaryReportInfo = {
  /**
   * The name of the report.
   */
  reportName?: string | undefined;
  /**
   * Name of the company queried.
   */
  companyName?: string | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  generatedDate?: string | undefined;
};

/** @internal */
export const LoanSummaryReportInfo$inboundSchema: z.ZodType<
  LoanSummaryReportInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  reportName: z.string().optional(),
  companyName: z.string().optional(),
  generatedDate: z.string().optional(),
});

/** @internal */
export type LoanSummaryReportInfo$Outbound = {
  reportName?: string | undefined;
  companyName?: string | undefined;
  generatedDate?: string | undefined;
};

/** @internal */
export const LoanSummaryReportInfo$outboundSchema: z.ZodType<
  LoanSummaryReportInfo$Outbound,
  z.ZodTypeDef,
  LoanSummaryReportInfo
> = z.object({
  reportName: z.string().optional(),
  companyName: z.string().optional(),
  generatedDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanSummaryReportInfo$ {
  /** @deprecated use `LoanSummaryReportInfo$inboundSchema` instead. */
  export const inboundSchema = LoanSummaryReportInfo$inboundSchema;
  /** @deprecated use `LoanSummaryReportInfo$outboundSchema` instead. */
  export const outboundSchema = LoanSummaryReportInfo$outboundSchema;
  /** @deprecated use `LoanSummaryReportInfo$Outbound` instead. */
  export type Outbound = LoanSummaryReportInfo$Outbound;
}
