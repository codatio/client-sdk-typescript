/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JournalStatus } from "./journalstatus";
import { Metadata } from "./metadata";
import { Expose, Type } from "class-transformer";

/**
 * > **Language tip:** For line items, or individual transactions, of a company's financial documents, refer to the [Journal entries](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry) data type
 *
 * @remarks
 *
 * > View the coverage for journals in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In accounting software, journals are used to record all the financial transactions of a company. Each transaction in a journal is represented by a separate [journal entry](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry). These entries are used to create the general ledger, which is then used to create the financial statements of a business.
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
export class Journal extends SpeakeasyBase {
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
    @SpeakeasyMetadata()
    @Expose({ name: "createdOn" })
    createdOn?: string;

    /**
     * If the journal has child journals, this value is true. If it doesn’t, it is false.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hasChildren" })
    hasChildren?: boolean;

    /**
     * Journal ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Native journal number or code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "journalCode" })
    journalCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Journal name.
     *
     * @remarks
     * The maximum length for a journal name is 256 characters. All characters above that number will be truncated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Parent journal ID.
     *
     * @remarks
     * If the journal is a parent journal, this value is not present.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentId" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Current journal status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: JournalStatus;

    /**
     * The type of the journal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}
