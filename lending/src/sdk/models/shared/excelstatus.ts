/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExcelReportTypes } from "./excelreporttypes";
import { Expose } from "class-transformer";

export class ExcelStatus extends SpeakeasyBase {
    /**
     * Error details in case the report generation request was unsuccessful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage?: string;

    /**
     * The file size in Bytes is populated upon successful generation of the report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fileSize" })
    fileSize?: number;

    /**
     * When true, the request was successful and the report is being generated. If false, the request was unsuccessful and the report is not being generated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inProgress" })
    inProgress?: boolean;

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
    @Expose({ name: "lastGenerated" })
    lastGenerated?: string;

    /**
     * A unique ID generated for this request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastInvocationId" })
    lastInvocationId?: string;

    /**
     * The date and time of when a successful request was queued for the most recent report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "queued" })
    queued?: string;

    /**
     * The type of the report requested in the query string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportType" })
    reportType?: ExcelReportTypes;

    /**
     * True if the requested report was successfully queued and false if the requested report was not able to be queued.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success?: boolean;
}
