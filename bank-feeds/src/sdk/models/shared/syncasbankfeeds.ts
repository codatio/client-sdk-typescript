/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BankAccountOption,
    BankAccountOption$inboundSchema,
    BankAccountOption$Outbound,
    BankAccountOption$outboundSchema,
} from "./bankaccountoption.js";
import * as z from "zod";

export type SyncAsBankFeeds = {
    /**
     * True if bank feeds sync is enabled.
     */
    enableSync?: boolean | undefined;
    /**
     * The bank account ID being synced.
     */
    selectedBankAccountId?: string | undefined;
    bankAccountOptions?: Array<BankAccountOption> | undefined;
};

/** @internal */
export const SyncAsBankFeeds$inboundSchema: z.ZodType<SyncAsBankFeeds, z.ZodTypeDef, unknown> =
    z.object({
        enableSync: z.boolean().optional(),
        selectedBankAccountId: z.string().optional(),
        bankAccountOptions: z.array(BankAccountOption$inboundSchema).optional(),
    });

/** @internal */
export type SyncAsBankFeeds$Outbound = {
    enableSync?: boolean | undefined;
    selectedBankAccountId?: string | undefined;
    bankAccountOptions?: Array<BankAccountOption$Outbound> | undefined;
};

/** @internal */
export const SyncAsBankFeeds$outboundSchema: z.ZodType<
    SyncAsBankFeeds$Outbound,
    z.ZodTypeDef,
    SyncAsBankFeeds
> = z.object({
    enableSync: z.boolean().optional(),
    selectedBankAccountId: z.string().optional(),
    bankAccountOptions: z.array(BankAccountOption$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SyncAsBankFeeds$ {
    /** @deprecated use `SyncAsBankFeeds$inboundSchema` instead. */
    export const inboundSchema = SyncAsBankFeeds$inboundSchema;
    /** @deprecated use `SyncAsBankFeeds$outboundSchema` instead. */
    export const outboundSchema = SyncAsBankFeeds$outboundSchema;
    /** @deprecated use `SyncAsBankFeeds$Outbound` instead. */
    export type Outbound = SyncAsBankFeeds$Outbound;
}
