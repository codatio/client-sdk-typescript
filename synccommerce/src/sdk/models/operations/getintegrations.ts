import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetIntegrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIntegrationsQueryParams;
}

export class GetIntegrations200ApplicationJSONLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetIntegrations200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: GetIntegrations200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetIntegrations200ApplicationJSONLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetIntegrations200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetIntegrations200ApplicationJSONLinksSelf;
}

export class GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureState" })
  featureState?: string;

  @SpeakeasyMetadata({ data: "json, name=featureType" })
  featureType?: string;
}

export class GetIntegrations200ApplicationJSONResultsDatatypeFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datatype" })
  datatype?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedFeatures", elemType: GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures })
  supportedFeatures?: GetIntegrations200ApplicationJSONResultsDatatypeFeaturesSupportedFeatures[];
}
export enum GetIntegrations200ApplicationJSONResultsSourceTypeEnum {
    Unknown = "Unknown",
    Accounting = "Accounting",
    Banking = "Banking",
    BankFeed = "BankFeed",
    Commerce = "Commerce",
    Expense = "Expense",
    Other = "Other"
}
export enum GetIntegrations200ApplicationJSONResultsSupportedEnvironmentsEnum {
    Unknown = "Unknown",
    SandboxOnly = "SandboxOnly",
    LiveOnly = "LiveOnly",
    LiveAndSandbox = "LiveAndSandbox"
}

export class GetIntegrations200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datatypeFeatures", elemType: GetIntegrations200ApplicationJSONResultsDatatypeFeatures })
  datatypeFeatures?: GetIntegrations200ApplicationJSONResultsDatatypeFeatures[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=isBeta" })
  isBeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOfflineConnector" })
  isOfflineConnector?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedConnectionsCount" })
  linkedConnectionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: GetIntegrations200ApplicationJSONResultsSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=supportedEnvironments" })
  supportedEnvironments?: GetIntegrations200ApplicationJSONResultsSupportedEnvironmentsEnum;

  @SpeakeasyMetadata({ data: "json, name=totalConnectionsCount" })
  totalConnectionsCount?: number;
}

// GetIntegrations200ApplicationJSON
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class GetIntegrations200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetIntegrations200ApplicationJSONLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetIntegrations200ApplicationJSONResults })
  results?: GetIntegrations200ApplicationJSONResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}

export class GetIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrations200ApplicationJSONObject?: GetIntegrations200ApplicationJSON;
}