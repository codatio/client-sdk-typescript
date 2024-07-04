/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteApiKeyRequest = {
    /**
     * Unique identifier for api key.
     */
    apiKeyId: string;
};

/** @internal */
export namespace DeleteApiKeyRequest$ {
    export const inboundSchema: z.ZodType<DeleteApiKeyRequest, z.ZodTypeDef, unknown> = z.object({
        apiKeyId: z.string(),
    });

    export type Outbound = {
        apiKeyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteApiKeyRequest> = z.object({
        apiKeyId: z.string(),
    });
}
