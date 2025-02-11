/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Accounting method used to prepare the cash flow statement.
 */
export const ReportInput = {
  Unknown: "Unknown",
  Indirect: "Indirect",
  Direct: "Direct",
} as const;
/**
 * Accounting method used to prepare the cash flow statement.
 */
export type ReportInput = ClosedEnum<typeof ReportInput>;

/** @internal */
export const ReportInput$inboundSchema: z.ZodNativeEnum<typeof ReportInput> = z
  .nativeEnum(ReportInput);

/** @internal */
export const ReportInput$outboundSchema: z.ZodNativeEnum<typeof ReportInput> =
  ReportInput$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportInput$ {
  /** @deprecated use `ReportInput$inboundSchema` instead. */
  export const inboundSchema = ReportInput$inboundSchema;
  /** @deprecated use `ReportInput$outboundSchema` instead. */
  export const outboundSchema = ReportInput$outboundSchema;
}
