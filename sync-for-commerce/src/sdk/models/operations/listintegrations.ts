/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIntegrationsRequest = {
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
export const ListIntegrationsRequest$inboundSchema: z.ZodType<
  ListIntegrationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/** @internal */
export type ListIntegrationsRequest$Outbound = {
  page: number;
  pageSize: number;
  query?: string | undefined;
  orderBy?: string | undefined;
};

/** @internal */
export const ListIntegrationsRequest$outboundSchema: z.ZodType<
  ListIntegrationsRequest$Outbound,
  z.ZodTypeDef,
  ListIntegrationsRequest
> = z.object({
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
  orderBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIntegrationsRequest$ {
  /** @deprecated use `ListIntegrationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListIntegrationsRequest$inboundSchema;
  /** @deprecated use `ListIntegrationsRequest$outboundSchema` instead. */
  export const outboundSchema = ListIntegrationsRequest$outboundSchema;
  /** @deprecated use `ListIntegrationsRequest$Outbound` instead. */
  export type Outbound = ListIntegrationsRequest$Outbound;
}

export function listIntegrationsRequestToJSON(
  listIntegrationsRequest: ListIntegrationsRequest,
): string {
  return JSON.stringify(
    ListIntegrationsRequest$outboundSchema.parse(listIntegrationsRequest),
  );
}

export function listIntegrationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIntegrationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIntegrationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIntegrationsRequest' from JSON`,
  );
}
