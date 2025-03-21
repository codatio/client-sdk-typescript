/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Taxes rates reference object depending on the rates being available on source commerce software.
 */
export type TaxComponentRef = {
  /**
   * The unique identitifer of the tax component being referenced.
   */
  id: string;
  /**
   * Name of the tax component being referenced.
   */
  name: string;
};

/** @internal */
export const TaxComponentRef$inboundSchema: z.ZodType<
  TaxComponentRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type TaxComponentRef$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const TaxComponentRef$outboundSchema: z.ZodType<
  TaxComponentRef$Outbound,
  z.ZodTypeDef,
  TaxComponentRef
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxComponentRef$ {
  /** @deprecated use `TaxComponentRef$inboundSchema` instead. */
  export const inboundSchema = TaxComponentRef$inboundSchema;
  /** @deprecated use `TaxComponentRef$outboundSchema` instead. */
  export const outboundSchema = TaxComponentRef$outboundSchema;
  /** @deprecated use `TaxComponentRef$Outbound` instead. */
  export type Outbound = TaxComponentRef$Outbound;
}

export function taxComponentRefToJSON(
  taxComponentRef: TaxComponentRef,
): string {
  return JSON.stringify(TaxComponentRef$outboundSchema.parse(taxComponentRef));
}

export function taxComponentRefFromJSON(
  jsonString: string,
): SafeParseResult<TaxComponentRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxComponentRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxComponentRef' from JSON`,
  );
}
