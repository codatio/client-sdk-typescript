/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListJournalEntriesRequest = {
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

export type ListJournalEntriesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your `query` parameter was not correctly formed
     */
    errorMessage?: shared.ErrorMessage | undefined;
    /**
     * Success
     */
    journalEntries?: shared.JournalEntries | undefined;
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
export namespace ListJournalEntriesRequest$ {
    export type Inbound = {
        companyId: string;
        orderBy?: string | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListJournalEntriesRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListJournalEntriesRequest> = z
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
export namespace ListJournalEntriesResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        JournalEntries?: shared.JournalEntries$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListJournalEntriesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            JournalEntries: shared.JournalEntries$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                ...(v.JournalEntries === undefined ? null : { journalEntries: v.JournalEntries }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        JournalEntries?: shared.JournalEntries$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListJournalEntriesResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            journalEntries: shared.JournalEntries$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                ...(v.journalEntries === undefined ? null : { JournalEntries: v.journalEntries }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
