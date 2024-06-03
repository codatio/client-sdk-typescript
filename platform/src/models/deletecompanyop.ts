/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteCompanyRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

/** @internal */
export namespace DeleteCompanyRequest$ {
    export const inboundSchema: z.ZodType<DeleteCompanyRequest, z.ZodTypeDef, unknown> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });

    export type Outbound = {
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCompanyRequest> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });
}
