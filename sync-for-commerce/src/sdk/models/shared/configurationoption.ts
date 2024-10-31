/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ConfigurationOption = {
    /**
     * Name value of the option.
     */
    name?: string | null | undefined;
    /**
     * Unique identifier for the option.
     */
    id?: string | undefined;
};

/** @internal */
export const ConfigurationOption$inboundSchema: z.ZodType<
    ConfigurationOption,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.nullable(z.string()).optional(),
    id: z.string().optional(),
});

/** @internal */
export type ConfigurationOption$Outbound = {
    name?: string | null | undefined;
    id?: string | undefined;
};

/** @internal */
export const ConfigurationOption$outboundSchema: z.ZodType<
    ConfigurationOption$Outbound,
    z.ZodTypeDef,
    ConfigurationOption
> = z.object({
    name: z.nullable(z.string()).optional(),
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigurationOption$ {
    /** @deprecated use `ConfigurationOption$inboundSchema` instead. */
    export const inboundSchema = ConfigurationOption$inboundSchema;
    /** @deprecated use `ConfigurationOption$outboundSchema` instead. */
    export const outboundSchema = ConfigurationOption$outboundSchema;
    /** @deprecated use `ConfigurationOption$Outbound` instead. */
    export type Outbound = ConfigurationOption$Outbound;
}