/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The type of contact.
 */
export const ExpenseContactRefType = {
    Supplier: "Supplier",
} as const;
/**
 * The type of contact.
 */
export type ExpenseContactRefType = ClosedEnum<typeof ExpenseContactRefType>;

export type ExpenseContactRef = {
    /**
     * Identifier of supplier or customer.
     */
    id: string;
    /**
     * The type of contact.
     */
    type?: ExpenseContactRefType | undefined;
};

/** @internal */
export const ExpenseContactRefType$inboundSchema: z.ZodNativeEnum<typeof ExpenseContactRefType> =
    z.nativeEnum(ExpenseContactRefType);

/** @internal */
export const ExpenseContactRefType$outboundSchema: z.ZodNativeEnum<typeof ExpenseContactRefType> =
    ExpenseContactRefType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExpenseContactRefType$ {
    /** @deprecated use `ExpenseContactRefType$inboundSchema` instead. */
    export const inboundSchema = ExpenseContactRefType$inboundSchema;
    /** @deprecated use `ExpenseContactRefType$outboundSchema` instead. */
    export const outboundSchema = ExpenseContactRefType$outboundSchema;
}

/** @internal */
export const ExpenseContactRef$inboundSchema: z.ZodType<ExpenseContactRef, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        type: ExpenseContactRefType$inboundSchema.default("Supplier"),
    });

/** @internal */
export type ExpenseContactRef$Outbound = {
    id: string;
    type: string;
};

/** @internal */
export const ExpenseContactRef$outboundSchema: z.ZodType<
    ExpenseContactRef$Outbound,
    z.ZodTypeDef,
    ExpenseContactRef
> = z.object({
    id: z.string(),
    type: ExpenseContactRefType$outboundSchema.default("Supplier"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExpenseContactRef$ {
    /** @deprecated use `ExpenseContactRef$inboundSchema` instead. */
    export const inboundSchema = ExpenseContactRef$inboundSchema;
    /** @deprecated use `ExpenseContactRef$outboundSchema` instead. */
    export const outboundSchema = ExpenseContactRef$outboundSchema;
    /** @deprecated use `ExpenseContactRef$Outbound` instead. */
    export type Outbound = ExpenseContactRef$Outbound;
}
