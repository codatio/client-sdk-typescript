/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CustomDataTypeConfiguration,
    CustomDataTypeConfiguration$,
} from "./customdatatypeconfiguration";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type ConfigureCustomDataTypeRequest = {
    /**
     * Custom data type configuration for the specified platform.
     */
    customDataTypeConfiguration?: CustomDataTypeConfiguration | undefined;
    /**
     * Unique identifier for a custom data type.
     */
    customDataIdentifier: string;
    /**
     * A unique 4-letter key to represent a platform in each integration.
     */
    platformKey: string;
};

export type ConfigureCustomDataTypeResponse = CustomDataTypeConfiguration | ErrorMessage;

/** @internal */
export namespace ConfigureCustomDataTypeRequest$ {
    export const inboundSchema: z.ZodType<ConfigureCustomDataTypeRequest, z.ZodTypeDef, unknown> = z
        .object({
            CustomDataTypeConfiguration: CustomDataTypeConfiguration$.inboundSchema.optional(),
            customDataIdentifier: z.string(),
            platformKey: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.CustomDataTypeConfiguration === undefined
                    ? null
                    : { customDataTypeConfiguration: v.CustomDataTypeConfiguration }),
                customDataIdentifier: v.customDataIdentifier,
                platformKey: v.platformKey,
            };
        });

    export type Outbound = {
        CustomDataTypeConfiguration?: CustomDataTypeConfiguration$.Outbound | undefined;
        customDataIdentifier: string;
        platformKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfigureCustomDataTypeRequest> =
        z
            .object({
                customDataTypeConfiguration: CustomDataTypeConfiguration$.outboundSchema.optional(),
                customDataIdentifier: z.string(),
                platformKey: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.customDataTypeConfiguration === undefined
                        ? null
                        : { CustomDataTypeConfiguration: v.customDataTypeConfiguration }),
                    customDataIdentifier: v.customDataIdentifier,
                    platformKey: v.platformKey,
                };
            });
}

/** @internal */
export namespace ConfigureCustomDataTypeResponse$ {
    export const inboundSchema: z.ZodType<ConfigureCustomDataTypeResponse, z.ZodTypeDef, unknown> =
        z.union([CustomDataTypeConfiguration$.inboundSchema, ErrorMessage$.inboundSchema]);

    export type Outbound = CustomDataTypeConfiguration$.Outbound | ErrorMessage$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ConfigureCustomDataTypeResponse
    > = z.union([CustomDataTypeConfiguration$.outboundSchema, ErrorMessage$.outboundSchema]);
}
