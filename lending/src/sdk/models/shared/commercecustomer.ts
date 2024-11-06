/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CommerceAddress,
  CommerceAddress$inboundSchema,
  CommerceAddress$Outbound,
  CommerceAddress$outboundSchema,
} from "./commerceaddress.js";

/**
 * When a customer places an order with the connected commerce store their details are added to the Customers dataset. You can use the data from the Customers endpoints to calculate key metrics, such as customer churn.
 */
export type CommerceCustomer = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * A unique, persistent identifier for this record
   */
  id: string;
  /**
   * Name of the customer
   */
  customerName?: string | undefined;
  /**
   * Email address of the customer
   */
  emailAddress?: string | undefined;
  /**
   * A phone number.
   */
  phone?: string | null | undefined;
  defaultCurrency?: string | undefined;
  /**
   * Addresses of the customer
   */
  addresses?: Array<CommerceAddress> | undefined;
  /**
   * Any additional information about the customer
   */
  note?: string | undefined;
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
export const CommerceCustomer$inboundSchema: z.ZodType<
  CommerceCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  customerName: z.string().optional(),
  emailAddress: z.string().optional(),
  phone: z.nullable(z.string()).optional(),
  defaultCurrency: z.string().optional(),
  addresses: z.array(CommerceAddress$inboundSchema).optional(),
  note: z.string().optional(),
  createdDate: z.string().optional(),
});

/** @internal */
export type CommerceCustomer$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id: string;
  customerName?: string | undefined;
  emailAddress?: string | undefined;
  phone?: string | null | undefined;
  defaultCurrency?: string | undefined;
  addresses?: Array<CommerceAddress$Outbound> | undefined;
  note?: string | undefined;
  createdDate?: string | undefined;
};

/** @internal */
export const CommerceCustomer$outboundSchema: z.ZodType<
  CommerceCustomer$Outbound,
  z.ZodTypeDef,
  CommerceCustomer
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  customerName: z.string().optional(),
  emailAddress: z.string().optional(),
  phone: z.nullable(z.string()).optional(),
  defaultCurrency: z.string().optional(),
  addresses: z.array(CommerceAddress$outboundSchema).optional(),
  note: z.string().optional(),
  createdDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceCustomer$ {
  /** @deprecated use `CommerceCustomer$inboundSchema` instead. */
  export const inboundSchema = CommerceCustomer$inboundSchema;
  /** @deprecated use `CommerceCustomer$outboundSchema` instead. */
  export const outboundSchema = CommerceCustomer$outboundSchema;
  /** @deprecated use `CommerceCustomer$Outbound` instead. */
  export type Outbound = CommerceCustomer$Outbound;
}
