/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCreateAccountModelRequest = {
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
export const GetCreateAccountModelRequest$inboundSchema: z.ZodType<
  GetCreateAccountModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetCreateAccountModelRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetCreateAccountModelRequest$outboundSchema: z.ZodType<
  GetCreateAccountModelRequest$Outbound,
  z.ZodTypeDef,
  GetCreateAccountModelRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateAccountModelRequest$ {
  /** @deprecated use `GetCreateAccountModelRequest$inboundSchema` instead. */
  export const inboundSchema = GetCreateAccountModelRequest$inboundSchema;
  /** @deprecated use `GetCreateAccountModelRequest$outboundSchema` instead. */
  export const outboundSchema = GetCreateAccountModelRequest$outboundSchema;
  /** @deprecated use `GetCreateAccountModelRequest$Outbound` instead. */
  export type Outbound = GetCreateAccountModelRequest$Outbound;
}
