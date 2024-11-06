/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCreatePaymentModelRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const GetCreatePaymentModelRequest$inboundSchema: z.ZodType<
  GetCreatePaymentModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetCreatePaymentModelRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetCreatePaymentModelRequest$outboundSchema: z.ZodType<
  GetCreatePaymentModelRequest$Outbound,
  z.ZodTypeDef,
  GetCreatePaymentModelRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreatePaymentModelRequest$ {
  /** @deprecated use `GetCreatePaymentModelRequest$inboundSchema` instead. */
  export const inboundSchema = GetCreatePaymentModelRequest$inboundSchema;
  /** @deprecated use `GetCreatePaymentModelRequest$outboundSchema` instead. */
  export const outboundSchema = GetCreatePaymentModelRequest$outboundSchema;
  /** @deprecated use `GetCreatePaymentModelRequest$Outbound` instead. */
  export type Outbound = GetCreatePaymentModelRequest$Outbound;
}
