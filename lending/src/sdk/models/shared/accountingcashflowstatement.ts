/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CashFlowStatement,
  CashFlowStatement$inboundSchema,
  CashFlowStatement$Outbound,
  CashFlowStatement$outboundSchema,
} from "./cashflowstatement.js";
import {
  ReportBasis,
  ReportBasis$inboundSchema,
  ReportBasis$outboundSchema,
} from "./reportbasis.js";
import {
  ReportInput,
  ReportInput$inboundSchema,
  ReportInput$outboundSchema,
} from "./reportinput.js";

/**
 * > View the coverage for cash flow statement in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=cashFlowStatement" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * > **Operating activities only**
 * >
 * > Currently, the cash flow statement shows cash that flows into and out of the company from operating activities *only*. Operating activities generate cash from the sale of goods or services.
 *
 * ## Overview
 *
 * A cash flow statement is a financial report that records all cash that is received or spent by a company during a given period. It gives you a clearer picture of the company’s performance, and their ability to pay creditors and finance growth.
 *
 * > **Cash flow statement or balance sheet?**
 * >
 * > Look at the cash flow statement to understand a company's ability to pay its bills. Although the balance sheet may show healthy earnings at a specific point in time, the cash flow statement allows you to see whether the company is meeting its financial commitments, such as paying creditors or its employees.
 */
export type AccountingCashFlowStatement = {
  /**
   * Array of cash flow statements.
   */
  reports: Array<CashFlowStatement>;
  /**
   * Accounting method used when aggregating the report data. In this case, `Cash`.
   */
  reportBasis: ReportBasis;
  /**
   * Accounting method used to prepare the cash flow statement.
   */
  reportInput: ReportInput;
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
export const AccountingCashFlowStatement$inboundSchema: z.ZodType<
  AccountingCashFlowStatement,
  z.ZodTypeDef,
  unknown
> = z.object({
  reports: z.array(CashFlowStatement$inboundSchema),
  reportBasis: ReportBasis$inboundSchema,
  reportInput: ReportInput$inboundSchema,
  currency: z.string(),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/** @internal */
export type AccountingCashFlowStatement$Outbound = {
  reports: Array<CashFlowStatement$Outbound>;
  reportBasis: string;
  reportInput: string;
  currency: string;
  mostRecentAvailableMonth?: string | undefined;
  earliestAvailableMonth?: string | undefined;
};

/** @internal */
export const AccountingCashFlowStatement$outboundSchema: z.ZodType<
  AccountingCashFlowStatement$Outbound,
  z.ZodTypeDef,
  AccountingCashFlowStatement
> = z.object({
  reports: z.array(CashFlowStatement$outboundSchema),
  reportBasis: ReportBasis$outboundSchema,
  reportInput: ReportInput$outboundSchema,
  currency: z.string(),
  mostRecentAvailableMonth: z.string().optional(),
  earliestAvailableMonth: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCashFlowStatement$ {
  /** @deprecated use `AccountingCashFlowStatement$inboundSchema` instead. */
  export const inboundSchema = AccountingCashFlowStatement$inboundSchema;
  /** @deprecated use `AccountingCashFlowStatement$outboundSchema` instead. */
  export const outboundSchema = AccountingCashFlowStatement$outboundSchema;
  /** @deprecated use `AccountingCashFlowStatement$Outbound` instead. */
  export type Outbound = AccountingCashFlowStatement$Outbound;
}
