/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateJournalEntryRequest = {
    journalEntry?: shared.JournalEntry | null | undefined;
    /**
     * Allow a sync upon push completion.
     */
    allowSyncOnPushComplete?: boolean | undefined;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
};

export type CreateJournalEntryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Success
     */
    createJournalEntryResponse?: shared.CreateJournalEntryResponse | undefined;
    /**
     * The request made is not valid.
     */
    errorMessage?: shared.ErrorMessage | undefined;
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
export namespace CreateJournalEntryRequest$ {
    export type Inbound = {
        JournalEntry?: shared.JournalEntry$.Inbound | null | undefined;
        allowSyncOnPushComplete?: boolean | undefined;
        companyId: string;
        connectionId: string;
        timeoutInMinutes?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreateJournalEntryRequest, z.ZodTypeDef, Inbound> = z
        .object({
            JournalEntry: z.nullable(shared.JournalEntry$.inboundSchema).optional(),
            allowSyncOnPushComplete: z.boolean().default(true),
            companyId: z.string(),
            connectionId: z.string(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.JournalEntry === undefined ? null : { journalEntry: v.JournalEntry }),
                allowSyncOnPushComplete: v.allowSyncOnPushComplete,
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });

    export type Outbound = {
        JournalEntry?: shared.JournalEntry$.Outbound | null | undefined;
        allowSyncOnPushComplete: boolean;
        companyId: string;
        connectionId: string;
        timeoutInMinutes?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJournalEntryRequest> = z
        .object({
            journalEntry: z.nullable(shared.JournalEntry$.outboundSchema).optional(),
            allowSyncOnPushComplete: z.boolean().default(true),
            companyId: z.string(),
            connectionId: z.string(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.journalEntry === undefined ? null : { JournalEntry: v.journalEntry }),
                allowSyncOnPushComplete: v.allowSyncOnPushComplete,
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });
}

/** @internal */
export namespace CreateJournalEntryResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateJournalEntryResponse?: shared.CreateJournalEntryResponse$.Inbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateJournalEntryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateJournalEntryResponse: shared.CreateJournalEntryResponse$.inboundSchema.optional(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateJournalEntryResponse === undefined
                    ? null
                    : { createJournalEntryResponse: v.CreateJournalEntryResponse }),
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateJournalEntryResponse?: shared.CreateJournalEntryResponse$.Outbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJournalEntryResponse> = z
        .object({
            contentType: z.string(),
            createJournalEntryResponse:
                shared.CreateJournalEntryResponse$.outboundSchema.optional(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createJournalEntryResponse === undefined
                    ? null
                    : { CreateJournalEntryResponse: v.createJournalEntryResponse }),
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
