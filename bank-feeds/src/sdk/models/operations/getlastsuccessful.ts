/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLastSuccessfulRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const GetLastSuccessfulRequest$inboundSchema: z.ZodType<
  GetLastSuccessfulRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type GetLastSuccessfulRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const GetLastSuccessfulRequest$outboundSchema: z.ZodType<
  GetLastSuccessfulRequest$Outbound,
  z.ZodTypeDef,
  GetLastSuccessfulRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLastSuccessfulRequest$ {
  /** @deprecated use `GetLastSuccessfulRequest$inboundSchema` instead. */
  export const inboundSchema = GetLastSuccessfulRequest$inboundSchema;
  /** @deprecated use `GetLastSuccessfulRequest$outboundSchema` instead. */
  export const outboundSchema = GetLastSuccessfulRequest$outboundSchema;
  /** @deprecated use `GetLastSuccessfulRequest$Outbound` instead. */
  export type Outbound = GetLastSuccessfulRequest$Outbound;
}

export function getLastSuccessfulRequestToJSON(
  getLastSuccessfulRequest: GetLastSuccessfulRequest,
): string {
  return JSON.stringify(
    GetLastSuccessfulRequest$outboundSchema.parse(getLastSuccessfulRequest),
  );
}

export function getLastSuccessfulRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLastSuccessfulRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLastSuccessfulRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLastSuccessfulRequest' from JSON`,
  );
}
