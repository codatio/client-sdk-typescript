/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types/decimal.js";
import * as z from "zod";

export type TargetAccountOption = {
    /**
     * Id of the target account.
     */
    id?: string | undefined;
    /**
     * Name of the target account.
     */
    name?: string | null | undefined;
    /**
     * The balance of the account.
     */
    balance?: Decimal$ | number | null | undefined;
    /**
     * The sort code of the account.
     */
    sortCode?: string | null | undefined;
    /**
     * The account number of the account.
     */
    accountNumber?: string | null | undefined;
};

/** @internal */
export const TargetAccountOption$inboundSchema: z.ZodType<
    TargetAccountOption,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string().optional(),
    name: z.nullable(z.string()).optional(),
    balance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
    sortCode: z.nullable(z.string()).optional(),
    accountNumber: z.nullable(z.string()).optional(),
});

/** @internal */
export type TargetAccountOption$Outbound = {
    id?: string | undefined;
    name?: string | null | undefined;
    balance?: number | null | undefined;
    sortCode?: string | null | undefined;
    accountNumber?: string | null | undefined;
};

/** @internal */
export const TargetAccountOption$outboundSchema: z.ZodType<
    TargetAccountOption$Outbound,
    z.ZodTypeDef,
    TargetAccountOption
> = z.object({
    id: z.string().optional(),
    name: z.nullable(z.string()).optional(),
    balance: z
        .nullable(
            z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
        )
        .optional(),
    sortCode: z.nullable(z.string()).optional(),
    accountNumber: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TargetAccountOption$ {
    /** @deprecated use `TargetAccountOption$inboundSchema` instead. */
    export const inboundSchema = TargetAccountOption$inboundSchema;
    /** @deprecated use `TargetAccountOption$outboundSchema` instead. */
    export const outboundSchema = TargetAccountOption$outboundSchema;
    /** @deprecated use `TargetAccountOption$Outbound` instead. */
    export type Outbound = TargetAccountOption$Outbound;
}
