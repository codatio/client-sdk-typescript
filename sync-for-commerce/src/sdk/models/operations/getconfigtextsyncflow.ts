/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetConfigTextSyncFlowRequest = {
    /**
     * Localization identifier for English (US) or French.
     */
    locale: shared.Locale;
};

/** @internal */
export const GetConfigTextSyncFlowRequest$inboundSchema: z.ZodType<
    GetConfigTextSyncFlowRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    locale: shared.Locale$inboundSchema,
});

/** @internal */
export type GetConfigTextSyncFlowRequest$Outbound = {
    locale: string;
};

/** @internal */
export const GetConfigTextSyncFlowRequest$outboundSchema: z.ZodType<
    GetConfigTextSyncFlowRequest$Outbound,
    z.ZodTypeDef,
    GetConfigTextSyncFlowRequest
> = z.object({
    locale: shared.Locale$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigTextSyncFlowRequest$ {
    /** @deprecated use `GetConfigTextSyncFlowRequest$inboundSchema` instead. */
    export const inboundSchema = GetConfigTextSyncFlowRequest$inboundSchema;
    /** @deprecated use `GetConfigTextSyncFlowRequest$outboundSchema` instead. */
    export const outboundSchema = GetConfigTextSyncFlowRequest$outboundSchema;
    /** @deprecated use `GetConfigTextSyncFlowRequest$Outbound` instead. */
    export type Outbound = GetConfigTextSyncFlowRequest$Outbound;
}
