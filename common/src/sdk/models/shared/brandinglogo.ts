/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BrandingImage } from "./brandingimage";
import { Expose, Type } from "class-transformer";

/**
 * Logo branding references.
 */
export class BrandingLogo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "full" })
  @Type(() => BrandingImage)
  full?: BrandingImage;

  @SpeakeasyMetadata()
  @Expose({ name: "square" })
  @Type(() => BrandingImage)
  square?: BrandingImage;
}