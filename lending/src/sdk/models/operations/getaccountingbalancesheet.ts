/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingBalanceSheetRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Number of months defining the period of interest.
   */
  periodLength: number;
  /**
   * Number of periods with `periodLength` to compare.
   */
  periodsToCompare: number;
  /**
   * The month the report starts from.
   */
  startMonth?: string | undefined;
};

/** @internal */
export const GetAccountingBalanceSheetRequest$inboundSchema: z.ZodType<
  GetAccountingBalanceSheetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  periodLength: z.number().int(),
  periodsToCompare: z.number().int(),
  startMonth: z.string().optional(),
});

/** @internal */
export type GetAccountingBalanceSheetRequest$Outbound = {
  companyId: string;
  periodLength: number;
  periodsToCompare: number;
  startMonth?: string | undefined;
};

/** @internal */
export const GetAccountingBalanceSheetRequest$outboundSchema: z.ZodType<
  GetAccountingBalanceSheetRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingBalanceSheetRequest
> = z.object({
  companyId: z.string(),
  periodLength: z.number().int(),
  periodsToCompare: z.number().int(),
  startMonth: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingBalanceSheetRequest$ {
  /** @deprecated use `GetAccountingBalanceSheetRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingBalanceSheetRequest$inboundSchema;
  /** @deprecated use `GetAccountingBalanceSheetRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingBalanceSheetRequest$outboundSchema;
  /** @deprecated use `GetAccountingBalanceSheetRequest$Outbound` instead. */
  export type Outbound = GetAccountingBalanceSheetRequest$Outbound;
}

export function getAccountingBalanceSheetRequestToJSON(
  getAccountingBalanceSheetRequest: GetAccountingBalanceSheetRequest,
): string {
  return JSON.stringify(
    GetAccountingBalanceSheetRequest$outboundSchema.parse(
      getAccountingBalanceSheetRequest,
    ),
  );
}

export function getAccountingBalanceSheetRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingBalanceSheetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingBalanceSheetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingBalanceSheetRequest' from JSON`,
  );
}
