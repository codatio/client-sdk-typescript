/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceCustomerRef,
  CommerceCustomerRef$inboundSchema,
  CommerceCustomerRef$Outbound,
  CommerceCustomerRef$outboundSchema,
} from "./commercecustomerref.js";
import {
  LocationRef,
  LocationRef$inboundSchema,
  LocationRef$Outbound,
  LocationRef$outboundSchema,
} from "./locationref.js";
import {
  OrderLineItem,
  OrderLineItem$inboundSchema,
  OrderLineItem$Outbound,
  OrderLineItem$outboundSchema,
} from "./orderlineitem.js";
import {
  PaymentRef,
  PaymentRef$inboundSchema,
  PaymentRef$Outbound,
  PaymentRef$outboundSchema,
} from "./paymentref.js";
import {
  ServiceCharge,
  ServiceCharge$inboundSchema,
  ServiceCharge$Outbound,
  ServiceCharge$outboundSchema,
} from "./servicecharge.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";

/**
 * Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order. You can use data from the Orders endpoints to calculate key metrics, such as gross sales values and monthly recurring revenue (MRR).
 *
 * @remarks
 */
export type CommerceOrder = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * A unique, persistent identifier for this record
   */
  id: string;
  /**
   * Friendly reference for the order in the commerce or point of sale platform.
   */
  orderNumber?: string | undefined;
  /**
   * The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.
   *
   * @remarks
   *
   * Depending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model.
   *
   * For POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://docs.codat.io/lending-api#/operations/get-companies-companyId-connections-connectionId-push) endpoint.
   */
  country?: string | undefined;
  currency?: string | undefined;
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
  closedDate?: string | undefined;
  /**
   * Total amount of the order, including discounts, refunds, and tax, but excluding gratuities.
   */
  totalAmount?: Decimal$ | number | undefined;
  /**
   * Total amount of any refunds issued on the order, including discounts and tax, but excluding gratuities. This is always negative.
   */
  totalRefund?: Decimal$ | number | undefined;
  /**
   * Total amount of tax applied to the order.
   */
  totalTaxAmount?: Decimal$ | number | undefined;
  /**
   * Total amount of any discounts applied to the order, excluding tax. This is typically positive (for discounts which decrease the amount of the order), but can also be negative (for discounts which increase the amount of the order).
   */
  totalDiscount?: Decimal$ | number | undefined;
  /**
   * Extra amount added to the order.
   */
  totalGratuity?: Decimal$ | number | undefined;
  orderLineItems?: Array<OrderLineItem> | undefined;
  payments?: Array<PaymentRef> | undefined;
  serviceCharges?: Array<ServiceCharge> | undefined;
  /**
   * Reference to the geographic location where the order was placed.
   */
  locationRef?: LocationRef | undefined;
  /**
   * Reference to the customer that placed the order.
   */
  customerRef?: CommerceCustomerRef | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
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
  createdDate?: string | undefined;
};

/** @internal */
export const CommerceOrder$inboundSchema: z.ZodType<
  CommerceOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  orderNumber: z.string().optional(),
  country: z.string().optional(),
  currency: z.string().optional(),
  closedDate: z.string().optional(),
  totalAmount: z.number().transform(v => new Decimal$(v)).optional(),
  totalRefund: z.number().transform(v => new Decimal$(v)).optional(),
  totalTaxAmount: z.number().transform(v => new Decimal$(v)).optional(),
  totalDiscount: z.number().transform(v => new Decimal$(v)).optional(),
  totalGratuity: z.number().transform(v => new Decimal$(v)).optional(),
  orderLineItems: z.array(OrderLineItem$inboundSchema).optional(),
  payments: z.array(PaymentRef$inboundSchema).optional(),
  serviceCharges: z.array(ServiceCharge$inboundSchema).optional(),
  locationRef: LocationRef$inboundSchema.optional(),
  customerRef: CommerceCustomerRef$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
  createdDate: z.string().optional(),
});

/** @internal */
export type CommerceOrder$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id: string;
  orderNumber?: string | undefined;
  country?: string | undefined;
  currency?: string | undefined;
  closedDate?: string | undefined;
  totalAmount?: number | undefined;
  totalRefund?: number | undefined;
  totalTaxAmount?: number | undefined;
  totalDiscount?: number | undefined;
  totalGratuity?: number | undefined;
  orderLineItems?: Array<OrderLineItem$Outbound> | undefined;
  payments?: Array<PaymentRef$Outbound> | undefined;
  serviceCharges?: Array<ServiceCharge$Outbound> | undefined;
  locationRef?: LocationRef$Outbound | undefined;
  customerRef?: CommerceCustomerRef$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
  createdDate?: string | undefined;
};

/** @internal */
export const CommerceOrder$outboundSchema: z.ZodType<
  CommerceOrder$Outbound,
  z.ZodTypeDef,
  CommerceOrder
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  orderNumber: z.string().optional(),
  country: z.string().optional(),
  currency: z.string().optional(),
  closedDate: z.string().optional(),
  totalAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalRefund: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalTaxAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalDiscount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  totalGratuity: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  orderLineItems: z.array(OrderLineItem$outboundSchema).optional(),
  payments: z.array(PaymentRef$outboundSchema).optional(),
  serviceCharges: z.array(ServiceCharge$outboundSchema).optional(),
  locationRef: LocationRef$outboundSchema.optional(),
  customerRef: CommerceCustomerRef$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
  createdDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceOrder$ {
  /** @deprecated use `CommerceOrder$inboundSchema` instead. */
  export const inboundSchema = CommerceOrder$inboundSchema;
  /** @deprecated use `CommerceOrder$outboundSchema` instead. */
  export const outboundSchema = CommerceOrder$outboundSchema;
  /** @deprecated use `CommerceOrder$Outbound` instead. */
  export type Outbound = CommerceOrder$Outbound;
}

export function commerceOrderToJSON(commerceOrder: CommerceOrder): string {
  return JSON.stringify(CommerceOrder$outboundSchema.parse(commerceOrder));
}

export function commerceOrderFromJSON(
  jsonString: string,
): SafeParseResult<CommerceOrder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceOrder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceOrder' from JSON`,
  );
}
