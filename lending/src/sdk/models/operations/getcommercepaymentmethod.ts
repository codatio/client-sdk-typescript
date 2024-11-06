/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCommercePaymentMethodRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a payment method.
   */
  paymentMethodId: string;
};

/** @internal */
export const GetCommercePaymentMethodRequest$inboundSchema: z.ZodType<
  GetCommercePaymentMethodRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  paymentMethodId: z.string(),
});

/** @internal */
export type GetCommercePaymentMethodRequest$Outbound = {
  companyId: string;
  connectionId: string;
  paymentMethodId: string;
};

/** @internal */
export const GetCommercePaymentMethodRequest$outboundSchema: z.ZodType<
  GetCommercePaymentMethodRequest$Outbound,
  z.ZodTypeDef,
  GetCommercePaymentMethodRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  paymentMethodId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommercePaymentMethodRequest$ {
  /** @deprecated use `GetCommercePaymentMethodRequest$inboundSchema` instead. */
  export const inboundSchema = GetCommercePaymentMethodRequest$inboundSchema;
  /** @deprecated use `GetCommercePaymentMethodRequest$outboundSchema` instead. */
  export const outboundSchema = GetCommercePaymentMethodRequest$outboundSchema;
  /** @deprecated use `GetCommercePaymentMethodRequest$Outbound` instead. */
  export type Outbound = GetCommercePaymentMethodRequest$Outbound;
}
