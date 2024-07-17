/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type RequestSyncForDateRangeRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    syncRange?: shared.SyncRange | undefined;
};

/** @internal */
export const RequestSyncForDateRangeRequest$inboundSchema: z.ZodType<
    RequestSyncForDateRangeRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        SyncRange: shared.SyncRange$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            SyncRange: "syncRange",
        });
    });

/** @internal */
export type RequestSyncForDateRangeRequest$Outbound = {
    companyId: string;
    SyncRange?: shared.SyncRange$Outbound | undefined;
};

/** @internal */
export const RequestSyncForDateRangeRequest$outboundSchema: z.ZodType<
    RequestSyncForDateRangeRequest$Outbound,
    z.ZodTypeDef,
    RequestSyncForDateRangeRequest
> = z
    .object({
        companyId: z.string(),
        syncRange: shared.SyncRange$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            syncRange: "SyncRange",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestSyncForDateRangeRequest$ {
    /** @deprecated use `RequestSyncForDateRangeRequest$inboundSchema` instead. */
    export const inboundSchema = RequestSyncForDateRangeRequest$inboundSchema;
    /** @deprecated use `RequestSyncForDateRangeRequest$outboundSchema` instead. */
    export const outboundSchema = RequestSyncForDateRangeRequest$outboundSchema;
    /** @deprecated use `RequestSyncForDateRangeRequest$Outbound` instead. */
    export type Outbound = RequestSyncForDateRangeRequest$Outbound;
}
