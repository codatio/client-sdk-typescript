/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListPushOperationsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    page?: number | undefined;
    /**
     * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    pageSize?: number | undefined;
    /**
     * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
     */
    query?: string | undefined;
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
};

/** @internal */
export const ListPushOperationsRequest$inboundSchema: z.ZodType<
    ListPushOperationsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string(),
    page: z.number().int().default(1),
    pageSize: z.number().int().default(100),
    query: z.string().optional(),
    orderBy: z.string().optional(),
});

/** @internal */
export type ListPushOperationsRequest$Outbound = {
    companyId: string;
    page: number;
    pageSize: number;
    query?: string | undefined;
    orderBy?: string | undefined;
};

/** @internal */
export const ListPushOperationsRequest$outboundSchema: z.ZodType<
    ListPushOperationsRequest$Outbound,
    z.ZodTypeDef,
    ListPushOperationsRequest
> = z.object({
    companyId: z.string(),
    page: z.number().int().default(1),
    pageSize: z.number().int().default(100),
    query: z.string().optional(),
    orderBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPushOperationsRequest$ {
    /** @deprecated use `ListPushOperationsRequest$inboundSchema` instead. */
    export const inboundSchema = ListPushOperationsRequest$inboundSchema;
    /** @deprecated use `ListPushOperationsRequest$outboundSchema` instead. */
    export const outboundSchema = ListPushOperationsRequest$outboundSchema;
    /** @deprecated use `ListPushOperationsRequest$Outbound` instead. */
    export type Outbound = ListPushOperationsRequest$Outbound;
}
