/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataType } from "./datatype";
import { Expose } from "class-transformer";

/**
 * The current status of the pull operation.
 */
export enum PullOperationStatus {
    Initial = "Initial",
    Queued = "Queued",
    Fetching = "Fetching",
    MapQueued = "MapQueued",
    Mapping = "Mapping",
    Complete = "Complete",
    FetchError = "FetchError",
    MapError = "MapError",
    InternalError = "InternalError",
    ProcessingQueued = "ProcessingQueued",
    Processing = "Processing",
    ProcessingError = "ProcessingError",
    ValidationQueued = "ValidationQueued",
    Validating = "Validating",
    ValidationError = "ValidationError",
    AuthError = "AuthError",
    Cancelled = "Cancelled",
    Routing = "Routing",
    RoutingError = "RoutingError",
    NotSupported = "NotSupported",
    RateLimitError = "RateLimitError",
    PermissionsError = "PermissionsError",
    PrerequisiteNotMet = "PrerequisiteNotMet",
}

/**
 * Information about a queued, in progress or completed pull operation.
 *
 * @remarks
 * *Formally called `dataset`*
 */
export class PullOperation extends SpeakeasyBase {
    /**
     * Unique identifier of the company associated to this pull operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId: string;

    /**
     * Unique identifier of the connection associated to this pull operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connectionId" })
    connectionId: string;

    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType: DataType;

    /**
     * Unique identifier of the pull operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * `True` if the pull operation completed successfully.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isCompleted" })
    isCompleted: boolean;

    /**
     * `True` if the pull operation entered an error state.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isErrored" })
    isErrored: boolean;

    /**
     * An integer signifying the progress of the pull operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "progress" })
    progress: number;

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
    @Expose({ name: "requested" })
    requested: string;

    /**
     * The current status of the pull operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PullOperationStatus;
}
