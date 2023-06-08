/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataConnectionError } from "./dataconnectionerror";
import { DataConnectionStatus } from "./dataconnectionstatus";
import { Expose, Type } from "class-transformer";

/**
 * The type of platform of the connection.
 */
export enum ConnectionSourceType {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown",
}

/**
 * A connection represents the link between a `company` and a source of data.
 */
export class Connection extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "additionalProperties" })
    additionalProperties?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "connectionInfo" })
    connectionInfo?: Record<string, string>;

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
    @Expose({ name: "created" })
    created: string;

    @SpeakeasyMetadata({ elemType: DataConnectionError })
    @Expose({ name: "dataConnectionErrors" })
    @Type(() => DataConnectionError)
    dataConnectionErrors?: DataConnectionError[];

    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * A Codat ID representing the integration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "integrationId" })
    integrationId: string;

    /**
     * A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "integrationKey" })
    integrationKey: string;

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
    @Expose({ name: "lastSync" })
    lastSync?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "linkUrl" })
    linkUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "platformName" })
    platformName: string;

    /**
     * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId: string;

    /**
     * The type of platform of the connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceType" })
    sourceType: ConnectionSourceType;

    /**
     * The current authorization status of the data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: DataConnectionStatus;
}