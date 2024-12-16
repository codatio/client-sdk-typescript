/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCreateBankTransactionsModelRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for an account.
   */
  accountId: string;
};

/** @internal */
export const GetCreateBankTransactionsModelRequest$inboundSchema: z.ZodType<
  GetCreateBankTransactionsModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountId: z.string(),
});

/** @internal */
export type GetCreateBankTransactionsModelRequest$Outbound = {
  companyId: string;
  connectionId: string;
  accountId: string;
};

/** @internal */
export const GetCreateBankTransactionsModelRequest$outboundSchema: z.ZodType<
  GetCreateBankTransactionsModelRequest$Outbound,
  z.ZodTypeDef,
  GetCreateBankTransactionsModelRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateBankTransactionsModelRequest$ {
  /** @deprecated use `GetCreateBankTransactionsModelRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCreateBankTransactionsModelRequest$inboundSchema;
  /** @deprecated use `GetCreateBankTransactionsModelRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCreateBankTransactionsModelRequest$outboundSchema;
  /** @deprecated use `GetCreateBankTransactionsModelRequest$Outbound` instead. */
  export type Outbound = GetCreateBankTransactionsModelRequest$Outbound;
}

export function getCreateBankTransactionsModelRequestToJSON(
  getCreateBankTransactionsModelRequest: GetCreateBankTransactionsModelRequest,
): string {
  return JSON.stringify(
    GetCreateBankTransactionsModelRequest$outboundSchema.parse(
      getCreateBankTransactionsModelRequest,
    ),
  );
}

export function getCreateBankTransactionsModelRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCreateBankTransactionsModelRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetCreateBankTransactionsModelRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCreateBankTransactionsModelRequest' from JSON`,
  );
}