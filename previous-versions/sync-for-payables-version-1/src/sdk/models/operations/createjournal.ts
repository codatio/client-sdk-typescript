/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type CreateJournalRequest = {
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
  journalPrototype?: shared.JournalPrototype | undefined;
};

/** @internal */
export const CreateJournalRequest$inboundSchema: z.ZodType<
  CreateJournalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  journalPrototype: shared.JournalPrototype$inboundSchema.optional(),
});

/** @internal */
export type CreateJournalRequest$Outbound = {
  companyId: string;
  connectionId: string;
  timeoutInMinutes?: number | undefined;
  journalPrototype?: shared.JournalPrototype$Outbound | undefined;
};

/** @internal */
export const CreateJournalRequest$outboundSchema: z.ZodType<
  CreateJournalRequest$Outbound,
  z.ZodTypeDef,
  CreateJournalRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  journalPrototype: shared.JournalPrototype$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJournalRequest$ {
  /** @deprecated use `CreateJournalRequest$inboundSchema` instead. */
  export const inboundSchema = CreateJournalRequest$inboundSchema;
  /** @deprecated use `CreateJournalRequest$outboundSchema` instead. */
  export const outboundSchema = CreateJournalRequest$outboundSchema;
  /** @deprecated use `CreateJournalRequest$Outbound` instead. */
  export type Outbound = CreateJournalRequest$Outbound;
}
