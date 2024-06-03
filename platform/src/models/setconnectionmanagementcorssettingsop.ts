/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ConnectionManagementAllowedOrigins,
    ConnectionManagementAllowedOrigins$,
} from "./connectionmanagementallowedorigins";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type SetConnectionManagementCorsSettingsResponse =
    | ConnectionManagementAllowedOrigins
    | ErrorMessage;

/** @internal */
export namespace SetConnectionManagementCorsSettingsResponse$ {
    export const inboundSchema: z.ZodType<
        SetConnectionManagementCorsSettingsResponse,
        z.ZodTypeDef,
        unknown
    > = z.union([ConnectionManagementAllowedOrigins$.inboundSchema, ErrorMessage$.inboundSchema]);

    export type Outbound = ConnectionManagementAllowedOrigins$.Outbound | ErrorMessage$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SetConnectionManagementCorsSettingsResponse
    > = z.union([ConnectionManagementAllowedOrigins$.outboundSchema, ErrorMessage$.outboundSchema]);
}
