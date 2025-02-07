/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingCustomerRef,
  AccountingCustomerRef$inboundSchema,
  AccountingCustomerRef$Outbound,
  AccountingCustomerRef$outboundSchema,
} from "./accountingcustomerref.js";
import {
  AccountingPaymentAllocation,
  AccountingPaymentAllocation$inboundSchema,
  AccountingPaymentAllocation$Outbound,
  AccountingPaymentAllocation$outboundSchema,
} from "./accountingpaymentallocation.js";
import {
  CreditNoteLineItem,
  CreditNoteLineItem$inboundSchema,
  CreditNoteLineItem$Outbound,
  CreditNoteLineItem$outboundSchema,
} from "./creditnotelineitem.js";
import {
  CreditNoteStatus,
  CreditNoteStatus$inboundSchema,
  CreditNoteStatus$outboundSchema,
} from "./creditnotestatus.js";
import {
  Items,
  Items$inboundSchema,
  Items$Outbound,
  Items$outboundSchema,
} from "./items.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";

/**
 * ## Overview
 *
 * @remarks
 *
 * Think of a credit note as a voucher issued to a customer. It is a reduction that can be applied against one or multiple invoices. A credit note can either reduce the amount owed or cancel out an invoice entirely.
 *
 * In the Codat system a credit note is issued to a [customer's](https://docs.codat.io/lending-api#/schemas/Customer) accounts receivable.
 *
 * It contains details of:
 * * The amount of credit remaining and its status.
 * * Payment allocations against the payments type, in this case an invoice.
 * * Which customers the credit notes have been issued to.
 */
export type AccountingCreditNote = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the credit note, unique to the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Friendly reference for the credit note.
   */
  creditNoteNumber?: string | null | undefined;
  customerRef?: AccountingCustomerRef | undefined;
  withholdingTax?: Array<Items> | null | undefined;
  /**
   * Total amount of credit that has been applied to the customer's accounts receivable
   */
  totalAmount: Decimal$ | number;
  /**
   * Any discounts applied to the credit note amount.
   */
  totalDiscount: Decimal$ | number;
  /**
   * Value of the credit note, including discounts and excluding tax.
   */
  subTotal: Decimal$ | number;
  /**
   * Additional tax amount applied to credit note.
   */
  additionalTaxAmount?: Decimal$ | number | undefined;
  /**
   * Percentage rate of any additional tax applied to the credit note.
   */
  additionalTaxPercentage?: Decimal$ | number | undefined;
  /**
   * Any tax applied to the credit note amount.
   */
  totalTaxAmount: Decimal$ | number;
  /**
   * Percentage rate (from 0 to 100) of discounts applied to the credit note.
   */
  discountPercentage: Decimal$ | number;
  /**
   * Unused balance of totalAmount originally raised.
   */
  remainingCredit: Decimal$ | number;
  /**
   * Current state of the credit note.
   */
  status: CreditNoteStatus;
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
  allocatedOnDate?: string | undefined;
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
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
   *
   * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
   *
   * Where the currency rate is provided by the underlying accounting software, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
   *
   * For accounting software which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
   *
   * ## Examples with base currency of GBP
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **USD**          | $20            | 0.781         | £15.62                     |
   * | **EUR**          | €20            | 0.885         | £17.70                     |
   * | **RUB**          | ₽20            | 0.011         | £0.22                      |
   *
   * ## Examples with base currency of USD
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **GBP**          | £20            | 1.277         | $25.54                     |
   * | **EUR**          | €20            | 1.134         | $22.68                     |
   * | **RUB**          | ₽20            | 0.015         | $0.30                      |
   *
   * ### Integration-specific details
   *
   * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
   * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, specify a currencyRate in the request body.  |
   */
  currencyRate?: Decimal$ | number | null | undefined;
  lineItems?: Array<CreditNoteLineItem> | null | undefined;
  /**
   * An array of payment allocations.
   */
  paymentAllocations?: Array<AccountingPaymentAllocation> | null | undefined;
  /**
   * Any additional information about the credit note. Where possible, Codat links to a data field in the accounting software that is publicly available. This means that the contents of the note field are included when a credit note is emailed from the accounting software to the customer.
   */
  note?: string | null | undefined;
  metadata?: Metadata | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
};

