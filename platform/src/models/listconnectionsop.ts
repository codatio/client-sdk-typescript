/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Connections, Connections$ } from "./connections";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type ListConnectionsRequest = {
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

export type ListConnectionsResponse = {
    /**
     * OK
     */
    connections?: Connections | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your `query` parameter was not correctly formed
     */
    errorMessage?: ErrorMessage | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace ListConnectionsRequest$ {
    export const inboundSchema: z.ZodType<ListConnectionsRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListConnectionsRequest> = z
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
export namespace ListConnectionsResponse$ {
    export const inboundSchema: z.ZodType<ListConnectionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            Connections: Connections$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Connections === undefined ? null : { connections: v.Connections }),
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Connections?: Connections$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListConnectionsResponse> = z
        .object({
            connections: Connections$.outboundSchema.optional(),
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.connections === undefined ? null : { Connections: v.connections }),
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
