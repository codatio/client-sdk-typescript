/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
    InvoiceTo,
    InvoiceTo$inboundSchema,
    InvoiceTo$Outbound,
    InvoiceTo$outboundSchema,
} from "./invoiceto.js";
import {
    RecordRef,
    RecordRef$inboundSchema,
    RecordRef$Outbound,
    RecordRef$outboundSchema,
} from "./recordref.js";
import {
    TrackingRef,
    TrackingRef$inboundSchema,
    TrackingRef$Outbound,
    TrackingRef$outboundSchema,
} from "./trackingref.js";
import * as z from "zod";

export type ReimbursableExpenseTransactionLine = {
    /**
     * line description
     */
    description?: string | undefined;
    /**
     * Amount of the line, exclusive of tax.
     */
    netAmount: Decimal$ | number;
    /**
     * Amount of tax for the line.
     */
    taxAmount?: Decimal$ | number | undefined;
    taxRateRef?: RecordRef | undefined;
    accountRef: RecordRef;
    trackingRefs?: Array<TrackingRef> | null | undefined;
    /**
     * Unique identifier of the customer the expense is billable to. The invoiceTo object is currently only supported for QBO and QBD.
     */
    invoiceTo?: InvoiceTo | null | undefined;
};

/** @internal */
export const ReimbursableExpenseTransactionLine$inboundSchema: z.ZodType<
    ReimbursableExpenseTransactionLine,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string().optional(),
    netAmount: z.number().transform((v) => new Decimal$(v)),
    taxAmount: z
        .number()
        .transform((v) => new Decimal$(v))
        .optional(),
    taxRateRef: RecordRef$inboundSchema.optional(),
    accountRef: RecordRef$inboundSchema,
    trackingRefs: z.nullable(z.array(TrackingRef$inboundSchema)).optional(),
    invoiceTo: z.nullable(InvoiceTo$inboundSchema).optional(),
});

/** @internal */
export type ReimbursableExpenseTransactionLine$Outbound = {
    description?: string | undefined;
    netAmount: number;
    taxAmount?: number | undefined;
    taxRateRef?: RecordRef$Outbound | undefined;
    accountRef: RecordRef$Outbound;
    trackingRefs?: Array<TrackingRef$Outbound> | null | undefined;
    invoiceTo?: InvoiceTo$Outbound | null | undefined;
};

/** @internal */
export const ReimbursableExpenseTransactionLine$outboundSchema: z.ZodType<
    ReimbursableExpenseTransactionLine$Outbound,
    z.ZodTypeDef,
    ReimbursableExpenseTransactionLine
> = z.object({
    description: z.string().optional(),
    netAmount: z
        .union([z.instanceof(Decimal$), z.number()])
        .transform((v) => (typeof v === "number" ? v : v.toNumber())),
    taxAmount: z
        .union([z.instanceof(Decimal$), z.number()])
        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
        .optional(),
    taxRateRef: RecordRef$outboundSchema.optional(),
    accountRef: RecordRef$outboundSchema,
    trackingRefs: z.nullable(z.array(TrackingRef$outboundSchema)).optional(),
    invoiceTo: z.nullable(InvoiceTo$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReimbursableExpenseTransactionLine$ {
    /** @deprecated use `ReimbursableExpenseTransactionLine$inboundSchema` instead. */
    export const inboundSchema = ReimbursableExpenseTransactionLine$inboundSchema;
    /** @deprecated use `ReimbursableExpenseTransactionLine$outboundSchema` instead. */
    export const outboundSchema = ReimbursableExpenseTransactionLine$outboundSchema;
    /** @deprecated use `ReimbursableExpenseTransactionLine$Outbound` instead. */
    export type Outbound = ReimbursableExpenseTransactionLine$Outbound;
}
