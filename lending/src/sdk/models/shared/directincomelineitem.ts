/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountRef,
  AccountRef$inboundSchema,
  AccountRef$Outbound,
  AccountRef$outboundSchema,
} from "./accountref.js";
import {
  PropertieItemRef,
  PropertieItemRef$inboundSchema,
  PropertieItemRef$Outbound,
  PropertieItemRef$outboundSchema,
} from "./propertieitemref.js";
import {
  TaxRateRef,
  TaxRateRef$inboundSchema,
  TaxRateRef$Outbound,
  TaxRateRef$outboundSchema,
} from "./taxrateref.js";
import {
  TrackingCategoryRef,
  TrackingCategoryRef$inboundSchema,
  TrackingCategoryRef$Outbound,
  TrackingCategoryRef$outboundSchema,
} from "./trackingcategoryref.js";

export type DirectIncomeLineItem = {
  /**
   * A user-friendly name of the goods or services.
   */
  description?: string | null | undefined;
  /**
   * The price of each unit of goods or services.
   *
   * @remarks
   * Note: If the platform does not provide this information, the unit amount will be mapped to the total amount.
   */
  unitAmount: Decimal$ | number;
  /**
   * The number of units of goods or services received.
   *
   * @remarks
   *
   * Note: If the platform does not provide this information, the quantity will be mapped as 1.
   */
  quantity: Decimal$ | number;
  /**
   * Discount amount for the line before tax.
   */
  discountAmount?: Decimal$ | number | null | undefined;
  /**
   * Discount percentage for the line before tax.
   */
  discountPercentage?: Decimal$ | number | null | undefined;
  /**
   * The amount of the line, inclusive of discounts, but exclusive of tax.
   */
  subTotal?: Decimal$ | number | null | undefined;
  /**
   * The amount of tax for the line.
   *
   * @remarks
   * Note: If the platform does not provide this information, the quantity will be mapped as 0.00.
   */
  taxAmount?: Decimal$ | number | null | undefined;
  /**
   * The total amount of the line, including tax.
   */
  totalAmount?: Decimal$ | number | null | undefined;
  /**
   * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
   */
  accountRef?: AccountRef | undefined;
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
  taxRateRef?: TaxRateRef | undefined;
  /**
   * Reference to the item the line is linked to.
   */
  itemRef?: PropertieItemRef | undefined;
  /**
   * An array of categories against which this direct cost is tracked.
   */
  trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
};

/** @internal */
export const DirectIncomeLineItem$inboundSchema: z.ZodType<
  DirectIncomeLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.number().transform(v => new Decimal$(v)),
  quantity: z.number().transform(v => new Decimal$(v)),
  discountAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  discountPercentage: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  subTotal: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  taxAmount: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  totalAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  accountRef: AccountRef$inboundSchema.optional(),
  taxRateRef: TaxRateRef$inboundSchema.optional(),
  itemRef: PropertieItemRef$inboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$inboundSchema))
    .optional(),
});

/** @internal */
export type DirectIncomeLineItem$Outbound = {
  description?: string | null | undefined;
  unitAmount: number;
  quantity: number;
  discountAmount?: number | null | undefined;
  discountPercentage?: number | null | undefined;
  subTotal?: number | null | undefined;
  taxAmount?: number | null | undefined;
  totalAmount?: number | null | undefined;
  accountRef?: AccountRef$Outbound | undefined;
  taxRateRef?: TaxRateRef$Outbound | undefined;
  itemRef?: PropertieItemRef$Outbound | undefined;
  trackingCategoryRefs?: Array<TrackingCategoryRef$Outbound> | null | undefined;
};

/** @internal */
export const DirectIncomeLineItem$outboundSchema: z.ZodType<
  DirectIncomeLineItem$Outbound,
  z.ZodTypeDef,
  DirectIncomeLineItem
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  quantity: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  discountAmount: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  discountPercentage: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  subTotal: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  taxAmount: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  totalAmount: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  accountRef: AccountRef$outboundSchema.optional(),
  taxRateRef: TaxRateRef$outboundSchema.optional(),
  itemRef: PropertieItemRef$outboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectIncomeLineItem$ {
  /** @deprecated use `DirectIncomeLineItem$inboundSchema` instead. */
  export const inboundSchema = DirectIncomeLineItem$inboundSchema;
  /** @deprecated use `DirectIncomeLineItem$outboundSchema` instead. */
  export const outboundSchema = DirectIncomeLineItem$outboundSchema;
  /** @deprecated use `DirectIncomeLineItem$Outbound` instead. */
  export type Outbound = DirectIncomeLineItem$Outbound;
}

export function directIncomeLineItemToJSON(
  directIncomeLineItem: DirectIncomeLineItem,
): string {
  return JSON.stringify(
    DirectIncomeLineItem$outboundSchema.parse(directIncomeLineItem),
  );
}

export function directIncomeLineItemFromJSON(
  jsonString: string,
): SafeParseResult<DirectIncomeLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectIncomeLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectIncomeLineItem' from JSON`,
  );
}
