/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Information about the company from the underlying accounting platform.
 */
export type CompanyInformation = {
    /**
     * Name of the linked company.
     */
    companyName?: string | undefined;
    /**
     * Currency set in the accounting platform of the linked company.
     */
    baseCurrency?: string | undefined;
    /**
     * Accounting platform subscription type such as Trial, Demo, Standard
     */
    planType?: string | null | undefined;
    /**
     * Boolean showing if the organisation has multicurrency enabled
     */
    multicurrencyEnabled?: boolean | null | undefined;
};

/** @internal */
export const CompanyInformation$inboundSchema: z.ZodType<
    CompanyInformation,
    z.ZodTypeDef,
    unknown
> = z.object({
    companyName: z.string().optional(),
    baseCurrency: z.string().optional(),
    planType: z.nullable(z.string()).optional(),
    multicurrencyEnabled: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type CompanyInformation$Outbound = {
    companyName?: string | undefined;
    baseCurrency?: string | undefined;
    planType?: string | null | undefined;
    multicurrencyEnabled?: boolean | null | undefined;
};

/** @internal */
export const CompanyInformation$outboundSchema: z.ZodType<
    CompanyInformation$Outbound,
    z.ZodTypeDef,
    CompanyInformation
> = z.object({
    companyName: z.string().optional(),
    baseCurrency: z.string().optional(),
    planType: z.nullable(z.string()).optional(),
    multicurrencyEnabled: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyInformation$ {
    /** @deprecated use `CompanyInformation$inboundSchema` instead. */
    export const inboundSchema = CompanyInformation$inboundSchema;
    /** @deprecated use `CompanyInformation$outboundSchema` instead. */
    export const outboundSchema = CompanyInformation$outboundSchema;
    /** @deprecated use `CompanyInformation$Outbound` instead. */
    export type Outbound = CompanyInformation$Outbound;
}