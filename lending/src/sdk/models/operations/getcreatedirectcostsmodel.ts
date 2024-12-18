/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCreateDirectCostsModelRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const GetCreateDirectCostsModelRequest$inboundSchema: z.ZodType<
  GetCreateDirectCostsModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetCreateDirectCostsModelRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetCreateDirectCostsModelRequest$outboundSchema: z.ZodType<
  GetCreateDirectCostsModelRequest$Outbound,
  z.ZodTypeDef,
  GetCreateDirectCostsModelRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateDirectCostsModelRequest$ {
  /** @deprecated use `GetCreateDirectCostsModelRequest$inboundSchema` instead. */
  export const inboundSchema = GetCreateDirectCostsModelRequest$inboundSchema;
  /** @deprecated use `GetCreateDirectCostsModelRequest$outboundSchema` instead. */
  export const outboundSchema = GetCreateDirectCostsModelRequest$outboundSchema;
  /** @deprecated use `GetCreateDirectCostsModelRequest$Outbound` instead. */
  export type Outbound = GetCreateDirectCostsModelRequest$Outbound;
}

export function getCreateDirectCostsModelRequestToJSON(
  getCreateDirectCostsModelRequest: GetCreateDirectCostsModelRequest,
): string {
  return JSON.stringify(
    GetCreateDirectCostsModelRequest$outboundSchema.parse(
      getCreateDirectCostsModelRequest,
    ),
  );
}

export function getCreateDirectCostsModelRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCreateDirectCostsModelRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCreateDirectCostsModelRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCreateDirectCostsModelRequest' from JSON`,
  );
}
