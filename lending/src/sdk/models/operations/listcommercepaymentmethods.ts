/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ListCommercePaymentMethodsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  page?: number | undefined;
  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  pageSize?: number | undefined;
  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  query?: string | undefined;
  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  orderBy?: string | undefined;
};

/** @internal */
export const ListCommercePaymentMethodsRequest$inboundSchema: z.ZodType<
  ListCommercePaymentMethodsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/** @internal */
export type ListCommercePaymentMethodsRequest$Outbound = {
  companyId: string;
  connectionId: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
  orderBy?: string | undefined;
};

/** @internal */
export const ListCommercePaymentMethodsRequest$outboundSchema: z.ZodType<
  ListCommercePaymentMethodsRequest$Outbound,
  z.ZodTypeDef,
  ListCommercePaymentMethodsRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommercePaymentMethodsRequest$ {
  /** @deprecated use `ListCommercePaymentMethodsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCommercePaymentMethodsRequest$inboundSchema;
  /** @deprecated use `ListCommercePaymentMethodsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListCommercePaymentMethodsRequest$outboundSchema;
  /** @deprecated use `ListCommercePaymentMethodsRequest$Outbound` instead. */
  export type Outbound = ListCommercePaymentMethodsRequest$Outbound;
}
