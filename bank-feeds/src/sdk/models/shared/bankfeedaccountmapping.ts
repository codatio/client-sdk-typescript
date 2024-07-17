/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BankFeedAccountMapping = {
    /**
     * Unique ID for the source account
     */
    sourceAccountId: string;
    /**
     * Unique ID for the target account
     */
    targetAccountId?: string | null | undefined;
};

/** @internal */
export const BankFeedAccountMapping$inboundSchema: z.ZodType<
    BankFeedAccountMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    sourceAccountId: z.string(),
    targetAccountId: z.nullable(z.string()).optional(),
});

/** @internal */
export type BankFeedAccountMapping$Outbound = {
    sourceAccountId: string;
    targetAccountId?: string | null | undefined;
};

/** @internal */
export const BankFeedAccountMapping$outboundSchema: z.ZodType<
    BankFeedAccountMapping$Outbound,
    z.ZodTypeDef,
    BankFeedAccountMapping
> = z.object({
    sourceAccountId: z.string(),
    targetAccountId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankFeedAccountMapping$ {
    /** @deprecated use `BankFeedAccountMapping$inboundSchema` instead. */
    export const inboundSchema = BankFeedAccountMapping$inboundSchema;
    /** @deprecated use `BankFeedAccountMapping$outboundSchema` instead. */
    export const outboundSchema = BankFeedAccountMapping$outboundSchema;
    /** @deprecated use `BankFeedAccountMapping$Outbound` instead. */
    export type Outbound = BankFeedAccountMapping$Outbound;
}
