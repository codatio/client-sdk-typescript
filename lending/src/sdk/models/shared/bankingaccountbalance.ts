/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AccountBalanceAmounts,
  AccountBalanceAmounts$inboundSchema,
  AccountBalanceAmounts$Outbound,
  AccountBalanceAmounts$outboundSchema,
} from "./accountbalanceamounts.js";

/**
 * The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.
 *
 * @remarks
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 *
 * > **How often should I pull Account Balances?**
 * >
 * > Because these balances are closing balances, we recommend you pull Account Balance no more frequently than daily. If you require a live intraday balance, this can be found for each account on the [Account](https://docs.codat.io/lending-api#/schemas/Account) data type.
 * >
 * > Whilst you can choose to sync hourly, this may incur usage charges from Plaid or TrueLayer.
 */
export type BankingAccountBalance = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * The unique identifier of the account.
   */
  accountId: string;
  /**
   * Depending on the data provided by the underlying bank, not all balances are always available.
   */
  balance: AccountBalanceAmounts;
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
  date: string;
};

/** @internal */
export const BankingAccountBalance$inboundSchema: z.ZodType<
  BankingAccountBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  accountId: z.string(),
  balance: AccountBalanceAmounts$inboundSchema,
  date: z.string(),
});

/** @internal */
export type BankingAccountBalance$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  accountId: string;
  balance: AccountBalanceAmounts$Outbound;
  date: string;
};

/** @internal */
export const BankingAccountBalance$outboundSchema: z.ZodType<
  BankingAccountBalance$Outbound,
  z.ZodTypeDef,
  BankingAccountBalance
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  accountId: z.string(),
  balance: AccountBalanceAmounts$outboundSchema,
  date: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankingAccountBalance$ {
  /** @deprecated use `BankingAccountBalance$inboundSchema` instead. */
  export const inboundSchema = BankingAccountBalance$inboundSchema;
  /** @deprecated use `BankingAccountBalance$outboundSchema` instead. */
  export const outboundSchema = BankingAccountBalance$outboundSchema;
  /** @deprecated use `BankingAccountBalance$Outbound` instead. */
  export type Outbound = BankingAccountBalance$Outbound;
}
