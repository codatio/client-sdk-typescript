/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type RequestSyncRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    syncToLatestArgs?: shared.SyncToLatestArgs | undefined;
};

/** @internal */
export const RequestSyncRequest$inboundSchema: z.ZodType<
    RequestSyncRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        SyncToLatestArgs: shared.SyncToLatestArgs$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            SyncToLatestArgs: "syncToLatestArgs",
        });
    });

/** @internal */
export type RequestSyncRequest$Outbound = {
    companyId: string;
    SyncToLatestArgs?: shared.SyncToLatestArgs$Outbound | undefined;
};

/** @internal */
export const RequestSyncRequest$outboundSchema: z.ZodType<
    RequestSyncRequest$Outbound,
    z.ZodTypeDef,
    RequestSyncRequest
> = z
    .object({
        companyId: z.string(),
        syncToLatestArgs: shared.SyncToLatestArgs$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            syncToLatestArgs: "SyncToLatestArgs",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestSyncRequest$ {
    /** @deprecated use `RequestSyncRequest$inboundSchema` instead. */
    export const inboundSchema = RequestSyncRequest$inboundSchema;
    /** @deprecated use `RequestSyncRequest$outboundSchema` instead. */
    export const outboundSchema = RequestSyncRequest$outboundSchema;
    /** @deprecated use `RequestSyncRequest$Outbound` instead. */
    export type Outbound = RequestSyncRequest$Outbound;
}
