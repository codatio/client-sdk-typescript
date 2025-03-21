/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingBillCreditNoteRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a bill credit note.
   */
  billCreditNoteId: string;
};

/** @internal */
export const GetAccountingBillCreditNoteRequest$inboundSchema: z.ZodType<
  GetAccountingBillCreditNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  billCreditNoteId: z.string(),
});

/** @internal */
export type GetAccountingBillCreditNoteRequest$Outbound = {
  companyId: string;
  billCreditNoteId: string;
};

/** @internal */
export const GetAccountingBillCreditNoteRequest$outboundSchema: z.ZodType<
  GetAccountingBillCreditNoteRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingBillCreditNoteRequest
> = z.object({
  companyId: z.string(),
  billCreditNoteId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingBillCreditNoteRequest$ {
  /** @deprecated use `GetAccountingBillCreditNoteRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingBillCreditNoteRequest$inboundSchema;
  /** @deprecated use `GetAccountingBillCreditNoteRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountingBillCreditNoteRequest$outboundSchema;
  /** @deprecated use `GetAccountingBillCreditNoteRequest$Outbound` instead. */
  export type Outbound = GetAccountingBillCreditNoteRequest$Outbound;
}

export function getAccountingBillCreditNoteRequestToJSON(
  getAccountingBillCreditNoteRequest: GetAccountingBillCreditNoteRequest,
): string {
  return JSON.stringify(
    GetAccountingBillCreditNoteRequest$outboundSchema.parse(
      getAccountingBillCreditNoteRequest,
    ),
  );
}

export function getAccountingBillCreditNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingBillCreditNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountingBillCreditNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingBillCreditNoteRequest' from JSON`,
  );
}
