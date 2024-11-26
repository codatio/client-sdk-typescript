/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListSyncsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const ListSyncsRequest$inboundSchema: z.ZodType<
  ListSyncsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type ListSyncsRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const ListSyncsRequest$outboundSchema: z.ZodType<
  ListSyncsRequest$Outbound,
  z.ZodTypeDef,
  ListSyncsRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSyncsRequest$ {
  /** @deprecated use `ListSyncsRequest$inboundSchema` instead. */
  export const inboundSchema = ListSyncsRequest$inboundSchema;
  /** @deprecated use `ListSyncsRequest$outboundSchema` instead. */
  export const outboundSchema = ListSyncsRequest$outboundSchema;
  /** @deprecated use `ListSyncsRequest$Outbound` instead. */
  export type Outbound = ListSyncsRequest$Outbound;
}

export function listSyncsRequestToJSON(
  listSyncsRequest: ListSyncsRequest,
): string {
  return JSON.stringify(
    ListSyncsRequest$outboundSchema.parse(listSyncsRequest),
  );
}

export function listSyncsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListSyncsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSyncsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSyncsRequest' from JSON`,
  );
}
