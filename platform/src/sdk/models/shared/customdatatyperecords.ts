/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CustomDataTypeRecord,
    CustomDataTypeRecord$inboundSchema,
    CustomDataTypeRecord$Outbound,
    CustomDataTypeRecord$outboundSchema,
} from "./customdatatyperecord.js";
import * as z from "zod";

/**
 * Resulting records pulled from the source platform for a specific custom data type.
 */
export type CustomDataTypeRecords = {
    results?: Array<CustomDataTypeRecord> | undefined;
    /**
     * Current page number.
     */
    pageNumber?: number | undefined;
    /**
     * Number of items to return in results array.
     */
    pageSize?: number | undefined;
    /**
     * Total number of items.
     */
    totalResults?: number | undefined;
};

/** @internal */
export const CustomDataTypeRecords$inboundSchema: z.ZodType<
    CustomDataTypeRecords,
    z.ZodTypeDef,
    unknown
> = z.object({
    results: z.array(CustomDataTypeRecord$inboundSchema).optional(),
    pageNumber: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    totalResults: z.number().int().optional(),
});

/** @internal */
export type CustomDataTypeRecords$Outbound = {
    results?: Array<CustomDataTypeRecord$Outbound> | undefined;
    pageNumber?: number | undefined;
    pageSize?: number | undefined;
    totalResults?: number | undefined;
};

/** @internal */
export const CustomDataTypeRecords$outboundSchema: z.ZodType<
    CustomDataTypeRecords$Outbound,
    z.ZodTypeDef,
    CustomDataTypeRecords
> = z.object({
    results: z.array(CustomDataTypeRecord$outboundSchema).optional(),
    pageNumber: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    totalResults: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomDataTypeRecords$ {
    /** @deprecated use `CustomDataTypeRecords$inboundSchema` instead. */
    export const inboundSchema = CustomDataTypeRecords$inboundSchema;
    /** @deprecated use `CustomDataTypeRecords$outboundSchema` instead. */
    export const outboundSchema = CustomDataTypeRecords$outboundSchema;
    /** @deprecated use `CustomDataTypeRecords$Outbound` instead. */
    export type Outbound = CustomDataTypeRecords$Outbound;
}
