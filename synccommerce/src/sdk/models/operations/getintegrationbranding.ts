import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetIntegrationBrandingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}

export class GetIntegrationBrandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationBrandingPathParams;
}

export class GetIntegrationBrandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}