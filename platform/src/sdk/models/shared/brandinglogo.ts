/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BrandingImage,
  BrandingImage$inboundSchema,
  BrandingImage$Outbound,
  BrandingImage$outboundSchema,
} from "./brandingimage.js";

/**
 * Logo branding references.
 */
export type BrandingLogo = {
  full?: BrandingImage | undefined;
  square?: BrandingImage | undefined;
};

/** @internal */
export const BrandingLogo$inboundSchema: z.ZodType<
  BrandingLogo,
  z.ZodTypeDef,
  unknown
> = z.object({
  full: BrandingImage$inboundSchema.optional(),
  square: BrandingImage$inboundSchema.optional(),
});

/** @internal */
export type BrandingLogo$Outbound = {
  full?: BrandingImage$Outbound | undefined;
  square?: BrandingImage$Outbound | undefined;
};

/** @internal */
export const BrandingLogo$outboundSchema: z.ZodType<
  BrandingLogo$Outbound,
  z.ZodTypeDef,
  BrandingLogo
> = z.object({
  full: BrandingImage$outboundSchema.optional(),
  square: BrandingImage$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrandingLogo$ {
  /** @deprecated use `BrandingLogo$inboundSchema` instead. */
  export const inboundSchema = BrandingLogo$inboundSchema;
  /** @deprecated use `BrandingLogo$outboundSchema` instead. */
  export const outboundSchema = BrandingLogo$outboundSchema;
  /** @deprecated use `BrandingLogo$Outbound` instead. */
  export type Outbound = BrandingLogo$Outbound;
}
