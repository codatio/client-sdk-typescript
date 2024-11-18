/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ReportLine = {
  /**
   * Identifier for the account, unique for the company in the accounting software.
   */
  accountId?: string | null | undefined;
  /**
   * Name of the report line item.
   */
  name?: string | null | undefined;
  /**
   * Numerical value of the line item.
   */
  value: Decimal$ | number;
  /**
   * An array of ReportLine items.
   */
  items?: Array<ReportLine> | null | undefined;
};

/** @internal */
export const ReportLine$inboundSchema: z.ZodType<
  ReportLine,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  value: z.number().transform(v => new Decimal$(v)),
  items: z.nullable(z.array(z.lazy(() => ReportLine$inboundSchema))).optional(),
});

/** @internal */
export type ReportLine$Outbound = {
  accountId?: string | null | undefined;
  name?: string | null | undefined;
  value: number;
  items?: Array<ReportLine$Outbound> | null | undefined;
};

/** @internal */
export const ReportLine$outboundSchema: z.ZodType<
  ReportLine$Outbound,
  z.ZodTypeDef,
  ReportLine
> = z.object({
  accountId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  value: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  items: z.nullable(z.array(z.lazy(() => ReportLine$outboundSchema)))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportLine$ {
  /** @deprecated use `ReportLine$inboundSchema` instead. */
  export const inboundSchema = ReportLine$inboundSchema;
  /** @deprecated use `ReportLine$outboundSchema` instead. */
  export const outboundSchema = ReportLine$outboundSchema;
  /** @deprecated use `ReportLine$Outbound` instead. */
  export type Outbound = ReportLine$Outbound;
}

export function reportLineToJSON(reportLine: ReportLine): string {
  return JSON.stringify(ReportLine$outboundSchema.parse(reportLine));
}

export function reportLineFromJSON(
  jsonString: string,
): SafeParseResult<ReportLine, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportLine$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportLine' from JSON`,
  );
}
