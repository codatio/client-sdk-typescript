/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  BillPayment,
  BillPayment$inboundSchema,
  BillPayment$Outbound,
  BillPayment$outboundSchema,
} from "./billpayment.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type BillPayments = {
  results?: Array<BillPayment> | undefined;
  /**
   * Current page number.
   */
  pageNumber: number;
  /**
   * Number of items to return in results array.
   */
  pageSize: number;
  /**
   * Total number of items.
   */
  totalResults: number;
  links: Links;
};

/** @internal */
export const BillPayments$inboundSchema: z.ZodType<
  BillPayments,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(BillPayment$inboundSchema).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  _links: Links$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type BillPayments$Outbound = {
  results?: Array<BillPayment$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const BillPayments$outboundSchema: z.ZodType<
  BillPayments$Outbound,
  z.ZodTypeDef,
  BillPayments
> = z.object({
  results: z.array(BillPayment$outboundSchema).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  links: Links$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillPayments$ {
  /** @deprecated use `BillPayments$inboundSchema` instead. */
  export const inboundSchema = BillPayments$inboundSchema;
  /** @deprecated use `BillPayments$outboundSchema` instead. */
  export const outboundSchema = BillPayments$outboundSchema;
  /** @deprecated use `BillPayments$Outbound` instead. */
  export type Outbound = BillPayments$Outbound;
}
