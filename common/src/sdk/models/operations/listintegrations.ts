import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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

export class ListIntegrations400ApplicationJSON extends SpeakeasyBase {
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

export class ListIntegrationsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListIntegrationsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListIntegrationsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListIntegrationsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListIntegrationsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListIntegrationsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListIntegrationsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListIntegrationsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
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
  @SpeakeasyMetadata({ data: "json, name=featureState" })
  featureState: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureStateEnum;

  @SpeakeasyMetadata({ data: "json, name=featureType" })
  featureType: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeaturesFeatureTypeEnum;
}

// ListIntegrationsLinksIntegrationDatatypeFeature
/** 
 * Describes support for a given datatype and associated operations
**/
export class ListIntegrationsLinksIntegrationDatatypeFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datatype" })
  datatype: string;

  @SpeakeasyMetadata({ data: "json, name=supportedFeatures", elemType: ListIntegrationsLinksIntegrationDatatypeFeatureSupportedFeatures })
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
  @SpeakeasyMetadata({ data: "json, name=dataProvidedBy" })
  dataProvidedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=datatypeFeatures", elemType: ListIntegrationsLinksIntegrationDatatypeFeature })
  datatypeFeatures?: ListIntegrationsLinksIntegrationDatatypeFeature[];

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
  sourceType?: ListIntegrationsLinksIntegrationSourceTypeEnum;
}

// ListIntegrationsLinks
/** 
 * Codat's Paging Model
**/
export class ListIntegrationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListIntegrationsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListIntegrationsLinksIntegration })
  results?: ListIntegrationsLinksIntegration[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListIntegrationsLinks;

  @SpeakeasyMetadata()
  listIntegrations400ApplicationJSONObject?: ListIntegrations400ApplicationJSON;

  @SpeakeasyMetadata()
  listIntegrations401ApplicationJSONObject?: ListIntegrations401ApplicationJSON;
}