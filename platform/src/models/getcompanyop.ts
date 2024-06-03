/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Company, Company$ } from "./company";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type GetCompanyRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

export type GetCompanyResponse = {
    /**
     * OK
     */
    company?: Company | undefined;
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
export namespace GetCompanyRequest$ {
    export const inboundSchema: z.ZodType<GetCompanyRequest, z.ZodTypeDef, unknown> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });

    export type Outbound = {
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyRequest> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });
}

/** @internal */
export namespace GetCompanyResponse$ {
    export const inboundSchema: z.ZodType<GetCompanyResponse, z.ZodTypeDef, unknown> = z
        .object({
            Company: Company$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Company === undefined ? null : { company: v.Company }),
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Company?: Company$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompanyResponse> = z
        .object({
            company: Company$.outboundSchema.optional(),
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { Company: v.company }),
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
