import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetDataconnections200ApplicationJSONLinksCurrent)
  current?: GetDataconnections200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetDataconnections200ApplicationJSONLinksNext)
  next?: GetDataconnections200ApplicationJSONLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetDataconnections200ApplicationJSONLinksPrevious)
  previous?: GetDataconnections200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetDataconnections200ApplicationJSONLinksSelf)
  self?: GetDataconnections200ApplicationJSONLinksSelf;
}

export class GetDataconnections200ApplicationJSONResultsDataConnectionErrors extends SpeakeasyBase {
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

export class GetDataconnections200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata({ elemType: GetDataconnections200ApplicationJSONResultsDataConnectionErrors })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => GetDataconnections200ApplicationJSONResultsDataConnectionErrors)
  dataConnectionErrors?: GetDataconnections200ApplicationJSONResultsDataConnectionErrors[];

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

// GetDataconnections200ApplicationJSON
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class GetDataconnections200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetDataconnections200ApplicationJSONLinks)
  links?: GetDataconnections200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: GetDataconnections200ApplicationJSONResults })
  @Expose({ name: "results" })
  @Type(() => GetDataconnections200ApplicationJSONResults)
  results?: GetDataconnections200ApplicationJSONResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class GetDataconnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getDataconnections200ApplicationJSONObject?: GetDataconnections200ApplicationJSON;
}