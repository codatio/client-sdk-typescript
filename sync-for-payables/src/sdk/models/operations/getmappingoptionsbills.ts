/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMappingOptionsBillsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Retrieve the next page of results using the continuation token from the previous response.
   */
  continuationToken?: string | undefined;
  /**
   * Codat query string allows you to filter by `status` (`status=Active||status=Archived`). [Learn more](https://docs.codat.io/using-the-api/querying) about Codat's query string.
   */
  statusQuery?: string | undefined;
};

/** @internal */
export const GetMappingOptionsBillsRequest$inboundSchema: z.ZodType<
  GetMappingOptionsBillsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  continuationToken: z.string().optional(),
  statusQuery: z.string().optional(),
});

/** @internal */
export type GetMappingOptionsBillsRequest$Outbound = {
  companyId: string;
  connectionId: string;
  continuationToken?: string | undefined;
  statusQuery?: string | undefined;
};

/** @internal */
export const GetMappingOptionsBillsRequest$outboundSchema: z.ZodType<
  GetMappingOptionsBillsRequest$Outbound,
  z.ZodTypeDef,
  GetMappingOptionsBillsRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  continuationToken: z.string().optional(),
  statusQuery: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMappingOptionsBillsRequest$ {
  /** @deprecated use `GetMappingOptionsBillsRequest$inboundSchema` instead. */
  export const inboundSchema = GetMappingOptionsBillsRequest$inboundSchema;
  /** @deprecated use `GetMappingOptionsBillsRequest$outboundSchema` instead. */
  export const outboundSchema = GetMappingOptionsBillsRequest$outboundSchema;
  /** @deprecated use `GetMappingOptionsBillsRequest$Outbound` instead. */
  export type Outbound = GetMappingOptionsBillsRequest$Outbound;
}

export function getMappingOptionsBillsRequestToJSON(
  getMappingOptionsBillsRequest: GetMappingOptionsBillsRequest,
): string {
  return JSON.stringify(
    GetMappingOptionsBillsRequest$outboundSchema.parse(
      getMappingOptionsBillsRequest,
    ),
  );
}

export function getMappingOptionsBillsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMappingOptionsBillsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMappingOptionsBillsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMappingOptionsBillsRequest' from JSON`,
  );
}
