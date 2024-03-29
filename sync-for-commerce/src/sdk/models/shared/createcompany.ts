/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Items, Items$ } from "./items";
import { z } from "zod";

export type CreateCompany = {
    /**
     * Additional information about the company. This can be used to store foreign IDs, references, etc.
     */
    description?: string | undefined;
    /**
     * Reference to the groups that the company is assigned to.
     */
    groups?: Array<Items> | undefined;
    /**
     * Name of company being connected.
     */
    name: string;
};

/** @internal */
export namespace CreateCompany$ {
    export type Inbound = {
        description?: string | undefined;
        groups?: Array<Items$.Inbound> | undefined;
        name: string;
    };

    export const inboundSchema: z.ZodType<CreateCompany, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            groups: z.array(Items$.inboundSchema).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.groups === undefined ? null : { groups: v.groups }),
                name: v.name,
            };
        });

    export type Outbound = {
        description?: string | undefined;
        groups?: Array<Items$.Outbound> | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCompany> = z
        .object({
            description: z.string().optional(),
            groups: z.array(Items$.outboundSchema).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.groups === undefined ? null : { groups: v.groups }),
                name: v.name,
            };
        });
}
