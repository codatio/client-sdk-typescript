/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { RecordRef } from "./recordref";
import { SupplementalData } from "./supplementaldata";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { TransferAccount } from "./transferaccount";
import { Expose, Type } from "class-transformer";

/**
 * The customer or supplier for the transfer, if available.
 */
export class AccountingTransferContactRef extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

/**
 * > View the coverage for transfers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * A transfer records the movement of money between two bank accounts, or between a bank account and a nominal account. It is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 */
export class AccountingTransfer extends SpeakeasyBase {
    /**
     * The customer or supplier for the transfer, if available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contactRef" })
    @Type(() => AccountingTransferContactRef)
    contactRef?: AccountingTransferContactRef;

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
    @Expose({ name: "date" })
    date?: string;

    /**
     * List of selected transactions to associate with the transfer. Use this field to include transactions which are posted to the _undeposited funds_ (or other holding) account within the transfer.
     */
    @SpeakeasyMetadata({ elemType: RecordRef })
    @Expose({ name: "depositedRecordRefs" })
    @Type(() => RecordRef)
    depositedRecordRefs?: RecordRef[];

    /**
     * Description of the transfer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    @Type(() => TransferAccount)
    from?: TransferAccount;

    /**
     * Unique identifier for the transfer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/additional-data) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;

    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    @Type(() => TransferAccount)
    to?: TransferAccount;

    /**
     * Reference to the tracking categories this transfer is being tracked against.
     */
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "trackingCategoryRefs" })
    @Type(() => TrackingCategoryRef)
    trackingCategoryRefs?: TrackingCategoryRef[];
}
