/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountRef,
  AccountRef$inboundSchema,
  AccountRef$Outbound,
  AccountRef$outboundSchema,
} from "./accountref.js";
import {
  SourceRef,
  SourceRef$inboundSchema,
  SourceRef$Outbound,
  SourceRef$outboundSchema,
} from "./sourceref.js";
import {
  TransactionCategory,
  TransactionCategory$inboundSchema,
  TransactionCategory$Outbound,
  TransactionCategory$outboundSchema,
} from "./transactioncategory.js";

export type CashFlowTransaction = {
  /**
   * The unique identifier of the bank transaction.
   */
  id?: string | undefined;
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
  date?: string | undefined;
  /**
   * The description of the bank transaction.
   */
  description?: string | undefined;
  /**
   * The bank transaction amount.
   */
  amount?: Decimal$ | number | undefined;
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
  transactionCategory?: TransactionCategory | undefined;
  /**
   * Returns the payment processor responsible for the transaction.
   */
  platformName?: string | undefined;
  /**
   * An array of counterparty names involved in the transaction.
   */
  counterpartyNames?: Array<string> | undefined;
  /**
   * A source reference containing the `sourceType` object "Banking".
   */
  sourceRef?: SourceRef | undefined;
  /**
   * An account reference containing the account id and name.
   */
  accountRef?: AccountRef | undefined;
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
  modifiedDate?: string | undefined;
};

export type EnhancedCashFlowItem = {
  /**
   * An array of transaction data.
   */
  transactions?: Array<CashFlowTransaction> | undefined;
};

/** @internal */
export const CashFlowTransaction$inboundSchema: z.ZodType<
  CashFlowTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
  amount: z.number().transform(v => new Decimal$(v)).optional(),
  currency: z.string().optional(),
  transactionCategory: TransactionCategory$inboundSchema.optional(),
  platformName: z.string().optional(),
  counterpartyNames: z.array(z.string()).optional(),
  sourceRef: SourceRef$inboundSchema.optional(),
  accountRef: AccountRef$inboundSchema.optional(),
  modifiedDate: z.string().optional(),
});

/** @internal */
export type CashFlowTransaction$Outbound = {
  id?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  amount?: number | undefined;
  currency?: string | undefined;
  transactionCategory?: TransactionCategory$Outbound | undefined;
  platformName?: string | undefined;
  counterpartyNames?: Array<string> | undefined;
  sourceRef?: SourceRef$Outbound | undefined;
  accountRef?: AccountRef$Outbound | undefined;
  modifiedDate?: string | undefined;
};

/** @internal */
export const CashFlowTransaction$outboundSchema: z.ZodType<
  CashFlowTransaction$Outbound,
  z.ZodTypeDef,
  CashFlowTransaction
> = z.object({
  id: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  currency: z.string().optional(),
  transactionCategory: TransactionCategory$outboundSchema.optional(),
  platformName: z.string().optional(),
  counterpartyNames: z.array(z.string()).optional(),
  sourceRef: SourceRef$outboundSchema.optional(),
  accountRef: AccountRef$outboundSchema.optional(),
  modifiedDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashFlowTransaction$ {
  /** @deprecated use `CashFlowTransaction$inboundSchema` instead. */
  export const inboundSchema = CashFlowTransaction$inboundSchema;
  /** @deprecated use `CashFlowTransaction$outboundSchema` instead. */
  export const outboundSchema = CashFlowTransaction$outboundSchema;
  /** @deprecated use `CashFlowTransaction$Outbound` instead. */
  export type Outbound = CashFlowTransaction$Outbound;
}

export function cashFlowTransactionToJSON(
  cashFlowTransaction: CashFlowTransaction,
): string {
  return JSON.stringify(
    CashFlowTransaction$outboundSchema.parse(cashFlowTransaction),
  );
}

export function cashFlowTransactionFromJSON(
  jsonString: string,
): SafeParseResult<CashFlowTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CashFlowTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CashFlowTransaction' from JSON`,
  );
}

/** @internal */
export const EnhancedCashFlowItem$inboundSchema: z.ZodType<
  EnhancedCashFlowItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  transactions: z.array(z.lazy(() => CashFlowTransaction$inboundSchema))
    .optional(),
});

/** @internal */
export type EnhancedCashFlowItem$Outbound = {
  transactions?: Array<CashFlowTransaction$Outbound> | undefined;
};

/** @internal */
export const EnhancedCashFlowItem$outboundSchema: z.ZodType<
  EnhancedCashFlowItem$Outbound,
  z.ZodTypeDef,
  EnhancedCashFlowItem
> = z.object({
  transactions: z.array(z.lazy(() => CashFlowTransaction$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnhancedCashFlowItem$ {
  /** @deprecated use `EnhancedCashFlowItem$inboundSchema` instead. */
  export const inboundSchema = EnhancedCashFlowItem$inboundSchema;
  /** @deprecated use `EnhancedCashFlowItem$outboundSchema` instead. */
  export const outboundSchema = EnhancedCashFlowItem$outboundSchema;
  /** @deprecated use `EnhancedCashFlowItem$Outbound` instead. */
  export type Outbound = EnhancedCashFlowItem$Outbound;
}

export function enhancedCashFlowItemToJSON(
  enhancedCashFlowItem: EnhancedCashFlowItem,
): string {
  return JSON.stringify(
    EnhancedCashFlowItem$outboundSchema.parse(enhancedCashFlowItem),
  );
}

export function enhancedCashFlowItemFromJSON(
  jsonString: string,
): SafeParseResult<EnhancedCashFlowItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnhancedCashFlowItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnhancedCashFlowItem' from JSON`,
  );
}
