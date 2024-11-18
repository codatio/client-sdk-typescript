/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { ClosedEnum } from "../../types/enums.js";
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
  InvoiceLineItem,
  InvoiceLineItem$inboundSchema,
  InvoiceLineItem$Outbound,
  InvoiceLineItem$outboundSchema,
} from "./invoicelineitem.js";
import {
  InvoiceStatus,
  InvoiceStatus$inboundSchema,
  InvoiceStatus$outboundSchema,
} from "./invoicestatus.js";
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
 * The underlying data type associated to the reference `id`.
 */
export const AccountingInvoiceDataType = {
  SalesOrders: "salesOrders",
} as const;
/**
 * The underlying data type associated to the reference `id`.
 */
export type AccountingInvoiceDataType = ClosedEnum<
  typeof AccountingInvoiceDataType
>;

export type SalesOrderReference = {
  /**
   * Unique identifier to a record in `dataType`.
   */
  id?: string | undefined;
  /**
   * The underlying data type associated to the reference `id`.
   */
  dataType?: AccountingInvoiceDataType | undefined;
};

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company issued an invoice, and is owed money (accounts receivable) we call this an Invoice.
 * >
 * > See [Bills](https://docs.codat.io/lending-api#/schemas/Bill) for the accounts payable equivalent of bills.
 *
 * ## Overview
 *
 * An invoice is an itemized record of goods sold or services provided to a [customer](https://docs.codat.io/lending-api#/schemas/Customer).
 *
 * In Codat, an invoice contains details of:
 *
 * - The timeline of the invoice—when it was raised, marked as paid, last edited, and so on.
 * - How much the invoice is for, what portion of the invoice is tax or discounts, and what currency the amounts are represented in.
 * - Who the invoice has been raised to; the _customer_.
 * - The breakdown of what the invoice is for; the _line items_.
 * - Any [payments](https://docs.codat.io/lending-api#/schemas/Payment) assigned to the invoice; the _payment allocations_.
 *
 * > **Invoice PDF downloads**
 * >
 * > You can <a className="external" href="https://docs.codat.io/lending-api#/operations/get-invoice-pdf" target="_blank">download a PDF version</a> of an invoice for supported integrations.
 * >
 * > The filename will be invoice-{number}.pdf.
 *
 * > **Referencing an invoice in Sage 50 and ClearBooks**
 * >
 * > In Sage 50 and ClearBooks, you may prefer to use the **invoiceNumber** to identify an invoice rather than the invoice **id**. Each time a draft invoice is submitted or printed, the draft **id** becomes void and a submitted invoice with a new **id** exists in its place. In both platforms, the **invoiceNumber** should remain the same.
 */
export type AccountingInvoice = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the invoice, unique to the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Friendly reference for the invoice. If available, this appears in the file name of invoice attachments.
   */
  invoiceNumber?: string | null | undefined;
  customerRef?: AccountingCustomerRef | undefined;
  /**
   * List of references to related Sales orders.
   */
  salesOrderRefs?: Array<SalesOrderReference> | null | undefined;
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
  issueDate: string;
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
  /**
   * An array of line items.
   */
  lineItems?: Array<InvoiceLineItem> | null | undefined;
  /**
   * An array of payment allocations.
   */
  paymentAllocations?: Array<AccountingPaymentAllocation> | null | undefined;
  withholdingTax?: Array<Items> | null | undefined;
  /**
   * Numerical value of discounts applied to the invoice.
   */
  totalDiscount?: Decimal$ | number | null | undefined;
  /**
   * Total amount of the invoice excluding any taxes.
   */
  subTotal?: Decimal$ | number | null | undefined;
  /**
   * Additional tax amount applied to invoice.
   */
  additionalTaxAmount?: Decimal$ | number | undefined;
  /**
   * Percentage rate of any additional tax applied to the invoice.
   */
  additionalTaxPercentage?: Decimal$ | number | undefined;
  /**
   * Amount of tax on the invoice.
   */
  totalTaxAmount: Decimal$ | number;
  /**
   * Amount of the invoice, inclusive of tax.
   */
  totalAmount: Decimal$ | number;
  /**
   * Amount outstanding on the invoice.
   */
  amountDue: Decimal$ | number;
  /**
   * Percentage rate (from 0 to 100) of discounts applied to the invoice. For example: A 5% discount will return a value of `5`, not `0.05`.
   */
  discountPercentage?: Decimal$ | number | null | undefined;
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
  status: InvoiceStatus;
  /**
   * Any additional information about the invoice. Where possible, Codat links to a data field in the accounting software that is publicly available. This means that the contents of the note field are included when an invoice is emailed from the accounting software to the customer.
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
export const AccountingInvoiceDataType$inboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceDataType
> = z.nativeEnum(AccountingInvoiceDataType);

/** @internal */
export const AccountingInvoiceDataType$outboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceDataType
> = AccountingInvoiceDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceDataType$ {
  /** @deprecated use `AccountingInvoiceDataType$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceDataType$inboundSchema;
  /** @deprecated use `AccountingInvoiceDataType$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoiceDataType$outboundSchema;
}

/** @internal */
export const SalesOrderReference$inboundSchema: z.ZodType<
  SalesOrderReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  dataType: AccountingInvoiceDataType$inboundSchema.optional(),
});

/** @internal */
export type SalesOrderReference$Outbound = {
  id?: string | undefined;
  dataType?: string | undefined;
};

/** @internal */
export const SalesOrderReference$outboundSchema: z.ZodType<
  SalesOrderReference$Outbound,
  z.ZodTypeDef,
  SalesOrderReference
> = z.object({
  id: z.string().optional(),
  dataType: AccountingInvoiceDataType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesOrderReference$ {
  /** @deprecated use `SalesOrderReference$inboundSchema` instead. */
  export const inboundSchema = SalesOrderReference$inboundSchema;
  /** @deprecated use `SalesOrderReference$outboundSchema` instead. */
  export const outboundSchema = SalesOrderReference$outboundSchema;
  /** @deprecated use `SalesOrderReference$Outbound` instead. */
  export type Outbound = SalesOrderReference$Outbound;
}

export function salesOrderReferenceToJSON(
  salesOrderReference: SalesOrderReference,
): string {
  return JSON.stringify(
    SalesOrderReference$outboundSchema.parse(salesOrderReference),
  );
}

export function salesOrderReferenceFromJSON(
  jsonString: string,
): SafeParseResult<SalesOrderReference, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SalesOrderReference$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SalesOrderReference' from JSON`,
  );
}

/** @internal */
export const AccountingInvoice$inboundSchema: z.ZodType<
  AccountingInvoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  invoiceNumber: z.nullable(z.string()).optional(),
  customerRef: AccountingCustomerRef$inboundSchema.optional(),
  salesOrderRefs: z.nullable(
    z.array(z.lazy(() => SalesOrderReference$inboundSchema)),
  ).optional(),
  issueDate: z.string(),
  dueDate: z.string().optional(),
  paidOnDate: z.string().optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  lineItems: z.nullable(z.array(InvoiceLineItem$inboundSchema)).optional(),
  paymentAllocations: z.nullable(
    z.array(AccountingPaymentAllocation$inboundSchema),
  ).optional(),
  withholdingTax: z.nullable(z.array(Items$inboundSchema)).optional(),
  totalDiscount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  subTotal: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  additionalTaxAmount: z.number().transform(v => new Decimal$(v)).optional(),
  additionalTaxPercentage: z.number().transform(v => new Decimal$(v))
    .optional(),
  totalTaxAmount: z.number().transform(v => new Decimal$(v)),
  totalAmount: z.number().transform(v => new Decimal$(v)),
  amountDue: z.number().transform(v => new Decimal$(v)),
  discountPercentage: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  status: InvoiceStatus$inboundSchema,
  note: z.nullable(z.string()).optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingInvoice$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  invoiceNumber?: string | null | undefined;
  customerRef?: AccountingCustomerRef$Outbound | undefined;
  salesOrderRefs?: Array<SalesOrderReference$Outbound> | null | undefined;
  issueDate: string;
  dueDate?: string | undefined;
  paidOnDate?: string | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  lineItems?: Array<InvoiceLineItem$Outbound> | null | undefined;
  paymentAllocations?:
    | Array<AccountingPaymentAllocation$Outbound>
    | null
    | undefined;
  withholdingTax?: Array<Items$Outbound> | null | undefined;
  totalDiscount?: number | null | undefined;
  subTotal?: number | null | undefined;
  additionalTaxAmount?: number | undefined;
  additionalTaxPercentage?: number | undefined;
  totalTaxAmount: number;
  totalAmount: number;
  amountDue: number;
  discountPercentage?: number | null | undefined;
  status: string;
  note?: string | null | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingInvoice$outboundSchema: z.ZodType<
  AccountingInvoice$Outbound,
  z.ZodTypeDef,
  AccountingInvoice
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  invoiceNumber: z.nullable(z.string()).optional(),
  customerRef: AccountingCustomerRef$outboundSchema.optional(),
  salesOrderRefs: z.nullable(
    z.array(z.lazy(() => SalesOrderReference$outboundSchema)),
  ).optional(),
  issueDate: z.string(),
  dueDate: z.string().optional(),
  paidOnDate: z.string().optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  lineItems: z.nullable(z.array(InvoiceLineItem$outboundSchema)).optional(),
  paymentAllocations: z.nullable(
    z.array(AccountingPaymentAllocation$outboundSchema),
  ).optional(),
  withholdingTax: z.nullable(z.array(Items$outboundSchema)).optional(),
  totalDiscount: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  subTotal: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  additionalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(
    v => typeof v === "number" ? v : v.toNumber()
  ).optional(),
  additionalTaxPercentage: z.union([z.instanceof(Decimal$), z.number()])
    .transform(v => typeof v === "number" ? v : v.toNumber()).optional(),
  totalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  amountDue: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  discountPercentage: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  status: InvoiceStatus$outboundSchema,
  note: z.nullable(z.string()).optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoice$ {
  /** @deprecated use `AccountingInvoice$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoice$inboundSchema;
  /** @deprecated use `AccountingInvoice$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoice$outboundSchema;
  /** @deprecated use `AccountingInvoice$Outbound` instead. */
  export type Outbound = AccountingInvoice$Outbound;
}

export function accountingInvoiceToJSON(
  accountingInvoice: AccountingInvoice,
): string {
  return JSON.stringify(
    AccountingInvoice$outboundSchema.parse(accountingInvoice),
  );
}

export function accountingInvoiceFromJSON(
  jsonString: string,
): SafeParseResult<AccountingInvoice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingInvoice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingInvoice' from JSON`,
  );
}
