/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingPaymentAllocation,
  AccountingPaymentAllocation$inboundSchema,
  AccountingPaymentAllocation$Outbound,
  AccountingPaymentAllocation$outboundSchema,
} from "./accountingpaymentallocation.js";
import {
  ContactRef,
  ContactRef$inboundSchema,
  ContactRef$Outbound,
  ContactRef$outboundSchema,
} from "./contactref.js";
import {
  DirectCostLineItem,
  DirectCostLineItem$inboundSchema,
  DirectCostLineItem$Outbound,
  DirectCostLineItem$outboundSchema,
} from "./directcostlineitem.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
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
  Validation,
  Validation$inboundSchema,
  Validation$Outbound,
  Validation$outboundSchema,
} from "./validation.js";

/**
 * > **Language tip:** Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting software.
 *
 * @remarks
 *
 * ## Overview
 *
 * Direct costs are the expenses associated with a business' operations. For example, purchases of raw materials and service fees are considered direct costs.
 *
 * Direct costs include:
 *   * Purchasing an item and paying it off at the point of the purchase
 *   * Receiving cash from a refunded item if the refund is made by the supplier
 *   * Withdrawing money from a bank account
 *   * Writing a cheque
 *
 * Direct costs is a child data type of [account transactions](https://docs.codat.io/lending-api#/schemas/AccountTransaction).
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingCreateDirectCostResponseAccountingDirectCost = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier of the direct cost, unique for the company.
   */
  id?: string | undefined;
  /**
   * User-friendly reference for the direct cost.
   */
  reference?: string | null | undefined;
  /**
   * A note attached to the direct cost.
   */
  note?: string | null | undefined;
  contactRef?: ContactRef | undefined;
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
  lineItems: Array<DirectCostLineItem>;
  /**
   * An array of payment allocations.
   */
  paymentAllocations: Array<AccountingPaymentAllocation>;
  /**
   * The total amount of the direct costs, excluding any taxes.
   */
  subTotal: Decimal$ | number;
  /**
   * The total amount of tax on the direct costs.
   */
  taxAmount: Decimal$ | number;
  /**
   * The amount of the direct costs, inclusive of tax.
   */
  totalAmount: Decimal$ | number;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
  metadata?: Metadata | undefined;
};

export type AccountingCreateDirectCostResponse = {
  data?:
    | AccountingCreateDirectCostResponseAccountingDirectCost
    | null
    | undefined;
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
export const AccountingCreateDirectCostResponseAccountingDirectCost$inboundSchema:
  z.ZodType<
    AccountingCreateDirectCostResponseAccountingDirectCost,
    z.ZodTypeDef,
    unknown
  > = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    reference: z.nullable(z.string()).optional(),
    note: z.nullable(z.string()).optional(),
    contactRef: ContactRef$inboundSchema.optional(),
    issueDate: z.string(),
    currency: z.string(),
    currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
      .optional(),
    lineItems: z.array(DirectCostLineItem$inboundSchema),
    paymentAllocations: z.array(AccountingPaymentAllocation$inboundSchema),
    subTotal: z.number().transform(v => new Decimal$(v)),
    taxAmount: z.number().transform(v => new Decimal$(v)),
    totalAmount: z.number().transform(v => new Decimal$(v)),
    supplementalData: SupplementalData$inboundSchema.optional(),
    metadata: Metadata$inboundSchema.optional(),
  });

