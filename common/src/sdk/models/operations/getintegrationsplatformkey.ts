import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetIntegrationsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=platformKey",
  })
  platformKey: string;
}

export class GetIntegrationsPlatformKey404ApplicationJSON extends SpeakeasyBase {
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

export class GetIntegrationsPlatformKey401ApplicationJSON extends SpeakeasyBase {
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
export enum GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum {
  Release = "Release",
  Beta = "Beta",
  Deprecated = "Deprecated",
  NotSupported = "NotSupported",
  NotImplemented = "NotImplemented",
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
  UploadAttachment = "UploadAttachment",
}

export class GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "featureState" })
  featureState: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "featureType" })
  featureType: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum;
}

// GetIntegrationsPlatformKeyIntegrationDatatypeFeature
/**
 * Describes support for a given datatype and associated operations
 **/
export class GetIntegrationsPlatformKeyIntegrationDatatypeFeature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datatype" })
  datatype: string;

  @SpeakeasyMetadata({
    elemType:
      GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures,
  })
  @Expose({ name: "supportedFeatures" })
  @Type(
    () => GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures
  )
  supportedFeatures: GetIntegrationsPlatformKeyIntegrationDatatypeFeatureSupportedFeatures[];
}
export enum GetIntegrationsPlatformKeyIntegrationSourceTypeEnum {
  Accounting = "Accounting",
  Banking = "Banking",
  Commerce = "Commerce",
  Other = "Other",
  Unknown = "Unknown",
}

// GetIntegrationsPlatformKeyIntegration
/**
 * An integration that Codat supports
 **/
export class GetIntegrationsPlatformKeyIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataProvidedBy" })
  dataProvidedBy?: string;

  @SpeakeasyMetadata({
    elemType: GetIntegrationsPlatformKeyIntegrationDatatypeFeature,
  })
  @Expose({ name: "datatypeFeatures" })
  @Type(() => GetIntegrationsPlatformKeyIntegrationDatatypeFeature)
  datatypeFeatures?: GetIntegrationsPlatformKeyIntegrationDatatypeFeature[];

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isBeta" })
  isBeta?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isOfflineConnector" })
  isOfflineConnector?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logoUrl" })
  logoUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getIntegrationsPlatformKey401ApplicationJSONObject?: GetIntegrationsPlatformKey401ApplicationJSON;

  @SpeakeasyMetadata()
  getIntegrationsPlatformKey404ApplicationJSONObject?: GetIntegrationsPlatformKey404ApplicationJSON;
}
