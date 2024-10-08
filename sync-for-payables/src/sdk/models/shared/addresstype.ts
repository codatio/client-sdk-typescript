/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of the address
 */
export const AddressType = {
  Unknown: "Unknown",
  Billing: "Billing",
  Delivery: "Delivery",
} as const;
/**
 * The type of the address
 */
export type AddressType = ClosedEnum<typeof AddressType>;

/** @internal */
export const AddressType$inboundSchema: z.ZodNativeEnum<typeof AddressType> = z
  .nativeEnum(AddressType);

/** @internal */
export const AddressType$outboundSchema: z.ZodNativeEnum<typeof AddressType> =
  AddressType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressType$ {
  /** @deprecated use `AddressType$inboundSchema` instead. */
  export const inboundSchema = AddressType$inboundSchema;
  /** @deprecated use `AddressType$outboundSchema` instead. */
  export const outboundSchema = AddressType$outboundSchema;
}
