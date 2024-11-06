/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  AccountingBankAccountType,
  AccountingBankAccountType$inboundSchema,
  AccountingBankAccountType$outboundSchema,
} from "./accountingbankaccounttype.js";
import {
  BankAccountStatus,
  BankAccountStatus$inboundSchema,
  BankAccountStatus$outboundSchema,
} from "./bankaccountstatus.js";
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
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new [Banking: Account](https://docs.codat.io/lending-api#/schemas/Account) data type.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific data connection.
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting software.
 * * The currency and balance of the account.
 * * The sort code and account number.
 */
export type AccountingBankAccount = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the account, unique for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Name of the bank account in the accounting software.
   */
  accountName?: string | null | undefined;
  /**
   * The type of transactions and balances on the account.
   *
   * @remarks
   * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
   * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
   */
  accountType?: AccountingBankAccountType | undefined;
  /**
   * Code used to identify each nominal account for a business.
   */
  nominalCode?: string | null | undefined;
  /**
   * Sort code for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
   */
  sortCode?: string | null | undefined;
  /**
   * Account number for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
   *
   * FreeAgent integrations
   * For Credit accounts, only the last four digits are required. For other types, the field is optional.
   */
  accountNumber?: string | null | undefined;
  /**
   * International bank account number of the account. Often used when making or receiving international payments.
   */
  iBan?: string | null | undefined;
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
   * Balance of the bank account.
   */
  balance?: Decimal$ | number | null | undefined;
  /**
   * The institution of the bank account.
   */
  institution?: string | null | undefined;
  /**
   * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
   */
  availableBalance?: Decimal$ | number | null | undefined;
  /**
   * Pre-arranged overdraft limit of the account.
   *
   * @remarks
   *
   * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
   */
  overdraftLimit?: Decimal$ | number | null | undefined;
  /**
   * Status of the bank account.
   */
  status?: BankAccountStatus | undefined;
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
export const AccountingBankAccount$inboundSchema: z.ZodType<
  AccountingBankAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  accountName: z.nullable(z.string()).optional(),
  accountType: AccountingBankAccountType$inboundSchema.optional(),
  nominalCode: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  iBan: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  balance: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  institution: z.nullable(z.string()).optional(),
  availableBalance: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  overdraftLimit: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  status: BankAccountStatus$inboundSchema.optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingBankAccount$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  accountName?: string | null | undefined;
  accountType?: string | undefined;
  nominalCode?: string | null | undefined;
  sortCode?: string | null | undefined;
  accountNumber?: string | null | undefined;
  iBan?: string | null | undefined;
  currency?: string | undefined;
  balance?: number | null | undefined;
  institution?: string | null | undefined;
  availableBalance?: number | null | undefined;
  overdraftLimit?: number | null | undefined;
  status?: string | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingBankAccount$outboundSchema: z.ZodType<
  AccountingBankAccount$Outbound,
  z.ZodTypeDef,
  AccountingBankAccount
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  accountName: z.nullable(z.string()).optional(),
  accountType: AccountingBankAccountType$outboundSchema.optional(),
  nominalCode: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  iBan: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  balance: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  institution: z.nullable(z.string()).optional(),
  availableBalance: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  overdraftLimit: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  status: BankAccountStatus$outboundSchema.optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankAccount$ {
  /** @deprecated use `AccountingBankAccount$inboundSchema` instead. */
  export const inboundSchema = AccountingBankAccount$inboundSchema;
  /** @deprecated use `AccountingBankAccount$outboundSchema` instead. */
  export const outboundSchema = AccountingBankAccount$outboundSchema;
  /** @deprecated use `AccountingBankAccount$Outbound` instead. */
  export type Outbound = AccountingBankAccount$Outbound;
}
