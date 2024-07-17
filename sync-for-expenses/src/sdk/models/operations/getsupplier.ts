/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetSupplierRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a supplier.
     */
    supplierId: string;
};

/** @internal */
export const GetSupplierRequest$inboundSchema: z.ZodType<
    GetSupplierRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    supplierId: z.string(),
});

/** @internal */
export type GetSupplierRequest$Outbound = {
    companyId: string;
    supplierId: string;
};

/** @internal */
export const GetSupplierRequest$outboundSchema: z.ZodType<
    GetSupplierRequest$Outbound,
    z.ZodTypeDef,
    GetSupplierRequest
> = z.object({
    companyId: z.string(),
    supplierId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSupplierRequest$ {
    /** @deprecated use `GetSupplierRequest$inboundSchema` instead. */
    export const inboundSchema = GetSupplierRequest$inboundSchema;
    /** @deprecated use `GetSupplierRequest$outboundSchema` instead. */
    export const outboundSchema = GetSupplierRequest$outboundSchema;
    /** @deprecated use `GetSupplierRequest$Outbound` instead. */
    export type Outbound = GetSupplierRequest$Outbound;
}
