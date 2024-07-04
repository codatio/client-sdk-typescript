/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCompanyDataStatusRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

/** @internal */
export namespace GetCompanyDataStatusRequest$ {
    export const inboundSchema: z.ZodType<GetCompanyDataStatusRequest, z.ZodTypeDef, unknown> =
        z.object({
            companyId: z.string(),
        });

    export type Outbound = {
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyDataStatusRequest> =
        z.object({
            companyId: z.string(),
        });
}
