/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetMappingOptionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

/** @internal */
export const GetMappingOptionsRequest$inboundSchema: z.ZodType<
    GetMappingOptionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
});

/** @internal */
export type GetMappingOptionsRequest$Outbound = {
    companyId: string;
};

/** @internal */
export const GetMappingOptionsRequest$outboundSchema: z.ZodType<
    GetMappingOptionsRequest$Outbound,
    z.ZodTypeDef,
    GetMappingOptionsRequest
> = z.object({
    companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMappingOptionsRequest$ {
    /** @deprecated use `GetMappingOptionsRequest$inboundSchema` instead. */
    export const inboundSchema = GetMappingOptionsRequest$inboundSchema;
    /** @deprecated use `GetMappingOptionsRequest$outboundSchema` instead. */
    export const outboundSchema = GetMappingOptionsRequest$outboundSchema;
    /** @deprecated use `GetMappingOptionsRequest$Outbound` instead. */
    export type Outbound = GetMappingOptionsRequest$Outbound;
}
