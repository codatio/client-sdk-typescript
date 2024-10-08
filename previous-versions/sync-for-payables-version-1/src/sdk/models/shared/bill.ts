/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  BillLineItem,
  BillLineItem$inboundSchema,
  BillLineItem$Outbound,
  BillLineItem$outboundSchema,
} from "./billlineitem.js";
import {
  BillStatus,
  BillStatus$inboundSchema,
  BillStatus$outboundSchema,
} from "./billstatus.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  PaymentAllocationPayment,
  PaymentAllocationPayment$inboundSchema,
  PaymentAllocationPayment$Outbound,
  PaymentAllocationPayment$outboundSchema,
} from "./paymentallocationpayment.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";
import {
  SupplierRef,
  SupplierRef$inboundSchema,
  SupplierRef$Outbound,
  SupplierRef$outboundSchema,
} from "./supplierref.js";

export type PurchaseOrderReference = {
  /**
   * Identifier for the purchase order, unique for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Friendly reference for the purchase order, commonly generated by the accounting software.
   */
  purchaseOrderNumber?: string | null | undefined;
};

export type WithholdingTax = {
  /**
   * Name assigned to withheld tax.
   */
  name: string;
  /**
   * Amount of tax withheld.
   */
  amount: Decimal$ | number;
};

export type BillAllocation = {
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
   * The total amount that has been allocated.
   */
  totalAmount?: Decimal$ | number | undefined;
};

