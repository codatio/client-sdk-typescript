/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  Account,
  Account$inboundSchema,
  Account$Outbound,
  Account$outboundSchema,
} from "./account.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type Accounts = {
  results?: Array<Account> | undefined;
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
export const Accounts$inboundSchema: z.ZodType<
  Accounts,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(Account$inboundSchema).optional(),
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
export type Accounts$Outbound = {
  results?: Array<Account$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const Accounts$outboundSchema: z.ZodType<
  Accounts$Outbound,
  z.ZodTypeDef,
  Accounts
> = z.object({
  results: z.array(Account$outboundSchema).optional(),
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
export namespace Accounts$ {
  /** @deprecated use `Accounts$inboundSchema` instead. */
  export const inboundSchema = Accounts$inboundSchema;
  /** @deprecated use `Accounts$outboundSchema` instead. */
  export const outboundSchema = Accounts$outboundSchema;
  /** @deprecated use `Accounts$Outbound` instead. */
  export type Outbound = Accounts$Outbound;
}