/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type InvoiceStatus = {
    /**
     * Selected option for invoice status for invoice to be synced.
     */
    selectedInvoiceStatus?: string | null | undefined;
    /**
     * Options for invoice statuses.
     */
    invoiceStatusOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceStatus$inboundSchema: z.ZodType<InvoiceStatus, z.ZodTypeDef, unknown> =
    z.object({
        selectedInvoiceStatus: z.nullable(z.string()).optional(),
        invoiceStatusOptions: z.nullable(z.array(z.string())).optional(),
    });

/** @internal */
export type InvoiceStatus$Outbound = {
    selectedInvoiceStatus?: string | null | undefined;
    invoiceStatusOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceStatus$outboundSchema: z.ZodType<
    InvoiceStatus$Outbound,
    z.ZodTypeDef,
    InvoiceStatus
> = z.object({
    selectedInvoiceStatus: z.nullable(z.string()).optional(),
    invoiceStatusOptions: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceStatus$ {
    /** @deprecated use `InvoiceStatus$inboundSchema` instead. */
    export const inboundSchema = InvoiceStatus$inboundSchema;
    /** @deprecated use `InvoiceStatus$outboundSchema` instead. */
    export const outboundSchema = InvoiceStatus$outboundSchema;
    /** @deprecated use `InvoiceStatus$Outbound` instead. */
    export type Outbound = InvoiceStatus$Outbound;
}
