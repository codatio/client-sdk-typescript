/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The frequency in which you want data to be synced.
 */
export const SyncFrequency = {
  Daily: "Daily",
  Monthly: "Monthly",
} as const;
/**
 * The frequency in which you want data to be synced.
 */
export type SyncFrequency = ClosedEnum<typeof SyncFrequency>;

/** @internal */
export const SyncFrequency$inboundSchema: z.ZodNativeEnum<
  typeof SyncFrequency
> = z.nativeEnum(SyncFrequency);

/** @internal */
export const SyncFrequency$outboundSchema: z.ZodNativeEnum<
  typeof SyncFrequency
> = SyncFrequency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SyncFrequency$ {
  /** @deprecated use `SyncFrequency$inboundSchema` instead. */
  export const inboundSchema = SyncFrequency$inboundSchema;
  /** @deprecated use `SyncFrequency$outboundSchema` instead. */
  export const outboundSchema = SyncFrequency$outboundSchema;
}
