/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetJournalRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a journal.
   */
  journalId: string;
};

/** @internal */
export const GetJournalRequest$inboundSchema: z.ZodType<
  GetJournalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  journalId: z.string(),
});

/** @internal */
export type GetJournalRequest$Outbound = {
  companyId: string;
  journalId: string;
};

/** @internal */
export const GetJournalRequest$outboundSchema: z.ZodType<
  GetJournalRequest$Outbound,
  z.ZodTypeDef,
  GetJournalRequest
> = z.object({
  companyId: z.string(),
  journalId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJournalRequest$ {
  /** @deprecated use `GetJournalRequest$inboundSchema` instead. */
  export const inboundSchema = GetJournalRequest$inboundSchema;
  /** @deprecated use `GetJournalRequest$outboundSchema` instead. */
  export const outboundSchema = GetJournalRequest$outboundSchema;
  /** @deprecated use `GetJournalRequest$Outbound` instead. */
  export type Outbound = GetJournalRequest$Outbound;
}