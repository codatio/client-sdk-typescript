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
  AccountsPayableTracking,
  AccountsPayableTracking$inboundSchema,
  AccountsPayableTracking$Outbound,
  AccountsPayableTracking$outboundSchema,
} from "./accountspayabletracking.js";
import {
  TrackingCategoryRef,
  TrackingCategoryRef$inboundSchema,
  TrackingCategoryRef$Outbound,
  TrackingCategoryRef$outboundSchema,
} from "./trackingcategoryref.js";
import {
  Zero,
  Zero$inboundSchema,
  Zero$Outbound,
  Zero$outboundSchema,
} from "./zero.js";

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
export type TaxRateReference = {
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

/**
 * Reference to the item the line is linked to.
 */
export type ItemReference = {
  /**
   * Unique identifier for the item in the accounting software.
   */
  id: string;
  /**
   * Name of the item in the accounting software.
   */
  name?: string | null | undefined;
};

export type BillCreditNoteLineItem = {
  /**
   * Friendly name of each line item. For example, the goods or service for which credit has been received.
   */
  description?: string | null | undefined;
  /**
   * Unit price of the goods or service.
   */
  unitAmount: Decimal$ | number;
  /**
   * Number of units of the goods or service for which credit has been received.
   */
  quantity: Decimal$ | number;
  /**
   * The measurement which defines a unit for this item (e.g. 'kilogram', 'litre').
   */
  unitOfMeasurement?: string | null | undefined;
  /**
   * Value of any discounts applied.
   */
  discountAmount?: Decimal$ | number | null | undefined;
  /**
   * Amount of credit associated with the line item, including discounts but excluding tax.
   */
  subTotal?: Decimal$ | number | null | undefined;
  /**
   * Amount of tax associated with the line item.
   */
  taxAmount?: Decimal$ | number | null | undefined;
  /**
   * Total amount of the line item, including discounts and tax.
   */
  totalAmount?: Decimal$ | number | null | undefined;
  /**
   * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
   */
  accountRef?: AccountRef | undefined;
  /**
   * Percentage rate of any discount applied to the line item.
   */
  discountPercentage?: Decimal$ | number | null | undefined;
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
  taxRateRef?: TaxRateReference | undefined;
  /**
   * Reference to the item the line is linked to.
   */
  itemRef?: ItemReference | undefined;
  /**
   * Links the current record line to the underlying record line that created it.
   *
   * @remarks
   *
   * For example, if a bill is generated from a purchase order, this property allows you to connect the bill line item to the purchase order line item in our data model.
   */
  createdFromLineRef?: Zero | undefined;
  /**
   * Reference to the tracking categories to which the line item is linked.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  tracking?: AccountsPayableTracking | undefined;
};

/** @internal */
export const TaxRateReference$inboundSchema: z.ZodType<
  TaxRateReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  effectiveTaxRate: z.number().transform(v => new Decimal$(v)).optional(),
});

/** @internal */
export type TaxRateReference$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  effectiveTaxRate?: number | undefined;
};

/** @internal */
export const TaxRateReference$outboundSchema: z.ZodType<
  TaxRateReference$Outbound,
  z.ZodTypeDef,
  TaxRateReference
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
export namespace TaxRateReference$ {
  /** @deprecated use `TaxRateReference$inboundSchema` instead. */
  export const inboundSchema = TaxRateReference$inboundSchema;
  /** @deprecated use `TaxRateReference$outboundSchema` instead. */
  export const outboundSchema = TaxRateReference$outboundSchema;
  /** @deprecated use `TaxRateReference$Outbound` instead. */
  export type Outbound = TaxRateReference$Outbound;
}

export function taxRateReferenceToJSON(
  taxRateReference: TaxRateReference,
): string {
  return JSON.stringify(
    TaxRateReference$outboundSchema.parse(taxRateReference),
  );
}

export function taxRateReferenceFromJSON(
  jsonString: string,
): SafeParseResult<TaxRateReference, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxRateReference$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxRateReference' from JSON`,
  );
}

/** @internal */
export const ItemReference$inboundSchema: z.ZodType<
  ItemReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type ItemReference$Outbound = {
  id: string;
  name?: string | null | undefined;
};

