/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { Profile, Profile$ } from "./profile";
import * as z from "zod";

export type UpdateProfileResponse = ErrorMessage | Profile;

/** @internal */
export namespace UpdateProfileResponse$ {
    export const inboundSchema: z.ZodType<UpdateProfileResponse, z.ZodTypeDef, unknown> = z.union([
        ErrorMessage$.inboundSchema,
        Profile$.inboundSchema,
    ]);

    export type Outbound = ErrorMessage$.Outbound | Profile$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProfileResponse> = z.union(
        [ErrorMessage$.outboundSchema, Profile$.outboundSchema]
    );
}
