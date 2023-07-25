/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EnhancedReportAccountCategory } from "./enhancedreportaccountcategory";
import { EnhancedReportInfo } from "./enhancedreportinfo";
import { Expose, Type } from "class-transformer";

export class EnhancedReportReportItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountCategory" })
    @Type(() => EnhancedReportAccountCategory)
    accountCategory?: EnhancedReportAccountCategory;

    /**
     * The unique account ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    /**
     * Name of the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountName" })
    accountName?: string;

    /**
     * Balance of the account as reported on the profit and loss or Balance sheet.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

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
}

/**
 * OK
 */
export class EnhancedReport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "reportInfo" })
    @Type(() => EnhancedReportInfo)
    reportInfo?: EnhancedReportInfo;

    /**
     * An array of report items.
     */
    @SpeakeasyMetadata({ elemType: EnhancedReportReportItem })
    @Expose({ name: "reportItems" })
    @Type(() => EnhancedReportReportItem)
    reportItems?: EnhancedReportReportItem[];
}
