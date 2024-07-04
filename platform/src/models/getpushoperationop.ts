/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetPushOperationRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Push operation key.
     */
    pushOperationKey: string;
};

/** @internal */
export namespace GetPushOperationRequest$ {
    export const inboundSchema: z.ZodType<GetPushOperationRequest, z.ZodTypeDef, unknown> =
        z.object({
            companyId: z.string(),
            pushOperationKey: z.string(),
        });

    export type Outbound = {
        companyId: string;
        pushOperationKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPushOperationRequest> =
        z.object({
            companyId: z.string(),
            pushOperationKey: z.string(),
        });
}
