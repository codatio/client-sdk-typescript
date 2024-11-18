/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingPaymentRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a payment.
   */
  paymentId: string;
};

/** @internal */
export const GetAccountingPaymentRequest$inboundSchema: z.ZodType<
  GetAccountingPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  paymentId: z.string(),
});

/** @internal */
export type GetAccountingPaymentRequest$Outbound = {
  companyId: string;
  paymentId: string;
};

/** @internal */
export const GetAccountingPaymentRequest$outboundSchema: z.ZodType<
  GetAccountingPaymentRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingPaymentRequest
> = z.object({
  companyId: z.string(),
  paymentId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingPaymentRequest$ {
  /** @deprecated use `GetAccountingPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingPaymentRequest$inboundSchema;
  /** @deprecated use `GetAccountingPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingPaymentRequest$outboundSchema;
  /** @deprecated use `GetAccountingPaymentRequest$Outbound` instead. */
  export type Outbound = GetAccountingPaymentRequest$Outbound;
}

export function getAccountingPaymentRequestToJSON(
  getAccountingPaymentRequest: GetAccountingPaymentRequest,
): string {
  return JSON.stringify(
    GetAccountingPaymentRequest$outboundSchema.parse(
      getAccountingPaymentRequest,
    ),
  );
}

export function getAccountingPaymentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingPaymentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingPaymentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingPaymentRequest' from JSON`,
  );
}
