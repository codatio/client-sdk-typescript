/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  AccountRef,
  AccountRef$inboundSchema,
  AccountRef$Outbound,
  AccountRef$outboundSchema,
} from "./accountref.js";
import {
  AccountsReceivableTracking,
  AccountsReceivableTracking$inboundSchema,
  AccountsReceivableTracking$Outbound,
  AccountsReceivableTracking$outboundSchema,
} from "./accountsreceivabletracking.js";
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

export type InvoiceLineItem = {
  /**
   * Friendly name of the goods or services provided.
   */
  description?: string | null | undefined;
  /**
   * Price of each unit of goods or services.
   */
  unitAmount: Decimal$ | number;
  /**
   * Number of units of goods or services provided.
   */
  quantity: Decimal$ | number;
  /**
   * Numerical value of any discounts applied.
   */
  discountAmount?: Decimal$ | number | null | undefined;
  /**
   * Amount of the line, inclusive of discounts but exclusive of tax.
   */
  subTotal?: Decimal$ | number | null | undefined;
  /**
   * Amount of tax for the line.
   */
  taxAmount?: Decimal$ | number | null | undefined;
  /**
   * Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified.
   */
  totalAmount?: Decimal$ | number | null | undefined;
  /**
   * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
   */
  accountRef?: AccountRef | undefined;
  /**
   * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
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
  taxRateRef?: TaxRateRef | undefined;
  /**
   * Reference to the item the line is linked to.
   */
  itemRef?: PropertieItemRef | undefined;
  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  tracking?: AccountsReceivableTracking | undefined;
  /**
   * The invoice is a direct income if `True`.
   */
  isDirectIncome?: boolean | undefined;
};

/** @internal */
export const InvoiceLineItem$inboundSchema: z.ZodType<
  InvoiceLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  unitAmount: z.number().transform(v => new Decimal$(v)),
  quantity: z.number().transform(v => new Decimal$(v)),
  discountAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  subTotal: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  taxAmount: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  totalAmount: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  accountRef: AccountRef$inboundSchema.optional(),
  discountPercentage: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  taxRateRef: TaxRateRef$inboundSchema.optional(),
  itemRef: PropertieItemRef$inboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$inboundSchema))
    .optional(),
  tracking: AccountsReceivableTracking$inboundSchema.optional(),
  isDirectIncome: z.boolean().optional(),
});

/** @internal */
export type InvoiceLineItem$Outbound = {
  description?: string | null | undefined;
  unitAmount: number;
  quantity: number;
  discountAmount?: number | null | undefined;
  subTotal?: number | null | undefined;
  taxAmount?: number | null | undefined;
  totalAmount?: number | null | undefined;
  accountRef?: AccountRef$Outbound | undefined;
  discountPercentage?: number | null | undefined;
  taxRateRef?: TaxRateRef$Outbound | undefined;
  itemRef?: PropertieItemRef$Outbound | undefined;
  trackingCategoryRefs?: Array<TrackingCategoryRef$Outbound> | null | undefined;
  tracking?: AccountsReceivableTracking$Outbound | undefined;
  isDirectIncome?: boolean | undefined;
};

/** @internal */
export const InvoiceLineItem$outboundSchema: z.ZodType<
  InvoiceLineItem$Outbound,
  z.ZodTypeDef,
  InvoiceLineItem
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
  taxRateRef: TaxRateRef$outboundSchema.optional(),
  itemRef: PropertieItemRef$outboundSchema.optional(),
  trackingCategoryRefs: z.nullable(z.array(TrackingCategoryRef$outboundSchema))
    .optional(),
  tracking: AccountsReceivableTracking$outboundSchema.optional(),
  isDirectIncome: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceLineItem$ {
  /** @deprecated use `InvoiceLineItem$inboundSchema` instead. */
  export const inboundSchema = InvoiceLineItem$inboundSchema;
  /** @deprecated use `InvoiceLineItem$outboundSchema` instead. */
  export const outboundSchema = InvoiceLineItem$outboundSchema;
  /** @deprecated use `InvoiceLineItem$Outbound` instead. */
  export type Outbound = InvoiceLineItem$Outbound;
}
