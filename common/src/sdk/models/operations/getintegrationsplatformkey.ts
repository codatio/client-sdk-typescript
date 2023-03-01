import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetIntegrationsPlatformKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}

export class GetIntegrationsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsPlatformKeyPathParams;
}

export class GetIntegrationsPlatformKey404ApplicationJSON extends SpeakeasyBase {
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

export class GetIntegrationsPlatformKey401ApplicationJSON extends SpeakeasyBase {
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
export enum GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum {
    Release = "Release",
    Beta = "Beta",
    Deprecated = "Deprecated",
    NotSupported = "NotSupported",
    NotImplemented = "NotImplemented"
}
export enum GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum {
    Get = "Get",
    Post = "Post",
    Categorization = "Categorization",
    Delete = "Delete",
    Put = "Put",
    GetAsPdf = "GetAsPdf",
    DownloadAttachment = "DownloadAttachment",
    GetAttachment = "GetAttachment",
    GetAttachments = "GetAttachments",
    UploadAttachment = "UploadAttachment"
}

export class GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureState" })
  featureState: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum;

  @SpeakeasyMetadata({ data: "json, name=featureType" })
  featureType: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum;
}

// GetIntegrationsPlatformKeyIntegrationDatatypeFeature
/** 
 * Describes support for a given datatype and associated operations
**/
export class GetIntegrationsPlatformKeyIntegrationDatatypeFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datatype" })
  datatype: string;

  @SpeakeasyMetadata({ data: "json, name=supportedFeatures", elemType: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures })
  supportedFeatures: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures[];
}
export enum GetIntegrationsPlatformKeyIntegrationSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}

// GetIntegrationsPlatformKeyIntegration
/** 
 * An integration that Codat supports
**/
export class GetIntegrationsPlatformKeyIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataProvidedBy" })
  dataProvidedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=datatypeFeatures", elemType: GetIntegrationsPlatformKeyIntegrationDatatypeFeature })
  datatypeFeatures?: GetIntegrationsPlatformKeyIntegrationDatatypeFeature[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=isBeta" })
  isBeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOfflineConnector" })
  isOfflineConnector?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: GetIntegrationsPlatformKeyIntegrationSourceTypeEnum;
}

export class GetIntegrationsPlatformKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integration?: GetIntegrationsPlatformKeyIntegration;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsPlatformKey401ApplicationJSONObject?: GetIntegrationsPlatformKey401ApplicationJSON;

  @SpeakeasyMetadata()
  getIntegrationsPlatformKey404ApplicationJSONObject?: GetIntegrationsPlatformKey404ApplicationJSON;
}