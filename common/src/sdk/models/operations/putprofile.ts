import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// PutProfileProfile
/** 
 * Describes your Codat client instance
**/
export class PutProfileProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertAuthHeader" })
  alertAuthHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmCompanyName" })
  confirmCompanyName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=redirectUrl" })
  redirectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=whiteListUrls" })
  whiteListUrls?: string[];
}

export class PutProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutProfileProfile;
}

export class PutProfile401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

export class PutProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  profile?: PutProfileProfile;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putProfile401ApplicationJSONObject?: PutProfile401ApplicationJSON;
}