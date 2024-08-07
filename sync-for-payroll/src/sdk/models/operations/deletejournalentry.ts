/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteJournalEntryRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a journal entry.
     */
    journalEntryId: string;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
    /**
     * Allow a sync upon push completion.
     */
    allowSyncOnPushComplete?: boolean | undefined;
};

/** @internal */
export const DeleteJournalEntryRequest$inboundSchema: z.ZodType<
    DeleteJournalEntryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    journalEntryId: z.string(),
    timeoutInMinutes: z.number().int().optional(),
    allowSyncOnPushComplete: z.boolean().default(true),
});

/** @internal */
export type DeleteJournalEntryRequest$Outbound = {
    companyId: string;
    connectionId: string;
    journalEntryId: string;
    timeoutInMinutes?: number | undefined;
    allowSyncOnPushComplete: boolean;
};

/** @internal */
export const DeleteJournalEntryRequest$outboundSchema: z.ZodType<
    DeleteJournalEntryRequest$Outbound,
    z.ZodTypeDef,
    DeleteJournalEntryRequest
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    journalEntryId: z.string(),
    timeoutInMinutes: z.number().int().optional(),
    allowSyncOnPushComplete: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteJournalEntryRequest$ {
    /** @deprecated use `DeleteJournalEntryRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteJournalEntryRequest$inboundSchema;
    /** @deprecated use `DeleteJournalEntryRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteJournalEntryRequest$outboundSchema;
    /** @deprecated use `DeleteJournalEntryRequest$Outbound` instead. */
    export type Outbound = DeleteJournalEntryRequest$Outbound;
}
