/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBankingAccountRequest = {
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
export const GetBankingAccountRequest$inboundSchema: z.ZodType<
  GetBankingAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountId: z.string(),
});

/** @internal */
export type GetBankingAccountRequest$Outbound = {
  companyId: string;
  connectionId: string;
  accountId: string;
};

/** @internal */
export const GetBankingAccountRequest$outboundSchema: z.ZodType<
  GetBankingAccountRequest$Outbound,
  z.ZodTypeDef,
  GetBankingAccountRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  accountId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBankingAccountRequest$ {
  /** @deprecated use `GetBankingAccountRequest$inboundSchema` instead. */
  export const inboundSchema = GetBankingAccountRequest$inboundSchema;
  /** @deprecated use `GetBankingAccountRequest$outboundSchema` instead. */
  export const outboundSchema = GetBankingAccountRequest$outboundSchema;
  /** @deprecated use `GetBankingAccountRequest$Outbound` instead. */
  export type Outbound = GetBankingAccountRequest$Outbound;
}

export function getBankingAccountRequestToJSON(
  getBankingAccountRequest: GetBankingAccountRequest,
): string {
  return JSON.stringify(
    GetBankingAccountRequest$outboundSchema.parse(getBankingAccountRequest),
  );
}

export function getBankingAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBankingAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBankingAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBankingAccountRequest' from JSON`,
  );
}
