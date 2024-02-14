/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type InvoiceLevelSelection = {
    /**
     * Options for grouping sales.
     */
    groupByOptions?: Array<string> | null | undefined;
    /**
     * Selected array of grouping options.
     */
    selectedGroupByOptions?: Array<string> | null | undefined;
};

/** @internal */
export namespace InvoiceLevelSelection$ {
    export type Inbound = {
        groupByOptions?: Array<string> | null | undefined;
        selectedGroupByOptions?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceLevelSelection, z.ZodTypeDef, Inbound> = z
        .object({
            groupByOptions: z.nullable(z.array(z.string())).optional(),
            selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.groupByOptions === undefined ? null : { groupByOptions: v.groupByOptions }),
                ...(v.selectedGroupByOptions === undefined
                    ? null
                    : { selectedGroupByOptions: v.selectedGroupByOptions }),
            };
        });

    export type Outbound = {
        groupByOptions?: Array<string> | null | undefined;
        selectedGroupByOptions?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceLevelSelection> = z
        .object({
            groupByOptions: z.nullable(z.array(z.string())).optional(),
            selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.groupByOptions === undefined ? null : { groupByOptions: v.groupByOptions }),
                ...(v.selectedGroupByOptions === undefined
                    ? null
                    : { selectedGroupByOptions: v.selectedGroupByOptions }),
            };
        });
}
