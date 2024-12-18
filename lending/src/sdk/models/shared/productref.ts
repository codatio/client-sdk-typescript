/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Reference that links the line item to the correct product details.
 */
export type ProductRef = {
  /**
   * The unique identifier of the product being referenced.
   */
  id: string;
  /**
   * Name of the product being referenced.
   */
  name?: string | undefined;
};

/** @internal */
export const ProductRef$inboundSchema: z.ZodType<
  ProductRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/** @internal */
export type ProductRef$Outbound = {
  id: string;
  name?: string | undefined;
};

/** @internal */
export const ProductRef$outboundSchema: z.ZodType<
  ProductRef$Outbound,
  z.ZodTypeDef,
  ProductRef
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductRef$ {
  /** @deprecated use `ProductRef$inboundSchema` instead. */
  export const inboundSchema = ProductRef$inboundSchema;
  /** @deprecated use `ProductRef$outboundSchema` instead. */
  export const outboundSchema = ProductRef$outboundSchema;
  /** @deprecated use `ProductRef$Outbound` instead. */
  export type Outbound = ProductRef$Outbound;
}

export function productRefToJSON(productRef: ProductRef): string {
  return JSON.stringify(ProductRef$outboundSchema.parse(productRef));
}

export function productRefFromJSON(
  jsonString: string,
): SafeParseResult<ProductRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductRef' from JSON`,
  );
}
