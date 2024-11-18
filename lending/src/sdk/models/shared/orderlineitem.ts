/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OrderDiscountAllocation,
  OrderDiscountAllocation$inboundSchema,
  OrderDiscountAllocation$Outbound,
  OrderDiscountAllocation$outboundSchema,
} from "./orderdiscountallocation.js";
import {
  ProductRef,
  ProductRef$inboundSchema,
  ProductRef$Outbound,
  ProductRef$outboundSchema,
} from "./productref.js";
import {
  ProductVariantRef,
  ProductVariantRef$inboundSchema,
  ProductVariantRef$Outbound,
  ProductVariantRef$outboundSchema,
} from "./productvariantref.js";
import {
  TaxComponentAllocation,
  TaxComponentAllocation$inboundSchema,
  TaxComponentAllocation$Outbound,
  TaxComponentAllocation$outboundSchema,
} from "./taxcomponentallocation.js";

export type OrderLineItem = {
  /**
   * A unique, persistent identifier for this record
   */
  id: string;
  /**
   * Number of units of the product sold.
   *
   * @remarks
   * For refunds, quantity is negative.
   */
  quantity?: Decimal$ | number | undefined;
  /**
   * Percentage rate (from 0 to 100) of any sales tax applied to the unit price.
   */
  taxPercentage?: Decimal$ | number | undefined;
  /**
   * Total amount of the line item, including discounts and tax.
   */
  totalAmount?: Decimal$ | number | undefined;
  /**
   * Total amount of tax applied to the line item, factoring in any discounts.
   */
  totalTaxAmount?: Decimal$ | number | undefined;
  /**
   * Price per unit of goods or services, excluding discounts and tax.
   */
  unitPrice?: Decimal$ | number | undefined;
  /**
   * Taxes breakdown as applied to order lines.
   */
  taxes?: Array<TaxComponentAllocation> | undefined;
  /**
   * Reference that links the line item to the correct product details.
   */
  productRef?: ProductRef | undefined;
  /**
   * Reference that links the line item to the specific version of product that has been ordered.
   */
  productVariantRef?: ProductVariantRef | undefined;
  discountAllocations?: Array<OrderDiscountAllocation> | undefined;
};

/** @internal */
export const OrderLineItem$inboundSchema: z.ZodType<
  OrderLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  quantity: z.number().transform(v => new Decimal$(v)).optional(),
  taxPercentage: z.number().transform(v => new Decimal$(v)).optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)).optional(),
  totalTaxAmount: z.number().transform(v => new Decimal$(v)).optional(),
  unitPrice: z.number().transform(v => new Decimal$(v)).optional(),
  taxes: z.array(TaxComponentAllocation$inboundSchema).optional(),
  productRef: ProductRef$inboundSchema.optional(),
  productVariantRef: ProductVariantRef$inboundSchema.optional(),
  discountAllocations: z.array(OrderDiscountAllocation$inboundSchema)
    .optional(),
});

/** @internal */
export type OrderLineItem$Outbound = {
  id: string;
  quantity?: number | undefined;
  taxPercentage?: number | undefined;
  totalAmount?: number | undefined;
  totalTaxAmount?: number | undefined;
  unitPrice?: number | undefined;
  taxes?: Array<TaxComponentAllocation$Outbound> | undefined;
  productRef?: ProductRef$Outbound | undefined;
  productVariantRef?: ProductVariantRef$Outbound | undefined;
  discountAllocations?: Array<OrderDiscountAllocation$Outbound> | undefined;
};

/** @internal */
export const OrderLineItem$outboundSchema: z.ZodType<
  OrderLineItem$Outbound,
  z.ZodTypeDef,
  OrderLineItem
> = z.object({
  id: z.string(),
  quantity: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  taxPercentage: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  unitPrice: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  taxes: z.array(TaxComponentAllocation$outboundSchema).optional(),
  productRef: ProductRef$outboundSchema.optional(),
  productVariantRef: ProductVariantRef$outboundSchema.optional(),
  discountAllocations: z.array(OrderDiscountAllocation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderLineItem$ {
  /** @deprecated use `OrderLineItem$inboundSchema` instead. */
  export const inboundSchema = OrderLineItem$inboundSchema;
  /** @deprecated use `OrderLineItem$outboundSchema` instead. */
  export const outboundSchema = OrderLineItem$outboundSchema;
  /** @deprecated use `OrderLineItem$Outbound` instead. */
  export type Outbound = OrderLineItem$Outbound;
}

export function orderLineItemToJSON(orderLineItem: OrderLineItem): string {
  return JSON.stringify(OrderLineItem$outboundSchema.parse(orderLineItem));
}

export function orderLineItemFromJSON(
  jsonString: string,
): SafeParseResult<OrderLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderLineItem' from JSON`,
  );
}
