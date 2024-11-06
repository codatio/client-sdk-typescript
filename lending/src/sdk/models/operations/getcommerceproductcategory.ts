/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCommerceProductCategoryRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a product.
   */
  productId: string;
};

/** @internal */
export const GetCommerceProductCategoryRequest$inboundSchema: z.ZodType<
  GetCommerceProductCategoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  productId: z.string(),
});

/** @internal */
export type GetCommerceProductCategoryRequest$Outbound = {
  companyId: string;
  connectionId: string;
  productId: string;
};

/** @internal */
export const GetCommerceProductCategoryRequest$outboundSchema: z.ZodType<
  GetCommerceProductCategoryRequest$Outbound,
  z.ZodTypeDef,
  GetCommerceProductCategoryRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  productId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommerceProductCategoryRequest$ {
  /** @deprecated use `GetCommerceProductCategoryRequest$inboundSchema` instead. */
  export const inboundSchema = GetCommerceProductCategoryRequest$inboundSchema;
  /** @deprecated use `GetCommerceProductCategoryRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCommerceProductCategoryRequest$outboundSchema;
  /** @deprecated use `GetCommerceProductCategoryRequest$Outbound` instead. */
  export type Outbound = GetCommerceProductCategoryRequest$Outbound;
}
