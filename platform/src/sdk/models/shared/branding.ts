/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BrandingButton } from "./brandingbutton";
import { BrandingLogo } from "./brandinglogo";
import { Expose, Type } from "class-transformer";

export class Branding extends SpeakeasyBase {
    /**
     * Button branding references.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "button" })
    @Type(() => BrandingButton)
    button?: BrandingButton;

    /**
     * Logo branding references.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    @Type(() => BrandingLogo)
    logo?: BrandingLogo;

    /**
     * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId?: string;
}
