/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ReportComponentMeasure,
  ReportComponentMeasure$inboundSchema,
  ReportComponentMeasure$Outbound,
  ReportComponentMeasure$outboundSchema,
} from "./reportcomponentmeasure.js";

export type CommerceReportComponent = {
  /**
   * The component's dimension.
   */
  dimension?: number | undefined;
  /**
   * The component's display name.
   */
  dimensionDisplayName?: string | undefined;
  /**
   * The component's item number.
   */
  item?: number | undefined;
  /**
   * The component's item display name.
   */
  itemDisplayName?: string | undefined;
  measures?: Array<ReportComponentMeasure> | undefined;
  components?: Array<CommerceReportComponent> | undefined;
};

/** @internal */
export const CommerceReportComponent$inboundSchema: z.ZodType<
  CommerceReportComponent,
  z.ZodTypeDef,
  unknown
> = z.object({
  dimension: z.number().int().optional(),
  dimensionDisplayName: z.string().optional(),
  item: z.number().int().optional(),
  itemDisplayName: z.string().optional(),
  measures: z.array(ReportComponentMeasure$inboundSchema).optional(),
  components: z.array(z.lazy(() => CommerceReportComponent$inboundSchema))
    .optional(),
});

/** @internal */
export type CommerceReportComponent$Outbound = {
  dimension?: number | undefined;
  dimensionDisplayName?: string | undefined;
  item?: number | undefined;
  itemDisplayName?: string | undefined;
  measures?: Array<ReportComponentMeasure$Outbound> | undefined;
  components?: Array<CommerceReportComponent$Outbound> | undefined;
};

/** @internal */
export const CommerceReportComponent$outboundSchema: z.ZodType<
  CommerceReportComponent$Outbound,
  z.ZodTypeDef,
  CommerceReportComponent
> = z.object({
  dimension: z.number().int().optional(),
  dimensionDisplayName: z.string().optional(),
  item: z.number().int().optional(),
  itemDisplayName: z.string().optional(),
  measures: z.array(ReportComponentMeasure$outboundSchema).optional(),
  components: z.array(z.lazy(() => CommerceReportComponent$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceReportComponent$ {
  /** @deprecated use `CommerceReportComponent$inboundSchema` instead. */
  export const inboundSchema = CommerceReportComponent$inboundSchema;
  /** @deprecated use `CommerceReportComponent$outboundSchema` instead. */
  export const outboundSchema = CommerceReportComponent$outboundSchema;
  /** @deprecated use `CommerceReportComponent$Outbound` instead. */
  export type Outbound = CommerceReportComponent$Outbound;
}

export function commerceReportComponentToJSON(
  commerceReportComponent: CommerceReportComponent,
): string {
  return JSON.stringify(
    CommerceReportComponent$outboundSchema.parse(commerceReportComponent),
  );
}

export function commerceReportComponentFromJSON(
  jsonString: string,
): SafeParseResult<CommerceReportComponent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceReportComponent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceReportComponent' from JSON`,
  );
}
