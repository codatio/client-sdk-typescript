/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";

/**
 * A tax rate can be made up of multiple sub taxes, often called components of the tax.
 */
export type TaxRateComponent = {
  /**
   * Name of the tax rate component.
   */
  name?: string | null | undefined;
  /**
   * The rate of the tax rate component, usually a percentage.
   */
  rate?: Decimal$ | number | null | undefined;
  /**
   * A flag to indicate with the tax is calculated using the principle of compounding.
   */
  isCompound: boolean;
};

/** @internal */
export const TaxRateComponent$inboundSchema: z.ZodType<
  TaxRateComponent,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  rate: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  isCompound: z.boolean(),
});

/** @internal */
export type TaxRateComponent$Outbound = {
  name?: string | null | undefined;
  rate?: number | null | undefined;
  isCompound: boolean;
};

/** @internal */
export const TaxRateComponent$outboundSchema: z.ZodType<
  TaxRateComponent$Outbound,
  z.ZodTypeDef,
  TaxRateComponent
> = z.object({
  name: z.nullable(z.string()).optional(),
  rate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  isCompound: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRateComponent$ {
  /** @deprecated use `TaxRateComponent$inboundSchema` instead. */
  export const inboundSchema = TaxRateComponent$inboundSchema;
  /** @deprecated use `TaxRateComponent$outboundSchema` instead. */
  export const outboundSchema = TaxRateComponent$outboundSchema;
  /** @deprecated use `TaxRateComponent$Outbound` instead. */
  export type Outbound = TaxRateComponent$Outbound;
}