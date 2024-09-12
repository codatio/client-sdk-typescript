/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  LoanTransactionsReportInfo,
  LoanTransactionsReportInfo$inboundSchema,
  LoanTransactionsReportInfo$Outbound,
  LoanTransactionsReportInfo$outboundSchema,
} from "./loantransactionsreportinfo.js";
import {
  ReportItems,
  ReportItems$inboundSchema,
  ReportItems$Outbound,
  ReportItems$outboundSchema,
} from "./reportitems.js";

export type LoanTransactions = {
  reportInfo?: LoanTransactionsReportInfo | undefined;
  /**
   * Contains object of reporting properties. The loan ref will reference a different object depending on the integration type.
   */
  reportItems?: Array<ReportItems> | undefined;
  /**
   * If there are no errors, an empty array is returned.
   */
  errors?: Array<any> | undefined;
};

/** @internal */
export const LoanTransactions$inboundSchema: z.ZodType<
  LoanTransactions,
  z.ZodTypeDef,
  unknown
> = z.object({
  reportInfo: LoanTransactionsReportInfo$inboundSchema.optional(),
  reportItems: z.array(ReportItems$inboundSchema).optional(),
  errors: z.array(z.any()).optional(),
});

/** @internal */
export type LoanTransactions$Outbound = {
  reportInfo?: LoanTransactionsReportInfo$Outbound | undefined;
  reportItems?: Array<ReportItems$Outbound> | undefined;
  errors?: Array<any> | undefined;
};

/** @internal */
export const LoanTransactions$outboundSchema: z.ZodType<
  LoanTransactions$Outbound,
  z.ZodTypeDef,
  LoanTransactions
> = z.object({
  reportInfo: LoanTransactionsReportInfo$outboundSchema.optional(),
  reportItems: z.array(ReportItems$outboundSchema).optional(),
  errors: z.array(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanTransactions$ {
  /** @deprecated use `LoanTransactions$inboundSchema` instead. */
  export const inboundSchema = LoanTransactions$inboundSchema;
  /** @deprecated use `LoanTransactions$outboundSchema` instead. */
  export const outboundSchema = LoanTransactions$outboundSchema;
  /** @deprecated use `LoanTransactions$Outbound` instead. */
  export type Outbound = LoanTransactions$Outbound;
}
