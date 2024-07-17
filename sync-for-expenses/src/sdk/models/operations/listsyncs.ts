/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListSyncsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

/** @internal */
export const ListSyncsRequest$inboundSchema: z.ZodType<ListSyncsRequest, z.ZodTypeDef, unknown> =
    z.object({
        companyId: z.string(),
    });

/** @internal */
export type ListSyncsRequest$Outbound = {
    companyId: string;
};

/** @internal */
export const ListSyncsRequest$outboundSchema: z.ZodType<
    ListSyncsRequest$Outbound,
    z.ZodTypeDef,
    ListSyncsRequest
> = z.object({
    companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSyncsRequest$ {
    /** @deprecated use `ListSyncsRequest$inboundSchema` instead. */
    export const inboundSchema = ListSyncsRequest$inboundSchema;
    /** @deprecated use `ListSyncsRequest$outboundSchema` instead. */
    export const outboundSchema = ListSyncsRequest$outboundSchema;
    /** @deprecated use `ListSyncsRequest$Outbound` instead. */
    export type Outbound = ListSyncsRequest$Outbound;
}
