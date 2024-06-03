/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Connection, Connection$ } from "./connection";
import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import * as z from "zod";

export type CreateConnectionRequestBody = {
    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
     */
    platformKey?: string | undefined;
};

export type CreateConnectionRequest = {
    requestBody?: CreateConnectionRequestBody | undefined;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

export type CreateConnectionResponse = ErrorMessage | Connection;

/** @internal */
export namespace CreateConnectionRequestBody$ {
    export const inboundSchema: z.ZodType<CreateConnectionRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            platformKey: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.platformKey === undefined ? null : { platformKey: v.platformKey }),
            };
        });

    export type Outbound = {
        platformKey?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionRequestBody> = z
        .object({
            platformKey: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.platformKey === undefined ? null : { platformKey: v.platformKey }),
            };
        });
}

/** @internal */
export namespace CreateConnectionRequest$ {
    export const inboundSchema: z.ZodType<CreateConnectionRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequestBody: z.lazy(() => CreateConnectionRequestBody$.inboundSchema).optional(),
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                companyId: v.companyId,
            };
        });

    export type Outbound = {
        RequestBody?: CreateConnectionRequestBody$.Outbound | undefined;
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionRequest> = z
        .object({
            requestBody: z.lazy(() => CreateConnectionRequestBody$.outboundSchema).optional(),
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                companyId: v.companyId,
            };
        });
}

/** @internal */
export namespace CreateConnectionResponse$ {
    export const inboundSchema: z.ZodType<CreateConnectionResponse, z.ZodTypeDef, unknown> =
        z.union([ErrorMessage$.inboundSchema, Connection$.inboundSchema]);

    export type Outbound = ErrorMessage$.Outbound | Connection$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionResponse> =
        z.union([ErrorMessage$.outboundSchema, Connection$.outboundSchema]);
}