/** @internal */
export const AccountingCreditNote$inboundSchema: z.ZodType<
  AccountingCreditNote,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  creditNoteNumber: z.nullable(z.string()).optional(),
  customerRef: AccountingCustomerRef$inboundSchema.optional(),
  withholdingTax: z.nullable(z.array(Items$inboundSchema)).optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)),
  totalDiscount: z.number().transform(v => new Decimal$(v)),
  subTotal: z.number().transform(v => new Decimal$(v)),
  additionalTaxAmount: z.number().transform(v => new Decimal$(v)).optional(),
  additionalTaxPercentage: z.number().transform(v => new Decimal$(v))
    .optional(),
  totalTaxAmount: z.number().transform(v => new Decimal$(v)),
  discountPercentage: z.number().transform(v => new Decimal$(v)),
  remainingCredit: z.number().transform(v => new Decimal$(v)),
  status: CreditNoteStatus$inboundSchema,
  issueDate: z.string().optional(),
  allocatedOnDate: z.string().optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  lineItems: z.nullable(z.array(CreditNoteLineItem$inboundSchema)).optional(),
  paymentAllocations: z.nullable(
    z.array(AccountingPaymentAllocation$inboundSchema),
  ).optional(),
  note: z.nullable(z.string()).optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingCreditNote$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  creditNoteNumber?: string | null | undefined;
  customerRef?: AccountingCustomerRef$Outbound | undefined;
  withholdingTax?: Array<Items$Outbound> | null | undefined;
  totalAmount: number;
  totalDiscount: number;
  subTotal: number;
  additionalTaxAmount?: number | undefined;
  additionalTaxPercentage?: number | undefined;
  totalTaxAmount: number;
  discountPercentage: number;
  remainingCredit: number;
  status: string;
  issueDate?: string | undefined;
  allocatedOnDate?: string | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  lineItems?: Array<CreditNoteLineItem$Outbound> | null | undefined;
  paymentAllocations?:
    | Array<AccountingPaymentAllocation$Outbound>
    | null
    | undefined;
  note?: string | null | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingCreditNote$outboundSchema: z.ZodType<
  AccountingCreditNote$Outbound,
  z.ZodTypeDef,
  AccountingCreditNote
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  creditNoteNumber: z.nullable(z.string()).optional(),
  customerRef: AccountingCustomerRef$outboundSchema.optional(),
  withholdingTax: z.nullable(z.array(Items$outboundSchema)).optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  totalDiscount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  subTotal: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  additionalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(
    v => typeof v === "number" ? v : v.toNumber()
  ).optional(),
  additionalTaxPercentage: z.union([z.instanceof(Decimal$), z.number()])
    .transform(v => typeof v === "number" ? v : v.toNumber()).optional(),
  totalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  discountPercentage: z.union([z.instanceof(Decimal$), z.number()]).transform(
    v => typeof v === "number" ? v : v.toNumber()
  ),
  remainingCredit: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  status: CreditNoteStatus$outboundSchema,
  issueDate: z.string().optional(),
  allocatedOnDate: z.string().optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  lineItems: z.nullable(z.array(CreditNoteLineItem$outboundSchema)).optional(),
  paymentAllocations: z.nullable(
    z.array(AccountingPaymentAllocation$outboundSchema),
  ).optional(),
  note: z.nullable(z.string()).optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNote$ {
  /** @deprecated use `AccountingCreditNote$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNote$inboundSchema;
  /** @deprecated use `AccountingCreditNote$outboundSchema` instead. */
  export const outboundSchema = AccountingCreditNote$outboundSchema;
  /** @deprecated use `AccountingCreditNote$Outbound` instead. */
  export type Outbound = AccountingCreditNote$Outbound;
}

export function accountingCreditNoteToJSON(
  accountingCreditNote: AccountingCreditNote,
): string {
  return JSON.stringify(
    AccountingCreditNote$outboundSchema.parse(accountingCreditNote),
  );
}

export function accountingCreditNoteFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNote, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCreditNote$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNote' from JSON`,
  );
}
