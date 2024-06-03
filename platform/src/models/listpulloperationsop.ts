/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { PullOperations, PullOperations$ } from "./pulloperations";
import * as z from "zod";

export type ListPullOperationsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
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
};

export type ListPullOperationsResponse = PullOperations | ErrorMessage;

/** @internal */
export namespace ListPullOperationsRequest$ {
    export const inboundSchema: z.ZodType<ListPullOperationsRequest, z.ZodTypeDef, unknown> = z
        .object({
            companyId: z.string(),
            orderBy: z.string().optional(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });

    export type Outbound = {
        companyId: string;
        orderBy?: string | undefined;
        page: number;
        pageSize: number;
        query?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListPullOperationsRequest> = z
        .object({
            companyId: z.string(),
            orderBy: z.string().optional(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });
}

/** @internal */
export namespace ListPullOperationsResponse$ {
    export const inboundSchema: z.ZodType<ListPullOperationsResponse, z.ZodTypeDef, unknown> =
        z.union([PullOperations$.inboundSchema, ErrorMessage$.inboundSchema]);

    export type Outbound = PullOperations$.Outbound | ErrorMessage$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListPullOperationsResponse> =
        z.union([PullOperations$.outboundSchema, ErrorMessage$.outboundSchema]);
}
