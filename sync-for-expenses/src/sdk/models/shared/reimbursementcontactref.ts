/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ReimbursementContactRef = {
    /**
     * Identifier of contact.
     */
    id: string;
};

/** @internal */
export const ReimbursementContactRef$inboundSchema: z.ZodType<
    ReimbursementContactRef,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type ReimbursementContactRef$Outbound = {
    id: string;
};

/** @internal */
export const ReimbursementContactRef$outboundSchema: z.ZodType<
    ReimbursementContactRef$Outbound,
    z.ZodTypeDef,
    ReimbursementContactRef
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReimbursementContactRef$ {
    /** @deprecated use `ReimbursementContactRef$inboundSchema` instead. */
    export const inboundSchema = ReimbursementContactRef$inboundSchema;
    /** @deprecated use `ReimbursementContactRef$outboundSchema` instead. */
    export const outboundSchema = ReimbursementContactRef$outboundSchema;
    /** @deprecated use `ReimbursementContactRef$Outbound` instead. */
    export type Outbound = ReimbursementContactRef$Outbound;
}
