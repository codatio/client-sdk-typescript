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
export const GetPushOperationRequest$inboundSchema: z.ZodType<
    GetPushOperationRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    pushOperationKey: z.string(),
});

/** @internal */
export type GetPushOperationRequest$Outbound = {
    companyId: string;
    pushOperationKey: string;
};

/** @internal */
export const GetPushOperationRequest$outboundSchema: z.ZodType<
    GetPushOperationRequest$Outbound,
    z.ZodTypeDef,
    GetPushOperationRequest
> = z.object({
    companyId: z.string(),
    pushOperationKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPushOperationRequest$ {
    /** @deprecated use `GetPushOperationRequest$inboundSchema` instead. */
    export const inboundSchema = GetPushOperationRequest$inboundSchema;
    /** @deprecated use `GetPushOperationRequest$outboundSchema` instead. */
    export const outboundSchema = GetPushOperationRequest$outboundSchema;
    /** @deprecated use `GetPushOperationRequest$Outbound` instead. */
    export type Outbound = GetPushOperationRequest$Outbound;
}
