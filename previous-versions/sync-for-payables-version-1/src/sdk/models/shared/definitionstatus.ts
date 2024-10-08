/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Current state of the tracking category.
 */
export const DefinitionStatus = {
  Unknown: "Unknown",
  Active: "Active",
  Archived: "Archived",
} as const;
/**
 * Current state of the tracking category.
 */
export type DefinitionStatus = ClosedEnum<typeof DefinitionStatus>;

/** @internal */
export const DefinitionStatus$inboundSchema: z.ZodNativeEnum<
  typeof DefinitionStatus
> = z.nativeEnum(DefinitionStatus);

/** @internal */
export const DefinitionStatus$outboundSchema: z.ZodNativeEnum<
  typeof DefinitionStatus
> = DefinitionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefinitionStatus$ {
  /** @deprecated use `DefinitionStatus$inboundSchema` instead. */
  export const inboundSchema = DefinitionStatus$inboundSchema;
  /** @deprecated use `DefinitionStatus$outboundSchema` instead. */
  export const outboundSchema = DefinitionStatus$outboundSchema;
}
