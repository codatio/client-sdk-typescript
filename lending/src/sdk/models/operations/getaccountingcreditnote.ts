/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingCreditNoteRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a credit note.
   */
  creditNoteId: string;
};

/** @internal */
export const GetAccountingCreditNoteRequest$inboundSchema: z.ZodType<
  GetAccountingCreditNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  creditNoteId: z.string(),
});

/** @internal */
export type GetAccountingCreditNoteRequest$Outbound = {
  companyId: string;
  creditNoteId: string;
};

/** @internal */
export const GetAccountingCreditNoteRequest$outboundSchema: z.ZodType<
  GetAccountingCreditNoteRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingCreditNoteRequest
> = z.object({
  companyId: z.string(),
  creditNoteId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingCreditNoteRequest$ {
  /** @deprecated use `GetAccountingCreditNoteRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingCreditNoteRequest$inboundSchema;
  /** @deprecated use `GetAccountingCreditNoteRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingCreditNoteRequest$outboundSchema;
  /** @deprecated use `GetAccountingCreditNoteRequest$Outbound` instead. */
  export type Outbound = GetAccountingCreditNoteRequest$Outbound;
}

export function getAccountingCreditNoteRequestToJSON(
  getAccountingCreditNoteRequest: GetAccountingCreditNoteRequest,
): string {
  return JSON.stringify(
    GetAccountingCreditNoteRequest$outboundSchema.parse(
      getAccountingCreditNoteRequest,
    ),
  );
}

export function getAccountingCreditNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingCreditNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingCreditNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingCreditNoteRequest' from JSON`,
  );
}
