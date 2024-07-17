/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    IntegrationType,
    IntegrationType$inboundSchema,
    IntegrationType$outboundSchema,
} from "./integrationtype.js";
import {
    TransactionStatus,
    TransactionStatus$inboundSchema,
    TransactionStatus$outboundSchema,
} from "./transactionstatus.js";
import * as z from "zod";

export type Transaction = {
    /**
     * Your unique idenfier of the transaction.
     */
    transactionId?: string | null | undefined;
    /**
     * Status of the transaction.
     */
    status?: TransactionStatus | null | undefined;
    /**
     * Metadata such as validation errors or the resulting record created in the accounting software.
     */
    message?: string | null | undefined;
    /**
     * Type of transaction that has been processed e.g. Expense or Bank Feed.
     */
    integrationType?: IntegrationType | null | undefined;
};

/** @internal */
export const Transaction$inboundSchema: z.ZodType<Transaction, z.ZodTypeDef, unknown> = z.object({
    transactionId: z.nullable(z.string()).optional(),
    status: z.nullable(TransactionStatus$inboundSchema).optional(),
    message: z.nullable(z.string()).optional(),
    integrationType: z.nullable(IntegrationType$inboundSchema.default("expenses")),
});

/** @internal */
export type Transaction$Outbound = {
    transactionId?: string | null | undefined;
    status?: string | null | undefined;
    message?: string | null | undefined;
    integrationType: string | null;
};

/** @internal */
export const Transaction$outboundSchema: z.ZodType<
    Transaction$Outbound,
    z.ZodTypeDef,
    Transaction
> = z.object({
    transactionId: z.nullable(z.string()).optional(),
    status: z.nullable(TransactionStatus$outboundSchema).optional(),
    message: z.nullable(z.string()).optional(),
    integrationType: z.nullable(IntegrationType$outboundSchema.default("expenses")),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transaction$ {
    /** @deprecated use `Transaction$inboundSchema` instead. */
    export const inboundSchema = Transaction$inboundSchema;
    /** @deprecated use `Transaction$outboundSchema` instead. */
    export const outboundSchema = Transaction$outboundSchema;
    /** @deprecated use `Transaction$Outbound` instead. */
    export type Outbound = Transaction$Outbound;
}
