/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GroupingPeriod = {
    /**
     * Grouping period i.e. Daily sales.
     */
    selectedGroupingPeriod?: string | null | undefined;
    /**
     * Array of grouping period options.
     */
    groupingPeriodOptions?: Array<string> | null | undefined;
};

/** @internal */
export const GroupingPeriod$inboundSchema: z.ZodType<GroupingPeriod, z.ZodTypeDef, unknown> =
    z.object({
        selectedGroupingPeriod: z.nullable(z.string()).optional(),
        groupingPeriodOptions: z.nullable(z.array(z.string())).optional(),
    });

/** @internal */
export type GroupingPeriod$Outbound = {
    selectedGroupingPeriod?: string | null | undefined;
    groupingPeriodOptions?: Array<string> | null | undefined;
};

/** @internal */
export const GroupingPeriod$outboundSchema: z.ZodType<
    GroupingPeriod$Outbound,
    z.ZodTypeDef,
    GroupingPeriod
> = z.object({
    selectedGroupingPeriod: z.nullable(z.string()).optional(),
    groupingPeriodOptions: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupingPeriod$ {
    /** @deprecated use `GroupingPeriod$inboundSchema` instead. */
    export const inboundSchema = GroupingPeriod$inboundSchema;
    /** @deprecated use `GroupingPeriod$outboundSchema` instead. */
    export const outboundSchema = GroupingPeriod$outboundSchema;
    /** @deprecated use `GroupingPeriod$Outbound` instead. */
    export type Outbound = GroupingPeriod$Outbound;
}
