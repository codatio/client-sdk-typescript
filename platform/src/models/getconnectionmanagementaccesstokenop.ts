/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConnectionManagementAccessTokenRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

/** @internal */
export namespace GetConnectionManagementAccessTokenRequest$ {
    export const inboundSchema: z.ZodType<
        GetConnectionManagementAccessTokenRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        companyId: z.string(),
    });

    export type Outbound = {
        companyId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConnectionManagementAccessTokenRequest
    > = z.object({
        companyId: z.string(),
    });
}
