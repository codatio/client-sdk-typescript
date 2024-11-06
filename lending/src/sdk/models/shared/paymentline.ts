/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  PaymentLineLink,
  PaymentLineLink$inboundSchema,
  PaymentLineLink$Outbound,
  PaymentLineLink$outboundSchema,
} from "./paymentlinelink.js";

export type PaymentLine = {
  /**
   * Amount in the payment currency.
   */
  amount: Decimal$ | number;
  links?: Array<PaymentLineLink> | null | undefined;
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
export const PaymentLine$inboundSchema: z.ZodType<
  PaymentLine,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => new Decimal$(v)),
  links: z.nullable(z.array(PaymentLineLink$inboundSchema)).optional(),
  allocatedOnDate: z.string().optional(),
});

/** @internal */
export type PaymentLine$Outbound = {
  amount: number;
  links?: Array<PaymentLineLink$Outbound> | null | undefined;
  allocatedOnDate?: string | undefined;
};

/** @internal */
export const PaymentLine$outboundSchema: z.ZodType<
  PaymentLine$Outbound,
  z.ZodTypeDef,
  PaymentLine
> = z.object({
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  links: z.nullable(z.array(PaymentLineLink$outboundSchema)).optional(),
  allocatedOnDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentLine$ {
  /** @deprecated use `PaymentLine$inboundSchema` instead. */
  export const inboundSchema = PaymentLine$inboundSchema;
  /** @deprecated use `PaymentLine$outboundSchema` instead. */
  export const outboundSchema = PaymentLine$outboundSchema;
  /** @deprecated use `PaymentLine$Outbound` instead. */
  export type Outbound = PaymentLine$Outbound;
}
