/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

/**
 * The request made is not valid.
 */
export type ErrorMessageData = {
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
  validation?: shared.ErrorValidation | null | undefined;
  /**
   * `True` if the error occurred transiently and can be retried.
   */
  canBeRetried?: string | undefined;
  /**
   * Machine readable error code used to automate processes based on the code returned.
   */
  detailedErrorCode?: number | undefined;
};

/**
 * The request made is not valid.
 */
export class ErrorMessage extends Error {
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
  validation?: shared.ErrorValidation | null | undefined;
  /**
   * `True` if the error occurred transiently and can be retried.
   */
  canBeRetried?: string | undefined;
  /**
   * Machine readable error code used to automate processes based on the code returned.
   */
  detailedErrorCode?: number | undefined;

  /** The original data that was passed to this error instance. */
  data$: ErrorMessageData;

  constructor(err: ErrorMessageData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.service != null) this.service = err.service;
    if (err.error != null) this.error = err.error;
    if (err.correlationId != null) this.correlationId = err.correlationId;
    if (err.validation != null) this.validation = err.validation;
    if (err.canBeRetried != null) this.canBeRetried = err.canBeRetried;
    if (err.detailedErrorCode != null) {
      this.detailedErrorCode = err.detailedErrorCode;
    }

    this.name = "ErrorMessage";
  }
}

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
  validation: z.nullable(shared.ErrorValidation$inboundSchema).optional(),
  canBeRetried: z.string().optional(),
  detailedErrorCode: z.number().int().optional(),
})
  .transform((v) => {
    return new ErrorMessage(v);
  });

/** @internal */
export type ErrorMessage$Outbound = {
  statusCode?: number | undefined;
  service?: string | undefined;
  error?: string | undefined;
  correlationId?: string | undefined;
  validation?: shared.ErrorValidation$Outbound | null | undefined;
  canBeRetried?: string | undefined;
  detailedErrorCode?: number | undefined;
};

/** @internal */
export const ErrorMessage$outboundSchema: z.ZodType<
  ErrorMessage$Outbound,
  z.ZodTypeDef,
  ErrorMessage
> = z.instanceof(ErrorMessage)
  .transform(v => v.data$)
  .pipe(z.object({
    statusCode: z.number().int().optional(),
    service: z.string().optional(),
    error: z.string().optional(),
    correlationId: z.string().optional(),
    validation: z.nullable(shared.ErrorValidation$outboundSchema).optional(),
    canBeRetried: z.string().optional(),
    detailedErrorCode: z.number().int().optional(),
  }));

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