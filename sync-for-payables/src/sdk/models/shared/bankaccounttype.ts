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
export const BankAccountType = {
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
export type BankAccountType = ClosedEnum<typeof BankAccountType>;

/** @internal */
export const BankAccountType$inboundSchema: z.ZodNativeEnum<
  typeof BankAccountType
> = z.nativeEnum(BankAccountType);

/** @internal */
export const BankAccountType$outboundSchema: z.ZodNativeEnum<
  typeof BankAccountType
> = BankAccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountType$ {
  /** @deprecated use `BankAccountType$inboundSchema` instead. */
  export const inboundSchema = BankAccountType$inboundSchema;
  /** @deprecated use `BankAccountType$outboundSchema` instead. */
  export const outboundSchema = BankAccountType$outboundSchema;
}