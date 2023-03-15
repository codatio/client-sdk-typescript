import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetIntegrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIntegrationsQueryParams;
}

export class GetIntegrations200ApplicationJSONLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetIntegrations200ApplicationJSONLinksCurrent)
  current?: GetIntegrations200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetIntegrations200ApplicationJSONLinksNext)
  next?: GetIntegrations200ApplicationJSONLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetIntegrations200ApplicationJSONLinksPrevious)
  previous?: GetIntegrations200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetIntegrations200ApplicationJSONLinksSelf)
  self?: GetIntegrations200ApplicationJSONLinksSelf;
}

export class GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "featureState" })
  featureState?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "featureType" })
  featureType?: string;
}

export class GetIntegrations200ApplicationJSONResultsDatatypeFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datatype" })
  datatype?: string;

  @SpeakeasyMetadata({
    elemType:
      GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures,
  })
  @Expose({ name: "supportedFeatures" })
  @Type(
    () =>
      GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures
  )
  supportedFeatures?: GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures[];
}
export enum GetIntegrations200ApplicationJSONResultsSourceTypeEnum {
  Unknown = "Unknown",
  Accounting = "Accounting",
  Banking = "Banking",
  BankFeed = "BankFeed",
  Commerce = "Commerce",
  Expense = "Expense",
  Other = "Other",
}
export enum GetIntegrations200ApplicationJSONResultsSupportedEnvironmentsEnum {
  Unknown = "Unknown",
  SandboxOnly = "SandboxOnly",
  LiveOnly = "LiveOnly",
  LiveAndSandbox = "LiveAndSandbox",
}

export class GetIntegrations200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetIntegrations200ApplicationJSONResultsDatatypeFeatures,
  })
  @Expose({ name: "datatypeFeatures" })
  @Type(() => GetIntegrations200ApplicationJSONResultsDatatypeFeatures)
  datatypeFeatures?: GetIntegrations200ApplicationJSONResultsDatatypeFeatures[];

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

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
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "linkedConnectionsCount" })
  linkedConnectionsCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: GetIntegrations200ApplicationJSONResultsSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supportedEnvironments" })
  supportedEnvironments?: GetIntegrations200ApplicationJSONResultsSupportedEnvironmentsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalConnectionsCount" })
  totalConnectionsCount?: number;
}

// GetIntegrations200ApplicationJSON
/**
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
 **/
export class GetIntegrations200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetIntegrations200ApplicationJSONLinks)
  links?: GetIntegrations200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: GetIntegrations200ApplicationJSONResults })
  @Expose({ name: "results" })
  @Type(() => GetIntegrations200ApplicationJSONResults)
  results?: GetIntegrations200ApplicationJSONResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class GetIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getIntegrations200ApplicationJSONObject?: GetIntegrations200ApplicationJSON;
}
