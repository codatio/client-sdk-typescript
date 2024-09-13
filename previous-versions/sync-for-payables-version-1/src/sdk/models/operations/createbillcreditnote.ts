/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateBillCreditNoteRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
  billCreditNote?: shared.BillCreditNote | null | undefined;
};

/** @internal */
export const CreateBillCreditNoteRequest$inboundSchema: z.ZodType<
  CreateBillCreditNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  BillCreditNote: z.nullable(shared.BillCreditNote$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "BillCreditNote": "billCreditNote",
  });
});

/** @internal */
export type CreateBillCreditNoteRequest$Outbound = {
  companyId: string;
  connectionId: string;
  timeoutInMinutes?: number | undefined;
  BillCreditNote?: shared.BillCreditNote$Outbound | null | undefined;
};

/** @internal */
export const CreateBillCreditNoteRequest$outboundSchema: z.ZodType<
  CreateBillCreditNoteRequest$Outbound,
  z.ZodTypeDef,
  CreateBillCreditNoteRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
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
export namespace CreateBillCreditNoteRequest$ {
  /** @deprecated use `CreateBillCreditNoteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateBillCreditNoteRequest$inboundSchema;
  /** @deprecated use `CreateBillCreditNoteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateBillCreditNoteRequest$outboundSchema;
  /** @deprecated use `CreateBillCreditNoteRequest$Outbound` instead. */
  export type Outbound = CreateBillCreditNoteRequest$Outbound;
}
