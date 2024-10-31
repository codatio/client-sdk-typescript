/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  BillPaymentLineLink,
  BillPaymentLineLink$inboundSchema,
  BillPaymentLineLink$Outbound,
  BillPaymentLineLink$outboundSchema,
} from "./billpaymentlinelink.js";

export type BillPaymentLine = {
  /**
   * Amount in the bill payment currency.
   */
  amount: Decimal$ | number;
  links?: Array<BillPaymentLineLink> | null | undefined;
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
  allocatedOnDate?: string | undefined;
};

/** @internal */
export const BillPaymentLine$inboundSchema: z.ZodType<
  BillPaymentLine,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => new Decimal$(v)),
  links: z.nullable(z.array(BillPaymentLineLink$inboundSchema)).optional(),
  allocatedOnDate: z.string().optional(),
});

/** @internal */
export type BillPaymentLine$Outbound = {
  amount: number;
  links?: Array<BillPaymentLineLink$Outbound> | null | undefined;
  allocatedOnDate?: string | undefined;
};

/** @internal */
export const BillPaymentLine$outboundSchema: z.ZodType<
  BillPaymentLine$Outbound,
  z.ZodTypeDef,
  BillPaymentLine
> = z.object({
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  links: z.nullable(z.array(BillPaymentLineLink$outboundSchema)).optional(),
  allocatedOnDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillPaymentLine$ {
  /** @deprecated use `BillPaymentLine$inboundSchema` instead. */
  export const inboundSchema = BillPaymentLine$inboundSchema;
  /** @deprecated use `BillPaymentLine$outboundSchema` instead. */
  export const outboundSchema = BillPaymentLine$outboundSchema;
  /** @deprecated use `BillPaymentLine$Outbound` instead. */
  export type Outbound = BillPaymentLine$Outbound;
}