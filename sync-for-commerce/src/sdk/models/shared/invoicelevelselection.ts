/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InvoiceLevelSelection = {
  /**
   * Selected array of grouping options.
   */
  selectedGroupByOptions?: Array<string> | null | undefined;
  /**
   * Options for grouping sales.
   */
  groupByOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceLevelSelection$inboundSchema: z.ZodType<
  InvoiceLevelSelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
  groupByOptions: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type InvoiceLevelSelection$Outbound = {
  selectedGroupByOptions?: Array<string> | null | undefined;
  groupByOptions?: Array<string> | null | undefined;
};

/** @internal */
export const InvoiceLevelSelection$outboundSchema: z.ZodType<
  InvoiceLevelSelection$Outbound,
  z.ZodTypeDef,
  InvoiceLevelSelection
> = z.object({
  selectedGroupByOptions: z.nullable(z.array(z.string())).optional(),
  groupByOptions: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceLevelSelection$ {
  /** @deprecated use `InvoiceLevelSelection$inboundSchema` instead. */
  export const inboundSchema = InvoiceLevelSelection$inboundSchema;
  /** @deprecated use `InvoiceLevelSelection$outboundSchema` instead. */
  export const outboundSchema = InvoiceLevelSelection$outboundSchema;
  /** @deprecated use `InvoiceLevelSelection$Outbound` instead. */
  export type Outbound = InvoiceLevelSelection$Outbound;
}

export function invoiceLevelSelectionToJSON(
  invoiceLevelSelection: InvoiceLevelSelection,
): string {
  return JSON.stringify(
    InvoiceLevelSelection$outboundSchema.parse(invoiceLevelSelection),
  );
}

export function invoiceLevelSelectionFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceLevelSelection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceLevelSelection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceLevelSelection' from JSON`,
  );
}
