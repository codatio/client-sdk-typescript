/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type RefreshDataTypeRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Optionally, provide a data connection id to only queue pull operations on that connection.
     */
    connectionId?: string | undefined;
    /**
     * The key of a Codat data type
     */
    dataType: shared.SchemaDataType;
};

export type RefreshDataTypeResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
     */
    errorMessage?: shared.ErrorMessage | undefined;
    /**
     * OK
     */
    pullOperation?: shared.PullOperation | undefined;
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
export namespace RefreshDataTypeRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId?: string | undefined;
        dataType: shared.SchemaDataType;
    };

    export const inboundSchema: z.ZodType<RefreshDataTypeRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string().optional(),
            dataType: shared.SchemaDataType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.connectionId === undefined ? null : { connectionId: v.connectionId }),
                dataType: v.dataType,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId?: string | undefined;
        dataType: shared.SchemaDataType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefreshDataTypeRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string().optional(),
            dataType: shared.SchemaDataType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.connectionId === undefined ? null : { connectionId: v.connectionId }),
                dataType: v.dataType,
            };
        });
}

/** @internal */
export namespace RefreshDataTypeResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        PullOperation?: shared.PullOperation$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<RefreshDataTypeResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            PullOperation: shared.PullOperation$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                ...(v.PullOperation === undefined ? null : { pullOperation: v.PullOperation }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        PullOperation?: shared.PullOperation$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefreshDataTypeResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            pullOperation: shared.PullOperation$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                ...(v.pullOperation === undefined ? null : { PullOperation: v.pullOperation }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
