/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetBillPaymentsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a bill payment.
   */
  billPaymentId: string;
};

/** @internal */
export const GetBillPaymentsRequest$inboundSchema: z.ZodType<
  GetBillPaymentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  billPaymentId: z.string(),
});

/** @internal */
export type GetBillPaymentsRequest$Outbound = {
  companyId: string;
  billPaymentId: string;
};

/** @internal */
export const GetBillPaymentsRequest$outboundSchema: z.ZodType<
  GetBillPaymentsRequest$Outbound,
  z.ZodTypeDef,
  GetBillPaymentsRequest
> = z.object({
  companyId: z.string(),
  billPaymentId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBillPaymentsRequest$ {
  /** @deprecated use `GetBillPaymentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetBillPaymentsRequest$inboundSchema;
  /** @deprecated use `GetBillPaymentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetBillPaymentsRequest$outboundSchema;
  /** @deprecated use `GetBillPaymentsRequest$Outbound` instead. */
  export type Outbound = GetBillPaymentsRequest$Outbound;
}