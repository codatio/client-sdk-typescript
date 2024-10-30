/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BankAccountStatus,
  BankAccountStatus$inboundSchema,
  BankAccountStatus$outboundSchema,
} from "./bankaccountstatus.js";
import {
  BankAccountType,
  BankAccountType$inboundSchema,
  BankAccountType$outboundSchema,
} from "./bankaccounttype.js";

export type BankAccountMappingOption = {
  /**
   * Identifier for the account, unique for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Name of the bank account in the accounting software.
   */
  name?: string | null | undefined;
  /**
   * Account number for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
   */
  accountNumber?: string | null | undefined;
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
   * The bank account's base currency.
   */
  currency?: string | null | undefined;
  /**
   * The current status of the bank account.
   */
  status?: BankAccountStatus | undefined;
  /**
   * The type of transactions and balances on the account.
   *
   * @remarks
   * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
   * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
   */
  accountType?: BankAccountType | undefined;
  sourceModifiedDate?: string | undefined;
};

/** @internal */
export const BankAccountMappingOption$inboundSchema: z.ZodType<
  BankAccountMappingOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  nominalCode: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  status: BankAccountStatus$inboundSchema.optional(),
  accountType: BankAccountType$inboundSchema.optional(),
  sourceModifiedDate: z.string().optional(),
});

/** @internal */
export type BankAccountMappingOption$Outbound = {
  id?: string | undefined;
  name?: string | null | undefined;
  accountNumber?: string | null | undefined;
  nominalCode?: string | null | undefined;
  sortCode?: string | null | undefined;
  currency?: string | null | undefined;
  status?: string | undefined;
  accountType?: string | undefined;
  sourceModifiedDate?: string | undefined;
};

/** @internal */
export const BankAccountMappingOption$outboundSchema: z.ZodType<
  BankAccountMappingOption$Outbound,
  z.ZodTypeDef,
  BankAccountMappingOption
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  nominalCode: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  status: BankAccountStatus$outboundSchema.optional(),
  accountType: BankAccountType$outboundSchema.optional(),
  sourceModifiedDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountMappingOption$ {
  /** @deprecated use `BankAccountMappingOption$inboundSchema` instead. */
  export const inboundSchema = BankAccountMappingOption$inboundSchema;
  /** @deprecated use `BankAccountMappingOption$outboundSchema` instead. */
  export const outboundSchema = BankAccountMappingOption$outboundSchema;
  /** @deprecated use `BankAccountMappingOption$Outbound` instead. */
  export type Outbound = BankAccountMappingOption$Outbound;
}
