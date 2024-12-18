/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Current state of the credit note.
 */
export const CreditNoteStatus = {
  Unknown: "Unknown",
  Draft: "Draft",
  Submitted: "Submitted",
  Paid: "Paid",
  Void: "Void",
  PartiallyPaid: "PartiallyPaid",
} as const;
/**
 * Current state of the credit note.
 */
export type CreditNoteStatus = ClosedEnum<typeof CreditNoteStatus>;

/** @internal */
export const CreditNoteStatus$inboundSchema: z.ZodNativeEnum<
  typeof CreditNoteStatus
> = z.nativeEnum(CreditNoteStatus);

/** @internal */
export const CreditNoteStatus$outboundSchema: z.ZodNativeEnum<
  typeof CreditNoteStatus
> = CreditNoteStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreditNoteStatus$ {
  /** @deprecated use `CreditNoteStatus$inboundSchema` instead. */
  export const inboundSchema = CreditNoteStatus$inboundSchema;
  /** @deprecated use `CreditNoteStatus$outboundSchema` instead. */
  export const outboundSchema = CreditNoteStatus$outboundSchema;
}
