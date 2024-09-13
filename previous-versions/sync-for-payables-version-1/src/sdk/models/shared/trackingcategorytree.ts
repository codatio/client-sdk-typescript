/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DefinitionStatus,
  DefinitionStatus$inboundSchema,
  DefinitionStatus$outboundSchema,
} from "./definitionstatus.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";

/**
 * The full structure of a specific tracking category including any child or subcategories.
 */
export type TrackingCategoryTree = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * The identifier for the item, unique per tracking category
   */
  id?: string | null | undefined;
  /**
   * The name of the tracking category
   */
  name?: string | null | undefined;
  /**
   * Current state of the tracking category.
   */
  status?: DefinitionStatus | undefined;
  /**
   * The identifier for this item's immediate parent
   */
  parentId?: string | null | undefined;
  /**
   * Boolean value indicating whether this category has SubCategories
   */
  hasChildren?: boolean | undefined;
  /**
   * A collection of subcategories that are nested beneath this category.
   */
  subCategories?: Array<TrackingCategoryTree> | null | undefined;
  metadata?: Metadata | undefined;
};

/** @internal */
export const TrackingCategoryTree$inboundSchema: z.ZodType<
  TrackingCategoryTree,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DefinitionStatus$inboundSchema.optional(),
  parentId: z.nullable(z.string()).optional(),
  hasChildren: z.boolean().optional(),
  subCategories: z.nullable(
    z.array(z.lazy(() => TrackingCategoryTree$inboundSchema)),
  ).optional(),
  metadata: Metadata$inboundSchema.optional(),
});

/** @internal */
export type TrackingCategoryTree$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  parentId?: string | null | undefined;
  hasChildren?: boolean | undefined;
  subCategories?: Array<TrackingCategoryTree$Outbound> | null | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const TrackingCategoryTree$outboundSchema: z.ZodType<
  TrackingCategoryTree$Outbound,
  z.ZodTypeDef,
  TrackingCategoryTree
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DefinitionStatus$outboundSchema.optional(),
  parentId: z.nullable(z.string()).optional(),
  hasChildren: z.boolean().optional(),
  subCategories: z.nullable(
    z.array(z.lazy(() => TrackingCategoryTree$outboundSchema)),
  ).optional(),
  metadata: Metadata$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingCategoryTree$ {
  /** @deprecated use `TrackingCategoryTree$inboundSchema` instead. */
  export const inboundSchema = TrackingCategoryTree$inboundSchema;
  /** @deprecated use `TrackingCategoryTree$outboundSchema` instead. */
  export const outboundSchema = TrackingCategoryTree$outboundSchema;
  /** @deprecated use `TrackingCategoryTree$Outbound` instead. */
  export type Outbound = TrackingCategoryTree$Outbound;
}
