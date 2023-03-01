import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetIntegrationsPlatformKeyBrandingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
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
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}

export class GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImageImage;
}

// GetIntegrationsPlatformKeyBrandingBrandingLogo
/** 
 * Logo branding references.
**/
export class GetIntegrationsPlatformKeyBrandingBrandingLogo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full" })
  full?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage;

  @SpeakeasyMetadata({ data: "json, name=square" })
  square?: GetIntegrationsPlatformKeyBrandingBrandingLogoBrandingImage;
}

export class GetIntegrationsPlatformKeyBrandingBranding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=button" })
  button?: any;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: GetIntegrationsPlatformKeyBrandingBrandingLogo;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;
}

export class GetIntegrationsPlatformKeyBrandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  branding?: GetIntegrationsPlatformKeyBrandingBranding;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}