/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * The result from POSTing a Bank Account mapping.
 */
export type BankFeedAccountMappingResponse = {
    /**
     * Unique ID for the source account.
     */
    sourceAccountId?: string | undefined;
    /**
     * Unique ID for the target account.
     */
    targetAccountId?: string | null | undefined;
    /**
     * Status of the POST request.
     */
    status?: string | null | undefined;
    /**
     * Error returned during the post request
     */
    error?: string | null | undefined;
};

/** @internal */
export const BankFeedAccountMappingResponse$inboundSchema: z.ZodType<
    BankFeedAccountMappingResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        sourceAccountId: z.string().optional(),
        targetAccountId: z.nullable(z.string()).optional(),
        Status: z.nullable(z.string()).optional(),
        Error: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            Status: "status",
            Error: "error",
        });
    });

/** @internal */
export type BankFeedAccountMappingResponse$Outbound = {
    sourceAccountId?: string | undefined;
    targetAccountId?: string | null | undefined;
    Status?: string | null | undefined;
    Error?: string | null | undefined;
};

/** @internal */
export const BankFeedAccountMappingResponse$outboundSchema: z.ZodType<
    BankFeedAccountMappingResponse$Outbound,
    z.ZodTypeDef,
    BankFeedAccountMappingResponse
> = z
    .object({
        sourceAccountId: z.string().optional(),
        targetAccountId: z.nullable(z.string()).optional(),
        status: z.nullable(z.string()).optional(),
        error: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            status: "Status",
            error: "Error",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankFeedAccountMappingResponse$ {
    /** @deprecated use `BankFeedAccountMappingResponse$inboundSchema` instead. */
    export const inboundSchema = BankFeedAccountMappingResponse$inboundSchema;
    /** @deprecated use `BankFeedAccountMappingResponse$outboundSchema` instead. */
    export const outboundSchema = BankFeedAccountMappingResponse$outboundSchema;
    /** @deprecated use `BankFeedAccountMappingResponse$Outbound` instead. */
    export type Outbound = BankFeedAccountMappingResponse$Outbound;
}
