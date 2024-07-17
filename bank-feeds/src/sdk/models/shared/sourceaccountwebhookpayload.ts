/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    SourceAccount,
    SourceAccount$inboundSchema,
    SourceAccount$Outbound,
    SourceAccount$outboundSchema,
} from "./sourceaccount.js";
import * as z from "zod";

export type SourceAccountWebhookPayload = {
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId?: string | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    connectionId?: string | undefined;
    /**
     * The target bank account in a supported accounting package for ingestion into a bank feed.
     */
    sourceAccount?: SourceAccount | undefined;
};

/** @internal */
export const SourceAccountWebhookPayload$inboundSchema: z.ZodType<
    SourceAccountWebhookPayload,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyId: z.string().optional(),
    connectionId: z.string().optional(),
    sourceAccount: SourceAccount$inboundSchema.optional(),
});

/** @internal */
export type SourceAccountWebhookPayload$Outbound = {
    companyId?: string | undefined;
    connectionId?: string | undefined;
    sourceAccount?: SourceAccount$Outbound | undefined;
};

/** @internal */
export const SourceAccountWebhookPayload$outboundSchema: z.ZodType<
    SourceAccountWebhookPayload$Outbound,
    z.ZodTypeDef,
    SourceAccountWebhookPayload
> = z.object({
    companyId: z.string().optional(),
    connectionId: z.string().optional(),
    sourceAccount: SourceAccount$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceAccountWebhookPayload$ {
    /** @deprecated use `SourceAccountWebhookPayload$inboundSchema` instead. */
    export const inboundSchema = SourceAccountWebhookPayload$inboundSchema;
    /** @deprecated use `SourceAccountWebhookPayload$outboundSchema` instead. */
    export const outboundSchema = SourceAccountWebhookPayload$outboundSchema;
    /** @deprecated use `SourceAccountWebhookPayload$Outbound` instead. */
    export type Outbound = SourceAccountWebhookPayload$Outbound;
}