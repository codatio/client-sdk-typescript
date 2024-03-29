/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BrandingButton, BrandingButton$ } from "./brandingbutton";
import { BrandingLogo, BrandingLogo$ } from "./brandinglogo";
import { z } from "zod";

export type Branding = {
    /**
     * Button branding references.
     */
    button?: BrandingButton | undefined;
    /**
     * Logo branding references.
     */
    logo?: BrandingLogo | undefined;
    /**
     * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
     */
    sourceId?: string | undefined;
};

/** @internal */
export namespace Branding$ {
    export type Inbound = {
        button?: BrandingButton$.Inbound | undefined;
        logo?: BrandingLogo$.Inbound | undefined;
        sourceId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Branding, z.ZodTypeDef, Inbound> = z
        .object({
            button: BrandingButton$.inboundSchema.optional(),
            logo: BrandingLogo$.inboundSchema.optional(),
            sourceId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.button === undefined ? null : { button: v.button }),
                ...(v.logo === undefined ? null : { logo: v.logo }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
            };
        });

    export type Outbound = {
        button?: BrandingButton$.Outbound | undefined;
        logo?: BrandingLogo$.Outbound | undefined;
        sourceId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Branding> = z
        .object({
            button: BrandingButton$.outboundSchema.optional(),
            logo: BrandingLogo$.outboundSchema.optional(),
            sourceId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.button === undefined ? null : { button: v.button }),
                ...(v.logo === undefined ? null : { logo: v.logo }),
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
            };
        });
}
