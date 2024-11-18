/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BalanceSheet,
  BalanceSheet$inboundSchema,
  BalanceSheet$Outbound,
  BalanceSheet$outboundSchema,
} from "./balancesheet.js";

/**
 * ## Overview
 *
 * @remarks
 *
 * The balance sheet is a snapshot of a company's accounts at a single point in time that provides a statement of the assets, liabilities and equity of an organization. It gives interested parties an idea of the company's financial position, in addition to displaying what the company owns and owes.
 *
 * > **Balance sheet or profit and loss report?**
 * >
 * > A profit and loss report summarises the total revenue, expenses, and profit or loss during a specified time period. A balance sheet report shows the financial position of a company at a specific moment in time.
 *
 * **Structure of this report**
 * This report will reflect the structure and line descriptions that the business has set in their own accounting software.
 *
 * **History**
 * By default, Codat pulls (up to) 24 months of balance sheets for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `balanceSheet` on the [data type settings endpoint](https://docs.codat.io/lending-api#/operations/update-sync-settings).
 *
 * **Want to pull this in a standardised structure?**
 * Our [Enhanced Financials](https://docs.codat.io/lending/features/financial-statements-overview) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.
 */
export type AccountingBalanceSheet = {
  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  currency: string;
  /**
   * An array of balance sheet reports.
   */
  reports: Array<BalanceSheet>;
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
export const AccountingBalanceSheet$inboundSchema: z.ZodType<
  AccountingBalanceSheet,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string(),
  reports: z.array(BalanceSheet$inboundSchema),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/** @internal */
export type AccountingBalanceSheet$Outbound = {
  currency: string;
  reports: Array<BalanceSheet$Outbound>;
  mostRecentAvailableMonth?: string | undefined;
  earliestAvailableMonth?: string | undefined;
};

/** @internal */
export const AccountingBalanceSheet$outboundSchema: z.ZodType<
  AccountingBalanceSheet$Outbound,
  z.ZodTypeDef,
  AccountingBalanceSheet
> = z.object({
  currency: z.string(),
  reports: z.array(BalanceSheet$outboundSchema),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBalanceSheet$ {
  /** @deprecated use `AccountingBalanceSheet$inboundSchema` instead. */
  export const inboundSchema = AccountingBalanceSheet$inboundSchema;
  /** @deprecated use `AccountingBalanceSheet$outboundSchema` instead. */
  export const outboundSchema = AccountingBalanceSheet$outboundSchema;
  /** @deprecated use `AccountingBalanceSheet$Outbound` instead. */
  export type Outbound = AccountingBalanceSheet$Outbound;
}

export function accountingBalanceSheetToJSON(
  accountingBalanceSheet: AccountingBalanceSheet,
): string {
  return JSON.stringify(
    AccountingBalanceSheet$outboundSchema.parse(accountingBalanceSheet),
  );
}

export function accountingBalanceSheetFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBalanceSheet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBalanceSheet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBalanceSheet' from JSON`,
  );
}
