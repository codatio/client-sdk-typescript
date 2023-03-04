import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class Companies200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class Companies200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => Companies200ApplicationJSONLinksCurrent)
  current?: Companies200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => Companies200ApplicationJSONLinksNext)
  next?: Companies200ApplicationJSONLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => Companies200ApplicationJSONLinksPrevious)
  previous?: Companies200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => Companies200ApplicationJSONLinksSelf)
  self?: Companies200ApplicationJSONLinksSelf;
}

export class Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "erroredOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusText" })
  statusText?: string;
}

export class Companies200ApplicationJSONResultsDataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata({ elemType: Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors)
  dataConnectionErrors?: Companies200ApplicationJSONResultsDataConnectionsDataConnectionErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class Companies200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ elemType: Companies200ApplicationJSONResultsDataConnections })
  @Expose({ name: "dataConnections" })
  @Type(() => Companies200ApplicationJSONResultsDataConnections)
  dataConnections: Companies200ApplicationJSONResultsDataConnections[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platform" })
  platform: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect" })
  redirect: string;
}

// Companies200ApplicationJSON
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class Companies200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => Companies200ApplicationJSONLinks)
  links?: Companies200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: Companies200ApplicationJSONResults })
  @Expose({ name: "results" })
  @Type(() => Companies200ApplicationJSONResults)
  results?: Companies200ApplicationJSONResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class CompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  companies200ApplicationJSONObject?: Companies200ApplicationJSON;
}