/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InvoiceStatus,
  InvoiceStatus$inboundSchema,
  InvoiceStatus$outboundSchema,
} from "./invoicestatus.js";
import {
  LendingCustomerRef,
  LendingCustomerRef$inboundSchema,
  LendingCustomerRef$Outbound,
  LendingCustomerRef$outboundSchema,
} from "./lendingcustomerref.js";
import {
  Payment,
  Payment$inboundSchema,
  Payment$Outbound,
  Payment$outboundSchema,
} from "./payment.js";

export type EnhancedInvoiceReportItem = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * ID of the invoice, which may be a GUID but it may be something else depending on the accounting software.
   */
  id?: string | undefined;
  /**
   * Invoice number.
   */
  invoiceNumber?: string | undefined;
  customerRef?: LendingCustomerRef | undefined;
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
  issueDate?: string | undefined;
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
  dueDate?: string | undefined;
  /**
   * Current state of the invoice:
   *
   * @remarks
   *
   * - `Draft` - Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.
   * - `Submitted` - Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (amountDue == totalAmount).
   * - `PartiallyPaid` - The balance paid against the invoice is positive, but less than the total invoice amount (0 < amountDue < totalAmount).
   * - `Paid` - Invoice is paid in full. This includes if the invoice has been credited or overpaid (amountDue == 0).
   * - `Void` - An invoice can become Void when it's deleted, refunded, written off, or cancelled. A voided invoice may still be PartiallyPaid, and so all outstanding amounts on voided invoices are removed from the accounts receivable account.
   */
  status?: InvoiceStatus | undefined;
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
  currency?: string | undefined;
  /**
   * Invoice's total amount.
   */
  totalAmount?: Decimal$ | number | undefined;
  /**
   * Invoice's total amount due.
   */
  amountDue?: Decimal$ | number | undefined;
  payments?: Array<Payment> | undefined;
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
  paidOnDate?: string | undefined;
};

/** @internal */
export const EnhancedInvoiceReportItem$inboundSchema: z.ZodType<
  EnhancedInvoiceReportItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  invoiceNumber: z.string().optional(),
  customerRef: LendingCustomerRef$inboundSchema.optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  status: InvoiceStatus$inboundSchema.optional(),
  currency: z.string().optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)).optional(),
  amountDue: z.number().transform(v => new Decimal$(v)).optional(),
  payments: z.array(Payment$inboundSchema).optional(),
  paidOnDate: z.string().optional(),
});

/** @internal */
export type EnhancedInvoiceReportItem$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  invoiceNumber?: string | undefined;
  customerRef?: LendingCustomerRef$Outbound | undefined;
  issueDate?: string | undefined;
  dueDate?: string | undefined;
  status?: string | undefined;
  currency?: string | undefined;
  totalAmount?: number | undefined;
  amountDue?: number | undefined;
  payments?: Array<Payment$Outbound> | undefined;
  paidOnDate?: string | undefined;
};

/** @internal */
export const EnhancedInvoiceReportItem$outboundSchema: z.ZodType<
  EnhancedInvoiceReportItem$Outbound,
  z.ZodTypeDef,
  EnhancedInvoiceReportItem
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  invoiceNumber: z.string().optional(),
  customerRef: LendingCustomerRef$outboundSchema.optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  status: InvoiceStatus$outboundSchema.optional(),
  currency: z.string().optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  amountDue: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  payments: z.array(Payment$outboundSchema).optional(),
  paidOnDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnhancedInvoiceReportItem$ {
  /** @deprecated use `EnhancedInvoiceReportItem$inboundSchema` instead. */
  export const inboundSchema = EnhancedInvoiceReportItem$inboundSchema;
  /** @deprecated use `EnhancedInvoiceReportItem$outboundSchema` instead. */
  export const outboundSchema = EnhancedInvoiceReportItem$outboundSchema;
  /** @deprecated use `EnhancedInvoiceReportItem$Outbound` instead. */
  export type Outbound = EnhancedInvoiceReportItem$Outbound;
}

export function enhancedInvoiceReportItemToJSON(
  enhancedInvoiceReportItem: EnhancedInvoiceReportItem,
): string {
  return JSON.stringify(
    EnhancedInvoiceReportItem$outboundSchema.parse(enhancedInvoiceReportItem),
  );
}

export function enhancedInvoiceReportItemFromJSON(
  jsonString: string,
): SafeParseResult<EnhancedInvoiceReportItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnhancedInvoiceReportItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnhancedInvoiceReportItem' from JSON`,
  );
}
