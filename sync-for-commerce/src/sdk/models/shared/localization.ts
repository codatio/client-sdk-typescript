/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Localization = {
    /**
     * Value of the property.
     */
    text?: string | null | undefined;
    /**
     * `True` if required.
     */
    required?: boolean | undefined;
};

/** @internal */
export const Localization$inboundSchema: z.ZodType<Localization, z.ZodTypeDef, unknown> = z.object({
    text: z.nullable(z.string()).optional(),
    required: z.boolean().optional(),
});

/** @internal */
export type Localization$Outbound = {
    text?: string | null | undefined;
    required?: boolean | undefined;
};

/** @internal */
export const Localization$outboundSchema: z.ZodType<
    Localization$Outbound,
    z.ZodTypeDef,
    Localization
> = z.object({
    text: z.nullable(z.string()).optional(),
    required: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Localization$ {
    /** @deprecated use `Localization$inboundSchema` instead. */
    export const inboundSchema = Localization$inboundSchema;
    /** @deprecated use `Localization$outboundSchema` instead. */
    export const outboundSchema = Localization$outboundSchema;
    /** @deprecated use `Localization$Outbound` instead. */
    export type Outbound = Localization$Outbound;
}
