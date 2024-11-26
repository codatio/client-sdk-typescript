/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListSuppliersRequest = {
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
export const ListSuppliersRequest$inboundSchema: z.ZodType<
  ListSuppliersRequest,
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
export type ListSuppliersRequest$Outbound = {
  companyId: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
  orderBy?: string | undefined;
};

/** @internal */
export const ListSuppliersRequest$outboundSchema: z.ZodType<
  ListSuppliersRequest$Outbound,
  z.ZodTypeDef,
  ListSuppliersRequest
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
export namespace ListSuppliersRequest$ {
  /** @deprecated use `ListSuppliersRequest$inboundSchema` instead. */
  export const inboundSchema = ListSuppliersRequest$inboundSchema;
  /** @deprecated use `ListSuppliersRequest$outboundSchema` instead. */
  export const outboundSchema = ListSuppliersRequest$outboundSchema;
  /** @deprecated use `ListSuppliersRequest$Outbound` instead. */
  export type Outbound = ListSuppliersRequest$Outbound;
}

export function listSuppliersRequestToJSON(
  listSuppliersRequest: ListSuppliersRequest,
): string {
  return JSON.stringify(
    ListSuppliersRequest$outboundSchema.parse(listSuppliersRequest),
  );
}

export function listSuppliersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListSuppliersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSuppliersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSuppliersRequest' from JSON`,
  );
}
