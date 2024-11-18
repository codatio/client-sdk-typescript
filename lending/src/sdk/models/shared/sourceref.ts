/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A source reference containing the `sourceType` object "Banking".
 */
export type SourceRef = {
  /**
   * The data source type.
   */
  sourceType?: string | undefined;
};

/** @internal */
export const SourceRef$inboundSchema: z.ZodType<
  SourceRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceType: z.string().optional(),
});

/** @internal */
export type SourceRef$Outbound = {
  sourceType?: string | undefined;
};

/** @internal */
export const SourceRef$outboundSchema: z.ZodType<
  SourceRef$Outbound,
  z.ZodTypeDef,
  SourceRef
> = z.object({
  sourceType: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceRef$ {
  /** @deprecated use `SourceRef$inboundSchema` instead. */
  export const inboundSchema = SourceRef$inboundSchema;
  /** @deprecated use `SourceRef$outboundSchema` instead. */
  export const outboundSchema = SourceRef$outboundSchema;
  /** @deprecated use `SourceRef$Outbound` instead. */
  export type Outbound = SourceRef$Outbound;
}

export function sourceRefToJSON(sourceRef: SourceRef): string {
  return JSON.stringify(SourceRef$outboundSchema.parse(sourceRef));
}

export function sourceRefFromJSON(
  jsonString: string,
): SafeParseResult<SourceRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SourceRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SourceRef' from JSON`,
  );
}
