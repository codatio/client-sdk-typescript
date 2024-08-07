/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateTransferTransactionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * The unique identifier for your SMB's transaction.
     */
    transactionId: string;
    transferTransactionRequest?: shared.TransferTransactionRequest | undefined;
};

/** @internal */
export const CreateTransferTransactionRequest$inboundSchema: z.ZodType<
    CreateTransferTransactionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        companyId: z.string(),
        transactionId: z.string(),
        TransferTransactionRequest: shared.TransferTransactionRequest$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            TransferTransactionRequest: "transferTransactionRequest",
        });
    });

/** @internal */
export type CreateTransferTransactionRequest$Outbound = {
    companyId: string;
    transactionId: string;
    TransferTransactionRequest?: shared.TransferTransactionRequest$Outbound | undefined;
};

/** @internal */
export const CreateTransferTransactionRequest$outboundSchema: z.ZodType<
    CreateTransferTransactionRequest$Outbound,
    z.ZodTypeDef,
    CreateTransferTransactionRequest
> = z
    .object({
        companyId: z.string(),
        transactionId: z.string(),
        transferTransactionRequest: shared.TransferTransactionRequest$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            transferTransactionRequest: "TransferTransactionRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransferTransactionRequest$ {
    /** @deprecated use `CreateTransferTransactionRequest$inboundSchema` instead. */
    export const inboundSchema = CreateTransferTransactionRequest$inboundSchema;
    /** @deprecated use `CreateTransferTransactionRequest$outboundSchema` instead. */
    export const outboundSchema = CreateTransferTransactionRequest$outboundSchema;
    /** @deprecated use `CreateTransferTransactionRequest$Outbound` instead. */
    export type Outbound = CreateTransferTransactionRequest$Outbound;
}
