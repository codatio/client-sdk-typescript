/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetVisibleAccountsRequest = {
    /**
     * Unique identifier for your client in Codat.
     */
    clientId: string;
    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
     */
    platformKey: string;
};

export type GetVisibleAccountsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
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
    visibleAccounts?: shared.VisibleAccounts | undefined;
};

/** @internal */
export namespace GetVisibleAccountsRequest$ {
    export type Inbound = {
        clientId: string;
        platformKey: string;
    };

    export const inboundSchema: z.ZodType<GetVisibleAccountsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            platformKey: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                platformKey: v.platformKey,
            };
        });

    export type Outbound = {
        clientId: string;
        platformKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetVisibleAccountsRequest> = z
        .object({
            clientId: z.string(),
            platformKey: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                platformKey: v.platformKey,
            };
        });
}

/** @internal */
export namespace GetVisibleAccountsResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        VisibleAccounts?: shared.VisibleAccounts$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetVisibleAccountsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            VisibleAccounts: shared.VisibleAccounts$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.VisibleAccounts === undefined
                    ? null
                    : { visibleAccounts: v.VisibleAccounts }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        VisibleAccounts?: shared.VisibleAccounts$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetVisibleAccountsResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            visibleAccounts: shared.VisibleAccounts$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.visibleAccounts === undefined
                    ? null
                    : { VisibleAccounts: v.visibleAccounts }),
            };
        });
}
