import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CompaniesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class CompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CompaniesQueryParams;
}

export class Companies200ApplicationJSONLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class Companies200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: Companies200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: Companies200ApplicationJSONLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: Companies200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Companies200ApplicationJSONLinksSelf;
}

export class Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}

export class Companies200ApplicationJSONResultsDataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors })
  dataConnectionErrors?: Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors[];

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

export class Companies200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: Companies200ApplicationJSONResultsDataConnections })
  dataConnections: Companies200ApplicationJSONResultsDataConnections[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform: string;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect: string;
}

// Companies200ApplicationJSON
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class Companies200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Companies200ApplicationJSONLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Companies200ApplicationJSONResults })
  results?: Companies200ApplicationJSONResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}

export class CompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  companies200ApplicationJSONObject?: Companies200ApplicationJSON;
}