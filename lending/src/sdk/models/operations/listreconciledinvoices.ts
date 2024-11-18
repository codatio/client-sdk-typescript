/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListReconciledInvoicesRequest = {
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
};

/** @internal */
export const ListReconciledInvoicesRequest$inboundSchema: z.ZodType<
  ListReconciledInvoicesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
});

/** @internal */
export type ListReconciledInvoicesRequest$Outbound = {
  companyId: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
};

/** @internal */
export const ListReconciledInvoicesRequest$outboundSchema: z.ZodType<
  ListReconciledInvoicesRequest$Outbound,
  z.ZodTypeDef,
  ListReconciledInvoicesRequest
> = z.object({
  companyId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListReconciledInvoicesRequest$ {
  /** @deprecated use `ListReconciledInvoicesRequest$inboundSchema` instead. */
  export const inboundSchema = ListReconciledInvoicesRequest$inboundSchema;
  /** @deprecated use `ListReconciledInvoicesRequest$outboundSchema` instead. */
  export const outboundSchema = ListReconciledInvoicesRequest$outboundSchema;
  /** @deprecated use `ListReconciledInvoicesRequest$Outbound` instead. */
  export type Outbound = ListReconciledInvoicesRequest$Outbound;
}

export function listReconciledInvoicesRequestToJSON(
  listReconciledInvoicesRequest: ListReconciledInvoicesRequest,
): string {
  return JSON.stringify(
    ListReconciledInvoicesRequest$outboundSchema.parse(
      listReconciledInvoicesRequest,
    ),
  );
}

export function listReconciledInvoicesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListReconciledInvoicesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListReconciledInvoicesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListReconciledInvoicesRequest' from JSON`,
  );
}
