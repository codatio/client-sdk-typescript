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

export type UnlinkConnectionResponse = ErrorMessage | Connection;

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
    export const inboundSchema: z.ZodType<UnlinkConnectionResponse, z.ZodTypeDef, unknown> =
        z.union([ErrorMessage$.inboundSchema, Connection$.inboundSchema]);

    export type Outbound = ErrorMessage$.Outbound | Connection$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnlinkConnectionResponse> =
        z.union([ErrorMessage$.outboundSchema, Connection$.outboundSchema]);
}
