/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ConnectionManagementAccessToken = {
    /**
     * Access token that allows SMBs to manage connections that have access to their data.
     */
    accessToken?: string | undefined;
};

/** @internal */
export namespace ConnectionManagementAccessToken$ {
    export const inboundSchema: z.ZodType<ConnectionManagementAccessToken, z.ZodTypeDef, unknown> =
        z.object({
            accessToken: z.string().optional(),
        });

    export type Outbound = {
        accessToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ConnectionManagementAccessToken
    > = z.object({
        accessToken: z.string().optional(),
    });
}
