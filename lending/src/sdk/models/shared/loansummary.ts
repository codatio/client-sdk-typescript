/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LoanSummaryReportInfo,
  LoanSummaryReportInfo$inboundSchema,
  LoanSummaryReportInfo$Outbound,
  LoanSummaryReportInfo$outboundSchema,
} from "./loansummaryreportinfo.js";
import {
  LoanSummaryReportItem,
  LoanSummaryReportItem$inboundSchema,
  LoanSummaryReportItem$Outbound,
  LoanSummaryReportItem$outboundSchema,
} from "./loansummaryreportitem.js";

export type LoanSummary = {
  reportInfo?: LoanSummaryReportInfo | undefined;
  /**
   * Returns a summary of all loan activity for that integration type
   */
  reportItems?: Array<LoanSummaryReportItem> | undefined;
};

/** @internal */
export const LoanSummary$inboundSchema: z.ZodType<
  LoanSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  reportInfo: LoanSummaryReportInfo$inboundSchema.optional(),
  reportItems: z.array(LoanSummaryReportItem$inboundSchema).optional(),
});

/** @internal */
export type LoanSummary$Outbound = {
  reportInfo?: LoanSummaryReportInfo$Outbound | undefined;
  reportItems?: Array<LoanSummaryReportItem$Outbound> | undefined;
};

/** @internal */
export const LoanSummary$outboundSchema: z.ZodType<
  LoanSummary$Outbound,
  z.ZodTypeDef,
  LoanSummary
> = z.object({
  reportInfo: LoanSummaryReportInfo$outboundSchema.optional(),
  reportItems: z.array(LoanSummaryReportItem$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanSummary$ {
  /** @deprecated use `LoanSummary$inboundSchema` instead. */
  export const inboundSchema = LoanSummary$inboundSchema;
  /** @deprecated use `LoanSummary$outboundSchema` instead. */
  export const outboundSchema = LoanSummary$outboundSchema;
  /** @deprecated use `LoanSummary$Outbound` instead. */
  export type Outbound = LoanSummary$Outbound;
}

export function loanSummaryToJSON(loanSummary: LoanSummary): string {
  return JSON.stringify(LoanSummary$outboundSchema.parse(loanSummary));
}

export function loanSummaryFromJSON(
  jsonString: string,
): SafeParseResult<LoanSummary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LoanSummary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LoanSummary' from JSON`,
  );
}
