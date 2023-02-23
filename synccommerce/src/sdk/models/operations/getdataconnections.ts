import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataconnectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetDataconnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataconnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataconnectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataconnectionsQueryParams;
}

export class GetDataconnections200ApplicationJSONLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: GetDataconnections200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetDataconnections200ApplicationJSONLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetDataconnections200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetDataconnections200ApplicationJSONLinksSelf;
}

export class GetDataconnections200ApplicationJSONResultsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}

export class GetDataconnections200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: GetDataconnections200ApplicationJSONResultsDataConnectionErrors })
  dataConnectionErrors?: GetDataconnections200ApplicationJSONResultsDataConnectionErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

// GetDataconnections200ApplicationJSON
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class GetDataconnections200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetDataconnections200ApplicationJSONLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetDataconnections200ApplicationJSONResults })
  results?: GetDataconnections200ApplicationJSONResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}

export class GetDataconnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataconnections200ApplicationJSONObject?: GetDataconnections200ApplicationJSON;
}