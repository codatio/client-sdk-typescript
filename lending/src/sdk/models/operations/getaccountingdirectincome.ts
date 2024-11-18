/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingDirectIncomeRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a direct income.
   */
  directIncomeId: string;
};

/** @internal */
export const GetAccountingDirectIncomeRequest$inboundSchema: z.ZodType<
  GetAccountingDirectIncomeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  directIncomeId: z.string(),
});

/** @internal */
export type GetAccountingDirectIncomeRequest$Outbound = {
  companyId: string;
  connectionId: string;
  directIncomeId: string;
};

/** @internal */
export const GetAccountingDirectIncomeRequest$outboundSchema: z.ZodType<
  GetAccountingDirectIncomeRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingDirectIncomeRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  directIncomeId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingDirectIncomeRequest$ {
  /** @deprecated use `GetAccountingDirectIncomeRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingDirectIncomeRequest$inboundSchema;
  /** @deprecated use `GetAccountingDirectIncomeRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingDirectIncomeRequest$outboundSchema;
  /** @deprecated use `GetAccountingDirectIncomeRequest$Outbound` instead. */
  export type Outbound = GetAccountingDirectIncomeRequest$Outbound;
}

export function getAccountingDirectIncomeRequestToJSON(
  getAccountingDirectIncomeRequest: GetAccountingDirectIncomeRequest,
): string {
  return JSON.stringify(
    GetAccountingDirectIncomeRequest$outboundSchema.parse(
      getAccountingDirectIncomeRequest,
    ),
  );
}

export function getAccountingDirectIncomeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingDirectIncomeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingDirectIncomeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingDirectIncomeRequest' from JSON`,
  );
}
