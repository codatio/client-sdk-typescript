/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BankFeedBankAccountMappingResponse = {
  /**
   * Unique ID for the source account.
   */
  sourceAccountId?: string | undefined;
  /**
   * Unique ID for the target account.
   */
  targetAccountId?: string | null | undefined;
  /**
   * Status of the POST request.
   */
  status?: string | null | undefined;
  /**
   * Error returned during the post request
   */
  error?: string | null | undefined;
};

/** @internal */
export const BankFeedBankAccountMappingResponse$inboundSchema: z.ZodType<
  BankFeedBankAccountMappingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceAccountId: z.string().optional(),
  targetAccountId: z.nullable(z.string()).optional(),
  status: z.nullable(z.string()).optional(),
  error: z.nullable(z.string()).optional(),
});

/** @internal */
export type BankFeedBankAccountMappingResponse$Outbound = {
  sourceAccountId?: string | undefined;
  targetAccountId?: string | null | undefined;
  status?: string | null | undefined;
  error?: string | null | undefined;
};

/** @internal */
export const BankFeedBankAccountMappingResponse$outboundSchema: z.ZodType<
  BankFeedBankAccountMappingResponse$Outbound,
  z.ZodTypeDef,
  BankFeedBankAccountMappingResponse
> = z.object({
  sourceAccountId: z.string().optional(),
  targetAccountId: z.nullable(z.string()).optional(),
  status: z.nullable(z.string()).optional(),
  error: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankFeedBankAccountMappingResponse$ {
  /** @deprecated use `BankFeedBankAccountMappingResponse$inboundSchema` instead. */
  export const inboundSchema = BankFeedBankAccountMappingResponse$inboundSchema;
  /** @deprecated use `BankFeedBankAccountMappingResponse$outboundSchema` instead. */
  export const outboundSchema =
    BankFeedBankAccountMappingResponse$outboundSchema;
  /** @deprecated use `BankFeedBankAccountMappingResponse$Outbound` instead. */
  export type Outbound = BankFeedBankAccountMappingResponse$Outbound;
}