/** @internal */
export type AccountingCreateDirectCostResponseAccountingDirectCost$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  reference?: string | null | undefined;
  note?: string | null | undefined;
  contactRef?: ContactRef$Outbound | undefined;
  issueDate: string;
  currency: string;
  currencyRate?: number | null | undefined;
  lineItems: Array<DirectCostLineItem$Outbound>;
  paymentAllocations: Array<AccountingPaymentAllocation$Outbound>;
  subTotal: number;
  taxAmount: number;
  totalAmount: number;
  supplementalData?: SupplementalData$Outbound | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const AccountingCreateDirectCostResponseAccountingDirectCost$outboundSchema:
  z.ZodType<
    AccountingCreateDirectCostResponseAccountingDirectCost$Outbound,
    z.ZodTypeDef,
    AccountingCreateDirectCostResponseAccountingDirectCost
  > = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    reference: z.nullable(z.string()).optional(),
    note: z.nullable(z.string()).optional(),
    contactRef: ContactRef$outboundSchema.optional(),
    issueDate: z.string(),
    currency: z.string(),
    currencyRate: z.nullable(
      z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
        typeof v === "number" ? v : v.toNumber()
      ),
    ).optional(),
    lineItems: z.array(DirectCostLineItem$outboundSchema),
    paymentAllocations: z.array(AccountingPaymentAllocation$outboundSchema),
    subTotal: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    taxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
    supplementalData: SupplementalData$outboundSchema.optional(),
    metadata: Metadata$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreateDirectCostResponseAccountingDirectCost$ {
  /** @deprecated use `AccountingCreateDirectCostResponseAccountingDirectCost$inboundSchema` instead. */
  export const inboundSchema =
    AccountingCreateDirectCostResponseAccountingDirectCost$inboundSchema;
  /** @deprecated use `AccountingCreateDirectCostResponseAccountingDirectCost$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreateDirectCostResponseAccountingDirectCost$outboundSchema;
  /** @deprecated use `AccountingCreateDirectCostResponseAccountingDirectCost$Outbound` instead. */
  export type Outbound =
    AccountingCreateDirectCostResponseAccountingDirectCost$Outbound;
}

export function accountingCreateDirectCostResponseAccountingDirectCostToJSON(
  accountingCreateDirectCostResponseAccountingDirectCost:
    AccountingCreateDirectCostResponseAccountingDirectCost,
): string {
  return JSON.stringify(
    AccountingCreateDirectCostResponseAccountingDirectCost$outboundSchema.parse(
      accountingCreateDirectCostResponseAccountingDirectCost,
    ),
  );
}

export function accountingCreateDirectCostResponseAccountingDirectCostFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountingCreateDirectCostResponseAccountingDirectCost,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreateDirectCostResponseAccountingDirectCost$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreateDirectCostResponseAccountingDirectCost' from JSON`,
  );
}

/** @internal */
export const AccountingCreateDirectCostResponse$inboundSchema: z.ZodType<
  AccountingCreateDirectCostResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.nullable(
    z.lazy(() =>
      AccountingCreateDirectCostResponseAccountingDirectCost$inboundSchema
    ),
  ).optional(),
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
export type AccountingCreateDirectCostResponse$Outbound = {
  data?:
    | AccountingCreateDirectCostResponseAccountingDirectCost$Outbound
    | null
    | undefined;
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
export const AccountingCreateDirectCostResponse$outboundSchema: z.ZodType<
  AccountingCreateDirectCostResponse$Outbound,
  z.ZodTypeDef,
  AccountingCreateDirectCostResponse
> = z.object({
  data: z.nullable(
    z.lazy(() =>
      AccountingCreateDirectCostResponseAccountingDirectCost$outboundSchema
    ),
  ).optional(),
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
export namespace AccountingCreateDirectCostResponse$ {
  /** @deprecated use `AccountingCreateDirectCostResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingCreateDirectCostResponse$inboundSchema;
  /** @deprecated use `AccountingCreateDirectCostResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreateDirectCostResponse$outboundSchema;
  /** @deprecated use `AccountingCreateDirectCostResponse$Outbound` instead. */
  export type Outbound = AccountingCreateDirectCostResponse$Outbound;
}

export function accountingCreateDirectCostResponseToJSON(
  accountingCreateDirectCostResponse: AccountingCreateDirectCostResponse,
): string {
  return JSON.stringify(
    AccountingCreateDirectCostResponse$outboundSchema.parse(
      accountingCreateDirectCostResponse,
    ),
  );
}

export function accountingCreateDirectCostResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreateDirectCostResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreateDirectCostResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreateDirectCostResponse' from JSON`,
  );
}
