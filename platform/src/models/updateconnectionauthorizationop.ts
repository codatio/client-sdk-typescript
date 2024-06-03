/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Connection, Connection$ } from "./connection";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type UpdateConnectionAuthorizationRequest = {
    requestBody?: { [k: string]: string } | undefined;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
};

export type UpdateConnectionAuthorizationResponse = ErrorMessage | Connection;

/** @internal */
export namespace UpdateConnectionAuthorizationRequest$ {
    export const inboundSchema: z.ZodType<
        UpdateConnectionAuthorizationRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            RequestBody: z.record(z.string()).optional(),
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });

    export type Outbound = {
        RequestBody?: { [k: string]: string } | undefined;
        companyId: string;
        connectionId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateConnectionAuthorizationRequest
    > = z
        .object({
            requestBody: z.record(z.string()).optional(),
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });
}

/** @internal */
export namespace UpdateConnectionAuthorizationResponse$ {
    export const inboundSchema: z.ZodType<
        UpdateConnectionAuthorizationResponse,
        z.ZodTypeDef,
        unknown
    > = z.union([ErrorMessage$.inboundSchema, Connection$.inboundSchema]);

    export type Outbound = ErrorMessage$.Outbound | Connection$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateConnectionAuthorizationResponse
    > = z.union([ErrorMessage$.outboundSchema, Connection$.outboundSchema]);
}
