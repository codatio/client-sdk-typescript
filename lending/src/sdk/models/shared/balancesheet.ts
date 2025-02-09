/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ReportLine,
  ReportLine$inboundSchema,
  ReportLine$Outbound,
  ReportLine$outboundSchema,
} from "./reportline.js";

export type BalanceSheet = {
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  date?: string | undefined;
  assets?: ReportLine | undefined;
  liabilities?: ReportLine | undefined;
  /**
   * Value of net assets for a company in their base currency.
   */
  netAssets: Decimal$ | number;
  equity?: ReportLine | undefined;
};

/** @internal */
export const BalanceSheet$inboundSchema: z.ZodType<
  BalanceSheet,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().optional(),
  assets: ReportLine$inboundSchema.optional(),
  liabilities: ReportLine$inboundSchema.optional(),
  netAssets: z.number().transform(v => new Decimal$(v)),
  equity: ReportLine$inboundSchema.optional(),
});

/** @internal */
export type BalanceSheet$Outbound = {
  date?: string | undefined;
  assets?: ReportLine$Outbound | undefined;
  liabilities?: ReportLine$Outbound | undefined;
  netAssets: number;
  equity?: ReportLine$Outbound | undefined;
};

/** @internal */
export const BalanceSheet$outboundSchema: z.ZodType<
  BalanceSheet$Outbound,
  z.ZodTypeDef,
  BalanceSheet
> = z.object({
  date: z.string().optional(),
  assets: ReportLine$outboundSchema.optional(),
  liabilities: ReportLine$outboundSchema.optional(),
  netAssets: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  equity: ReportLine$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheet$ {
  /** @deprecated use `BalanceSheet$inboundSchema` instead. */
  export const inboundSchema = BalanceSheet$inboundSchema;
  /** @deprecated use `BalanceSheet$outboundSchema` instead. */
  export const outboundSchema = BalanceSheet$outboundSchema;
  /** @deprecated use `BalanceSheet$Outbound` instead. */
  export type Outbound = BalanceSheet$Outbound;
}

export function balanceSheetToJSON(balanceSheet: BalanceSheet): string {
  return JSON.stringify(BalanceSheet$outboundSchema.parse(balanceSheet));
}

export function balanceSheetFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheet' from JSON`,
  );
}
