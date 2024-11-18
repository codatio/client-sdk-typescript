/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Only returned for transactions. For accounts, there is nothing returned.
 */
export type DataIntegrityAmounts = {
  /**
   * Lowest value of transaction set.
   */
  min?: Decimal$ | number | undefined;
  /**
   * Highest value of transaction set.
   */
  max?: Decimal$ | number | undefined;
  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  currency?: string | undefined;
};

/** @internal */
export const DataIntegrityAmounts$inboundSchema: z.ZodType<
  DataIntegrityAmounts,
  z.ZodTypeDef,
  unknown
> = z.object({
  min: z.number().transform(v => new Decimal$(v)).optional(),
  max: z.number().transform(v => new Decimal$(v)).optional(),
  currency: z.string().optional(),
});

/** @internal */
export type DataIntegrityAmounts$Outbound = {
  min?: number | undefined;
  max?: number | undefined;
  currency?: string | undefined;
};

/** @internal */
export const DataIntegrityAmounts$outboundSchema: z.ZodType<
  DataIntegrityAmounts$Outbound,
  z.ZodTypeDef,
  DataIntegrityAmounts
> = z.object({
  min: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  max: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  currency: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataIntegrityAmounts$ {
  /** @deprecated use `DataIntegrityAmounts$inboundSchema` instead. */
  export const inboundSchema = DataIntegrityAmounts$inboundSchema;
  /** @deprecated use `DataIntegrityAmounts$outboundSchema` instead. */
  export const outboundSchema = DataIntegrityAmounts$outboundSchema;
  /** @deprecated use `DataIntegrityAmounts$Outbound` instead. */
  export type Outbound = DataIntegrityAmounts$Outbound;
}

export function dataIntegrityAmountsToJSON(
  dataIntegrityAmounts: DataIntegrityAmounts,
): string {
  return JSON.stringify(
    DataIntegrityAmounts$outboundSchema.parse(dataIntegrityAmounts),
  );
}

export function dataIntegrityAmountsFromJSON(
  jsonString: string,
): SafeParseResult<DataIntegrityAmounts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataIntegrityAmounts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataIntegrityAmounts' from JSON`,
  );
}
