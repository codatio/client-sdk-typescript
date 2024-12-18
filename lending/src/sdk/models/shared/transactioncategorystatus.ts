/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The status of the transaction category.
 */
export const TransactionCategoryStatus = {
  Unknown: "Unknown",
  Active: "Active",
  Archived: "Archived",
} as const;
/**
 * The status of the transaction category.
 */
export type TransactionCategoryStatus = ClosedEnum<
  typeof TransactionCategoryStatus
>;

/** @internal */
export const TransactionCategoryStatus$inboundSchema: z.ZodNativeEnum<
  typeof TransactionCategoryStatus
> = z.nativeEnum(TransactionCategoryStatus);

/** @internal */
export const TransactionCategoryStatus$outboundSchema: z.ZodNativeEnum<
  typeof TransactionCategoryStatus
> = TransactionCategoryStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionCategoryStatus$ {
  /** @deprecated use `TransactionCategoryStatus$inboundSchema` instead. */
  export const inboundSchema = TransactionCategoryStatus$inboundSchema;
  /** @deprecated use `TransactionCategoryStatus$outboundSchema` instead. */
  export const outboundSchema = TransactionCategoryStatus$outboundSchema;
}
