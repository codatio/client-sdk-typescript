/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetIntegrationRequest = {
    /**
     * A unique 4-letter key to represent a platform in each integration.
     */
    platformKey: string;
};

/** @internal */
export const GetIntegrationRequest$inboundSchema: z.ZodType<
    GetIntegrationRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    platformKey: z.string(),
});

/** @internal */
export type GetIntegrationRequest$Outbound = {
    platformKey: string;
};

/** @internal */
export const GetIntegrationRequest$outboundSchema: z.ZodType<
    GetIntegrationRequest$Outbound,
    z.ZodTypeDef,
    GetIntegrationRequest
> = z.object({
    platformKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIntegrationRequest$ {
    /** @deprecated use `GetIntegrationRequest$inboundSchema` instead. */
    export const inboundSchema = GetIntegrationRequest$inboundSchema;
    /** @deprecated use `GetIntegrationRequest$outboundSchema` instead. */
    export const outboundSchema = GetIntegrationRequest$outboundSchema;
    /** @deprecated use `GetIntegrationRequest$Outbound` instead. */
    export type Outbound = GetIntegrationRequest$Outbound;
}