/** @internal */
export const ItemReference$outboundSchema: z.ZodType<
  ItemReference$Outbound,
  z.ZodTypeDef,
  ItemReference
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ItemReference$ {
  /** @deprecated use `ItemReference$inboundSchema` instead. */
  export const inboundSchema = ItemReference$inboundSchema;
  /** @deprecated use `ItemReference$outboundSchema` instead. */
  export const outboundSchema = ItemReference$outboundSchema;
  /** @deprecated use `ItemReference$Outbound` instead. */
  export type Outbound = ItemReference$Outbound;
}

export function itemReferenceToJSON(itemReference: ItemReference): string {
  return JSON.stringify(ItemReference$outboundSchema.parse(itemReference));
}

export function itemReferenceFromJSON(
  jsonString: string,
): SafeParseResult<ItemReference, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ItemReference$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ItemReference' from JSON`,
  );
}

/** @internal */
export const BillCreditNoteLineItem$inboundSchema: z.ZodType<
  BillCreditNoteLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.number().transform(v => new Decimal$(v)),
  quantity: z.number().transform(v => new Decimal$(v)),
  unitOfMeasurement: z.nullable(z.string()).optional(),
  discountAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  subTotal: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  taxAmount: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  totalAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  accountRef: AccountRef$inboundSchema.optional(),
  discountPercentage: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  taxRateRef: z.lazy(() => TaxRateReference$inboundSchema).optional(),
  itemRef: z.lazy(() => ItemReference$inboundSchema).optional(),
  createdFromLineRef: Zero$inboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$inboundSchema))
    .optional(),
  tracking: AccountsPayableTracking$inboundSchema.optional(),
});

/** @internal */
export type BillCreditNoteLineItem$Outbound = {
  description?: string | null | undefined;
  unitAmount: number;
  quantity: number;
  unitOfMeasurement?: string | null | undefined;
  discountAmount?: number | null | undefined;
  subTotal?: number | null | undefined;
  taxAmount?: number | null | undefined;
  totalAmount?: number | null | undefined;
  accountRef?: AccountRef$Outbound | undefined;
  discountPercentage?: number | null | undefined;
  taxRateRef?: TaxRateReference$Outbound | undefined;
  itemRef?: ItemReference$Outbound | undefined;
  createdFromLineRef?: Zero$Outbound | undefined;
  trackingCategoryRefs?: Array<TrackingCategoryRef$Outbound> | null | undefined;
  tracking?: AccountsPayableTracking$Outbound | undefined;
};

/** @internal */
export const BillCreditNoteLineItem$outboundSchema: z.ZodType<
  BillCreditNoteLineItem$Outbound,
  z.ZodTypeDef,
  BillCreditNoteLineItem
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  quantity: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  unitOfMeasurement: z.nullable(z.string()).optional(),
  discountAmount: z.nullable(
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
  discountPercentage: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  taxRateRef: z.lazy(() => TaxRateReference$outboundSchema).optional(),
  itemRef: z.lazy(() => ItemReference$outboundSchema).optional(),
  createdFromLineRef: Zero$outboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$outboundSchema))
    .optional(),
  tracking: AccountsPayableTracking$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillCreditNoteLineItem$ {
  /** @deprecated use `BillCreditNoteLineItem$inboundSchema` instead. */
  export const inboundSchema = BillCreditNoteLineItem$inboundSchema;
  /** @deprecated use `BillCreditNoteLineItem$outboundSchema` instead. */
  export const outboundSchema = BillCreditNoteLineItem$outboundSchema;
  /** @deprecated use `BillCreditNoteLineItem$Outbound` instead. */
  export type Outbound = BillCreditNoteLineItem$Outbound;
}

export function billCreditNoteLineItemToJSON(
  billCreditNoteLineItem: BillCreditNoteLineItem,
): string {
  return JSON.stringify(
    BillCreditNoteLineItem$outboundSchema.parse(billCreditNoteLineItem),
  );
}

export function billCreditNoteLineItemFromJSON(
  jsonString: string,
): SafeParseResult<BillCreditNoteLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillCreditNoteLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillCreditNoteLineItem' from JSON`,
  );
}
