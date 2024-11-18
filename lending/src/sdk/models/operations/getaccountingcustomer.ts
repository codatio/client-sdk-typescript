/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingCustomerRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a customer.
   */
  customerId: string;
};

/** @internal */
export const GetAccountingCustomerRequest$inboundSchema: z.ZodType<
  GetAccountingCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  customerId: z.string(),
});

/** @internal */
export type GetAccountingCustomerRequest$Outbound = {
  companyId: string;
  customerId: string;
};

/** @internal */
export const GetAccountingCustomerRequest$outboundSchema: z.ZodType<
  GetAccountingCustomerRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingCustomerRequest
> = z.object({
  companyId: z.string(),
  customerId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingCustomerRequest$ {
  /** @deprecated use `GetAccountingCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingCustomerRequest$inboundSchema;
  /** @deprecated use `GetAccountingCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingCustomerRequest$outboundSchema;
  /** @deprecated use `GetAccountingCustomerRequest$Outbound` instead. */
  export type Outbound = GetAccountingCustomerRequest$Outbound;
}

export function getAccountingCustomerRequestToJSON(
  getAccountingCustomerRequest: GetAccountingCustomerRequest,
): string {
  return JSON.stringify(
    GetAccountingCustomerRequest$outboundSchema.parse(
      getAccountingCustomerRequest,
    ),
  );
}

export function getAccountingCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingCustomerRequest' from JSON`,
  );
}
