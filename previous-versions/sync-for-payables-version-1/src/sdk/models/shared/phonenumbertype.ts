/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of phone number
 */
export const PhoneNumberType = {
  Primary: "Primary",
  Landline: "Landline",
  Mobile: "Mobile",
  Fax: "Fax",
  Unknown: "Unknown",
} as const;
/**
 * The type of phone number
 */
export type PhoneNumberType = ClosedEnum<typeof PhoneNumberType>;

/** @internal */
export const PhoneNumberType$inboundSchema: z.ZodNativeEnum<
  typeof PhoneNumberType
> = z.nativeEnum(PhoneNumberType);

/** @internal */
export const PhoneNumberType$outboundSchema: z.ZodNativeEnum<
  typeof PhoneNumberType
> = PhoneNumberType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneNumberType$ {
  /** @deprecated use `PhoneNumberType$inboundSchema` instead. */
  export const inboundSchema = PhoneNumberType$inboundSchema;
  /** @deprecated use `PhoneNumberType$outboundSchema` instead. */
  export const outboundSchema = PhoneNumberType$outboundSchema;
}