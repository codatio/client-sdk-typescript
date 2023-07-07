/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TargetAccountOption } from "./targetaccountoption";
import { Expose, Type } from "class-transformer";

/**
 * A bank feed connection between a source account and a target account, including potential target accounts.
 */
export class BankFeedMappingsBankFeedMapping extends SpeakeasyBase {
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
    @Expose({ name: "feedStartDate" })
    feedStartDate?: string;

    /**
     * Unique ID for the source account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceAccountId" })
    sourceAccountId?: string;

    /**
     * Name for the source account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceAccountName" })
    sourceAccountName?: string;

    /**
     * Account number for the source account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceAccountNumber" })
    sourceAccountNumber?: string;

    /**
     * Balance for the source account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceBalance" })
    sourceBalance?: string;

    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceCurrency" })
    sourceCurrency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * Unique ID for the target account in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "targetAccountId" })
    targetAccountId?: string;

    /**
     * Name for the target account in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "targetAccountName" })
    targetAccountName?: string;

    /**
     * An array of potential target accounts.
     */
    @SpeakeasyMetadata({ elemType: TargetAccountOption })
    @Expose({ name: "targetAccountOptions" })
    @Type(() => TargetAccountOption)
    targetAccountOptions?: TargetAccountOption[];
}

/**
 * Success
 */
export class BankFeedMappings extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BankFeedMappingsBankFeedMapping })
    @Expose({ name: "results" })
    @Type(() => BankFeedMappingsBankFeedMapping)
    results?: BankFeedMappingsBankFeedMapping[];
}
