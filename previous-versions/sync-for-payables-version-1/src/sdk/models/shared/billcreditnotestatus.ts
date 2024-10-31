/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Current state of the bill credit note
 */
export const BillCreditNoteStatus = {
  Unknown: "Unknown",
  Draft: "Draft",
  Submitted: "Submitted",
  Paid: "Paid",
  Void: "Void",
  PartiallyPaid: "PartiallyPaid",
} as const;
/**
 * Current state of the bill credit note
 */
export type BillCreditNoteStatus = ClosedEnum<typeof BillCreditNoteStatus>;

/** @internal */
export const BillCreditNoteStatus$inboundSchema: z.ZodNativeEnum<
  typeof BillCreditNoteStatus
> = z.nativeEnum(BillCreditNoteStatus);

/** @internal */
export const BillCreditNoteStatus$outboundSchema: z.ZodNativeEnum<
  typeof BillCreditNoteStatus
> = BillCreditNoteStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillCreditNoteStatus$ {
  /** @deprecated use `BillCreditNoteStatus$inboundSchema` instead. */
  export const inboundSchema = BillCreditNoteStatus$inboundSchema;
  /** @deprecated use `BillCreditNoteStatus$outboundSchema` instead. */
  export const outboundSchema = BillCreditNoteStatus$outboundSchema;
}