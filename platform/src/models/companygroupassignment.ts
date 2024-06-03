/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CompanyGroupAssignment = {
    groupId?: string | undefined;
};

/** @internal */
export namespace CompanyGroupAssignment$ {
    export const inboundSchema: z.ZodType<CompanyGroupAssignment, z.ZodTypeDef, unknown> = z
        .object({
            groupId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.groupId === undefined ? null : { groupId: v.groupId }),
            };
        });

    export type Outbound = {
        groupId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompanyGroupAssignment> = z
        .object({
            groupId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.groupId === undefined ? null : { groupId: v.groupId }),
            };
        });
}
