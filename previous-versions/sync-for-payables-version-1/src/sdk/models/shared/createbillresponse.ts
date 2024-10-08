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
  PropertieDataType,
  PropertieDataType$inboundSchema,
  PropertieDataType$outboundSchema,
} from "./propertiedatatype.js";
import {
  PushOperationChange,
  PushOperationChange$inboundSchema,
  PushOperationChange$Outbound,
  PushOperationChange$outboundSchema,
} from "./pushoperationchange.js";
import {
  PushOperationStatus,
  PushOperationStatus$inboundSchema,
  PushOperationStatus$outboundSchema,
} from "./pushoperationstatus.js";
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
import {
  Validation,
  Validation$inboundSchema,
  Validation$Outbound,
  Validation$outboundSchema,
} from "./validation.js";

export type CreateBillResponsePurchaseOrderReference = {
  /**
   * Identifier for the purchase order, unique for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Friendly reference for the purchase order, commonly generated by the accounting software.
   */
  purchaseOrderNumber?: string | null | undefined;
};

export type CreateBillResponseWithholdingTax = {
  /**
   * Name assigned to withheld tax.
   */
  name: string;
  /**
   * Amount of tax withheld.
   */
  amount: Decimal$ | number;
};

export type CreateBillResponseAllocation = {
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

export type CreateBillResponseAccountingPaymentAllocation = {
  payment: PaymentAllocationPayment;
  allocation: CreateBillResponseAllocation;
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
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingBill = {
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
  purchaseOrderRefs?:
    | Array<CreateBillResponsePurchaseOrderReference>
    | null
    | undefined;
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
  withholdingTax?: Array<CreateBillResponseWithholdingTax> | null | undefined;
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
  paymentAllocations?:
    | Array<CreateBillResponseAccountingPaymentAllocation>
    | null
    | undefined;
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

export type CreateBillResponse = {
  data?: AccountingBill | null | undefined;
  /**
   * Contains a single entry that communicates which record has changed and the manner in which it changed.
   */
  changes?: Array<PushOperationChange> | null | undefined;
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId: string;
  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  pushOperationKey: string;
  /**
   * Unique identifier for a company's data connection.
   */
  dataConnectionKey: string;
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
  requestedOnUtc: string;
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
  completedOnUtc?: string | undefined;
  /**
   * Number of minutes the push operation must complete within before it times out.
   */
  timeoutInMinutes?: number | null | undefined;
  /**
   * Number of seconds the push operation must complete within before it times out.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  timeoutInSeconds?: number | null | undefined;
  /**
   * The current status of the push operation.
   */
  status: PushOperationStatus;
  /**
   * A message about the error.
   */
  errorMessage?: string | null | undefined;
  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  validation?: Validation | undefined;
  /**
   * Push status code.
   */
  statusCode: number;
};

/** @internal */
export const CreateBillResponsePurchaseOrderReference$inboundSchema: z.ZodType<
  CreateBillResponsePurchaseOrderReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateBillResponsePurchaseOrderReference$Outbound = {
  id?: string | undefined;
  purchaseOrderNumber?: string | null | undefined;
};

/** @internal */
export const CreateBillResponsePurchaseOrderReference$outboundSchema: z.ZodType<
  CreateBillResponsePurchaseOrderReference$Outbound,
  z.ZodTypeDef,
  CreateBillResponsePurchaseOrderReference
> = z.object({
  id: z.string().optional(),
  purchaseOrderNumber: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillResponsePurchaseOrderReference$ {
  /** @deprecated use `CreateBillResponsePurchaseOrderReference$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillResponsePurchaseOrderReference$inboundSchema;
  /** @deprecated use `CreateBillResponsePurchaseOrderReference$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillResponsePurchaseOrderReference$outboundSchema;
  /** @deprecated use `CreateBillResponsePurchaseOrderReference$Outbound` instead. */
  export type Outbound = CreateBillResponsePurchaseOrderReference$Outbound;
}

/** @internal */
export const CreateBillResponseWithholdingTax$inboundSchema: z.ZodType<
  CreateBillResponseWithholdingTax,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  amount: z.number().transform(v => new Decimal$(v)),
});

/** @internal */
export type CreateBillResponseWithholdingTax$Outbound = {
  name: string;
  amount: number;
};

/** @internal */
export const CreateBillResponseWithholdingTax$outboundSchema: z.ZodType<
  CreateBillResponseWithholdingTax$Outbound,
  z.ZodTypeDef,
  CreateBillResponseWithholdingTax
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
export namespace CreateBillResponseWithholdingTax$ {
  /** @deprecated use `CreateBillResponseWithholdingTax$inboundSchema` instead. */
  export const inboundSchema = CreateBillResponseWithholdingTax$inboundSchema;
  /** @deprecated use `CreateBillResponseWithholdingTax$outboundSchema` instead. */
  export const outboundSchema = CreateBillResponseWithholdingTax$outboundSchema;
  /** @deprecated use `CreateBillResponseWithholdingTax$Outbound` instead. */
  export type Outbound = CreateBillResponseWithholdingTax$Outbound;
}

/** @internal */
export const CreateBillResponseAllocation$inboundSchema: z.ZodType<
  CreateBillResponseAllocation,
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
export type CreateBillResponseAllocation$Outbound = {
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  allocatedOnDate?: string | undefined;
  totalAmount?: number | undefined;
};

/** @internal */
export const CreateBillResponseAllocation$outboundSchema: z.ZodType<
  CreateBillResponseAllocation$Outbound,
  z.ZodTypeDef,
  CreateBillResponseAllocation
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
export namespace CreateBillResponseAllocation$ {
  /** @deprecated use `CreateBillResponseAllocation$inboundSchema` instead. */
  export const inboundSchema = CreateBillResponseAllocation$inboundSchema;
  /** @deprecated use `CreateBillResponseAllocation$outboundSchema` instead. */
  export const outboundSchema = CreateBillResponseAllocation$outboundSchema;
  /** @deprecated use `CreateBillResponseAllocation$Outbound` instead. */
  export type Outbound = CreateBillResponseAllocation$Outbound;
}

/** @internal */
export const CreateBillResponseAccountingPaymentAllocation$inboundSchema:
  z.ZodType<
    CreateBillResponseAccountingPaymentAllocation,
    z.ZodTypeDef,
    unknown
  > = z.object({
    payment: PaymentAllocationPayment$inboundSchema,
    allocation: z.lazy(() => CreateBillResponseAllocation$inboundSchema),
  });

/** @internal */
export type CreateBillResponseAccountingPaymentAllocation$Outbound = {
  payment: PaymentAllocationPayment$Outbound;
  allocation: CreateBillResponseAllocation$Outbound;
};

/** @internal */
export const CreateBillResponseAccountingPaymentAllocation$outboundSchema:
  z.ZodType<
    CreateBillResponseAccountingPaymentAllocation$Outbound,
    z.ZodTypeDef,
    CreateBillResponseAccountingPaymentAllocation
  > = z.object({
    payment: PaymentAllocationPayment$outboundSchema,
    allocation: z.lazy(() => CreateBillResponseAllocation$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillResponseAccountingPaymentAllocation$ {
  /** @deprecated use `CreateBillResponseAccountingPaymentAllocation$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillResponseAccountingPaymentAllocation$inboundSchema;
  /** @deprecated use `CreateBillResponseAccountingPaymentAllocation$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillResponseAccountingPaymentAllocation$outboundSchema;
  /** @deprecated use `CreateBillResponseAccountingPaymentAllocation$Outbound` instead. */
  export type Outbound = CreateBillResponseAccountingPaymentAllocation$Outbound;
}

/** @internal */
export const AccountingBill$inboundSchema: z.ZodType<
  AccountingBill,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  reference: z.nullable(z.string()).optional(),
  supplierRef: SupplierRef$inboundSchema.optional(),
  purchaseOrderRefs: z.nullable(
    z.array(
      z.lazy(() => CreateBillResponsePurchaseOrderReference$inboundSchema),
    ),
  ).optional(),
  issueDate: z.string(),
  dueDate: z.string().optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  lineItems: z.nullable(z.array(BillLineItem$inboundSchema)).optional(),
  withholdingTax: z.nullable(
    z.array(z.lazy(() => CreateBillResponseWithholdingTax$inboundSchema)),
  ).optional(),
  status: BillStatus$inboundSchema,
  subTotal: z.number().transform(v => new Decimal$(v)),
  taxAmount: z.number().transform(v => new Decimal$(v)),
  totalAmount: z.number().transform(v => new Decimal$(v)),
  amountDue: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  note: z.nullable(z.string()).optional(),
  paymentAllocations: z.nullable(
    z.array(z.lazy(() =>
      CreateBillResponseAccountingPaymentAllocation$inboundSchema
    )),
  ).optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingBill$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  reference?: string | null | undefined;
  supplierRef?: SupplierRef$Outbound | undefined;
  purchaseOrderRefs?:
    | Array<CreateBillResponsePurchaseOrderReference$Outbound>
    | null
    | undefined;
  issueDate: string;
  dueDate?: string | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  lineItems?: Array<BillLineItem$Outbound> | null | undefined;
  withholdingTax?:
    | Array<CreateBillResponseWithholdingTax$Outbound>
    | null
    | undefined;
  status: string;
  subTotal: number;
  taxAmount: number;
  totalAmount: number;
  amountDue?: number | null | undefined;
  note?: string | null | undefined;
  paymentAllocations?:
    | Array<CreateBillResponseAccountingPaymentAllocation$Outbound>
    | null
    | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingBill$outboundSchema: z.ZodType<
  AccountingBill$Outbound,
  z.ZodTypeDef,
  AccountingBill
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  reference: z.nullable(z.string()).optional(),
  supplierRef: SupplierRef$outboundSchema.optional(),
  purchaseOrderRefs: z.nullable(
    z.array(
      z.lazy(() => CreateBillResponsePurchaseOrderReference$outboundSchema),
    ),
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
    z.array(z.lazy(() => CreateBillResponseWithholdingTax$outboundSchema)),
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
    z.array(z.lazy(() =>
      CreateBillResponseAccountingPaymentAllocation$outboundSchema
    )),
  ).optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBill$ {
  /** @deprecated use `AccountingBill$inboundSchema` instead. */
  export const inboundSchema = AccountingBill$inboundSchema;
  /** @deprecated use `AccountingBill$outboundSchema` instead. */
  export const outboundSchema = AccountingBill$outboundSchema;
  /** @deprecated use `AccountingBill$Outbound` instead. */
  export type Outbound = AccountingBill$Outbound;
}

/** @internal */
export const CreateBillResponse$inboundSchema: z.ZodType<
  CreateBillResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.nullable(z.lazy(() => AccountingBill$inboundSchema)).optional(),
  changes: z.nullable(z.array(PushOperationChange$inboundSchema)).optional(),
  dataType: PropertieDataType$inboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$inboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$inboundSchema.optional(),
  statusCode: z.number().int(),
});

/** @internal */
export type CreateBillResponse$Outbound = {
  data?: AccountingBill$Outbound | null | undefined;
  changes?: Array<PushOperationChange$Outbound> | null | undefined;
  dataType?: string | undefined;
  companyId: string;
  pushOperationKey: string;
  dataConnectionKey: string;
  requestedOnUtc: string;
  completedOnUtc?: string | undefined;
  timeoutInMinutes?: number | null | undefined;
  timeoutInSeconds?: number | null | undefined;
  status: string;
  errorMessage?: string | null | undefined;
  validation?: Validation$Outbound | undefined;
  statusCode: number;
};

/** @internal */
export const CreateBillResponse$outboundSchema: z.ZodType<
  CreateBillResponse$Outbound,
  z.ZodTypeDef,
  CreateBillResponse
> = z.object({
  data: z.nullable(z.lazy(() => AccountingBill$outboundSchema)).optional(),
  changes: z.nullable(z.array(PushOperationChange$outboundSchema)).optional(),
  dataType: PropertieDataType$outboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$outboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$outboundSchema.optional(),
  statusCode: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillResponse$ {
  /** @deprecated use `CreateBillResponse$inboundSchema` instead. */
  export const inboundSchema = CreateBillResponse$inboundSchema;
  /** @deprecated use `CreateBillResponse$outboundSchema` instead. */
  export const outboundSchema = CreateBillResponse$outboundSchema;
  /** @deprecated use `CreateBillResponse$Outbound` instead. */
  export type Outbound = CreateBillResponse$Outbound;
}
