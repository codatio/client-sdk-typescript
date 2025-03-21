/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CommerceReportMeasure = {
  /**
   * The measure's display name.
   */
  displayName?: string | undefined;
  /**
   * The measure's units e.g. percentage (%).
   */
  units?: string | undefined;
  /**
   * The measure's index.
   */
  index?: number | undefined;
  /**
   * The measure's type.
   */
  type?: string | undefined;
};

/** @internal */
export const CommerceReportMeasure$inboundSchema: z.ZodType<
  CommerceReportMeasure,
  z.ZodTypeDef,
  unknown
> = z.object({
  displayName: z.string().optional(),
  units: z.string().optional(),
  index: z.number().int().optional(),
  type: z.string().optional(),
});

/** @internal */
export type CommerceReportMeasure$Outbound = {
  displayName?: string | undefined;
  units?: string | undefined;
  index?: number | undefined;
  type?: string | undefined;
};

/** @internal */
export const CommerceReportMeasure$outboundSchema: z.ZodType<
  CommerceReportMeasure$Outbound,
  z.ZodTypeDef,
  CommerceReportMeasure
> = z.object({
  displayName: z.string().optional(),
  units: z.string().optional(),
  index: z.number().int().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceReportMeasure$ {
  /** @deprecated use `CommerceReportMeasure$inboundSchema` instead. */
  export const inboundSchema = CommerceReportMeasure$inboundSchema;
  /** @deprecated use `CommerceReportMeasure$outboundSchema` instead. */
  export const outboundSchema = CommerceReportMeasure$outboundSchema;
  /** @deprecated use `CommerceReportMeasure$Outbound` instead. */
  export type Outbound = CommerceReportMeasure$Outbound;
}

export function commerceReportMeasureToJSON(
  commerceReportMeasure: CommerceReportMeasure,
): string {
  return JSON.stringify(
    CommerceReportMeasure$outboundSchema.parse(commerceReportMeasure),
  );
}

export function commerceReportMeasureFromJSON(
  jsonString: string,
): SafeParseResult<CommerceReportMeasure, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceReportMeasure$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceReportMeasure' from JSON`,
  );
}
