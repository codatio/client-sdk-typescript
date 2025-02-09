/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceRecordRef,
  CommerceRecordRef$inboundSchema,
  CommerceRecordRef$Outbound,
  CommerceRecordRef$outboundSchema,
} from "./commercerecordref.js";

/**
 * Product categories are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.
 */
export type CommerceProductCategory = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * The unique identifier of the product category
   */
  id?: string | undefined;
  /**
   * The name of the product category
   */
  name?: string | undefined;
  /**
   * A collection of parent product categories implicitly ordered with the immediate parent last in the list.
   */
  ancestorRefs?: Array<CommerceRecordRef> | undefined;
  /**
   * A boolean indicating whether there are other product categories beneath this one in the hierarchy.
   */
  hasChildren?: boolean | undefined;
};

/** @internal */
export const CommerceProductCategory$inboundSchema: z.ZodType<
  CommerceProductCategory,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  ancestorRefs: z.array(CommerceRecordRef$inboundSchema).optional(),
  hasChildren: z.boolean().optional(),
});

/** @internal */
export type CommerceProductCategory$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  ancestorRefs?: Array<CommerceRecordRef$Outbound> | undefined;
  hasChildren?: boolean | undefined;
};

/** @internal */
export const CommerceProductCategory$outboundSchema: z.ZodType<
  CommerceProductCategory$Outbound,
  z.ZodTypeDef,
  CommerceProductCategory
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  ancestorRefs: z.array(CommerceRecordRef$outboundSchema).optional(),
  hasChildren: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceProductCategory$ {
  /** @deprecated use `CommerceProductCategory$inboundSchema` instead. */
  export const inboundSchema = CommerceProductCategory$inboundSchema;
  /** @deprecated use `CommerceProductCategory$outboundSchema` instead. */
  export const outboundSchema = CommerceProductCategory$outboundSchema;
  /** @deprecated use `CommerceProductCategory$Outbound` instead. */
  export type Outbound = CommerceProductCategory$Outbound;
}

export function commerceProductCategoryToJSON(
  commerceProductCategory: CommerceProductCategory,
): string {
  return JSON.stringify(
    CommerceProductCategory$outboundSchema.parse(commerceProductCategory),
  );
}

export function commerceProductCategoryFromJSON(
  jsonString: string,
): SafeParseResult<CommerceProductCategory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceProductCategory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceProductCategory' from JSON`,
  );
}
