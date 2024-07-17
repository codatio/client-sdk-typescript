/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { Links, Links$inboundSchema, Links$Outbound, Links$outboundSchema } from "./links.js";
import {
    TrackingCategory,
    TrackingCategory$inboundSchema,
    TrackingCategory$Outbound,
    TrackingCategory$outboundSchema,
} from "./trackingcategory.js";
import * as z from "zod";

export type TrackingCategories = {
    results?: Array<TrackingCategory> | undefined;
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
export const TrackingCategories$inboundSchema: z.ZodType<
    TrackingCategories,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        results: z.array(TrackingCategory$inboundSchema).optional(),
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
export type TrackingCategories$Outbound = {
    results?: Array<TrackingCategory$Outbound> | undefined;
    pageNumber: number;
    pageSize: number;
    totalResults: number;
    _links: Links$Outbound;
};

/** @internal */
export const TrackingCategories$outboundSchema: z.ZodType<
    TrackingCategories$Outbound,
    z.ZodTypeDef,
    TrackingCategories
> = z
    .object({
        results: z.array(TrackingCategory$outboundSchema).optional(),
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
export namespace TrackingCategories$ {
    /** @deprecated use `TrackingCategories$inboundSchema` instead. */
    export const inboundSchema = TrackingCategories$inboundSchema;
    /** @deprecated use `TrackingCategories$outboundSchema` instead. */
    export const outboundSchema = TrackingCategories$outboundSchema;
    /** @deprecated use `TrackingCategories$Outbound` instead. */
    export type Outbound = TrackingCategories$Outbound;
}
