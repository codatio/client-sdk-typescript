/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Option, Option$ } from "./option";
import { TaxRateMapping, TaxRateMapping$ } from "./taxratemapping";
import { z } from "zod";

export type NewTaxRates = {
    /**
     * Array of accounting tax rate options.
     */
    accountingTaxRateOptions?: Array<Option> | null | undefined;
    /**
     * Array of tax component options.
     */
    commerceTaxRateOptions?: Array<Option> | null | undefined;
    /**
     * Default zero tax rate selected for sync.
     */
    defaultZeroTaxRateOptions?: Array<Option> | null | undefined;
    /**
     * Default tax rate selected for sync.
     */
    selectedDefaultZeroTaxRateId?: string | null | undefined;
    /**
     * Array of tax component to rate mapppings.
     */
    taxRateMappings?: Array<TaxRateMapping> | null | undefined;
};

/** @internal */
export namespace NewTaxRates$ {
    export type Inbound = {
        accountingTaxRateOptions?: Array<Option$.Inbound> | null | undefined;
        commerceTaxRateOptions?: Array<Option$.Inbound> | null | undefined;
        defaultZeroTaxRateOptions?: Array<Option$.Inbound> | null | undefined;
        selectedDefaultZeroTaxRateId?: string | null | undefined;
        taxRateMappings?: Array<TaxRateMapping$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<NewTaxRates, z.ZodTypeDef, Inbound> = z
        .object({
            accountingTaxRateOptions: z.nullable(z.array(Option$.inboundSchema)).optional(),
            commerceTaxRateOptions: z.nullable(z.array(Option$.inboundSchema)).optional(),
            defaultZeroTaxRateOptions: z.nullable(z.array(Option$.inboundSchema)).optional(),
            selectedDefaultZeroTaxRateId: z.nullable(z.string()).optional(),
            taxRateMappings: z.nullable(z.array(TaxRateMapping$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountingTaxRateOptions === undefined
                    ? null
                    : { accountingTaxRateOptions: v.accountingTaxRateOptions }),
                ...(v.commerceTaxRateOptions === undefined
                    ? null
                    : { commerceTaxRateOptions: v.commerceTaxRateOptions }),
                ...(v.defaultZeroTaxRateOptions === undefined
                    ? null
                    : { defaultZeroTaxRateOptions: v.defaultZeroTaxRateOptions }),
                ...(v.selectedDefaultZeroTaxRateId === undefined
                    ? null
                    : { selectedDefaultZeroTaxRateId: v.selectedDefaultZeroTaxRateId }),
                ...(v.taxRateMappings === undefined
                    ? null
                    : { taxRateMappings: v.taxRateMappings }),
            };
        });

    export type Outbound = {
        accountingTaxRateOptions?: Array<Option$.Outbound> | null | undefined;
        commerceTaxRateOptions?: Array<Option$.Outbound> | null | undefined;
        defaultZeroTaxRateOptions?: Array<Option$.Outbound> | null | undefined;
        selectedDefaultZeroTaxRateId?: string | null | undefined;
        taxRateMappings?: Array<TaxRateMapping$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewTaxRates> = z
        .object({
            accountingTaxRateOptions: z.nullable(z.array(Option$.outboundSchema)).optional(),
            commerceTaxRateOptions: z.nullable(z.array(Option$.outboundSchema)).optional(),
            defaultZeroTaxRateOptions: z.nullable(z.array(Option$.outboundSchema)).optional(),
            selectedDefaultZeroTaxRateId: z.nullable(z.string()).optional(),
            taxRateMappings: z.nullable(z.array(TaxRateMapping$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountingTaxRateOptions === undefined
                    ? null
                    : { accountingTaxRateOptions: v.accountingTaxRateOptions }),
                ...(v.commerceTaxRateOptions === undefined
                    ? null
                    : { commerceTaxRateOptions: v.commerceTaxRateOptions }),
                ...(v.defaultZeroTaxRateOptions === undefined
                    ? null
                    : { defaultZeroTaxRateOptions: v.defaultZeroTaxRateOptions }),
                ...(v.selectedDefaultZeroTaxRateId === undefined
                    ? null
                    : { selectedDefaultZeroTaxRateId: v.selectedDefaultZeroTaxRateId }),
                ...(v.taxRateMappings === undefined
                    ? null
                    : { taxRateMappings: v.taxRateMappings }),
            };
        });
}
