/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GenerateReportRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * The type of the report
   */
  reportType: shared.ReportType;
};

/** @internal */
export const GenerateReportRequest$inboundSchema: z.ZodType<
  GenerateReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  reportType: shared.ReportType$inboundSchema,
});

/** @internal */
export type GenerateReportRequest$Outbound = {
  companyId: string;
  reportType: string;
};

/** @internal */
export const GenerateReportRequest$outboundSchema: z.ZodType<
  GenerateReportRequest$Outbound,
  z.ZodTypeDef,
  GenerateReportRequest
> = z.object({
  companyId: z.string(),
  reportType: shared.ReportType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateReportRequest$ {
  /** @deprecated use `GenerateReportRequest$inboundSchema` instead. */
  export const inboundSchema = GenerateReportRequest$inboundSchema;
  /** @deprecated use `GenerateReportRequest$outboundSchema` instead. */
  export const outboundSchema = GenerateReportRequest$outboundSchema;
  /** @deprecated use `GenerateReportRequest$Outbound` instead. */
  export type Outbound = GenerateReportRequest$Outbound;
}