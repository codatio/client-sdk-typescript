/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BankAccountMappingOption,
  BankAccountMappingOption$inboundSchema,
  BankAccountMappingOption$Outbound,
  BankAccountMappingOption$outboundSchema,
} from "./bankaccountmappingoption.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

/**
 * Gets the bill payments mapping options for a company's accounting software
 */
export type PaymentMappingOptions = {
  bankAccounts?: Array<BankAccountMappingOption> | undefined;
  pagination?: Pagination | undefined;
};

/** @internal */
export const PaymentMappingOptions$inboundSchema: z.ZodType<
  PaymentMappingOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  bankAccounts: z.array(BankAccountMappingOption$inboundSchema).optional(),
  pagination: Pagination$inboundSchema.optional(),
});

/** @internal */
export type PaymentMappingOptions$Outbound = {
  bankAccounts?: Array<BankAccountMappingOption$Outbound> | undefined;
  pagination?: Pagination$Outbound | undefined;
};

/** @internal */
export const PaymentMappingOptions$outboundSchema: z.ZodType<
  PaymentMappingOptions$Outbound,
  z.ZodTypeDef,
  PaymentMappingOptions
> = z.object({
  bankAccounts: z.array(BankAccountMappingOption$outboundSchema).optional(),
  pagination: Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMappingOptions$ {
  /** @deprecated use `PaymentMappingOptions$inboundSchema` instead. */
  export const inboundSchema = PaymentMappingOptions$inboundSchema;
  /** @deprecated use `PaymentMappingOptions$outboundSchema` instead. */
  export const outboundSchema = PaymentMappingOptions$outboundSchema;
  /** @deprecated use `PaymentMappingOptions$Outbound` instead. */
  export type Outbound = PaymentMappingOptions$Outbound;
}

export function paymentMappingOptionsToJSON(
  paymentMappingOptions: PaymentMappingOptions,
): string {
  return JSON.stringify(
    PaymentMappingOptions$outboundSchema.parse(paymentMappingOptions),
  );
}

export function paymentMappingOptionsFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMappingOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMappingOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMappingOptions' from JSON`,
  );
}
