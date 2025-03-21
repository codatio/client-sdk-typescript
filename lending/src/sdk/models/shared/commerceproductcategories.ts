/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceProductCategory,
  CommerceProductCategory$inboundSchema,
  CommerceProductCategory$Outbound,
  CommerceProductCategory$outboundSchema,
} from "./commerceproductcategory.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type CommerceProductCategories = {
  results?: Array<CommerceProductCategory | null> | undefined;
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
export const CommerceProductCategories$inboundSchema: z.ZodType<
  CommerceProductCategories,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(z.nullable(CommerceProductCategory$inboundSchema))
    .optional(),
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
export type CommerceProductCategories$Outbound = {
  results?: Array<CommerceProductCategory$Outbound | null> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const CommerceProductCategories$outboundSchema: z.ZodType<
  CommerceProductCategories$Outbound,
  z.ZodTypeDef,
  CommerceProductCategories
> = z.object({
  results: z.array(z.nullable(CommerceProductCategory$outboundSchema))
    .optional(),
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
export namespace CommerceProductCategories$ {
  /** @deprecated use `CommerceProductCategories$inboundSchema` instead. */
  export const inboundSchema = CommerceProductCategories$inboundSchema;
  /** @deprecated use `CommerceProductCategories$outboundSchema` instead. */
  export const outboundSchema = CommerceProductCategories$outboundSchema;
  /** @deprecated use `CommerceProductCategories$Outbound` instead. */
  export type Outbound = CommerceProductCategories$Outbound;
}

export function commerceProductCategoriesToJSON(
  commerceProductCategories: CommerceProductCategories,
): string {
  return JSON.stringify(
    CommerceProductCategories$outboundSchema.parse(commerceProductCategories),
  );
}

export function commerceProductCategoriesFromJSON(
  jsonString: string,
): SafeParseResult<CommerceProductCategories, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceProductCategories$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceProductCategories' from JSON`,
  );
}
