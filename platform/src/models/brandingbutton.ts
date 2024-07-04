/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BrandingImage, BrandingImage$ } from "./brandingimage.js";
import * as z from "zod";

/**
 * Button branding references.
 */
export type BrandingButton = {
    default?: BrandingImage | undefined;
    hover?: BrandingImage | undefined;
};

/** @internal */
export namespace BrandingButton$ {
    export const inboundSchema: z.ZodType<BrandingButton, z.ZodTypeDef, unknown> = z.object({
        default: BrandingImage$.inboundSchema.optional(),
        hover: BrandingImage$.inboundSchema.optional(),
    });

    export type Outbound = {
        default?: BrandingImage$.Outbound | undefined;
        hover?: BrandingImage$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BrandingButton> = z.object({
        default: BrandingImage$.outboundSchema.optional(),
        hover: BrandingImage$.outboundSchema.optional(),
    });
}
