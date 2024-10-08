/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCreateJournalEntryModelRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const GetCreateJournalEntryModelRequest$inboundSchema: z.ZodType<
  GetCreateJournalEntryModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetCreateJournalEntryModelRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetCreateJournalEntryModelRequest$outboundSchema: z.ZodType<
  GetCreateJournalEntryModelRequest$Outbound,
  z.ZodTypeDef,
  GetCreateJournalEntryModelRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateJournalEntryModelRequest$ {
  /** @deprecated use `GetCreateJournalEntryModelRequest$inboundSchema` instead. */
  export const inboundSchema = GetCreateJournalEntryModelRequest$inboundSchema;
  /** @deprecated use `GetCreateJournalEntryModelRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCreateJournalEntryModelRequest$outboundSchema;
  /** @deprecated use `GetCreateJournalEntryModelRequest$Outbound` instead. */
  export type Outbound = GetCreateJournalEntryModelRequest$Outbound;
}
