/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { JournalEntry, JournalEntry$ } from "./journalentry";
import { Links, Links$ } from "./links";
import { z } from "zod";

export type JournalEntries = {
    links: Links;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    results?: Array<JournalEntry> | undefined;
    /**
     * Total number of items.
     */
    totalResults: number;
};

/** @internal */
export namespace JournalEntries$ {
    export type Inbound = {
        _links: Links$.Inbound;
        pageNumber: number;
        pageSize: number;
        results?: Array<JournalEntry$.Inbound> | undefined;
        totalResults: number;
    };

    export const inboundSchema: z.ZodType<JournalEntries, z.ZodTypeDef, Inbound> = z
        .object({
            _links: Links$.inboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(JournalEntry$.inboundSchema).optional(),
            totalResults: z.number().int(),
        })
        .transform((v) => {
            return {
                links: v._links,
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                ...(v.results === undefined ? null : { results: v.results }),
                totalResults: v.totalResults,
            };
        });

    export type Outbound = {
        _links: Links$.Outbound;
        pageNumber: number;
        pageSize: number;
        results?: Array<JournalEntry$.Outbound> | undefined;
        totalResults: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JournalEntries> = z
        .object({
            links: Links$.outboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(JournalEntry$.outboundSchema).optional(),
            totalResults: z.number().int(),
        })
        .transform((v) => {
            return {
                _links: v.links,
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                ...(v.results === undefined ? null : { results: v.results }),
                totalResults: v.totalResults,
            };
        });
}
