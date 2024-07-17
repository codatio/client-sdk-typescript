/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    JournalStatus,
    JournalStatus$inboundSchema,
    JournalStatus$outboundSchema,
} from "./journalstatus.js";
import {
    Metadata,
    Metadata$inboundSchema,
    Metadata$Outbound,
    Metadata$outboundSchema,
} from "./metadata.js";
import * as z from "zod";

/**
 * > **Language tip:** For line items, or individual transactions, of a company's financial documents, refer to the [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) data type
 *
 * @remarks
 *
 * > View the coverage for journals in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In accounting software, journals are used to record all the financial transactions of a company. Each transaction in a journal is represented by a separate [journal entry](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry). These entries are used to create the general ledger, which is then used to create the financial statements of a business.
 *
 * When a company records all their transactions in a single journal, it can become large and difficult to maintain and track. This is why large companies often use multiple journals (also known as subjournals) to categorize and manage journal entries.
 *
 * Such journals can be divided into two categories:
 *
 * - Special journals: journals used to record specific types of transactions; for example, a purchases journal, a sales journal, or a cash management journal.
 * - General journals: journals used to record transactions that fall outside the scope of the special journals.
 *
 * Multiple journals or subjournals are used in the following Codat integrations:
 *
 * - [Sage Intacct](https://docs.codat.io/integrations/accounting/sage-intacct/accounting-sage-intacct)  (mandatory)
 * - [Exact Online](https://docs.codat.io/integrations/accounting/exact-online/accounting-exact-online)  (mandatory)
 * - [Oracle NetSuite](https://docs.codat.io/integrations/accounting/netsuite/accounting-netsuite) (optional)
 *
 * > When pushing journal entries to an accounting platform that doesn’t support multiple journals (multi-book accounting), the entries will be linked to the platform-generic journal. The Journals data type will only include one object.
 *
 */
export type Journal = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Journal ID.
     */
    id?: string | undefined;
    /**
     * Native journal number or code.
     */
    journalCode?: string | null | undefined;
    /**
     * Journal name.
     *
     * @remarks
     * The maximum length for a journal name is 256 characters. All characters above that number will be truncated.
     */
    name?: string | null | undefined;
    /**
     * The type of the journal.
     */
    type?: string | null | undefined;
    /**
     * Parent journal ID.
     *
     * @remarks
     * If the journal is a parent journal, this value is not present.
     */
    parentId?: string | null | undefined;
    /**
     * If the journal has child journals, this value is true. If it doesn’t, it is false.
     */
    hasChildren?: boolean | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    createdOn?: string | undefined;
    /**
     * Current journal status.
     */
    status?: JournalStatus | undefined;
    metadata?: Metadata | undefined;
};

/** @internal */
export const Journal$inboundSchema: z.ZodType<Journal, z.ZodTypeDef, unknown> = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    journalCode: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    type: z.nullable(z.string()).optional(),
    parentId: z.nullable(z.string()).optional(),
    hasChildren: z.boolean().optional(),
    createdOn: z.string().optional(),
    status: JournalStatus$inboundSchema.optional(),
    metadata: Metadata$inboundSchema.optional(),
});

/** @internal */
export type Journal$Outbound = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    id?: string | undefined;
    journalCode?: string | null | undefined;
    name?: string | null | undefined;
    type?: string | null | undefined;
    parentId?: string | null | undefined;
    hasChildren?: boolean | undefined;
    createdOn?: string | undefined;
    status?: string | undefined;
    metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const Journal$outboundSchema: z.ZodType<Journal$Outbound, z.ZodTypeDef, Journal> = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    journalCode: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    type: z.nullable(z.string()).optional(),
    parentId: z.nullable(z.string()).optional(),
    hasChildren: z.boolean().optional(),
    createdOn: z.string().optional(),
    status: JournalStatus$outboundSchema.optional(),
    metadata: Metadata$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Journal$ {
    /** @deprecated use `Journal$inboundSchema` instead. */
    export const inboundSchema = Journal$inboundSchema;
    /** @deprecated use `Journal$outboundSchema` instead. */
    export const outboundSchema = Journal$outboundSchema;
    /** @deprecated use `Journal$Outbound` instead. */
    export type Outbound = Journal$Outbound;
}
