/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetBankAccountMappingRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
};

/** @internal */
export const GetBankAccountMappingRequest$inboundSchema: z.ZodType<
    GetBankAccountMappingRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
});

/** @internal */
export type GetBankAccountMappingRequest$Outbound = {
    companyId: string;
    connectionId: string;
};

/** @internal */
export const GetBankAccountMappingRequest$outboundSchema: z.ZodType<
    GetBankAccountMappingRequest$Outbound,
    z.ZodTypeDef,
    GetBankAccountMappingRequest
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBankAccountMappingRequest$ {
    /** @deprecated use `GetBankAccountMappingRequest$inboundSchema` instead. */
    export const inboundSchema = GetBankAccountMappingRequest$inboundSchema;
    /** @deprecated use `GetBankAccountMappingRequest$outboundSchema` instead. */
    export const outboundSchema = GetBankAccountMappingRequest$outboundSchema;
    /** @deprecated use `GetBankAccountMappingRequest$Outbound` instead. */
    export type Outbound = GetBankAccountMappingRequest$Outbound;
}
