/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCompanyPushHistoryRequest = {
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
export const GetCompanyPushHistoryRequest$inboundSchema: z.ZodType<
    GetCompanyPushHistoryRequest,
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
export type GetCompanyPushHistoryRequest$Outbound = {
    companyId: string;
    page: number;
    pageSize: number;
    query?: string | undefined;
    orderBy?: string | undefined;
};

/** @internal */
export const GetCompanyPushHistoryRequest$outboundSchema: z.ZodType<
    GetCompanyPushHistoryRequest$Outbound,
    z.ZodTypeDef,
    GetCompanyPushHistoryRequest
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
export namespace GetCompanyPushHistoryRequest$ {
    /** @deprecated use `GetCompanyPushHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = GetCompanyPushHistoryRequest$inboundSchema;
    /** @deprecated use `GetCompanyPushHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = GetCompanyPushHistoryRequest$outboundSchema;
    /** @deprecated use `GetCompanyPushHistoryRequest$Outbound` instead. */
    export type Outbound = GetCompanyPushHistoryRequest$Outbound;
}
