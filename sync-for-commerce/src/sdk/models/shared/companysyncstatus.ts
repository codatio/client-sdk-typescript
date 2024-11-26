/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CompanySyncStatus = {
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId?: string | null | undefined;
  /**
   * Unique identifier of the sync.
   */
  syncId?: string | null | undefined;
  /**
   * Status code of the sync.
   */
  syncStatusCode?: number | undefined;
  /**
   * Text status of the sync.
   */
  syncStatus?: string | null | undefined;
  /**
   * Error message of the sync.
   */
  errorMessage?: string | null | undefined;
  /**
   * Exception message of the sync.
   */
  syncExceptionMessage?: string | null | undefined;
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
  syncUtc?: string | undefined;
  /**
   * Boolean of whether the sync resulted in data being pushed.
   */
  dataPushed?: boolean | undefined;
};

/** @internal */
export const CompanySyncStatus$inboundSchema: z.ZodType<
  CompanySyncStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.nullable(z.string()).optional(),
  syncId: z.nullable(z.string()).optional(),
  syncStatusCode: z.number().int().optional(),
  syncStatus: z.nullable(z.string()).optional(),
  errorMessage: z.nullable(z.string()).optional(),
  syncExceptionMessage: z.nullable(z.string()).optional(),
  syncUtc: z.string().optional(),
  dataPushed: z.boolean().optional(),
});

/** @internal */
export type CompanySyncStatus$Outbound = {
  companyId?: string | null | undefined;
  syncId?: string | null | undefined;
  syncStatusCode?: number | undefined;
  syncStatus?: string | null | undefined;
  errorMessage?: string | null | undefined;
  syncExceptionMessage?: string | null | undefined;
  syncUtc?: string | undefined;
  dataPushed?: boolean | undefined;
};

/** @internal */
export const CompanySyncStatus$outboundSchema: z.ZodType<
  CompanySyncStatus$Outbound,
  z.ZodTypeDef,
  CompanySyncStatus
> = z.object({
  companyId: z.nullable(z.string()).optional(),
  syncId: z.nullable(z.string()).optional(),
  syncStatusCode: z.number().int().optional(),
  syncStatus: z.nullable(z.string()).optional(),
  errorMessage: z.nullable(z.string()).optional(),
  syncExceptionMessage: z.nullable(z.string()).optional(),
  syncUtc: z.string().optional(),
  dataPushed: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanySyncStatus$ {
  /** @deprecated use `CompanySyncStatus$inboundSchema` instead. */
  export const inboundSchema = CompanySyncStatus$inboundSchema;
  /** @deprecated use `CompanySyncStatus$outboundSchema` instead. */
  export const outboundSchema = CompanySyncStatus$outboundSchema;
  /** @deprecated use `CompanySyncStatus$Outbound` instead. */
  export type Outbound = CompanySyncStatus$Outbound;
}

export function companySyncStatusToJSON(
  companySyncStatus: CompanySyncStatus,
): string {
  return JSON.stringify(
    CompanySyncStatus$outboundSchema.parse(companySyncStatus),
  );
}

export function companySyncStatusFromJSON(
  jsonString: string,
): SafeParseResult<CompanySyncStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompanySyncStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompanySyncStatus' from JSON`,
  );
}
