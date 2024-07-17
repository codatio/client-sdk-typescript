/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    Customer,
    Customer$inboundSchema,
    Customer$Outbound,
    Customer$outboundSchema,
} from "./customer.js";
import { Links, Links$inboundSchema, Links$Outbound, Links$outboundSchema } from "./links.js";
import * as z from "zod";

export type Customers = {
    results?: Array<Customer> | undefined;
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
export const Customers$inboundSchema: z.ZodType<Customers, z.ZodTypeDef, unknown> = z
    .object({
        results: z.array(Customer$inboundSchema).optional(),
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
export type Customers$Outbound = {
    results?: Array<Customer$Outbound> | undefined;
    pageNumber: number;
    pageSize: number;
    totalResults: number;
    _links: Links$Outbound;
};

/** @internal */
export const Customers$outboundSchema: z.ZodType<Customers$Outbound, z.ZodTypeDef, Customers> = z
    .object({
        results: z.array(Customer$outboundSchema).optional(),
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
export namespace Customers$ {
    /** @deprecated use `Customers$inboundSchema` instead. */
    export const inboundSchema = Customers$inboundSchema;
    /** @deprecated use `Customers$outboundSchema` instead. */
    export const outboundSchema = Customers$outboundSchema;
    /** @deprecated use `Customers$Outbound` instead. */
    export type Outbound = Customers$Outbound;
}
