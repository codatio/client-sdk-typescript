/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Name of underlying data type.
 */
export const JournalEntryRecordRefDataType = {
    BankTransactions: "bankTransactions",
    BillCreditNotes: "billCreditNotes",
    BillPayments: "billPayments",
    Bills: "bills",
    CreditNotes: "creditNotes",
    DirectCosts: "directCosts",
    DirectIncomes: "directIncomes",
    Invoices: "invoices",
    JournalEntries: "journalEntries",
    Payments: "payments",
    Transfers: "transfers",
} as const;
/**
 * Name of underlying data type.
 */
export type JournalEntryRecordRefDataType = ClosedEnum<typeof JournalEntryRecordRefDataType>;

/**
 * Links a journal entry to the underlying record that created it.
 */
export type JournalEntryRecordRef = {
    /**
     * 'id' of the underlying record or data type.
     */
    id?: string | undefined;
    /**
     * Name of underlying data type.
     */
    dataType?: JournalEntryRecordRefDataType | undefined;
};

/** @internal */
export const JournalEntryRecordRefDataType$inboundSchema: z.ZodNativeEnum<
    typeof JournalEntryRecordRefDataType
> = z.nativeEnum(JournalEntryRecordRefDataType);

/** @internal */
export const JournalEntryRecordRefDataType$outboundSchema: z.ZodNativeEnum<
    typeof JournalEntryRecordRefDataType
> = JournalEntryRecordRefDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalEntryRecordRefDataType$ {
    /** @deprecated use `JournalEntryRecordRefDataType$inboundSchema` instead. */
    export const inboundSchema = JournalEntryRecordRefDataType$inboundSchema;
    /** @deprecated use `JournalEntryRecordRefDataType$outboundSchema` instead. */
    export const outboundSchema = JournalEntryRecordRefDataType$outboundSchema;
}

/** @internal */
export const JournalEntryRecordRef$inboundSchema: z.ZodType<
    JournalEntryRecordRef,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string().optional(),
    dataType: JournalEntryRecordRefDataType$inboundSchema.optional(),
});

/** @internal */
export type JournalEntryRecordRef$Outbound = {
    id?: string | undefined;
    dataType?: string | undefined;
};

/** @internal */
export const JournalEntryRecordRef$outboundSchema: z.ZodType<
    JournalEntryRecordRef$Outbound,
    z.ZodTypeDef,
    JournalEntryRecordRef
> = z.object({
    id: z.string().optional(),
    dataType: JournalEntryRecordRefDataType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalEntryRecordRef$ {
    /** @deprecated use `JournalEntryRecordRef$inboundSchema` instead. */
    export const inboundSchema = JournalEntryRecordRef$inboundSchema;
    /** @deprecated use `JournalEntryRecordRef$outboundSchema` instead. */
    export const outboundSchema = JournalEntryRecordRef$outboundSchema;
    /** @deprecated use `JournalEntryRecordRef$Outbound` instead. */
    export type Outbound = JournalEntryRecordRef$Outbound;
}
