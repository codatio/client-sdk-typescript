/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DataType, DataType$ } from "./datatype";
import { JournalStatus, JournalStatus$ } from "./journalstatus";
import { Metadata, Metadata$ } from "./metadata";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { Validation, Validation$ } from "./validation";
import { z } from "zod";

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
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingJournal = {
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
     * If the journal has child journals, this value is true. If it doesn’t, it is false.
     */
    hasChildren?: boolean | undefined;
    /**
     * Journal ID.
     */
    id?: string | undefined;
    /**
     * Native journal number or code.
     */
    journalCode?: string | null | undefined;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Journal name.
     *
     * @remarks
     * The maximum length for a journal name is 256 characters. All characters above that number will be truncated.
     */
    name?: string | null | undefined;
    /**
     * Parent journal ID.
     *
     * @remarks
     * If the journal is a parent journal, this value is not present.
     */
    parentId?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Current journal status.
     */
    status?: JournalStatus | undefined;
    /**
     * The type of the journal.
     */
    type?: string | null | undefined;
};

export type CreateJournalResponse = {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    changes?: Array<PushOperationChange> | null | undefined;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId: string;
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
    completedOnUtc?: string | undefined;
    data?: AccountingJournal | null | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionKey: string;
    /**
     * Available Data types
     */
    dataType?: DataType | undefined;
    /**
     * A message about the error.
     */
    errorMessage?: string | null | undefined;
    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    pushOperationKey: string;
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
    requestedOnUtc: string;
    /**
     * The current status of the push operation.
     */
    status: PushOperationStatus;
    /**
     * Push status code.
     */
    statusCode: number;
    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    timeoutInMinutes?: number | null | undefined;
    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    timeoutInSeconds?: number | null | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    validation?: Validation | undefined;
};

/** @internal */
export namespace AccountingJournal$ {
    export type Inbound = {
        createdOn?: string | undefined;
        hasChildren?: boolean | undefined;
        id?: string | undefined;
        journalCode?: string | null | undefined;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        parentId?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status?: JournalStatus | undefined;
        type?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingJournal, z.ZodTypeDef, Inbound> = z
        .object({
            createdOn: z.string().optional(),
            hasChildren: z.boolean().optional(),
            id: z.string().optional(),
            journalCode: z.nullable(z.string()).optional(),
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            parentId: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: JournalStatus$.optional(),
            type: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdOn === undefined ? null : { createdOn: v.createdOn }),
                ...(v.hasChildren === undefined ? null : { hasChildren: v.hasChildren }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.journalCode === undefined ? null : { journalCode: v.journalCode }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        createdOn?: string | undefined;
        hasChildren?: boolean | undefined;
        id?: string | undefined;
        journalCode?: string | null | undefined;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        parentId?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status?: JournalStatus | undefined;
        type?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingJournal> = z
        .object({
            createdOn: z.string().optional(),
            hasChildren: z.boolean().optional(),
            id: z.string().optional(),
            journalCode: z.nullable(z.string()).optional(),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            parentId: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: JournalStatus$.optional(),
            type: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdOn === undefined ? null : { createdOn: v.createdOn }),
                ...(v.hasChildren === undefined ? null : { hasChildren: v.hasChildren }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.journalCode === undefined ? null : { journalCode: v.journalCode }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace CreateJournalResponse$ {
    export type Inbound = {
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingJournal$.Inbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateJournalResponse, z.ZodTypeDef, Inbound> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingJournal$.inboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        changes?: Array<PushOperationChange$.Outbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingJournal$.Outbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJournalResponse> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingJournal$.outboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
