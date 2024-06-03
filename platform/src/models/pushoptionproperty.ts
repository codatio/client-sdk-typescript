/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushOptionChoice, PushOptionChoice$ } from "./pushoptionchoice";
import { PushOptionType, PushOptionType$ } from "./pushoptiontype";
import { PushValidationInfo, PushValidationInfo$ } from "./pushvalidationinfo";
import * as z from "zod";

export type PushOptionProperty = {
    /**
     * A description of the property.
     */
    description: string;
    /**
     * The property's display name.
     */
    displayName: string;
    options?: Array<PushOptionChoice> | null | undefined;
    properties?: { [k: string]: PushOptionProperty } | null | undefined;
    /**
     * The property is required if `True`.
     */
    required: boolean;
    /**
     * The option type.
     */
    type: PushOptionType;
    validation?: PushValidationInfo | undefined;
};

/** @internal */
export namespace PushOptionProperty$ {
    export const inboundSchema: z.ZodType<PushOptionProperty, z.ZodTypeDef, unknown> = z
        .object({
            description: z.string(),
            displayName: z.string(),
            options: z.nullable(z.array(PushOptionChoice$.inboundSchema)).optional(),
            properties: z
                .nullable(z.record(z.lazy(() => PushOptionProperty$.inboundSchema)))
                .optional(),
            required: z.boolean(),
            type: PushOptionType$.inboundSchema,
            validation: PushValidationInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                description: v.description,
                displayName: v.displayName,
                ...(v.options === undefined ? null : { options: v.options }),
                ...(v.properties === undefined ? null : { properties: v.properties }),
                required: v.required,
                type: v.type,
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        description: string;
        displayName: string;
        options?: Array<PushOptionChoice$.Outbound> | null | undefined;
        properties?: { [k: string]: PushOptionProperty$.Outbound } | null | undefined;
        required: boolean;
        type: string;
        validation?: PushValidationInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOptionProperty> = z
        .object({
            description: z.string(),
            displayName: z.string(),
            options: z.nullable(z.array(PushOptionChoice$.outboundSchema)).optional(),
            properties: z
                .nullable(z.record(z.lazy(() => PushOptionProperty$.outboundSchema)))
                .optional(),
            required: z.boolean(),
            type: PushOptionType$.outboundSchema,
            validation: PushValidationInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                description: v.description,
                displayName: v.displayName,
                ...(v.options === undefined ? null : { options: v.options }),
                ...(v.properties === undefined ? null : { properties: v.properties }),
                required: v.required,
                type: v.type,
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
