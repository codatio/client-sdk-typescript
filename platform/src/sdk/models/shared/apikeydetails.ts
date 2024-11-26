/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Details of the API key.
 */
export type ApiKeyDetails = {
  /**
   * Unique identifier for the API key.
   */
  id?: string | undefined;
  /**
   * A meaningful name assigned to the API key.
   */
  name?: string | null | undefined;
  /**
   * The API key value used to make authenticated http requests.
   */
  apiKey?: string | undefined;
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
  createdDate?: string | undefined;
};

/** @internal */
export const ApiKeyDetails$inboundSchema: z.ZodType<
  ApiKeyDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  apiKey: z.string().optional(),
  createdDate: z.string().optional(),
});

/** @internal */
export type ApiKeyDetails$Outbound = {
  id?: string | undefined;
  name?: string | null | undefined;
  apiKey?: string | undefined;
  createdDate?: string | undefined;
};

/** @internal */
export const ApiKeyDetails$outboundSchema: z.ZodType<
  ApiKeyDetails$Outbound,
  z.ZodTypeDef,
  ApiKeyDetails
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  apiKey: z.string().optional(),
  createdDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKeyDetails$ {
  /** @deprecated use `ApiKeyDetails$inboundSchema` instead. */
  export const inboundSchema = ApiKeyDetails$inboundSchema;
  /** @deprecated use `ApiKeyDetails$outboundSchema` instead. */
  export const outboundSchema = ApiKeyDetails$outboundSchema;
  /** @deprecated use `ApiKeyDetails$Outbound` instead. */
  export type Outbound = ApiKeyDetails$Outbound;
}

export function apiKeyDetailsToJSON(apiKeyDetails: ApiKeyDetails): string {
  return JSON.stringify(ApiKeyDetails$outboundSchema.parse(apiKeyDetails));
}

export function apiKeyDetailsFromJSON(
  jsonString: string,
): SafeParseResult<ApiKeyDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApiKeyDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApiKeyDetails' from JSON`,
  );
}
