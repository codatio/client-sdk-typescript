/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCreateBankAccountsModelRequest = {
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
export const GetCreateBankAccountsModelRequest$inboundSchema: z.ZodType<
    GetCreateBankAccountsModelRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
});

/** @internal */
export type GetCreateBankAccountsModelRequest$Outbound = {
    companyId: string;
    connectionId: string;
};

/** @internal */
export const GetCreateBankAccountsModelRequest$outboundSchema: z.ZodType<
    GetCreateBankAccountsModelRequest$Outbound,
    z.ZodTypeDef,
    GetCreateBankAccountsModelRequest
> = z.object({
    companyId: z.string(),
    connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateBankAccountsModelRequest$ {
    /** @deprecated use `GetCreateBankAccountsModelRequest$inboundSchema` instead. */
    export const inboundSchema = GetCreateBankAccountsModelRequest$inboundSchema;
    /** @deprecated use `GetCreateBankAccountsModelRequest$outboundSchema` instead. */
    export const outboundSchema = GetCreateBankAccountsModelRequest$outboundSchema;
    /** @deprecated use `GetCreateBankAccountsModelRequest$Outbound` instead. */
    export type Outbound = GetCreateBankAccountsModelRequest$Outbound;
}
