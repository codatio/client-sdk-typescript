/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingJournalEntry } from "./accountingjournalentry";
import { DataType } from "./datatype";
import { PushOperationChange } from "./pushoperationchange";
import { PushOperationStatus } from "./pushoperationstatus";
import { Validation } from "./validation";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class AccountingCreateJournalEntryResponse extends SpeakeasyBase {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    @SpeakeasyMetadata({ elemType: PushOperationChange })
    @Expose({ name: "changes" })
    @Type(() => PushOperationChange)
    changes?: PushOperationChange[];

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
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
    @SpeakeasyMetadata()
    @Expose({ name: "completedOnUtc" })
    completedOnUtc?: string;

    /**
     * > **Language tip:** For the top-level record of a company's financial transactions, refer to the [Journals](https://docs.codat.io/accounting-api#/schemas/Journal) data type
     *
     * @remarks
     *
     * > View the coverage for journal entries in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries" target="_blank">Data coverage explorer</a>.
     *
     * ## Overview
     *
     * A journal entry report shows the entries made in a company's general ledger, or [accounts](https://docs.codat.io/accounting-api#/schemas/Account), when transactions are approved. The journal line items for each journal entry should balance.
     *
     * A journal entry line item is a single transaction line on the journal entry. For example:
     *
     * - When a journal entry is recording a receipt of cash, the credit to accounts receivable and the debit to cash are separate line items.
     * - When a company needs to recognise revenue from an annual contract on a monthly basis, on receipt of cash for month one, they make a debit to deferred income and a credit to revenue.
     *
     * In Codat a journal entry contains details of:
     *
     * - The date on which the entry was created and posted.
     * - Itemised lines, including amounts and currency.
     * - A reference to the associated accounts.
     * - A reference to the underlying record. For example, the invoice, bill, or other data type that triggered the posting of the journal entry to the general ledger.
     *
     * > **Pushing journal entries**
     * > Codat only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => AccountingJournalEntry)
    data?: AccountingJournalEntry;

    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataConnectionKey" })
    dataConnectionKey: string;

    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: DataType;

    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage?: string;

    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pushOperationKey" })
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
    @SpeakeasyMetadata()
    @Expose({ name: "requestedOnUtc" })
    requestedOnUtc: string;

    /**
     * The status of the push operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PushOperationStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode: number;

    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInMinutes" })
    timeoutInMinutes?: number;

    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInSeconds" })
    timeoutInSeconds?: number;

    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    @Type(() => Validation)
    validation?: Validation;
}
