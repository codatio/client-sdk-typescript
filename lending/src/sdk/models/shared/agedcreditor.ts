/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AgedCurrencyOutstanding,
  AgedCurrencyOutstanding$inboundSchema,
  AgedCurrencyOutstanding$Outbound,
  AgedCurrencyOutstanding$outboundSchema,
} from "./agedcurrencyoutstanding.js";

export type AgedCreditor = {
  /**
   * Supplier ID of the aged creditor.
   */
  supplierId?: string | undefined;
  /**
   * Supplier name of the aged creditor.
   */
  supplierName?: string | undefined;
  /**
   * Array of aged creditors by currency.
   */
  agedCurrencyOutstanding?: Array<AgedCurrencyOutstanding> | undefined;
};

/** @internal */
export const AgedCreditor$inboundSchema: z.ZodType<
  AgedCreditor,
  z.ZodTypeDef,
  unknown
> = z.object({
  supplierId: z.string().optional(),
  supplierName: z.string().optional(),
  agedCurrencyOutstanding: z.array(AgedCurrencyOutstanding$inboundSchema)
    .optional(),
});

/** @internal */
export type AgedCreditor$Outbound = {
  supplierId?: string | undefined;
  supplierName?: string | undefined;
  agedCurrencyOutstanding?: Array<AgedCurrencyOutstanding$Outbound> | undefined;
};

/** @internal */
export const AgedCreditor$outboundSchema: z.ZodType<
  AgedCreditor$Outbound,
  z.ZodTypeDef,
  AgedCreditor
> = z.object({
  supplierId: z.string().optional(),
  supplierName: z.string().optional(),
  agedCurrencyOutstanding: z.array(AgedCurrencyOutstanding$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgedCreditor$ {
  /** @deprecated use `AgedCreditor$inboundSchema` instead. */
  export const inboundSchema = AgedCreditor$inboundSchema;
  /** @deprecated use `AgedCreditor$outboundSchema` instead. */
  export const outboundSchema = AgedCreditor$outboundSchema;
  /** @deprecated use `AgedCreditor$Outbound` instead. */
  export type Outbound = AgedCreditor$Outbound;
}

export function agedCreditorToJSON(agedCreditor: AgedCreditor): string {
  return JSON.stringify(AgedCreditor$outboundSchema.parse(agedCreditor));
}

export function agedCreditorFromJSON(
  jsonString: string,
): SafeParseResult<AgedCreditor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AgedCreditor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgedCreditor' from JSON`,
  );
}
