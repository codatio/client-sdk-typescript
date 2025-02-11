/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CompanyReference,
  CompanyReference$inboundSchema,
  CompanyReference$Outbound,
  CompanyReference$outboundSchema,
} from "./companyreference.js";

export type ReportGenerationPayload = {
  /**
   * Unique identifier of the report.
   */
  id?: string | undefined;
  referenceCompany?: CompanyReference | undefined;
};

/** @internal */
export const ReportGenerationPayload$inboundSchema: z.ZodType<
  ReportGenerationPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  referenceCompany: CompanyReference$inboundSchema.optional(),
});

/** @internal */
export type ReportGenerationPayload$Outbound = {
  id?: string | undefined;
  referenceCompany?: CompanyReference$Outbound | undefined;
};

/** @internal */
export const ReportGenerationPayload$outboundSchema: z.ZodType<
  ReportGenerationPayload$Outbound,
  z.ZodTypeDef,
  ReportGenerationPayload
> = z.object({
  id: z.string().optional(),
  referenceCompany: CompanyReference$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportGenerationPayload$ {
  /** @deprecated use `ReportGenerationPayload$inboundSchema` instead. */
  export const inboundSchema = ReportGenerationPayload$inboundSchema;
  /** @deprecated use `ReportGenerationPayload$outboundSchema` instead. */
  export const outboundSchema = ReportGenerationPayload$outboundSchema;
  /** @deprecated use `ReportGenerationPayload$Outbound` instead. */
  export type Outbound = ReportGenerationPayload$Outbound;
}

export function reportGenerationPayloadToJSON(
  reportGenerationPayload: ReportGenerationPayload,
): string {
  return JSON.stringify(
    ReportGenerationPayload$outboundSchema.parse(reportGenerationPayload),
  );
}

export function reportGenerationPayloadFromJSON(
  jsonString: string,
): SafeParseResult<ReportGenerationPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportGenerationPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportGenerationPayload' from JSON`,
  );
}
