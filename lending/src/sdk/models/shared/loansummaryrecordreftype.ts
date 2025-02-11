/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The datatype being referred to.
 */
export const LoanSummaryRecordRefType = {
  Accounts: "accounts",
  BankingAccounts: "banking-accounts",
  CommerceTransactions: "commerce-transactions",
} as const;
/**
 * The datatype being referred to.
 */
export type LoanSummaryRecordRefType = ClosedEnum<
  typeof LoanSummaryRecordRefType
>;

/** @internal */
export const LoanSummaryRecordRefType$inboundSchema: z.ZodNativeEnum<
  typeof LoanSummaryRecordRefType
> = z.nativeEnum(LoanSummaryRecordRefType);

/** @internal */
export const LoanSummaryRecordRefType$outboundSchema: z.ZodNativeEnum<
  typeof LoanSummaryRecordRefType
> = LoanSummaryRecordRefType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanSummaryRecordRefType$ {
  /** @deprecated use `LoanSummaryRecordRefType$inboundSchema` instead. */
  export const inboundSchema = LoanSummaryRecordRefType$inboundSchema;
  /** @deprecated use `LoanSummaryRecordRefType$outboundSchema` instead. */
  export const outboundSchema = LoanSummaryRecordRefType$outboundSchema;
}
