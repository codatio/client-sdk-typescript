/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Metadata = {
    /**
     * Indicates whether the record has been deleted in the third-party system this record originated from.
     */
    isDeleted?: boolean | null | undefined;
};

/** @internal */
export const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown> = z.object({
    isDeleted: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type Metadata$Outbound = {
    isDeleted?: boolean | null | undefined;
};

/** @internal */
export const Metadata$outboundSchema: z.ZodType<Metadata$Outbound, z.ZodTypeDef, Metadata> =
    z.object({
        isDeleted: z.nullable(z.boolean()).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
    /** @deprecated use `Metadata$inboundSchema` instead. */
    export const inboundSchema = Metadata$inboundSchema;
    /** @deprecated use `Metadata$outboundSchema` instead. */
    export const outboundSchema = Metadata$outboundSchema;
    /** @deprecated use `Metadata$Outbound` instead. */
    export type Outbound = Metadata$Outbound;
}
