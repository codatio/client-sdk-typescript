/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BillAccountRef,
  BillAccountRef$inboundSchema,
  BillAccountRef$Outbound,
  BillAccountRef$outboundSchema,
} from "./billaccountref.js";
import {
  BillTaxRateRef,
  BillTaxRateRef$inboundSchema,
  BillTaxRateRef$Outbound,
  BillTaxRateRef$outboundSchema,
} from "./billtaxrateref.js";

export type BillLineItem = {
  /**
   * Friendly name of the goods or services received.
   */
  description?: string | null | undefined;
  /**
   * Unit price of the goods or service.
   */
  unitAmount: Decimal$ | number;
  /**
   * Number of units of goods or services received.
   */
  quantity: Decimal$ | number;
  /**
   * Amount of tax applied to the line item.
   */
  taxAmount?: Decimal$ | number | undefined;
  /**
   * Reference to the account to which the line item is linked.
   */
  accountRef: BillAccountRef;
  /**
   * Total amount of the line, including tax.
   */
  totalAmount?: Decimal$ | number | null | undefined;
  /**
   * Reference to the tax rate to which the line item is linked.
   */
  taxRateRef?: BillTaxRateRef | undefined;
};

/** @internal */
export const BillLineItem$inboundSchema: z.ZodType<
  BillLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.number().transform(v => new Decimal$(v)),
  quantity: z.number().transform(v => new Decimal$(v)),
  taxAmount: z.number().transform(v => new Decimal$(v)).optional(),
  accountRef: BillAccountRef$inboundSchema,
  totalAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  taxRateRef: BillTaxRateRef$inboundSchema.optional(),
});

/** @internal */
export type BillLineItem$Outbound = {
  description?: string | null | undefined;
  unitAmount: number;
  quantity: number;
  taxAmount?: number | undefined;
  accountRef: BillAccountRef$Outbound;
  totalAmount?: number | null | undefined;
  taxRateRef?: BillTaxRateRef$Outbound | undefined;
};

/** @internal */
export const BillLineItem$outboundSchema: z.ZodType<
  BillLineItem$Outbound,
  z.ZodTypeDef,
  BillLineItem
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  quantity: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  taxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  accountRef: BillAccountRef$outboundSchema,
  totalAmount: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  taxRateRef: BillTaxRateRef$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillLineItem$ {
  /** @deprecated use `BillLineItem$inboundSchema` instead. */
  export const inboundSchema = BillLineItem$inboundSchema;
  /** @deprecated use `BillLineItem$outboundSchema` instead. */
  export const outboundSchema = BillLineItem$outboundSchema;
  /** @deprecated use `BillLineItem$Outbound` instead. */
  export type Outbound = BillLineItem$Outbound;
}

export function billLineItemToJSON(billLineItem: BillLineItem): string {
  return JSON.stringify(BillLineItem$outboundSchema.parse(billLineItem));
}

export function billLineItemFromJSON(
  jsonString: string,
): SafeParseResult<BillLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillLineItem' from JSON`,
  );
}
