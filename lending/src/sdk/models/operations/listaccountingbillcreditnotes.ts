/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingBillCreditNotesRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  page?: number | undefined;
  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  pageSize?: number | undefined;
  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  query?: string | undefined;
  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  orderBy?: string | undefined;
};

/** @internal */
export const ListAccountingBillCreditNotesRequest$inboundSchema: z.ZodType<
  ListAccountingBillCreditNotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/** @internal */
export type ListAccountingBillCreditNotesRequest$Outbound = {
  companyId: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
  orderBy?: string | undefined;
};

/** @internal */
export const ListAccountingBillCreditNotesRequest$outboundSchema: z.ZodType<
  ListAccountingBillCreditNotesRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingBillCreditNotesRequest
> = z.object({
  companyId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingBillCreditNotesRequest$ {
  /** @deprecated use `ListAccountingBillCreditNotesRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingBillCreditNotesRequest$inboundSchema;
  /** @deprecated use `ListAccountingBillCreditNotesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingBillCreditNotesRequest$outboundSchema;
  /** @deprecated use `ListAccountingBillCreditNotesRequest$Outbound` instead. */
  export type Outbound = ListAccountingBillCreditNotesRequest$Outbound;
}

export function listAccountingBillCreditNotesRequestToJSON(
  listAccountingBillCreditNotesRequest: ListAccountingBillCreditNotesRequest,
): string {
  return JSON.stringify(
    ListAccountingBillCreditNotesRequest$outboundSchema.parse(
      listAccountingBillCreditNotesRequest,
    ),
  );
}

export function listAccountingBillCreditNotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingBillCreditNotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingBillCreditNotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingBillCreditNotesRequest' from JSON`,
  );
}
