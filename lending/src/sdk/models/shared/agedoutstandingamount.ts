/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  AgedOutstandingAmountDetail,
  AgedOutstandingAmountDetail$inboundSchema,
  AgedOutstandingAmountDetail$Outbound,
  AgedOutstandingAmountDetail$outboundSchema,
} from "./agedoutstandingamountdetail.js";

export type AgedOutstandingAmount = {
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
  fromDate?: string | undefined;
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
  toDate?: string | undefined;
  /**
   * The amount outstanding.
   */
  amount?: Decimal$ | number | undefined;
  /**
   * Array of details.
   */
  details?: Array<AgedOutstandingAmountDetail> | undefined;
};

/** @internal */
export const AgedOutstandingAmount$inboundSchema: z.ZodType<
  AgedOutstandingAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
  amount: z.number().transform(v => new Decimal$(v)).optional(),
  details: z.array(AgedOutstandingAmountDetail$inboundSchema).optional(),
});

/** @internal */
export type AgedOutstandingAmount$Outbound = {
  fromDate?: string | undefined;
  toDate?: string | undefined;
  amount?: number | undefined;
  details?: Array<AgedOutstandingAmountDetail$Outbound> | undefined;
};

/** @internal */
export const AgedOutstandingAmount$outboundSchema: z.ZodType<
  AgedOutstandingAmount$Outbound,
  z.ZodTypeDef,
  AgedOutstandingAmount
> = z.object({
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  details: z.array(AgedOutstandingAmountDetail$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgedOutstandingAmount$ {
  /** @deprecated use `AgedOutstandingAmount$inboundSchema` instead. */
  export const inboundSchema = AgedOutstandingAmount$inboundSchema;
  /** @deprecated use `AgedOutstandingAmount$outboundSchema` instead. */
  export const outboundSchema = AgedOutstandingAmount$outboundSchema;
  /** @deprecated use `AgedOutstandingAmount$Outbound` instead. */
  export type Outbound = AgedOutstandingAmount$Outbound;
}
