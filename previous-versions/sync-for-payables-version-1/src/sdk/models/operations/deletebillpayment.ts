/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteBillPaymentRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a bill payment.
   */
  billPaymentId: string;
};

/** @internal */
export const DeleteBillPaymentRequest$inboundSchema: z.ZodType<
  DeleteBillPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billPaymentId: z.string(),
});

/** @internal */
export type DeleteBillPaymentRequest$Outbound = {
  companyId: string;
  connectionId: string;
  billPaymentId: string;
};

/** @internal */
export const DeleteBillPaymentRequest$outboundSchema: z.ZodType<
  DeleteBillPaymentRequest$Outbound,
  z.ZodTypeDef,
  DeleteBillPaymentRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billPaymentId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBillPaymentRequest$ {
  /** @deprecated use `DeleteBillPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteBillPaymentRequest$inboundSchema;
  /** @deprecated use `DeleteBillPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteBillPaymentRequest$outboundSchema;
  /** @deprecated use `DeleteBillPaymentRequest$Outbound` instead. */
  export type Outbound = DeleteBillPaymentRequest$Outbound;
}
