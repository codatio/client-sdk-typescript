/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingInvoiceRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for an invoice.
   */
  invoiceId: string;
};

/** @internal */
export const GetAccountingInvoiceRequest$inboundSchema: z.ZodType<
  GetAccountingInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  invoiceId: z.string(),
});

/** @internal */
export type GetAccountingInvoiceRequest$Outbound = {
  companyId: string;
  invoiceId: string;
};

/** @internal */
export const GetAccountingInvoiceRequest$outboundSchema: z.ZodType<
  GetAccountingInvoiceRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingInvoiceRequest
> = z.object({
  companyId: z.string(),
  invoiceId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingInvoiceRequest$ {
  /** @deprecated use `GetAccountingInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingInvoiceRequest$inboundSchema;
  /** @deprecated use `GetAccountingInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingInvoiceRequest$outboundSchema;
  /** @deprecated use `GetAccountingInvoiceRequest$Outbound` instead. */
  export type Outbound = GetAccountingInvoiceRequest$Outbound;
}

export function getAccountingInvoiceRequestToJSON(
  getAccountingInvoiceRequest: GetAccountingInvoiceRequest,
): string {
  return JSON.stringify(
    GetAccountingInvoiceRequest$outboundSchema.parse(
      getAccountingInvoiceRequest,
    ),
  );
}

export function getAccountingInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingInvoiceRequest' from JSON`,
  );
}
