/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CommerceAddressType,
  CommerceAddressType$inboundSchema,
  CommerceAddressType$outboundSchema,
} from "./commerceaddresstype.js";

export type CommerceAddress = {
  /**
   * The type of the address
   */
  type?: CommerceAddressType | undefined;
  /**
   * The first line of the address
   */
  line1?: string | undefined;
  /**
   * The second line of the address
   */
  line2?: string | undefined;
  /**
   * The third line of the address, or city
   */
  city?: string | undefined;
  /**
   * The fourth line of the address, or region
   */
  region?: string | undefined;
  /**
   * The country for the address
   */
  country?: string | undefined;
  /**
   * The postal (or zip) code for the address
   */
  postalCode?: string | undefined;
};

/** @internal */
export const CommerceAddress$inboundSchema: z.ZodType<
  CommerceAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CommerceAddressType$inboundSchema.optional(),
  line1: z.string().optional(),
  line2: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
});

/** @internal */
export type CommerceAddress$Outbound = {
  type?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  city?: string | undefined;
  region?: string | undefined;
  country?: string | undefined;
  postalCode?: string | undefined;
};

/** @internal */
export const CommerceAddress$outboundSchema: z.ZodType<
  CommerceAddress$Outbound,
  z.ZodTypeDef,
  CommerceAddress
> = z.object({
  type: CommerceAddressType$outboundSchema.optional(),
  line1: z.string().optional(),
  line2: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceAddress$ {
  /** @deprecated use `CommerceAddress$inboundSchema` instead. */
  export const inboundSchema = CommerceAddress$inboundSchema;
  /** @deprecated use `CommerceAddress$outboundSchema` instead. */
  export const outboundSchema = CommerceAddress$outboundSchema;
  /** @deprecated use `CommerceAddress$Outbound` instead. */
  export type Outbound = CommerceAddress$Outbound;
}
