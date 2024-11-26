/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ErrorValidationItem = {
  /**
   * Unique identifier for a validation item.
   */
  itemId?: string | null | undefined;
  /**
   * A message outlining validation item's issue.
   */
  message?: string | null | undefined;
  /**
   * Name of validator.
   */
  validatorName?: string | null | undefined;
};

/** @internal */
export const ErrorValidationItem$inboundSchema: z.ZodType<
  ErrorValidationItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  itemId: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  validatorName: z.nullable(z.string()).optional(),
});

/** @internal */
export type ErrorValidationItem$Outbound = {
  itemId?: string | null | undefined;
  message?: string | null | undefined;
  validatorName?: string | null | undefined;
};

/** @internal */
export const ErrorValidationItem$outboundSchema: z.ZodType<
  ErrorValidationItem$Outbound,
  z.ZodTypeDef,
  ErrorValidationItem
> = z.object({
  itemId: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  validatorName: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorValidationItem$ {
  /** @deprecated use `ErrorValidationItem$inboundSchema` instead. */
  export const inboundSchema = ErrorValidationItem$inboundSchema;
  /** @deprecated use `ErrorValidationItem$outboundSchema` instead. */
  export const outboundSchema = ErrorValidationItem$outboundSchema;
  /** @deprecated use `ErrorValidationItem$Outbound` instead. */
  export type Outbound = ErrorValidationItem$Outbound;
}

export function errorValidationItemToJSON(
  errorValidationItem: ErrorValidationItem,
): string {
  return JSON.stringify(
    ErrorValidationItem$outboundSchema.parse(errorValidationItem),
  );
}

export function errorValidationItemFromJSON(
  jsonString: string,
): SafeParseResult<ErrorValidationItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorValidationItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorValidationItem' from JSON`,
  );
}
