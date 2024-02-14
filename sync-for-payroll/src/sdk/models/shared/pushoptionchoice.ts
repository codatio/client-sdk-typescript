/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushOptionType, PushOptionType$ } from "./pushoptiontype";
import { z } from "zod";

export type PushOptionChoice = {
    /**
     * A description of the property.
     */
    description?: string | undefined;
    /**
     * The property's display name.
     */
    displayName?: string | undefined;
    /**
     * The property is required if `True`.
     */
    required?: boolean | undefined;
    /**
     * The option type.
     */
    type?: PushOptionType | undefined;
    /**
     * Allowed value for field.
     */
    value?: string | undefined;
};

/** @internal */
export namespace PushOptionChoice$ {
    export type Inbound = {
        description?: string | undefined;
        displayName?: string | undefined;
        required?: boolean | undefined;
        type?: PushOptionType | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PushOptionChoice, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            displayName: z.string().optional(),
            required: z.boolean().optional(),
            type: PushOptionType$.optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.required === undefined ? null : { required: v.required }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        description?: string | undefined;
        displayName?: string | undefined;
        required?: boolean | undefined;
        type?: PushOptionType | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOptionChoice> = z
        .object({
            description: z.string().optional(),
            displayName: z.string().optional(),
            required: z.boolean().optional(),
            type: PushOptionType$.optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.required === undefined ? null : { required: v.required }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
