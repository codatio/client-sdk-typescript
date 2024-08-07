/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UploadExpenseAttachmentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a sync.
     */
    syncId: string;
    /**
     * The unique identifier for your SMB's transaction.
     */
    transactionId: string;
    attachmentUpload?: shared.AttachmentUpload | undefined;
};

/** @internal */
export const UploadExpenseAttachmentRequest$inboundSchema: z.ZodType<
    UploadExpenseAttachmentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        syncId: z.string(),
        transactionId: z.string(),
        AttachmentUpload: shared.AttachmentUpload$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            AttachmentUpload: "attachmentUpload",
        });
    });

/** @internal */
export type UploadExpenseAttachmentRequest$Outbound = {
    companyId: string;
    syncId: string;
    transactionId: string;
    AttachmentUpload?: shared.AttachmentUpload$Outbound | undefined;
};

/** @internal */
export const UploadExpenseAttachmentRequest$outboundSchema: z.ZodType<
    UploadExpenseAttachmentRequest$Outbound,
    z.ZodTypeDef,
    UploadExpenseAttachmentRequest
> = z
    .object({
        companyId: z.string(),
        syncId: z.string(),
        transactionId: z.string(),
        attachmentUpload: shared.AttachmentUpload$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            attachmentUpload: "AttachmentUpload",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadExpenseAttachmentRequest$ {
    /** @deprecated use `UploadExpenseAttachmentRequest$inboundSchema` instead. */
    export const inboundSchema = UploadExpenseAttachmentRequest$inboundSchema;
    /** @deprecated use `UploadExpenseAttachmentRequest$outboundSchema` instead. */
    export const outboundSchema = UploadExpenseAttachmentRequest$outboundSchema;
    /** @deprecated use `UploadExpenseAttachmentRequest$Outbound` instead. */
    export type Outbound = UploadExpenseAttachmentRequest$Outbound;
}
