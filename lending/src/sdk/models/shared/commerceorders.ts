/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceOrder,
  CommerceOrder$inboundSchema,
  CommerceOrder$Outbound,
  CommerceOrder$outboundSchema,
} from "./commerceorder.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type CommerceOrders = {
  results?: Array<CommerceOrder> | undefined;
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
export const CommerceOrders$inboundSchema: z.ZodType<
  CommerceOrders,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(CommerceOrder$inboundSchema).optional(),
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
export type CommerceOrders$Outbound = {
  results?: Array<CommerceOrder$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const CommerceOrders$outboundSchema: z.ZodType<
  CommerceOrders$Outbound,
  z.ZodTypeDef,
  CommerceOrders
> = z.object({
  results: z.array(CommerceOrder$outboundSchema).optional(),
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
export namespace CommerceOrders$ {
  /** @deprecated use `CommerceOrders$inboundSchema` instead. */
  export const inboundSchema = CommerceOrders$inboundSchema;
  /** @deprecated use `CommerceOrders$outboundSchema` instead. */
  export const outboundSchema = CommerceOrders$outboundSchema;
  /** @deprecated use `CommerceOrders$Outbound` instead. */
  export type Outbound = CommerceOrders$Outbound;
}

export function commerceOrdersToJSON(commerceOrders: CommerceOrders): string {
  return JSON.stringify(CommerceOrders$outboundSchema.parse(commerceOrders));
}

export function commerceOrdersFromJSON(
  jsonString: string,
): SafeParseResult<CommerceOrders, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceOrders$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceOrders' from JSON`,
  );
}
