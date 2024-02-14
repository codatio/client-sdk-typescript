/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BrandingImage, BrandingImage$ } from "./brandingimage";
import { z } from "zod";

/**
 * Logo branding references.
 */
export type BrandingLogo = {
    full?: BrandingImage | undefined;
    square?: BrandingImage | undefined;
};

/** @internal */
export namespace BrandingLogo$ {
    export type Inbound = {
        full?: BrandingImage$.Inbound | undefined;
        square?: BrandingImage$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<BrandingLogo, z.ZodTypeDef, Inbound> = z
        .object({
            full: BrandingImage$.inboundSchema.optional(),
            square: BrandingImage$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.full === undefined ? null : { full: v.full }),
                ...(v.square === undefined ? null : { square: v.square }),
            };
        });

    export type Outbound = {
        full?: BrandingImage$.Outbound | undefined;
        square?: BrandingImage$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BrandingLogo> = z
        .object({
            full: BrandingImage$.outboundSchema.optional(),
            square: BrandingImage$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.full === undefined ? null : { full: v.full }),
                ...(v.square === undefined ? null : { square: v.square }),
            };
        });
}
