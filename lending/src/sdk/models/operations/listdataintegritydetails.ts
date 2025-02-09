/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListDataIntegrityDetailsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * A key for a Codat data type.
   */
  dataType: shared.DataIntegrityDataType;
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
export const ListDataIntegrityDetailsRequest$inboundSchema: z.ZodType<
  ListDataIntegrityDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  dataType: shared.DataIntegrityDataType$inboundSchema,
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/** @internal */
export type ListDataIntegrityDetailsRequest$Outbound = {
  companyId: string;
  dataType: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
  orderBy?: string | undefined;
};

/** @internal */
export const ListDataIntegrityDetailsRequest$outboundSchema: z.ZodType<
  ListDataIntegrityDetailsRequest$Outbound,
  z.ZodTypeDef,
  ListDataIntegrityDetailsRequest
> = z.object({
  companyId: z.string(),
  dataType: shared.DataIntegrityDataType$outboundSchema,
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDataIntegrityDetailsRequest$ {
  /** @deprecated use `ListDataIntegrityDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDataIntegrityDetailsRequest$inboundSchema;
  /** @deprecated use `ListDataIntegrityDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDataIntegrityDetailsRequest$outboundSchema;
  /** @deprecated use `ListDataIntegrityDetailsRequest$Outbound` instead. */
  export type Outbound = ListDataIntegrityDetailsRequest$Outbound;
}

export function listDataIntegrityDetailsRequestToJSON(
  listDataIntegrityDetailsRequest: ListDataIntegrityDetailsRequest,
): string {
  return JSON.stringify(
    ListDataIntegrityDetailsRequest$outboundSchema.parse(
      listDataIntegrityDetailsRequest,
    ),
  );
}

export function listDataIntegrityDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDataIntegrityDetailsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDataIntegrityDetailsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDataIntegrityDetailsRequest' from JSON`,
  );
}
