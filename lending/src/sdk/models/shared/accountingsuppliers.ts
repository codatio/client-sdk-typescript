/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  AccountingSupplier,
  AccountingSupplier$inboundSchema,
  AccountingSupplier$Outbound,
  AccountingSupplier$outboundSchema,
} from "./accountingsupplier.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type AccountingSuppliers = {
  results?: Array<AccountingSupplier> | undefined;
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
export const AccountingSuppliers$inboundSchema: z.ZodType<
  AccountingSuppliers,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(AccountingSupplier$inboundSchema).optional(),
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
export type AccountingSuppliers$Outbound = {
  results?: Array<AccountingSupplier$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const AccountingSuppliers$outboundSchema: z.ZodType<
  AccountingSuppliers$Outbound,
  z.ZodTypeDef,
  AccountingSuppliers
> = z.object({
  results: z.array(AccountingSupplier$outboundSchema).optional(),
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
export namespace AccountingSuppliers$ {
  /** @deprecated use `AccountingSuppliers$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliers$inboundSchema;
  /** @deprecated use `AccountingSuppliers$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliers$outboundSchema;
  /** @deprecated use `AccountingSuppliers$Outbound` instead. */
  export type Outbound = AccountingSuppliers$Outbound;
}
