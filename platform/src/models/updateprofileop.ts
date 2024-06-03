/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { Profile, Profile$ } from "./profile";
import * as z from "zod";

export type UpdateProfileResponse = {
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
    profile?: Profile | undefined;
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
export namespace UpdateProfileResponse$ {
    export const inboundSchema: z.ZodType<UpdateProfileResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            Profile: Profile$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                ...(v.Profile === undefined ? null : { profile: v.Profile }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        Profile?: Profile$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProfileResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            profile: Profile$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                ...(v.profile === undefined ? null : { Profile: v.profile }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
