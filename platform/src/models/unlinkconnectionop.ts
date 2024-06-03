/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Connection, Connection$ } from "./connection";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { UpdateConnectionStatus, UpdateConnectionStatus$ } from "./updateconnectionstatus";
import * as z from "zod";

export type UnlinkConnectionRequest = {
    updateConnectionStatus?: UpdateConnectionStatus | undefined;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
};

export type UnlinkConnectionResponse = {
    /**
     * OK
     */
    connection?: Connection | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
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
export namespace UnlinkConnectionRequest$ {
    export const inboundSchema: z.ZodType<UnlinkConnectionRequest, z.ZodTypeDef, unknown> = z
        .object({
            UpdateConnectionStatus: UpdateConnectionStatus$.inboundSchema.optional(),
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.UpdateConnectionStatus === undefined
                    ? null
                    : { updateConnectionStatus: v.UpdateConnectionStatus }),
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });

    export type Outbound = {
        UpdateConnectionStatus?: UpdateConnectionStatus$.Outbound | undefined;
        companyId: string;
        connectionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnlinkConnectionRequest> = z
        .object({
            updateConnectionStatus: UpdateConnectionStatus$.outboundSchema.optional(),
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.updateConnectionStatus === undefined
                    ? null
                    : { UpdateConnectionStatus: v.updateConnectionStatus }),
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });
}

/** @internal */
export namespace UnlinkConnectionResponse$ {
    export const inboundSchema: z.ZodType<UnlinkConnectionResponse, z.ZodTypeDef, unknown> = z
        .object({
            Connection: Connection$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Connection === undefined ? null : { connection: v.Connection }),
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Connection?: Connection$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnlinkConnectionResponse> = z
        .object({
            connection: Connection$.outboundSchema.optional(),
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.connection === undefined ? null : { Connection: v.connection }),
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
