/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

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
export type PullOperation = {
    /**
     * Unique identifier of the company associated to this pull operation.
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
    completed?: string | undefined;
    /**
     * Unique identifier of the connection associated to this pull operation.
     */
    connectionId: string;
    /**
     * The data type you are requesting in a pull operation.
     */
    dataType: string;
    /**
     * A message about a transient or persistent error.
     */
    errorMessage?: string | null | undefined;
    /**
     * Unique identifier of the pull operation.
     */
    id: string;
    /**
     * `True` if the pull operation is completed successfully. The `isCompleted` property is not queryable. To filter failed pull operations, query by `status!=Complete&&status!=NotSupported` instead.
     */
    isCompleted: boolean;
    /**
     * `True` if the pull operation entered an error state.
     */
    isErrored: boolean;
    /**
     * An integer signifying the progress of the pull operation.
     */
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
    requested: string;
    /**
     * The current status of the pull operation.
     */
    status: PullOperationStatus;
    /**
     * Additional information about the dataset status.
     */
    statusDescription?: string | null | undefined;
};

/** @internal */
export const PullOperationStatus$ = z.nativeEnum(PullOperationStatus);

/** @internal */
export namespace PullOperation$ {
    export type Inbound = {
        companyId: string;
        completed?: string | undefined;
        connectionId: string;
        dataType: string;
        errorMessage?: string | null | undefined;
        id: string;
        isCompleted: boolean;
        isErrored: boolean;
        progress: number;
        requested: string;
        status: PullOperationStatus;
        statusDescription?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<PullOperation, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            completed: z.string().optional(),
            connectionId: z.string(),
            dataType: z.string(),
            errorMessage: z.nullable(z.string()).optional(),
            id: z.string(),
            isCompleted: z.boolean(),
            isErrored: z.boolean(),
            progress: z.number().int(),
            requested: z.string(),
            status: PullOperationStatus$,
            statusDescription: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.completed === undefined ? null : { completed: v.completed }),
                connectionId: v.connectionId,
                dataType: v.dataType,
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                id: v.id,
                isCompleted: v.isCompleted,
                isErrored: v.isErrored,
                progress: v.progress,
                requested: v.requested,
                status: v.status,
                ...(v.statusDescription === undefined
                    ? null
                    : { statusDescription: v.statusDescription }),
            };
        });

    export type Outbound = {
        companyId: string;
        completed?: string | undefined;
        connectionId: string;
        dataType: string;
        errorMessage?: string | null | undefined;
        id: string;
        isCompleted: boolean;
        isErrored: boolean;
        progress: number;
        requested: string;
        status: PullOperationStatus;
        statusDescription?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PullOperation> = z
        .object({
            companyId: z.string(),
            completed: z.string().optional(),
            connectionId: z.string(),
            dataType: z.string(),
            errorMessage: z.nullable(z.string()).optional(),
            id: z.string(),
            isCompleted: z.boolean(),
            isErrored: z.boolean(),
            progress: z.number().int(),
            requested: z.string(),
            status: PullOperationStatus$,
            statusDescription: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.completed === undefined ? null : { completed: v.completed }),
                connectionId: v.connectionId,
                dataType: v.dataType,
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                id: v.id,
                isCompleted: v.isCompleted,
                isErrored: v.isErrored,
                progress: v.progress,
                requested: v.requested,
                status: v.status,
                ...(v.statusDescription === undefined
                    ? null
                    : { statusDescription: v.statusDescription }),
            };
        });
}
