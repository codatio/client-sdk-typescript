/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingCashFlowStatementRequest = {
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
export const GetAccountingCashFlowStatementRequest$inboundSchema: z.ZodType<
  GetAccountingCashFlowStatementRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  periodLength: z.number().int(),
  periodsToCompare: z.number().int(),
  startMonth: z.string().optional(),
});

/** @internal */
export type GetAccountingCashFlowStatementRequest$Outbound = {
  companyId: string;
  periodLength: number;
  periodsToCompare: number;
  startMonth?: string | undefined;
};

/** @internal */
export const GetAccountingCashFlowStatementRequest$outboundSchema: z.ZodType<
  GetAccountingCashFlowStatementRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingCashFlowStatementRequest
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
export namespace GetAccountingCashFlowStatementRequest$ {
  /** @deprecated use `GetAccountingCashFlowStatementRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountingCashFlowStatementRequest$inboundSchema;
  /** @deprecated use `GetAccountingCashFlowStatementRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountingCashFlowStatementRequest$outboundSchema;
  /** @deprecated use `GetAccountingCashFlowStatementRequest$Outbound` instead. */
  export type Outbound = GetAccountingCashFlowStatementRequest$Outbound;
}

export function getAccountingCashFlowStatementRequestToJSON(
  getAccountingCashFlowStatementRequest: GetAccountingCashFlowStatementRequest,
): string {
  return JSON.stringify(
    GetAccountingCashFlowStatementRequest$outboundSchema.parse(
      getAccountingCashFlowStatementRequest,
    ),
  );
}

export function getAccountingCashFlowStatementRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingCashFlowStatementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountingCashFlowStatementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingCashFlowStatementRequest' from JSON`,
  );
}
