/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetDataIntegritySummariesRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * A key for a Codat data type.
   */
  dataType: shared.DataIntegrityDataType;
  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  query?: string | undefined;
};

/** @internal */
export const GetDataIntegritySummariesRequest$inboundSchema: z.ZodType<
  GetDataIntegritySummariesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  dataType: shared.DataIntegrityDataType$inboundSchema,
  query: z.string().optional(),
});

/** @internal */
export type GetDataIntegritySummariesRequest$Outbound = {
  companyId: string;
  dataType: string;
  query?: string | undefined;
};

/** @internal */
export const GetDataIntegritySummariesRequest$outboundSchema: z.ZodType<
  GetDataIntegritySummariesRequest$Outbound,
  z.ZodTypeDef,
  GetDataIntegritySummariesRequest
> = z.object({
  companyId: z.string(),
  dataType: shared.DataIntegrityDataType$outboundSchema,
  query: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataIntegritySummariesRequest$ {
  /** @deprecated use `GetDataIntegritySummariesRequest$inboundSchema` instead. */
  export const inboundSchema = GetDataIntegritySummariesRequest$inboundSchema;
  /** @deprecated use `GetDataIntegritySummariesRequest$outboundSchema` instead. */
  export const outboundSchema = GetDataIntegritySummariesRequest$outboundSchema;
  /** @deprecated use `GetDataIntegritySummariesRequest$Outbound` instead. */
  export type Outbound = GetDataIntegritySummariesRequest$Outbound;
}

export function getDataIntegritySummariesRequestToJSON(
  getDataIntegritySummariesRequest: GetDataIntegritySummariesRequest,
): string {
  return JSON.stringify(
    GetDataIntegritySummariesRequest$outboundSchema.parse(
      getDataIntegritySummariesRequest,
    ),
  );
}

export function getDataIntegritySummariesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDataIntegritySummariesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDataIntegritySummariesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDataIntegritySummariesRequest' from JSON`,
  );
}
