/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AccountConfigurationOption,
    AccountConfigurationOption$inboundSchema,
    AccountConfigurationOption$Outbound,
    AccountConfigurationOption$outboundSchema,
} from "./accountconfigurationoption.js";
import * as z from "zod";

/**
 * G/L account object for configuration.
 */
export type AccountConfiguration = {
    /**
     * Label text for sales configuration section.
     */
    labelText?: string | null | undefined;
    /**
     * Descriptive text for sales configuration section.
     */
    descriptionText?: string | null | undefined;
    /**
     * Selected account id from the list of available accounts.
     */
    selectedAccountId?: string | null | undefined;
    /**
     * Required section to be configured for sync.
     */
    required?: boolean | undefined;
    /**
     * Object containing account options.
     */
    accountOptions?: Array<AccountConfigurationOption> | null | undefined;
};

/** @internal */
export const AccountConfiguration$inboundSchema: z.ZodType<
    AccountConfiguration,
    z.ZodTypeDef,
    unknown
> = z.object({
    labelText: z.nullable(z.string()).optional(),
    descriptionText: z.nullable(z.string()).optional(),
    selectedAccountId: z.nullable(z.string()).optional(),
    required: z.boolean().optional(),
    accountOptions: z.nullable(z.array(AccountConfigurationOption$inboundSchema)).optional(),
});

/** @internal */
export type AccountConfiguration$Outbound = {
    labelText?: string | null | undefined;
    descriptionText?: string | null | undefined;
    selectedAccountId?: string | null | undefined;
    required?: boolean | undefined;
    accountOptions?: Array<AccountConfigurationOption$Outbound> | null | undefined;
};

/** @internal */
export const AccountConfiguration$outboundSchema: z.ZodType<
    AccountConfiguration$Outbound,
    z.ZodTypeDef,
    AccountConfiguration
> = z.object({
    labelText: z.nullable(z.string()).optional(),
    descriptionText: z.nullable(z.string()).optional(),
    selectedAccountId: z.nullable(z.string()).optional(),
    required: z.boolean().optional(),
    accountOptions: z.nullable(z.array(AccountConfigurationOption$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountConfiguration$ {
    /** @deprecated use `AccountConfiguration$inboundSchema` instead. */
    export const inboundSchema = AccountConfiguration$inboundSchema;
    /** @deprecated use `AccountConfiguration$outboundSchema` instead. */
    export const outboundSchema = AccountConfiguration$outboundSchema;
    /** @deprecated use `AccountConfiguration$Outbound` instead. */
    export type Outbound = AccountConfiguration$Outbound;
}