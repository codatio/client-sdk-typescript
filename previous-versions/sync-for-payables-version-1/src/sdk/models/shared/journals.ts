/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  Journal,
  Journal$inboundSchema,
  Journal$Outbound,
  Journal$outboundSchema,
} from "./journal.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type Journals = {
  results?: Array<Journal> | undefined;
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
export const Journals$inboundSchema: z.ZodType<
  Journals,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(Journal$inboundSchema).optional(),
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
export type Journals$Outbound = {
  results?: Array<Journal$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const Journals$outboundSchema: z.ZodType<
  Journals$Outbound,
  z.ZodTypeDef,
  Journals
> = z.object({
  results: z.array(Journal$outboundSchema).optional(),
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
export namespace Journals$ {
  /** @deprecated use `Journals$inboundSchema` instead. */
  export const inboundSchema = Journals$inboundSchema;
  /** @deprecated use `Journals$outboundSchema` instead. */
  export const outboundSchema = Journals$outboundSchema;
  /** @deprecated use `Journals$Outbound` instead. */
  export type Outbound = Journals$Outbound;
}
