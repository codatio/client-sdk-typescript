/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetCommerceLifetimeValueMetricsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
   */
  reportDate: string;
  /**
   * The number of months per period. E.g. 2 = 2 months per period.
   */
  periodLength: number;
  /**
   * The number of periods to return. There will be no pagination as a query parameter.
   */
  numberOfPeriods: number;
  /**
   * The period unit of time returned.
   */
  periodUnit: shared.PeriodUnit;
  /**
   * Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.
   */
  includeDisplayNames?: boolean | undefined;
};

/** @internal */
export const GetCommerceLifetimeValueMetricsRequest$inboundSchema: z.ZodType<
  GetCommerceLifetimeValueMetricsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  reportDate: z.string(),
  periodLength: z.number().int(),
  numberOfPeriods: z.number().int(),
  periodUnit: shared.PeriodUnit$inboundSchema,
  includeDisplayNames: z.boolean().optional(),
});

/** @internal */
export type GetCommerceLifetimeValueMetricsRequest$Outbound = {
  companyId: string;
  connectionId: string;
  reportDate: string;
  periodLength: number;
  numberOfPeriods: number;
  periodUnit: string;
  includeDisplayNames?: boolean | undefined;
};

/** @internal */
export const GetCommerceLifetimeValueMetricsRequest$outboundSchema: z.ZodType<
  GetCommerceLifetimeValueMetricsRequest$Outbound,
  z.ZodTypeDef,
  GetCommerceLifetimeValueMetricsRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  reportDate: z.string(),
  periodLength: z.number().int(),
  numberOfPeriods: z.number().int(),
  periodUnit: shared.PeriodUnit$outboundSchema,
  includeDisplayNames: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommerceLifetimeValueMetricsRequest$ {
  /** @deprecated use `GetCommerceLifetimeValueMetricsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCommerceLifetimeValueMetricsRequest$inboundSchema;
  /** @deprecated use `GetCommerceLifetimeValueMetricsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCommerceLifetimeValueMetricsRequest$outboundSchema;
  /** @deprecated use `GetCommerceLifetimeValueMetricsRequest$Outbound` instead. */
  export type Outbound = GetCommerceLifetimeValueMetricsRequest$Outbound;
}

export function getCommerceLifetimeValueMetricsRequestToJSON(
  getCommerceLifetimeValueMetricsRequest:
    GetCommerceLifetimeValueMetricsRequest,
): string {
  return JSON.stringify(
    GetCommerceLifetimeValueMetricsRequest$outboundSchema.parse(
      getCommerceLifetimeValueMetricsRequest,
    ),
  );
}

export function getCommerceLifetimeValueMetricsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCommerceLifetimeValueMetricsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetCommerceLifetimeValueMetricsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCommerceLifetimeValueMetricsRequest' from JSON`,
  );
}
