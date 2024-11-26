/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BrandingImage,
  BrandingImage$inboundSchema,
  BrandingImage$Outbound,
  BrandingImage$outboundSchema,
} from "./brandingimage.js";

/**
 * Button branding references.
 */
export type BrandingButton = {
  default?: BrandingImage | undefined;
  hover?: BrandingImage | undefined;
};

/** @internal */
export const BrandingButton$inboundSchema: z.ZodType<
  BrandingButton,
  z.ZodTypeDef,
  unknown
> = z.object({
  default: BrandingImage$inboundSchema.optional(),
  hover: BrandingImage$inboundSchema.optional(),
});

/** @internal */
export type BrandingButton$Outbound = {
  default?: BrandingImage$Outbound | undefined;
  hover?: BrandingImage$Outbound | undefined;
};

/** @internal */
export const BrandingButton$outboundSchema: z.ZodType<
  BrandingButton$Outbound,
  z.ZodTypeDef,
  BrandingButton
> = z.object({
  default: BrandingImage$outboundSchema.optional(),
  hover: BrandingImage$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrandingButton$ {
  /** @deprecated use `BrandingButton$inboundSchema` instead. */
  export const inboundSchema = BrandingButton$inboundSchema;
  /** @deprecated use `BrandingButton$outboundSchema` instead. */
  export const outboundSchema = BrandingButton$outboundSchema;
  /** @deprecated use `BrandingButton$Outbound` instead. */
  export type Outbound = BrandingButton$Outbound;
}

export function brandingButtonToJSON(brandingButton: BrandingButton): string {
  return JSON.stringify(BrandingButton$outboundSchema.parse(brandingButton));
}

export function brandingButtonFromJSON(
  jsonString: string,
): SafeParseResult<BrandingButton, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrandingButton$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrandingButton' from JSON`,
  );
}
