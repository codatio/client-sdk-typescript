/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SetConfigurationRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
};

/** @internal */
export const SetConfigurationRequest$inboundSchema: z.ZodType<
  SetConfigurationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
});

/** @internal */
export type SetConfigurationRequest$Outbound = {
  companyId: string;
};

/** @internal */
export const SetConfigurationRequest$outboundSchema: z.ZodType<
  SetConfigurationRequest$Outbound,
  z.ZodTypeDef,
  SetConfigurationRequest
> = z.object({
  companyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetConfigurationRequest$ {
  /** @deprecated use `SetConfigurationRequest$inboundSchema` instead. */
  export const inboundSchema = SetConfigurationRequest$inboundSchema;
  /** @deprecated use `SetConfigurationRequest$outboundSchema` instead. */
  export const outboundSchema = SetConfigurationRequest$outboundSchema;
  /** @deprecated use `SetConfigurationRequest$Outbound` instead. */
  export type Outbound = SetConfigurationRequest$Outbound;
}

export function setConfigurationRequestToJSON(
  setConfigurationRequest: SetConfigurationRequest,
): string {
  return JSON.stringify(
    SetConfigurationRequest$outboundSchema.parse(setConfigurationRequest),
  );
}

export function setConfigurationRequestFromJSON(
  jsonString: string,
): SafeParseResult<SetConfigurationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SetConfigurationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SetConfigurationRequest' from JSON`,
  );
}
