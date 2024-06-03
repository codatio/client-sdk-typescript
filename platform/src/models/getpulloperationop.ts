/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { PullOperation, PullOperation$ } from "./pulloperation";
import * as z from "zod";

export type GetPullOperationRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for the dataset that completed its sync.
     */
    datasetId: string;
};

export type GetPullOperationResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
     */
    errorMessage?: ErrorMessage | undefined;
    /**
     * OK
     */
    pullOperation?: PullOperation | undefined;
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
export namespace GetPullOperationRequest$ {
    export const inboundSchema: z.ZodType<GetPullOperationRequest, z.ZodTypeDef, unknown> = z
        .object({
            companyId: z.string(),
            datasetId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                datasetId: v.datasetId,
            };
        });

    export type Outbound = {
        companyId: string;
        datasetId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPullOperationRequest> = z
        .object({
            companyId: z.string(),
            datasetId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                datasetId: v.datasetId,
            };
        });
}

/** @internal */
export namespace GetPullOperationResponse$ {
    export const inboundSchema: z.ZodType<GetPullOperationResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            PullOperation: PullOperation$.inboundSchema.optional(),
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
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        PullOperation?: PullOperation$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPullOperationResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            pullOperation: PullOperation$.outboundSchema.optional(),
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
