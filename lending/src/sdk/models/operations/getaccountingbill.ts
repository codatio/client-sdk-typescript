/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingBillRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a bill.
   */
  billId: string;
};

/** @internal */
export const GetAccountingBillRequest$inboundSchema: z.ZodType<
  GetAccountingBillRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  billId: z.string(),
});

/** @internal */
export type GetAccountingBillRequest$Outbound = {
  companyId: string;
  billId: string;
};

/** @internal */
export const GetAccountingBillRequest$outboundSchema: z.ZodType<
  GetAccountingBillRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingBillRequest
> = z.object({
  companyId: z.string(),
  billId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingBillRequest$ {
  /** @deprecated use `GetAccountingBillRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingBillRequest$inboundSchema;
  /** @deprecated use `GetAccountingBillRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingBillRequest$outboundSchema;
  /** @deprecated use `GetAccountingBillRequest$Outbound` instead. */
  export type Outbound = GetAccountingBillRequest$Outbound;
}

export function getAccountingBillRequestToJSON(
  getAccountingBillRequest: GetAccountingBillRequest,
): string {
  return JSON.stringify(
    GetAccountingBillRequest$outboundSchema.parse(getAccountingBillRequest),
  );
}

export function getAccountingBillRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingBillRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingBillRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingBillRequest' from JSON`,
  );
}
