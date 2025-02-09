/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ErrorValidation,
  ErrorValidation$inboundSchema,
  ErrorValidation$Outbound,
  ErrorValidation$outboundSchema,
} from "./errorvalidation.js";

/**
 * Too many requests were made in a given amount of time. Wait a short period and then try again.
 */
export type ErrorMessage = {
  /**
   * The HTTP status code returned by the error.
   */
  statusCode?: number | undefined;
  /**
   * Codat's service the returned the error.
   */
  service?: string | undefined;
  /**
   * A brief description of the error.
   */
  error?: string | undefined;
  /**
   * Unique identifier used to propagate to all downstream services and determine the source of the error.
   */
  correlationId?: string | undefined;
  /**
   * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
   */
  validation?: ErrorValidation | null | undefined;
  /**
   * `True` if the error occurred transiently and can be retried.
   */
  canBeRetried?: string | undefined;
  /**
   * Machine readable error code used to automate processes based on the code returned.
   */
  detailedErrorCode?: number | undefined;
};

/** @internal */
export const ErrorMessage$inboundSchema: z.ZodType<
  ErrorMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  statusCode: z.number().int().optional(),
  service: z.string().optional(),
  error: z.string().optional(),
  correlationId: z.string().optional(),
  validation: z.nullable(ErrorValidation$inboundSchema).optional(),
  canBeRetried: z.string().optional(),
  detailedErrorCode: z.number().int().optional(),
});

/** @internal */
export type ErrorMessage$Outbound = {
  statusCode?: number | undefined;
  service?: string | undefined;
  error?: string | undefined;
  correlationId?: string | undefined;
  validation?: ErrorValidation$Outbound | null | undefined;
  canBeRetried?: string | undefined;
  detailedErrorCode?: number | undefined;
};

/** @internal */
export const ErrorMessage$outboundSchema: z.ZodType<
  ErrorMessage$Outbound,
  z.ZodTypeDef,
  ErrorMessage
> = z.object({
  statusCode: z.number().int().optional(),
  service: z.string().optional(),
  error: z.string().optional(),
  correlationId: z.string().optional(),
  validation: z.nullable(ErrorValidation$outboundSchema).optional(),
  canBeRetried: z.string().optional(),
  detailedErrorCode: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorMessage$ {
  /** @deprecated use `ErrorMessage$inboundSchema` instead. */
  export const inboundSchema = ErrorMessage$inboundSchema;
  /** @deprecated use `ErrorMessage$outboundSchema` instead. */
  export const outboundSchema = ErrorMessage$outboundSchema;
  /** @deprecated use `ErrorMessage$Outbound` instead. */
  export type Outbound = ErrorMessage$Outbound;
}

export function errorMessageToJSON(errorMessage: ErrorMessage): string {
  return JSON.stringify(ErrorMessage$outboundSchema.parse(errorMessage));
}

export function errorMessageFromJSON(
  jsonString: string,
): SafeParseResult<ErrorMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorMessage' from JSON`,
  );
}
