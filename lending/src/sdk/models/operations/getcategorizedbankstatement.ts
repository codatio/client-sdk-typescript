/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCategorizedBankStatementRequest = {
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
export const GetCategorizedBankStatementRequest$inboundSchema: z.ZodType<
  GetCategorizedBankStatementRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
});

/** @internal */
export type GetCategorizedBankStatementRequest$Outbound = {
  companyId: string;
  page: number;
  pageSize: number;
  query?: string | undefined;
};

/** @internal */
export const GetCategorizedBankStatementRequest$outboundSchema: z.ZodType<
  GetCategorizedBankStatementRequest$Outbound,
  z.ZodTypeDef,
  GetCategorizedBankStatementRequest
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
export namespace GetCategorizedBankStatementRequest$ {
  /** @deprecated use `GetCategorizedBankStatementRequest$inboundSchema` instead. */
  export const inboundSchema = GetCategorizedBankStatementRequest$inboundSchema;
  /** @deprecated use `GetCategorizedBankStatementRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCategorizedBankStatementRequest$outboundSchema;
  /** @deprecated use `GetCategorizedBankStatementRequest$Outbound` instead. */
  export type Outbound = GetCategorizedBankStatementRequest$Outbound;
}

export function getCategorizedBankStatementRequestToJSON(
  getCategorizedBankStatementRequest: GetCategorizedBankStatementRequest,
): string {
  return JSON.stringify(
    GetCategorizedBankStatementRequest$outboundSchema.parse(
      getCategorizedBankStatementRequest,
    ),
  );
}

export function getCategorizedBankStatementRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCategorizedBankStatementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetCategorizedBankStatementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCategorizedBankStatementRequest' from JSON`,
  );
}
