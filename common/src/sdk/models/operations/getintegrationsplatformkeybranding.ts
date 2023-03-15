import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetIntegrationsPlatformKeyBrandingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=platformKey",
  })
  platformKey: string;
}

export class GetIntegrationsPlatformKeyBrandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsPlatformKeyBrandingPathParams;
}

// GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImageImage
/**
 * Image reference.
 **/
export class GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImageImage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alt" })
  alt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "src" })
  src?: string;
}

export class GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImageImage)
  image?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImageImage;
}

// GetIntegrationsPlatformKeyBrandingBrandingLogo
/**
 * Logo branding references.
 **/
export class GetIntegrationsPlatformKeyBrandingBrandingLogo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "full" })
  @Type(() => GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage)
  full?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage;

  @SpeakeasyMetadata()
  @Expose({ name: "square" })
  @Type(() => GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage)
  square?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage;
}

export class GetIntegrationsPlatformKeyBrandingBranding extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "button" })
  button?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  @Type(() => GetIntegrationsPlatformKeyBrandingBrandingLogo)
  logo?: GetIntegrationsPlatformKeyBrandingBrandingLogo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId?: string;
}

export class GetIntegrationsPlatformKeyBrandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branding?: GetIntegrationsPlatformKeyBrandingBranding;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
