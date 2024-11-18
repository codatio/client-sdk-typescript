/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CommerceRecordRef = {
  /**
   * The unique identitifer of the record being referenced
   */
  id: string;
  /**
   * The type of record being referenced.
   */
  type: string;
};

/** @internal */
export const CommerceRecordRef$inboundSchema: z.ZodType<
  CommerceRecordRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.string(),
});

/** @internal */
export type CommerceRecordRef$Outbound = {
  id: string;
  type: string;
};

/** @internal */
export const CommerceRecordRef$outboundSchema: z.ZodType<
  CommerceRecordRef$Outbound,
  z.ZodTypeDef,
  CommerceRecordRef
> = z.object({
  id: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceRecordRef$ {
  /** @deprecated use `CommerceRecordRef$inboundSchema` instead. */
  export const inboundSchema = CommerceRecordRef$inboundSchema;
  /** @deprecated use `CommerceRecordRef$outboundSchema` instead. */
  export const outboundSchema = CommerceRecordRef$outboundSchema;
  /** @deprecated use `CommerceRecordRef$Outbound` instead. */
  export type Outbound = CommerceRecordRef$Outbound;
}

export function commerceRecordRefToJSON(
  commerceRecordRef: CommerceRecordRef,
): string {
  return JSON.stringify(
    CommerceRecordRef$outboundSchema.parse(commerceRecordRef),
  );
}

export function commerceRecordRefFromJSON(
  jsonString: string,
): SafeParseResult<CommerceRecordRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceRecordRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceRecordRef' from JSON`,
  );
}
