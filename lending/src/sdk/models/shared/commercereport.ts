/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceReportComponent,
  CommerceReportComponent$inboundSchema,
  CommerceReportComponent$Outbound,
  CommerceReportComponent$outboundSchema,
} from "./commercereportcomponent.js";
import {
  CommerceReportDimension,
  CommerceReportDimension$inboundSchema,
  CommerceReportDimension$Outbound,
  CommerceReportDimension$outboundSchema,
} from "./commercereportdimension.js";
import {
  CommerceReportError,
  CommerceReportError$inboundSchema,
  CommerceReportError$Outbound,
  CommerceReportError$outboundSchema,
} from "./commercereporterror.js";
import {
  CommerceReportMeasure,
  CommerceReportMeasure$inboundSchema,
  CommerceReportMeasure$Outbound,
  CommerceReportMeasure$outboundSchema,
} from "./commercereportmeasure.js";

/**
 * ## Structure
 *
 * @remarks
 *
 * Assess reports follow a consistent structure. Reports contain four sections of information:
 *
 * ### 1. Report definition
 *
 * Information such as:
 *
 *   1. The report info (e.g. enhanced_profit_and_loss).
 *   2. The display name of the report (e.g. Enhanced Profit and Loss).
 *
 * ### 2. Dimension info
 *
 * Information about the dimension contained in the reports such as:
 *
 *   1. The type of dimension (e.g. datetime, recordRef).
 *   2. The display name of the dimension (e.g. Period, Category type, Category sub type).
 *   3. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
 *
 * ### 3. Measure info
 *
 * Information about the measures contained in the report such as:
 *
 *   1. The display name of the measure (e.g. value of account, percentage change).
 *   2. The type of the measure (e.g. currency, percentage).
 *   3. The unit of the measure (e.g. %, GBP).
 *
 * ### 4. The data for the report
 *
 * When the *includeDisplayName* parameter is set to *true*, it shows the *dimensionDisplayName* and *itemDisplayName* to make the data human-readable. The default setting for *includeDisplayName* is *false*.
 *
 * ## Displaying the report
 *
 * Reports can be rendered as follows (ordering is implicit rather than explicit):
 *
 * ![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)
 *
 * # Data model
 *
 * ## Dimensions
 */
export type CommerceReport = {
  reportInfo?: { [k: string]: string } | undefined;
  dimensions?: Array<CommerceReportDimension> | undefined;
  measures?: Array<CommerceReportMeasure> | undefined;
  reportData?: Array<CommerceReportComponent> | undefined;
  errors?: Array<CommerceReportError> | undefined;
};

/** @internal */
export const CommerceReport$inboundSchema: z.ZodType<
  CommerceReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  reportInfo: z.record(z.string()).optional(),
  dimensions: z.array(CommerceReportDimension$inboundSchema).optional(),
  measures: z.array(CommerceReportMeasure$inboundSchema).optional(),
  reportData: z.array(CommerceReportComponent$inboundSchema).optional(),
  errors: z.array(CommerceReportError$inboundSchema).optional(),
});

/** @internal */
export type CommerceReport$Outbound = {
  reportInfo?: { [k: string]: string } | undefined;
  dimensions?: Array<CommerceReportDimension$Outbound> | undefined;
  measures?: Array<CommerceReportMeasure$Outbound> | undefined;
  reportData?: Array<CommerceReportComponent$Outbound> | undefined;
  errors?: Array<CommerceReportError$Outbound> | undefined;
};

/** @internal */
export const CommerceReport$outboundSchema: z.ZodType<
  CommerceReport$Outbound,
  z.ZodTypeDef,
  CommerceReport
> = z.object({
  reportInfo: z.record(z.string()).optional(),
  dimensions: z.array(CommerceReportDimension$outboundSchema).optional(),
  measures: z.array(CommerceReportMeasure$outboundSchema).optional(),
  reportData: z.array(CommerceReportComponent$outboundSchema).optional(),
  errors: z.array(CommerceReportError$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceReport$ {
  /** @deprecated use `CommerceReport$inboundSchema` instead. */
  export const inboundSchema = CommerceReport$inboundSchema;
  /** @deprecated use `CommerceReport$outboundSchema` instead. */
  export const outboundSchema = CommerceReport$outboundSchema;
  /** @deprecated use `CommerceReport$Outbound` instead. */
  export type Outbound = CommerceReport$Outbound;
}

export function commerceReportToJSON(commerceReport: CommerceReport): string {
  return JSON.stringify(CommerceReport$outboundSchema.parse(commerceReport));
}

export function commerceReportFromJSON(
  jsonString: string,
): SafeParseResult<CommerceReport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceReport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceReport' from JSON`,
  );
}
