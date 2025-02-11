/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Defines if the bill or bill credit note is billed/rebilled to a project.
 */
export const BilledToType1 = {
  Unknown: "Unknown",
  NotApplicable: "NotApplicable",
  Project: "Project",
} as const;
/**
 * Defines if the bill or bill credit note is billed/rebilled to a project.
 */
export type BilledToType1 = ClosedEnum<typeof BilledToType1>;

/** @internal */
export const BilledToType1$inboundSchema: z.ZodNativeEnum<
  typeof BilledToType1
> = z.nativeEnum(BilledToType1);

/** @internal */
export const BilledToType1$outboundSchema: z.ZodNativeEnum<
  typeof BilledToType1
> = BilledToType1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BilledToType1$ {
  /** @deprecated use `BilledToType1$inboundSchema` instead. */
  export const inboundSchema = BilledToType1$inboundSchema;
  /** @deprecated use `BilledToType1$outboundSchema` instead. */
  export const outboundSchema = BilledToType1$outboundSchema;
}
