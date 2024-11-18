/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Reference that links the line item to the specific version of product that has been ordered.
 */
export type ProductVariantRef = {
  /**
   * The unique identifier of the product variant being referenced.
   */
  id: string;
  /**
   * Name of the product variant being referenced.
   */
  name?: string | undefined;
};

/** @internal */
export const ProductVariantRef$inboundSchema: z.ZodType<
  ProductVariantRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/** @internal */
export type ProductVariantRef$Outbound = {
  id: string;
  name?: string | undefined;
};

/** @internal */
export const ProductVariantRef$outboundSchema: z.ZodType<
  ProductVariantRef$Outbound,
  z.ZodTypeDef,
  ProductVariantRef
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductVariantRef$ {
  /** @deprecated use `ProductVariantRef$inboundSchema` instead. */
  export const inboundSchema = ProductVariantRef$inboundSchema;
  /** @deprecated use `ProductVariantRef$outboundSchema` instead. */
  export const outboundSchema = ProductVariantRef$outboundSchema;
  /** @deprecated use `ProductVariantRef$Outbound` instead. */
  export type Outbound = ProductVariantRef$Outbound;
}

export function productVariantRefToJSON(
  productVariantRef: ProductVariantRef,
): string {
  return JSON.stringify(
    ProductVariantRef$outboundSchema.parse(productVariantRef),
  );
}

export function productVariantRefFromJSON(
  jsonString: string,
): SafeParseResult<ProductVariantRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductVariantRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductVariantRef' from JSON`,
  );
}
