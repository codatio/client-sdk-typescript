/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAccountingAccountTransactionRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for an account transaction.
   */
  accountTransactionId: string;
};

/** @internal */
export const GetAccountingAccountTransactionRequest$inboundSchema: z.ZodType<
  GetAccountingAccountTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountTransactionId: z.string(),
});

/** @internal */
export type GetAccountingAccountTransactionRequest$Outbound = {
  companyId: string;
  connectionId: string;
  accountTransactionId: string;
};

/** @internal */
export const GetAccountingAccountTransactionRequest$outboundSchema: z.ZodType<
  GetAccountingAccountTransactionRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingAccountTransactionRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountTransactionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingAccountTransactionRequest$ {
  /** @deprecated use `GetAccountingAccountTransactionRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountingAccountTransactionRequest$inboundSchema;
  /** @deprecated use `GetAccountingAccountTransactionRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountingAccountTransactionRequest$outboundSchema;
  /** @deprecated use `GetAccountingAccountTransactionRequest$Outbound` instead. */
  export type Outbound = GetAccountingAccountTransactionRequest$Outbound;
}
