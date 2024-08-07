/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type InvoiceLineLevelSelection = {
    /**
     * Invoice line level selection.
     */
    selectedGroupByOptions?: Array<string> | null | undefined;
    /**
     * Options for grouping on invoice lines.
     */
    groupByOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceLineLevelSelection$inboundSchema: z.ZodType<
    InvoiceLineLevelSelection,
    z.ZodTypeDef,
    unknown
> = z.object({
    selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
    groupByOptions: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type InvoiceLineLevelSelection$Outbound = {
    selectedGroupByOptions?: Array<string> | null | undefined;
    groupByOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceLineLevelSelection$outboundSchema: z.ZodType<
    InvoiceLineLevelSelection$Outbound,
    z.ZodTypeDef,
    InvoiceLineLevelSelection
> = z.object({
    selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
    groupByOptions: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceLineLevelSelection$ {
    /** @deprecated use `InvoiceLineLevelSelection$inboundSchema` instead. */
    export const inboundSchema = InvoiceLineLevelSelection$inboundSchema;
    /** @deprecated use `InvoiceLineLevelSelection$outboundSchema` instead. */
    export const outboundSchema = InvoiceLineLevelSelection$outboundSchema;
    /** @deprecated use `InvoiceLineLevelSelection$Outbound` instead. */
    export type Outbound = InvoiceLineLevelSelection$Outbound;
}
