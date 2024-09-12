/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";

/**
 * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
 *
 * @remarks
 *
 * Found on:
 *
 * - Bill line items
 * - Bill Credit Note line items
 * - Credit Note line items
 * - Direct incomes line items
 * - Invoice line items
 * - Items
 */
export type TaxRateRef = {
  /**
   * Unique identifier for the tax rate in the accounting software.
   */
  id?: string | undefined;
  /**
   * Name of the tax rate in the accounting software.
   */
  name?: string | undefined;
  /**
   * Applicable tax rate.
   */
  effectiveTaxRate?: Decimal$ | number | undefined;
};

/** @internal */
export const TaxRateRef$inboundSchema: z.ZodType<
  TaxRateRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  effectiveTaxRate: z.number().transform(v => new Decimal$(v)).optional(),
});

/** @internal */
export type TaxRateRef$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  effectiveTaxRate?: number | undefined;
};

/** @internal */
export const TaxRateRef$outboundSchema: z.ZodType<
  TaxRateRef$Outbound,
  z.ZodTypeDef,
  TaxRateRef
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  effectiveTaxRate: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRateRef$ {
  /** @deprecated use `TaxRateRef$inboundSchema` instead. */
  export const inboundSchema = TaxRateRef$inboundSchema;
  /** @deprecated use `TaxRateRef$outboundSchema` instead. */
  export const outboundSchema = TaxRateRef$outboundSchema;
  /** @deprecated use `TaxRateRef$Outbound` instead. */
  export type Outbound = TaxRateRef$Outbound;
}
