/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of transactions and balances on the account.
 *
 * @remarks
 * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
 * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
 */
export const AccountType = {
  Unknown: "Unknown",
  Credit: "Credit",
  Debit: "Debit",
} as const;
/**
 * The type of transactions and balances on the account.
 *
 * @remarks
 * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
 * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
 */
export type AccountType = ClosedEnum<typeof AccountType>;

/** @internal */
export const AccountType$inboundSchema: z.ZodNativeEnum<typeof AccountType> = z
  .nativeEnum(AccountType);

/** @internal */
export const AccountType$outboundSchema: z.ZodNativeEnum<typeof AccountType> =
  AccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountType$ {
  /** @deprecated use `AccountType$inboundSchema` instead. */
  export const inboundSchema = AccountType$inboundSchema;
  /** @deprecated use `AccountType$outboundSchema` instead. */
  export const outboundSchema = AccountType$outboundSchema;
}
