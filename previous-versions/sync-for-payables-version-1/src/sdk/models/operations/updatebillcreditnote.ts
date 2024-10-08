/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateBillCreditNoteRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a bill credit note.
   */
  billCreditNoteId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
  /**
   * When updating data in the destination platform Codat checks the `sourceModifiedDate` against the `lastupdated` date from the accounting software, if they're different Codat will return an error suggesting you should initiate another pull of the data. If this is set to `true` then the update will override this check.
   */
  forceUpdate?: boolean | undefined;
  billCreditNote?: shared.BillCreditNote | null | undefined;
};

/** @internal */
export const UpdateBillCreditNoteRequest$inboundSchema: z.ZodType<
  UpdateBillCreditNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billCreditNoteId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  BillCreditNote: z.nullable(shared.BillCreditNote$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "BillCreditNote": "billCreditNote",
  });
});

/** @internal */
export type UpdateBillCreditNoteRequest$Outbound = {
  companyId: string;
  connectionId: string;
  billCreditNoteId: string;
  timeoutInMinutes?: number | undefined;
  forceUpdate: boolean;
  BillCreditNote?: shared.BillCreditNote$Outbound | null | undefined;
};

/** @internal */
export const UpdateBillCreditNoteRequest$outboundSchema: z.ZodType<
  UpdateBillCreditNoteRequest$Outbound,
  z.ZodTypeDef,
  UpdateBillCreditNoteRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billCreditNoteId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  billCreditNote: z.nullable(shared.BillCreditNote$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    billCreditNote: "BillCreditNote",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateBillCreditNoteRequest$ {
  /** @deprecated use `UpdateBillCreditNoteRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateBillCreditNoteRequest$inboundSchema;
  /** @deprecated use `UpdateBillCreditNoteRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateBillCreditNoteRequest$outboundSchema;
  /** @deprecated use `UpdateBillCreditNoteRequest$Outbound` instead. */
  export type Outbound = UpdateBillCreditNoteRequest$Outbound;
}
