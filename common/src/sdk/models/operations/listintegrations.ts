import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class ListIntegrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListIntegrationsQueryParams;
}

export class ListIntegrations401ApplicationJSON extends SpeakeasyBase {
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

export class ListIntegrations400ApplicationJSON extends SpeakeasyBase {
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

export class ListIntegrationsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListIntegrationsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListIntegrationsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListIntegrationsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListIntegrationsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListIntegrationsLinksLinksCurrent)
  current: ListIntegrationsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListIntegrationsLinksLinksNext)
  next?: ListIntegrationsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListIntegrationsLinksLinksPrevious)
  previous?: ListIntegrationsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListIntegrationsLinksLinksSelf)
  self: ListIntegrationsLinksLinksSelf;
}
export enum ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum {
    Release = "Release",
    Beta = "Beta",
    Deprecated = "Deprecated",
    NotSupported = "NotSupported",
    NotImplemented = "NotImplemented"
}
export enum ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum {
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

export class ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "featureState" })
  featureState: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "featureType" })
  featureType: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum;
}

// ListIntegrationsLinksIntegrationDatatypeFeature
/** 
 * Describes support for a given datatype and associated operations
**/
export class ListIntegrationsLinksIntegrationDatatypeFeature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datatype" })
  datatype: string;

  @SpeakeasyMetadata({ elemType: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeatures })
  @Expose({ name: "supportedFeatures" })
  @Type(() => ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeatures)
  supportedFeatures: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeatures[];
}
export enum ListIntegrationsLinksIntegrationSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}

// ListIntegrationsLinksIntegration
/** 
 * An integration that Codat supports
**/
export class ListIntegrationsLinksIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataProvidedBy" })
  dataProvidedBy?: string;

  @SpeakeasyMetadata({ elemType: ListIntegrationsLinksIntegrationDatatypeFeature })
  @Expose({ name: "datatypeFeatures" })
  @Type(() => ListIntegrationsLinksIntegrationDatatypeFeature)
  datatypeFeatures?: ListIntegrationsLinksIntegrationDatatypeFeature[];

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
  sourceType?: ListIntegrationsLinksIntegrationSourceTypeEnum;
}

// ListIntegrationsLinks
/** 
 * Codat's Paging Model
**/
export class ListIntegrationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListIntegrationsLinksLinks)
  links: ListIntegrationsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListIntegrationsLinksIntegration })
  @Expose({ name: "results" })
  @Type(() => ListIntegrationsLinksIntegration)
  results?: ListIntegrationsLinksIntegration[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListIntegrationsLinks;

  @SpeakeasyMetadata()
  listIntegrations400ApplicationJSONObject?: ListIntegrations400ApplicationJSON;

  @SpeakeasyMetadata()
  listIntegrations401ApplicationJSONObject?: ListIntegrations401ApplicationJSON;
}