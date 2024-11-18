/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountBalanceAmounts,
  AccountBalanceAmounts$inboundSchema,
  AccountBalanceAmounts$Outbound,
  AccountBalanceAmounts$outboundSchema,
} from "./accountbalanceamounts.js";
import {
  AccountIdentifiers,
  AccountIdentifiers$inboundSchema,
  AccountIdentifiers$Outbound,
  AccountIdentifiers$outboundSchema,
} from "./accountidentifiers.js";
import {
  AccountingBankAccountType,
  AccountingBankAccountType$inboundSchema,
  AccountingBankAccountType$outboundSchema,
} from "./accountingbankaccounttype.js";
import {
  AccountInstitution,
  AccountInstitution$inboundSchema,
  AccountInstitution$Outbound,
  AccountInstitution$outboundSchema,
} from "./accountinstitution.js";

/**
 * This data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers, and institutions holding the accounts.
 *
 * @remarks
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 */
export type BankingAccount = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * The ID of the account from the provider.
   */
  id: string;
  /**
   * The name of the account according to the provider.
   */
  name: string;
  /**
   * The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.
   */
  informalName?: string | null | undefined;
  /**
   * The name of the person or company who holds the account.
   */
  holder?: string | null | undefined;
  /**
   * The type of transactions and balances on the account.
   *
   * @remarks
   * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
   * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
   */
  type: AccountingBankAccountType;
  /**
   * Depending on the data provided by the underlying bank, not all balances are always available.
   */
  balance: AccountBalanceAmounts;
  /**
   * An object containing bank account identification information.
   */
  identifiers: AccountIdentifiers;
  /**
   * The currency code for the account.
   */
  currency: string;
  /**
   * The bank or other financial institution providing the account.
   */
  institution: AccountInstitution;
};

/** @internal */
export const BankingAccount$inboundSchema: z.ZodType<
  BankingAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  name: z.string(),
  informalName: z.nullable(z.string()).optional(),
  holder: z.nullable(z.string()).optional(),
  type: AccountingBankAccountType$inboundSchema,
  balance: AccountBalanceAmounts$inboundSchema,
  identifiers: AccountIdentifiers$inboundSchema,
  currency: z.string(),
  institution: AccountInstitution$inboundSchema,
});

/** @internal */
export type BankingAccount$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id: string;
  name: string;
  informalName?: string | null | undefined;
  holder?: string | null | undefined;
  type: string;
  balance: AccountBalanceAmounts$Outbound;
  identifiers: AccountIdentifiers$Outbound;
  currency: string;
  institution: AccountInstitution$Outbound;
};

/** @internal */
export const BankingAccount$outboundSchema: z.ZodType<
  BankingAccount$Outbound,
  z.ZodTypeDef,
  BankingAccount
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  name: z.string(),
  informalName: z.nullable(z.string()).optional(),
  holder: z.nullable(z.string()).optional(),
  type: AccountingBankAccountType$outboundSchema,
  balance: AccountBalanceAmounts$outboundSchema,
  identifiers: AccountIdentifiers$outboundSchema,
  currency: z.string(),
  institution: AccountInstitution$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankingAccount$ {
  /** @deprecated use `BankingAccount$inboundSchema` instead. */
  export const inboundSchema = BankingAccount$inboundSchema;
  /** @deprecated use `BankingAccount$outboundSchema` instead. */
  export const outboundSchema = BankingAccount$outboundSchema;
  /** @deprecated use `BankingAccount$Outbound` instead. */
  export type Outbound = BankingAccount$Outbound;
}

export function bankingAccountToJSON(bankingAccount: BankingAccount): string {
  return JSON.stringify(BankingAccount$outboundSchema.parse(bankingAccount));
}

export function bankingAccountFromJSON(
  jsonString: string,
): SafeParseResult<BankingAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BankingAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BankingAccount' from JSON`,
  );
}