export type AccountingPaymentAllocation = {
  payment: PaymentAllocationPayment;
  allocation: BillAllocation;
};

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company has received an invoice, and owes money to someone else (accounts payable) we call this a Bill.
 * >
 * > See [Invoices](https://docs.codat.io/sync-for-payables-api#/schemas/Invoice) for the accounts receivable equivalent of bills.
 *
 * View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In Codat, a bill contains details of:
 * * When the bill was recorded in the accounting system.
 * * How much the bill is for and the currency of the amount.
 * * Who the bill was received from — the *supplier*.
 * * What the bill is for — the *line items*.
 *
 * Some accounting software give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's *expenses*.
 *
 * You can find these types of transactions in our [Direct costs](https://docs.codat.io/sync-for-payables-api#/schemas/DirectCost) data model.
 */
export type Bill = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the bill, unique for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * User-friendly reference for the bill.
   */
  reference?: string | null | undefined;
  /**
   * Reference to the supplier the record relates to.
   */
  supplierRef?: SupplierRef | undefined;
  purchaseOrderRefs?: Array<PurchaseOrderReference> | null | undefined;
  issueDate: string;
  dueDate?: string | undefined;
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
   * Array of Bill line items.
   */
  lineItems?: Array<BillLineItem> | null | undefined;
  withholdingTax?: Array<WithholdingTax> | null | undefined;
  /**
   * Current state of the bill.
   */
  status: BillStatus;
  /**
   * Total amount of the bill, excluding any taxes.
   */
  subTotal: Decimal$ | number;
  /**
   * Amount of tax on the bill.
   */
  taxAmount: Decimal$ | number;
  /**
   * Amount of the bill, including tax.
   */
  totalAmount: Decimal$ | number;
  /**
   * Amount outstanding on the bill.
   */
  amountDue?: Decimal$ | number | null | undefined;
  /**
   * Any private, company notes about the bill, such as payment information.
   */
  note?: string | null | undefined;
  /**
   * An array of payment allocations.
   */
  paymentAllocations?: Array<AccountingPaymentAllocation> | null | undefined;
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
export const PurchaseOrderReference$inboundSchema: z.ZodType<
  PurchaseOrderReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/** @internal */
export type PurchaseOrderReference$Outbound = {
  id?: string | undefined;
  purchaseOrderNumber?: string | null | undefined;
};

/** @internal */
export const PurchaseOrderReference$outboundSchema: z.ZodType<
  PurchaseOrderReference$Outbound,
  z.ZodTypeDef,
  PurchaseOrderReference
> = z.object({
  id: z.string().optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PurchaseOrderReference$ {
  /** @deprecated use `PurchaseOrderReference$inboundSchema` instead. */
  export const inboundSchema = PurchaseOrderReference$inboundSchema;
  /** @deprecated use `PurchaseOrderReference$outboundSchema` instead. */
  export const outboundSchema = PurchaseOrderReference$outboundSchema;
  /** @deprecated use `PurchaseOrderReference$Outbound` instead. */
  export type Outbound = PurchaseOrderReference$Outbound;
}

/** @internal */
export const WithholdingTax$inboundSchema: z.ZodType<
  WithholdingTax,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  amount: z.number().transform(v => new Decimal$(v)),
});

/** @internal */
export type WithholdingTax$Outbound = {
  name: string;
  amount: number;
};

/** @internal */
export const WithholdingTax$outboundSchema: z.ZodType<
  WithholdingTax$Outbound,
  z.ZodTypeDef,
  WithholdingTax
> = z.object({
  name: z.string(),
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WithholdingTax$ {
  /** @deprecated use `WithholdingTax$inboundSchema` instead. */
  export const inboundSchema = WithholdingTax$inboundSchema;
  /** @deprecated use `WithholdingTax$outboundSchema` instead. */
  export const outboundSchema = WithholdingTax$outboundSchema;
  /** @deprecated use `WithholdingTax$Outbound` instead. */
  export type Outbound = WithholdingTax$Outbound;
}

/** @internal */
export const BillAllocation$inboundSchema: z.ZodType<
  BillAllocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string().optional(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  allocatedOnDate: z.string().optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)).optional(),
});

/** @internal */
export type BillAllocation$Outbound = {
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  allocatedOnDate?: string | undefined;
  totalAmount?: number | undefined;
};

/** @internal */
export const BillAllocation$outboundSchema: z.ZodType<
  BillAllocation$Outbound,
  z.ZodTypeDef,
  BillAllocation
> = z.object({
  currency: z.string().optional(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  allocatedOnDate: z.string().optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillAllocation$ {
  /** @deprecated use `BillAllocation$inboundSchema` instead. */
  export const inboundSchema = BillAllocation$inboundSchema;
  /** @deprecated use `BillAllocation$outboundSchema` instead. */
  export const outboundSchema = BillAllocation$outboundSchema;
  /** @deprecated use `BillAllocation$Outbound` instead. */
  export type Outbound = BillAllocation$Outbound;
}

/** @internal */
export const AccountingPaymentAllocation$inboundSchema: z.ZodType<
  AccountingPaymentAllocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  payment: PaymentAllocationPayment$inboundSchema,
  allocation: z.lazy(() => BillAllocation$inboundSchema),
});

/** @internal */
export type AccountingPaymentAllocation$Outbound = {
  payment: PaymentAllocationPayment$Outbound;
  allocation: BillAllocation$Outbound;
};

/** @internal */
export const AccountingPaymentAllocation$outboundSchema: z.ZodType<
  AccountingPaymentAllocation$Outbound,
  z.ZodTypeDef,
  AccountingPaymentAllocation
> = z.object({
  payment: PaymentAllocationPayment$outboundSchema,
  allocation: z.lazy(() => BillAllocation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentAllocation$ {
  /** @deprecated use `AccountingPaymentAllocation$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentAllocation$inboundSchema;
  /** @deprecated use `AccountingPaymentAllocation$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentAllocation$outboundSchema;
  /** @deprecated use `AccountingPaymentAllocation$Outbound` instead. */
  export type Outbound = AccountingPaymentAllocation$Outbound;
}

/** @internal */
export const Bill$inboundSchema: z.ZodType<Bill, z.ZodTypeDef, unknown> = z
  .object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    reference: z.nullable(z.string()).optional(),
    supplierRef: SupplierRef$inboundSchema.optional(),
    purchaseOrderRefs: z.nullable(
      z.array(z.lazy(() => PurchaseOrderReference$inboundSchema)),
    ).optional(),
    issueDate: z.string(),
    dueDate: z.string().optional(),
    currency: z.string().optional(),
    currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
      .optional(),
    lineItems: z.nullable(z.array(BillLineItem$inboundSchema)).optional(),
    withholdingTax: z.nullable(
      z.array(z.lazy(() => WithholdingTax$inboundSchema)),
    ).optional(),
    status: BillStatus$inboundSchema,
    subTotal: z.number().transform(v => new Decimal$(v)),
    taxAmount: z.number().transform(v => new Decimal$(v)),
    totalAmount: z.number().transform(v => new Decimal$(v)),
    amountDue: z.nullable(z.number().transform(v => new Decimal$(v)))
      .optional(),
    note: z.nullable(z.string()).optional(),
    paymentAllocations: z.nullable(
      z.array(z.lazy(() => AccountingPaymentAllocation$inboundSchema)),
    ).optional(),
    metadata: Metadata$inboundSchema.optional(),
    supplementalData: SupplementalData$inboundSchema.optional(),
  });

/** @internal */
export type Bill$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  reference?: string | null | undefined;
  supplierRef?: SupplierRef$Outbound | undefined;
  purchaseOrderRefs?: Array<PurchaseOrderReference$Outbound> | null | undefined;
  issueDate: string;
  dueDate?: string | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  lineItems?: Array<BillLineItem$Outbound> | null | undefined;
  withholdingTax?: Array<WithholdingTax$Outbound> | null | undefined;
  status: string;
  subTotal: number;
  taxAmount: number;
  totalAmount: number;
  amountDue?: number | null | undefined;
  note?: string | null | undefined;
  paymentAllocations?:
    | Array<AccountingPaymentAllocation$Outbound>
    | null
    | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const Bill$outboundSchema: z.ZodType<Bill$Outbound, z.ZodTypeDef, Bill> =
  z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    reference: z.nullable(z.string()).optional(),
    supplierRef: SupplierRef$outboundSchema.optional(),
    purchaseOrderRefs: z.nullable(
      z.array(z.lazy(() => PurchaseOrderReference$outboundSchema)),
    ).optional(),
    issueDate: z.string(),
    dueDate: z.string().optional(),
    currency: z.string().optional(),
    currencyRate: z.nullable(
      z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
        typeof v === "number" ? v : v.toNumber()
      ),
    ).optional(),
    lineItems: z.nullable(z.array(BillLineItem$outboundSchema)).optional(),
    withholdingTax: z.nullable(
      z.array(z.lazy(() => WithholdingTax$outboundSchema)),
    ).optional(),
    status: BillStatus$outboundSchema,
    subTotal: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    taxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    amountDue: z.nullable(
      z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
        typeof v === "number" ? v : v.toNumber()
      ),
    ).optional(),
    note: z.nullable(z.string()).optional(),
    paymentAllocations: z.nullable(
      z.array(z.lazy(() => AccountingPaymentAllocation$outboundSchema)),
    ).optional(),
    metadata: Metadata$outboundSchema.optional(),
    supplementalData: SupplementalData$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Bill$ {
  /** @deprecated use `Bill$inboundSchema` instead. */
  export const inboundSchema = Bill$inboundSchema;
  /** @deprecated use `Bill$outboundSchema` instead. */
  export const outboundSchema = Bill$outboundSchema;
  /** @deprecated use `Bill$Outbound` instead. */
  export type Outbound = Bill$Outbound;
}
