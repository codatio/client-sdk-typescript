/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type CreateConnectionRequestBody = {
    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
     */
    platformKey?: string | undefined;
};

export type CreateConnectionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    requestBody?: CreateConnectionRequestBody | undefined;
};

/** @internal */
export const CreateConnectionRequestBody$inboundSchema: z.ZodType<
    CreateConnectionRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    platformKey: z.string().optional(),
});

/** @internal */
export type CreateConnectionRequestBody$Outbound = {
    platformKey?: string | undefined;
};

/** @internal */
export const CreateConnectionRequestBody$outboundSchema: z.ZodType<
    CreateConnectionRequestBody$Outbound,
    z.ZodTypeDef,
    CreateConnectionRequestBody
> = z.object({
    platformKey: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConnectionRequestBody$ {
    /** @deprecated use `CreateConnectionRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateConnectionRequestBody$inboundSchema;
    /** @deprecated use `CreateConnectionRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateConnectionRequestBody$outboundSchema;
    /** @deprecated use `CreateConnectionRequestBody$Outbound` instead. */
    export type Outbound = CreateConnectionRequestBody$Outbound;
}

/** @internal */
export const CreateConnectionRequest$inboundSchema: z.ZodType<
    CreateConnectionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        RequestBody: z.lazy(() => CreateConnectionRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type CreateConnectionRequest$Outbound = {
    companyId: string;
    RequestBody?: CreateConnectionRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateConnectionRequest$outboundSchema: z.ZodType<
    CreateConnectionRequest$Outbound,
    z.ZodTypeDef,
    CreateConnectionRequest
> = z
    .object({
        companyId: z.string(),
        requestBody: z.lazy(() => CreateConnectionRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConnectionRequest$ {
    /** @deprecated use `CreateConnectionRequest$inboundSchema` instead. */
    export const inboundSchema = CreateConnectionRequest$inboundSchema;
    /** @deprecated use `CreateConnectionRequest$outboundSchema` instead. */
    export const outboundSchema = CreateConnectionRequest$outboundSchema;
    /** @deprecated use `CreateConnectionRequest$Outbound` instead. */
    export type Outbound = CreateConnectionRequest$Outbound;
}
