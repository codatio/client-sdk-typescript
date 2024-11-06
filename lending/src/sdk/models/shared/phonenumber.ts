/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PhoneNumberType,
  PhoneNumberType$inboundSchema,
  PhoneNumberType$outboundSchema,
} from "./phonenumbertype.js";

export type PhoneNumber = {
  /**
   * A phone number.
   */
  number?: string | null | undefined;
  /**
   * The type of phone number
   */
  type: PhoneNumberType;
};

/** @internal */
export const PhoneNumber$inboundSchema: z.ZodType<
  PhoneNumber,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.nullable(z.string()).optional(),
  type: PhoneNumberType$inboundSchema,
});

/** @internal */
export type PhoneNumber$Outbound = {
  number?: string | null | undefined;
  type: string;
};

/** @internal */
export const PhoneNumber$outboundSchema: z.ZodType<
  PhoneNumber$Outbound,
  z.ZodTypeDef,
  PhoneNumber
> = z.object({
  number: z.nullable(z.string()).optional(),
  type: PhoneNumberType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneNumber$ {
  /** @deprecated use `PhoneNumber$inboundSchema` instead. */
  export const inboundSchema = PhoneNumber$inboundSchema;
  /** @deprecated use `PhoneNumber$outboundSchema` instead. */
  export const outboundSchema = PhoneNumber$outboundSchema;
  /** @deprecated use `PhoneNumber$Outbound` instead. */
  export type Outbound = PhoneNumber$Outbound;
}
