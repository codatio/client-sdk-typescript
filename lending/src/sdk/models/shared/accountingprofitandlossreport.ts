/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ProfitAndLossReport,
  ProfitAndLossReport$inboundSchema,
  ProfitAndLossReport$Outbound,
  ProfitAndLossReport$outboundSchema,
} from "./profitandlossreport.js";
import {
  ReportBasis,
  ReportBasis$inboundSchema,
  ReportBasis$outboundSchema,
} from "./reportbasis.js";

/**
 * > **Language tip:** Profit and loss statement is also referred to as **income statement** under US GAAP (Generally Accepted Accounting Principles).
 *
 * @remarks
 *
 * ## Overview
 *
 * The purpose of a profit and loss report is to present the financial performance of a company over a specified time period.
 *
 * A profit and loss report shows a company's total income and expenses for a specified period of time and whether a profit or loss has been made.
 *
 * > **Profit and loss or balance sheet?**
 * > Profit and loss reports summarise the total revenue, expenses, and profit or loss over a specified time period. A balance sheet report presents all assets, liability, and equity for a given date.
 *
 * **Structure of this report**
 * This report will reflect the structure and line descriptions that the business has set in their own accounting software.
 *
 * **History**
 * By default, Codat pulls (up to) 24 months of profit and loss history for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `profitAndLoss` on the [data type settings endpoint](https://docs.codat.io/lending-api#/operations/post-profile-syncSettings).
 *
 * **Want to pull this in a standardised structure?**
 * Our [Enhanced Financials](https://docs.codat.io/lending/features/financial-statements-overview) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.
 */
export type AccountingProfitAndLossReport = {
  /**
   * An array of profit and loss reports.
   */
  reports: Array<ProfitAndLossReport>;
  /**
   * The basis of a report.
   */
  reportBasis: ReportBasis;
  /**
   * Base currency of the company in which the profit and loss report is presented.
   */
  currency: string;
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
  mostRecentAvailableMonth?: string | undefined;
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
  earliestAvailableMonth?: string | undefined;
};

/** @internal */
export const AccountingProfitAndLossReport$inboundSchema: z.ZodType<
  AccountingProfitAndLossReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  reports: z.array(ProfitAndLossReport$inboundSchema),
  reportBasis: ReportBasis$inboundSchema,
  currency: z.string(),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/** @internal */
export type AccountingProfitAndLossReport$Outbound = {
  reports: Array<ProfitAndLossReport$Outbound>;
  reportBasis: string;
  currency: string;
  mostRecentAvailableMonth?: string | undefined;
  earliestAvailableMonth?: string | undefined;
};

/** @internal */
export const AccountingProfitAndLossReport$outboundSchema: z.ZodType<
  AccountingProfitAndLossReport$Outbound,
  z.ZodTypeDef,
  AccountingProfitAndLossReport
> = z.object({
  reports: z.array(ProfitAndLossReport$outboundSchema),
  reportBasis: ReportBasis$outboundSchema,
  currency: z.string(),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingProfitAndLossReport$ {
  /** @deprecated use `AccountingProfitAndLossReport$inboundSchema` instead. */
  export const inboundSchema = AccountingProfitAndLossReport$inboundSchema;
  /** @deprecated use `AccountingProfitAndLossReport$outboundSchema` instead. */
  export const outboundSchema = AccountingProfitAndLossReport$outboundSchema;
  /** @deprecated use `AccountingProfitAndLossReport$Outbound` instead. */
  export type Outbound = AccountingProfitAndLossReport$Outbound;
}

export function accountingProfitAndLossReportToJSON(
  accountingProfitAndLossReport: AccountingProfitAndLossReport,
): string {
  return JSON.stringify(
    AccountingProfitAndLossReport$outboundSchema.parse(
      accountingProfitAndLossReport,
    ),
  );
}

export function accountingProfitAndLossReportFromJSON(
  jsonString: string,
): SafeParseResult<AccountingProfitAndLossReport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingProfitAndLossReport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingProfitAndLossReport' from JSON`,
  );
}
