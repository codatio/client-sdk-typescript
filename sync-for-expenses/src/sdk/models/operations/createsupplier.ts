/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateSupplierRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
    /**
     * Allow a sync upon push completion.
     */
    allowSyncOnPushComplete?: boolean | undefined;
    supplier?: shared.Supplier | null | undefined;
};

/** @internal */
export const CreateSupplierRequest$inboundSchema: z.ZodType<
    CreateSupplierRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        connectionId: z.string(),
        timeoutInMinutes: z.number().int().optional(),
        allowSyncOnPushComplete: z.boolean().default(true),
        Supplier: z.nullable(shared.Supplier$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Supplier: "supplier",
        });
    });

/** @internal */
export type CreateSupplierRequest$Outbound = {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number | undefined;
    allowSyncOnPushComplete: boolean;
    Supplier?: shared.Supplier$Outbound | null | undefined;
};

/** @internal */
export const CreateSupplierRequest$outboundSchema: z.ZodType<
    CreateSupplierRequest$Outbound,
    z.ZodTypeDef,
    CreateSupplierRequest
> = z
    .object({
        companyId: z.string(),
        connectionId: z.string(),
        timeoutInMinutes: z.number().int().optional(),
        allowSyncOnPushComplete: z.boolean().default(true),
        supplier: z.nullable(shared.Supplier$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            supplier: "Supplier",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupplierRequest$ {
    /** @deprecated use `CreateSupplierRequest$inboundSchema` instead. */
    export const inboundSchema = CreateSupplierRequest$inboundSchema;
    /** @deprecated use `CreateSupplierRequest$outboundSchema` instead. */
    export const outboundSchema = CreateSupplierRequest$outboundSchema;
    /** @deprecated use `CreateSupplierRequest$Outbound` instead. */
    export type Outbound = CreateSupplierRequest$Outbound;
}
