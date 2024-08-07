/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type SetConfigurationRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    configuration?: shared.Configuration | undefined;
};

/** @internal */
export const SetConfigurationRequest$inboundSchema: z.ZodType<
    SetConfigurationRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        Configuration: shared.Configuration$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Configuration: "configuration",
        });
    });

/** @internal */
export type SetConfigurationRequest$Outbound = {
    companyId: string;
    Configuration?: shared.Configuration$Outbound | undefined;
};

/** @internal */
export const SetConfigurationRequest$outboundSchema: z.ZodType<
    SetConfigurationRequest$Outbound,
    z.ZodTypeDef,
    SetConfigurationRequest
> = z
    .object({
        companyId: z.string(),
        configuration: shared.Configuration$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            configuration: "Configuration",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetConfigurationRequest$ {
    /** @deprecated use `SetConfigurationRequest$inboundSchema` instead. */
    export const inboundSchema = SetConfigurationRequest$inboundSchema;
    /** @deprecated use `SetConfigurationRequest$outboundSchema` instead. */
    export const outboundSchema = SetConfigurationRequest$outboundSchema;
    /** @deprecated use `SetConfigurationRequest$Outbound` instead. */
    export type Outbound = SetConfigurationRequest$Outbound;
}
