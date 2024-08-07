/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GroupRef = {
    /**
     * Unique identifier for the group.
     */
    id?: string | undefined;
};

/** @internal */
export const GroupRef$inboundSchema: z.ZodType<GroupRef, z.ZodTypeDef, unknown> = z.object({
    id: z.string().optional(),
});

/** @internal */
export type GroupRef$Outbound = {
    id?: string | undefined;
};

/** @internal */
export const GroupRef$outboundSchema: z.ZodType<GroupRef$Outbound, z.ZodTypeDef, GroupRef> =
    z.object({
        id: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupRef$ {
    /** @deprecated use `GroupRef$inboundSchema` instead. */
    export const inboundSchema = GroupRef$inboundSchema;
    /** @deprecated use `GroupRef$outboundSchema` instead. */
    export const outboundSchema = GroupRef$outboundSchema;
    /** @deprecated use `GroupRef$Outbound` instead. */
    export type Outbound = GroupRef$Outbound;
}
