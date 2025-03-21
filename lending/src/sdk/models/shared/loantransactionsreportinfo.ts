/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LoanTransactionsReportInfo = {
  /**
   * The page number.
   */
  pageNumber?: number | undefined;
  /**
   * Queried page size.
   */
  pageSize?: number | undefined;
  /**
   * The total number of transactions returned.
   */
  totalResults?: number | undefined;
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
export const LoanTransactionsReportInfo$inboundSchema: z.ZodType<
  LoanTransactionsReportInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  totalResults: z.number().int().optional(),
  reportName: z.string().optional(),
  companyName: z.string().optional(),
  generatedDate: z.string().optional(),
});

/** @internal */
export type LoanTransactionsReportInfo$Outbound = {
  pageNumber?: number | undefined;
  pageSize?: number | undefined;
  totalResults?: number | undefined;
  reportName?: string | undefined;
  companyName?: string | undefined;
  generatedDate?: string | undefined;
};

/** @internal */
export const LoanTransactionsReportInfo$outboundSchema: z.ZodType<
  LoanTransactionsReportInfo$Outbound,
  z.ZodTypeDef,
  LoanTransactionsReportInfo
> = z.object({
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  totalResults: z.number().int().optional(),
  reportName: z.string().optional(),
  companyName: z.string().optional(),
  generatedDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanTransactionsReportInfo$ {
  /** @deprecated use `LoanTransactionsReportInfo$inboundSchema` instead. */
  export const inboundSchema = LoanTransactionsReportInfo$inboundSchema;
  /** @deprecated use `LoanTransactionsReportInfo$outboundSchema` instead. */
  export const outboundSchema = LoanTransactionsReportInfo$outboundSchema;
  /** @deprecated use `LoanTransactionsReportInfo$Outbound` instead. */
  export type Outbound = LoanTransactionsReportInfo$Outbound;
}

export function loanTransactionsReportInfoToJSON(
  loanTransactionsReportInfo: LoanTransactionsReportInfo,
): string {
  return JSON.stringify(
    LoanTransactionsReportInfo$outboundSchema.parse(loanTransactionsReportInfo),
  );
}

export function loanTransactionsReportInfoFromJSON(
  jsonString: string,
): SafeParseResult<LoanTransactionsReportInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LoanTransactionsReportInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LoanTransactionsReportInfo' from JSON`,
  );
}
