import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetSettingsProfile401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

// GetSettingsProfileProfile
/** 
 * Describes your Codat client instance
**/
export class GetSettingsProfileProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertAuthHeader" })
  alertAuthHeader?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmCompanyName" })
  confirmCompanyName?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirectUrl" })
  redirectUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "whiteListUrls" })
  whiteListUrls?: string[];
}

export class GetSettingsProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  profile?: GetSettingsProfileProfile;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getSettingsProfile401ApplicationJSONObject?: GetSettingsProfile401ApplicationJSON;
}