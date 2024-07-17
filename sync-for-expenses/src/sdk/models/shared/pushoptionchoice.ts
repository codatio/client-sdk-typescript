/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    PushOptionType,
    PushOptionType$inboundSchema,
    PushOptionType$outboundSchema,
} from "./pushoptiontype.js";
import * as z from "zod";

export type PushOptionChoice = {
    /**
     * Allowed value for field.
     */
    value?: string | undefined;
    /**
     * The option type.
     */
    type?: PushOptionType | undefined;
    /**
     * The property's display name.
     */
    displayName?: string | undefined;
    /**
     * A description of the property.
     */
    description?: string | undefined;
    /**
     * The property is required if `True`.
     */
    required?: boolean | undefined;
};

/** @internal */
export const PushOptionChoice$inboundSchema: z.ZodType<PushOptionChoice, z.ZodTypeDef, unknown> =
    z.object({
        value: z.string().optional(),
        type: PushOptionType$inboundSchema.optional(),
        displayName: z.string().optional(),
        description: z.string().optional(),
        required: z.boolean().optional(),
    });

/** @internal */
export type PushOptionChoice$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    required?: boolean | undefined;
};

/** @internal */
export const PushOptionChoice$outboundSchema: z.ZodType<
    PushOptionChoice$Outbound,
    z.ZodTypeDef,
    PushOptionChoice
> = z.object({
    value: z.string().optional(),
    type: PushOptionType$outboundSchema.optional(),
    displayName: z.string().optional(),
    description: z.string().optional(),
    required: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOptionChoice$ {
    /** @deprecated use `PushOptionChoice$inboundSchema` instead. */
    export const inboundSchema = PushOptionChoice$inboundSchema;
    /** @deprecated use `PushOptionChoice$outboundSchema` instead. */
    export const outboundSchema = PushOptionChoice$outboundSchema;
    /** @deprecated use `PushOptionChoice$Outbound` instead. */
    export type Outbound = PushOptionChoice$Outbound;
}
