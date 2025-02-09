/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of the report requested in the query string.
 */
export const ExcelReportTypes = {
  Audit: "audit",
  EnhancedFinancials: "enhancedFinancials",
  EnhancedInvoices: "enhancedInvoices",
  EnhancedCashFlow: "enhancedCashFlow",
} as const;
/**
 * The type of the report requested in the query string.
 */
export type ExcelReportTypes = ClosedEnum<typeof ExcelReportTypes>;

/** @internal */
export const ExcelReportTypes$inboundSchema: z.ZodNativeEnum<
  typeof ExcelReportTypes
> = z.nativeEnum(ExcelReportTypes);

/** @internal */
export const ExcelReportTypes$outboundSchema: z.ZodNativeEnum<
  typeof ExcelReportTypes
> = ExcelReportTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExcelReportTypes$ {
  /** @deprecated use `ExcelReportTypes$inboundSchema` instead. */
  export const inboundSchema = ExcelReportTypes$inboundSchema;
  /** @deprecated use `ExcelReportTypes$outboundSchema` instead. */
  export const outboundSchema = ExcelReportTypes$outboundSchema;
}
