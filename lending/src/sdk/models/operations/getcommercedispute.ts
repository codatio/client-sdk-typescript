/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCommerceDisputeRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a dispute.
   */
  disputeId: string;
};

/** @internal */
export const GetCommerceDisputeRequest$inboundSchema: z.ZodType<
  GetCommerceDisputeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  disputeId: z.string(),
});

/** @internal */
export type GetCommerceDisputeRequest$Outbound = {
  companyId: string;
  connectionId: string;
  disputeId: string;
};

/** @internal */
export const GetCommerceDisputeRequest$outboundSchema: z.ZodType<
  GetCommerceDisputeRequest$Outbound,
  z.ZodTypeDef,
  GetCommerceDisputeRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  disputeId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCommerceDisputeRequest$ {
  /** @deprecated use `GetCommerceDisputeRequest$inboundSchema` instead. */
  export const inboundSchema = GetCommerceDisputeRequest$inboundSchema;
  /** @deprecated use `GetCommerceDisputeRequest$outboundSchema` instead. */
  export const outboundSchema = GetCommerceDisputeRequest$outboundSchema;
  /** @deprecated use `GetCommerceDisputeRequest$Outbound` instead. */
  export type Outbound = GetCommerceDisputeRequest$Outbound;
}
