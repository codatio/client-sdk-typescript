/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    JournalEntry,
    JournalEntry$inboundSchema,
    JournalEntry$Outbound,
    JournalEntry$outboundSchema,
} from "./journalentry.js";
import { Links, Links$inboundSchema, Links$Outbound, Links$outboundSchema } from "./links.js";
import * as z from "zod";

export type JournalEntries = {
    results?: Array<JournalEntry> | undefined;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    /**
     * Total number of items.
     */
    totalResults: number;
    links: Links;
};

/** @internal */
export const JournalEntries$inboundSchema: z.ZodType<JournalEntries, z.ZodTypeDef, unknown> = z
    .object({
        results: z.array(JournalEntry$inboundSchema).optional(),
        pageNumber: z.number().int(),
        pageSize: z.number().int(),
        totalResults: z.number().int(),
        _links: Links$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            _links: "links",
        });
    });

/** @internal */
export type JournalEntries$Outbound = {
    results?: Array<JournalEntry$Outbound> | undefined;
    pageNumber: number;
    pageSize: number;
    totalResults: number;
    _links: Links$Outbound;
};

/** @internal */
export const JournalEntries$outboundSchema: z.ZodType<
    JournalEntries$Outbound,
    z.ZodTypeDef,
    JournalEntries
> = z
    .object({
        results: z.array(JournalEntry$outboundSchema).optional(),
        pageNumber: z.number().int(),
        pageSize: z.number().int(),
        totalResults: z.number().int(),
        links: Links$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            links: "_links",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalEntries$ {
    /** @deprecated use `JournalEntries$inboundSchema` instead. */
    export const inboundSchema = JournalEntries$inboundSchema;
    /** @deprecated use `JournalEntries$outboundSchema` instead. */
    export const outboundSchema = JournalEntries$outboundSchema;
    /** @deprecated use `JournalEntries$Outbound` instead. */
    export type Outbound = JournalEntries$Outbound;
}
