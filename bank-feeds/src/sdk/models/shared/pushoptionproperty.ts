/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    PushOptionChoice,
    PushOptionChoice$inboundSchema,
    PushOptionChoice$Outbound,
    PushOptionChoice$outboundSchema,
} from "./pushoptionchoice.js";
import {
    PushOptionType,
    PushOptionType$inboundSchema,
    PushOptionType$outboundSchema,
} from "./pushoptiontype.js";
import {
    PushValidationInfo,
    PushValidationInfo$inboundSchema,
    PushValidationInfo$Outbound,
    PushValidationInfo$outboundSchema,
} from "./pushvalidationinfo.js";
import * as z from "zod";

export type PushOptionProperty = {
    /**
     * The option type.
     */
    type: PushOptionType;
    /**
     * The property's display name.
     */
    displayName: string;
    /**
     * A description of the property.
     */
    description: string;
    /**
     * The property is required if `True`.
     */
    required: boolean;
    properties?: { [k: string]: PushOptionProperty } | null | undefined;
    options?: Array<PushOptionChoice> | null | undefined;
    validation?: PushValidationInfo | undefined;
};

/** @internal */
export const PushOptionProperty$inboundSchema: z.ZodType<
    PushOptionProperty,
    z.ZodTypeDef,
    unknown
> = z.object({
    type: PushOptionType$inboundSchema,
    displayName: z.string(),
    description: z.string(),
    required: z.boolean(),
    properties: z.nullable(z.record(z.lazy(() => PushOptionProperty$inboundSchema))).optional(),
    options: z.nullable(z.array(PushOptionChoice$inboundSchema)).optional(),
    validation: PushValidationInfo$inboundSchema.optional(),
});

/** @internal */
export type PushOptionProperty$Outbound = {
    type: string;
    displayName: string;
    description: string;
    required: boolean;
    properties?: { [k: string]: PushOptionProperty$Outbound } | null | undefined;
    options?: Array<PushOptionChoice$Outbound> | null | undefined;
    validation?: PushValidationInfo$Outbound | undefined;
};

/** @internal */
export const PushOptionProperty$outboundSchema: z.ZodType<
    PushOptionProperty$Outbound,
    z.ZodTypeDef,
    PushOptionProperty
> = z.object({
    type: PushOptionType$outboundSchema,
    displayName: z.string(),
    description: z.string(),
    required: z.boolean(),
    properties: z.nullable(z.record(z.lazy(() => PushOptionProperty$outboundSchema))).optional(),
    options: z.nullable(z.array(PushOptionChoice$outboundSchema)).optional(),
    validation: PushValidationInfo$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOptionProperty$ {
    /** @deprecated use `PushOptionProperty$inboundSchema` instead. */
    export const inboundSchema = PushOptionProperty$inboundSchema;
    /** @deprecated use `PushOptionProperty$outboundSchema` instead. */
    export const outboundSchema = PushOptionProperty$outboundSchema;
    /** @deprecated use `PushOptionProperty$Outbound` instead. */
    export type Outbound = PushOptionProperty$Outbound;
}
