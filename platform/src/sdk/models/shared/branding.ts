/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BrandingButton,
  BrandingButton$inboundSchema,
  BrandingButton$Outbound,
  BrandingButton$outboundSchema,
} from "./brandingbutton.js";
import {
  BrandingLogo,
  BrandingLogo$inboundSchema,
  BrandingLogo$Outbound,
  BrandingLogo$outboundSchema,
} from "./brandinglogo.js";

export type Branding = {
  /**
   * Logo branding references.
   */
  logo?: BrandingLogo | undefined;
  /**
   * Button branding references.
   */
  button?: BrandingButton | undefined;
  /**
   * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
   */
  sourceId?: string | undefined;
};

/** @internal */
export const Branding$inboundSchema: z.ZodType<
  Branding,
  z.ZodTypeDef,
  unknown
> = z.object({
  logo: BrandingLogo$inboundSchema.optional(),
  button: BrandingButton$inboundSchema.optional(),
  sourceId: z.string().optional(),
});

/** @internal */
export type Branding$Outbound = {
  logo?: BrandingLogo$Outbound | undefined;
  button?: BrandingButton$Outbound | undefined;
  sourceId?: string | undefined;
};

/** @internal */
export const Branding$outboundSchema: z.ZodType<
  Branding$Outbound,
  z.ZodTypeDef,
  Branding
> = z.object({
  logo: BrandingLogo$outboundSchema.optional(),
  button: BrandingButton$outboundSchema.optional(),
  sourceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Branding$ {
  /** @deprecated use `Branding$inboundSchema` instead. */
  export const inboundSchema = Branding$inboundSchema;
  /** @deprecated use `Branding$outboundSchema` instead. */
  export const outboundSchema = Branding$outboundSchema;
  /** @deprecated use `Branding$Outbound` instead. */
  export type Outbound = Branding$Outbound;
}

export function brandingToJSON(branding: Branding): string {
  return JSON.stringify(Branding$outboundSchema.parse(branding));
}

export function brandingFromJSON(
  jsonString: string,
): SafeParseResult<Branding, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Branding$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Branding' from JSON`,
  );
}
