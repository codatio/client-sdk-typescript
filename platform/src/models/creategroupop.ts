/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { Group, Group$ } from "./group";
import * as z from "zod";

export type CreateGroupResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
     */
    errorMessage?: ErrorMessage | undefined;
    /**
     * Success
     */
    group?: Group | undefined;
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
export namespace CreateGroupResponse$ {
    export const inboundSchema: z.ZodType<CreateGroupResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            Group: Group$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                ...(v.Group === undefined ? null : { group: v.Group }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        Group?: Group$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGroupResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            group: Group$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                ...(v.group === undefined ? null : { Group: v.group }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
