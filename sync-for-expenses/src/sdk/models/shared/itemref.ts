/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ItemRef = {
  /**
   * Unique identifier for the item associated with the transaction. The `itemRef` object is currently supported only for QuickBooks Desktop. You can specify either `itemRef` or `accountRef`, but not both.
   */
  id?: string | undefined;
};

/** @internal */
export const ItemRef$inboundSchema: z.ZodType<ItemRef, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
  });

/** @internal */
export type ItemRef$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const ItemRef$outboundSchema: z.ZodType<
  ItemRef$Outbound,
  z.ZodTypeDef,
  ItemRef
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ItemRef$ {
  /** @deprecated use `ItemRef$inboundSchema` instead. */
  export const inboundSchema = ItemRef$inboundSchema;
  /** @deprecated use `ItemRef$outboundSchema` instead. */
  export const outboundSchema = ItemRef$outboundSchema;
  /** @deprecated use `ItemRef$Outbound` instead. */
  export type Outbound = ItemRef$Outbound;
}

export function itemRefToJSON(itemRef: ItemRef): string {
  return JSON.stringify(ItemRef$outboundSchema.parse(itemRef));
}

export function itemRefFromJSON(
  jsonString: string,
): SafeParseResult<ItemRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ItemRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ItemRef' from JSON`,
  );
}
