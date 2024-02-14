/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetSyncFlowUrlRequest = {
    /**
     * Accounting platform key
     */
    accountingKey: string;
    /**
     * Commerce platform key
     */
    commerceKey: string;
    /**
     * Identifier for your merchant, can be the merchant name or Codat company id.
     */
    merchantIdentifier?: string | undefined;
};

export type GetSyncFlowUrlResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
    /**
     * Success
     */
    syncFlowUrl?: shared.SyncFlowUrl | undefined;
};

/** @internal */
export namespace GetSyncFlowUrlRequest$ {
    export type Inbound = {
        accountingKey: string;
        commerceKey: string;
        merchantIdentifier?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSyncFlowUrlRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountingKey: z.string(),
            commerceKey: z.string(),
            merchantIdentifier: z.string().optional(),
        })
        .transform((v) => {
            return {
                accountingKey: v.accountingKey,
                commerceKey: v.commerceKey,
                ...(v.merchantIdentifier === undefined
                    ? null
                    : { merchantIdentifier: v.merchantIdentifier }),
            };
        });

    export type Outbound = {
        accountingKey: string;
        commerceKey: string;
        merchantIdentifier?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncFlowUrlRequest> = z
        .object({
            accountingKey: z.string(),
            commerceKey: z.string(),
            merchantIdentifier: z.string().optional(),
        })
        .transform((v) => {
            return {
                accountingKey: v.accountingKey,
                commerceKey: v.commerceKey,
                ...(v.merchantIdentifier === undefined
                    ? null
                    : { merchantIdentifier: v.merchantIdentifier }),
            };
        });
}

/** @internal */
export namespace GetSyncFlowUrlResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        SyncFlowUrl?: shared.SyncFlowUrl$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSyncFlowUrlResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            SyncFlowUrl: shared.SyncFlowUrl$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.SyncFlowUrl === undefined ? null : { syncFlowUrl: v.SyncFlowUrl }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        SyncFlowUrl?: shared.SyncFlowUrl$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncFlowUrlResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            syncFlowUrl: shared.SyncFlowUrl$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.syncFlowUrl === undefined ? null : { SyncFlowUrl: v.syncFlowUrl }),
            };
        });
}
