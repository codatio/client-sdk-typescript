/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Company, Company$ } from "./company";
import { Links, Links$ } from "./links";
import * as z from "zod";

export type Companies = {
    links: Links;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    results?: Array<Company> | undefined;
    /**
     * Total number of items.
     */
    totalResults: number;
};

/** @internal */
export namespace Companies$ {
    export const inboundSchema: z.ZodType<Companies, z.ZodTypeDef, unknown> = z
        .object({
            _links: Links$.inboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(Company$.inboundSchema).optional(),
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
        results?: Array<Company$.Outbound> | undefined;
        totalResults: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Companies> = z
        .object({
            links: Links$.outboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(Company$.outboundSchema).optional(),
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
