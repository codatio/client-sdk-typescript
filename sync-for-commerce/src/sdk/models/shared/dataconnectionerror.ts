/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The current status of a transient error. Null statuses indicate that the error is not transient.
 */
export const ErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
/**
 * The current status of a transient error. Null statuses indicate that the error is not transient.
 */
export type ErrorStatus = ClosedEnum<typeof ErrorStatus>;

export type DataConnectionError = {
  /**
   * The HTTP status code returned by the source platform when the error occurred.
   */
  statusCode?: string | undefined;
  /**
   * A non-numeric status code/text returned by the source platform when the error occurred.
   */
  statusText?: string | undefined;
  /**
   * A message about a error returned by Codat.
   */
  errorMessage?: string | undefined;
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
  erroredOnUtc?: string | undefined;
  /**
   * The current status of a transient error. Null statuses indicate that the error is not transient.
   */
  status?: ErrorStatus | null | undefined;
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
  resolvedOnUtc?: string | undefined;
};

/** @internal */
export const ErrorStatus$inboundSchema: z.ZodNativeEnum<typeof ErrorStatus> = z
  .nativeEnum(ErrorStatus);

/** @internal */
export const ErrorStatus$outboundSchema: z.ZodNativeEnum<typeof ErrorStatus> =
  ErrorStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorStatus$ {
  /** @deprecated use `ErrorStatus$inboundSchema` instead. */
  export const inboundSchema = ErrorStatus$inboundSchema;
  /** @deprecated use `ErrorStatus$outboundSchema` instead. */
  export const outboundSchema = ErrorStatus$outboundSchema;
}

/** @internal */
export const DataConnectionError$inboundSchema: z.ZodType<
  DataConnectionError,
  z.ZodTypeDef,
  unknown
> = z.object({
  statusCode: z.string().optional(),
  statusText: z.string().optional(),
  errorMessage: z.string().optional(),
  erroredOnUtc: z.string().optional(),
  status: z.nullable(ErrorStatus$inboundSchema).optional(),
  resolvedOnUtc: z.string().optional(),
});

/** @internal */
export type DataConnectionError$Outbound = {
  statusCode?: string | undefined;
  statusText?: string | undefined;
  errorMessage?: string | undefined;
  erroredOnUtc?: string | undefined;
  status?: string | null | undefined;
  resolvedOnUtc?: string | undefined;
};

/** @internal */
export const DataConnectionError$outboundSchema: z.ZodType<
  DataConnectionError$Outbound,
  z.ZodTypeDef,
  DataConnectionError
> = z.object({
  statusCode: z.string().optional(),
  statusText: z.string().optional(),
  errorMessage: z.string().optional(),
  erroredOnUtc: z.string().optional(),
  status: z.nullable(ErrorStatus$outboundSchema).optional(),
  resolvedOnUtc: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataConnectionError$ {
  /** @deprecated use `DataConnectionError$inboundSchema` instead. */
  export const inboundSchema = DataConnectionError$inboundSchema;
  /** @deprecated use `DataConnectionError$outboundSchema` instead. */
  export const outboundSchema = DataConnectionError$outboundSchema;
  /** @deprecated use `DataConnectionError$Outbound` instead. */
  export type Outbound = DataConnectionError$Outbound;
}

export function dataConnectionErrorToJSON(
  dataConnectionError: DataConnectionError,
): string {
  return JSON.stringify(
    DataConnectionError$outboundSchema.parse(dataConnectionError),
  );
}

export function dataConnectionErrorFromJSON(
  jsonString: string,
): SafeParseResult<DataConnectionError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataConnectionError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataConnectionError' from JSON`,
  );
}
