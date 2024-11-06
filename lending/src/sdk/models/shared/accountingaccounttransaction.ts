/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  AccountTransactionLine,
  AccountTransactionLine$inboundSchema,
  AccountTransactionLine$Outbound,
  AccountTransactionLine$outboundSchema,
} from "./accounttransactionline.js";
import {
  BankAccountRef,
  BankAccountRef$inboundSchema,
  BankAccountRef$Outbound,
  BankAccountRef$outboundSchema,
} from "./bankaccountref.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";

/**
 * The status of the account transaction.
 */
export const AccountingAccountTransactionStatus = {
  Unknown: "Unknown",
  Unreconciled: "Unreconciled",
  Reconciled: "Reconciled",
  Void: "Void",
} as const;
/**
 * The status of the account transaction.
 */
export type AccountingAccountTransactionStatus = ClosedEnum<
  typeof AccountingAccountTransactionStatus
>;

/**
 * > **Language tip:** In Codat, account transactions represent all transactions posted to a bank account within an accounting software. For bank transactions posted within a banking platform, refer to [Banking transactions](https://docs.codat.io/lending-api#/operations/list-all-banking-transactions).
 *
 * @remarks
 *
 * ## Overview
 *
 * In Codat’s data model, account transactions represent bank activity within an accounting software. All transactions that go through a bank account are recorded as account transactions.
 *
 * Account transactions are created as a result of different business activities, for example:
 *
 * * Payments: for example, receiving money for payment against an invoice.
 * * Bill payments: for example, spending money for a payment against a bill.
 * * Direct costs: for example, withdrawing money from a bank account, either for cash purposes or to make a payment.
 * * Direct incomes: for example, selling an item directly to a contact and receiving payment at point of sale.
 * * Transfers: for example, transferring money between two bank accounts.
 *
 * Account transactions is the parent data type of [payments](https://docs.codat.io/lending-api#/schemas/Payment), [bill payments](https://docs.codat.io/lending-api#/schemas/BillPayment), [direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost), [direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome), and [transfers](https://docs.codat.io/lending-api#/schemas/Transfer).
 */
export type AccountingAccountTransaction = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier of the direct cost (unique to the company).
   */
  id?: string | undefined;
  /**
   * Identifier of the transaction (unique to the company).
   */
  transactionId?: string | null | undefined;
  /**
   * Additional information about the account transaction, if available.
   */
  note?: string | null | undefined;
  /**
   * Links to the Account transactions data type.
   */
  bankAccountRef?: BankAccountRef | undefined;
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
   * The status of the account transaction.
   */
  status?: AccountingAccountTransactionStatus | undefined;
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
   * Array of account transaction lines.
   */
  lines?: Array<AccountTransactionLine> | null | undefined;
  /**
   * Total amount of the account transactions, inclusive of tax.
   */
  totalAmount?: Decimal$ | number | undefined;
  metadata?: Metadata | undefined;
};

/** @internal */
export const AccountingAccountTransactionStatus$inboundSchema: z.ZodNativeEnum<
  typeof AccountingAccountTransactionStatus
> = z.nativeEnum(AccountingAccountTransactionStatus);

/** @internal */
export const AccountingAccountTransactionStatus$outboundSchema: z.ZodNativeEnum<
  typeof AccountingAccountTransactionStatus
> = AccountingAccountTransactionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAccountTransactionStatus$ {
  /** @deprecated use `AccountingAccountTransactionStatus$inboundSchema` instead. */
  export const inboundSchema = AccountingAccountTransactionStatus$inboundSchema;
  /** @deprecated use `AccountingAccountTransactionStatus$outboundSchema` instead. */
  export const outboundSchema =
    AccountingAccountTransactionStatus$outboundSchema;
}

/** @internal */
export const AccountingAccountTransaction$inboundSchema: z.ZodType<
  AccountingAccountTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  transactionId: z.nullable(z.string()).optional(),
  note: z.nullable(z.string()).optional(),
  bankAccountRef: BankAccountRef$inboundSchema.optional(),
  date: z.string().optional(),
  status: AccountingAccountTransactionStatus$inboundSchema.optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  lines: z.nullable(z.array(AccountTransactionLine$inboundSchema)).optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)).optional(),
  metadata: Metadata$inboundSchema.optional(),
});

/** @internal */
export type AccountingAccountTransaction$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  transactionId?: string | null | undefined;
  note?: string | null | undefined;
  bankAccountRef?: BankAccountRef$Outbound | undefined;
  date?: string | undefined;
  status?: string | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  lines?: Array<AccountTransactionLine$Outbound> | null | undefined;
  totalAmount?: number | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const AccountingAccountTransaction$outboundSchema: z.ZodType<
  AccountingAccountTransaction$Outbound,
  z.ZodTypeDef,
  AccountingAccountTransaction
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  transactionId: z.nullable(z.string()).optional(),
  note: z.nullable(z.string()).optional(),
  bankAccountRef: BankAccountRef$outboundSchema.optional(),
  date: z.string().optional(),
  status: AccountingAccountTransactionStatus$outboundSchema.optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  lines: z.nullable(z.array(AccountTransactionLine$outboundSchema)).optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  metadata: Metadata$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAccountTransaction$ {
  /** @deprecated use `AccountingAccountTransaction$inboundSchema` instead. */
  export const inboundSchema = AccountingAccountTransaction$inboundSchema;
  /** @deprecated use `AccountingAccountTransaction$outboundSchema` instead. */
  export const outboundSchema = AccountingAccountTransaction$outboundSchema;
  /** @deprecated use `AccountingAccountTransaction$Outbound` instead. */
  export type Outbound = AccountingAccountTransaction$Outbound;
}
