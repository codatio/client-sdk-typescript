/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetExcelReportGenerationStatusRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * The type of report you want to generate and download.
   */
  reportType: shared.ExcelReportTypes;
};

/** @internal */
export const GetExcelReportGenerationStatusRequest$inboundSchema: z.ZodType<
  GetExcelReportGenerationStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  reportType: shared.ExcelReportTypes$inboundSchema,
});

/** @internal */
export type GetExcelReportGenerationStatusRequest$Outbound = {
  companyId: string;
  reportType: string;
};

/** @internal */
export const GetExcelReportGenerationStatusRequest$outboundSchema: z.ZodType<
  GetExcelReportGenerationStatusRequest$Outbound,
  z.ZodTypeDef,
  GetExcelReportGenerationStatusRequest
> = z.object({
  companyId: z.string(),
  reportType: shared.ExcelReportTypes$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetExcelReportGenerationStatusRequest$ {
  /** @deprecated use `GetExcelReportGenerationStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetExcelReportGenerationStatusRequest$inboundSchema;
  /** @deprecated use `GetExcelReportGenerationStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetExcelReportGenerationStatusRequest$outboundSchema;
  /** @deprecated use `GetExcelReportGenerationStatusRequest$Outbound` instead. */
  export type Outbound = GetExcelReportGenerationStatusRequest$Outbound;
}
