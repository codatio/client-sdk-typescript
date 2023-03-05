import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class ListCompanyConnectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListCompanyConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCompanyConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCompanyConnectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCompanyConnectionsQueryParams;
}

export class ListCompanyConnections401ApplicationJSON extends SpeakeasyBase {
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

export class ListCompanyConnections400ApplicationJSON extends SpeakeasyBase {
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

export class ListCompanyConnectionsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCompanyConnectionsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCompanyConnectionsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCompanyConnectionsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCompanyConnectionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCompanyConnectionsLinksLinksCurrent)
  current: ListCompanyConnectionsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCompanyConnectionsLinksLinksNext)
  next?: ListCompanyConnectionsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCompanyConnectionsLinksLinksPrevious)
  previous?: ListCompanyConnectionsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCompanyConnectionsLinksLinksSelf)
  self: ListCompanyConnectionsLinksLinksSelf;
}

export class ListCompanyConnectionsLinksConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp3" })
  additionalProp3?: string;
}

export class ListCompanyConnectionsLinksConnectionDataConnectionErrors extends SpeakeasyBase {
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
export enum ListCompanyConnectionsLinksConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum ListCompanyConnectionsLinksConnectionDataConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// ListCompanyConnectionsLinksConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class ListCompanyConnectionsLinksConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionInfo" })
  @Type(() => ListCompanyConnectionsLinksConnectionConnectionInfo)
  connectionInfo?: ListCompanyConnectionsLinksConnectionConnectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata({ elemType: ListCompanyConnectionsLinksConnectionDataConnectionErrors })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => ListCompanyConnectionsLinksConnectionDataConnectionErrors)
  dataConnectionErrors?: ListCompanyConnectionsLinksConnectionDataConnectionErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationKey" })
  integrationKey: string;

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
  sourceType: ListCompanyConnectionsLinksConnectionSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListCompanyConnectionsLinksConnectionDataConnectionStatusEnum;
}

// ListCompanyConnectionsLinks
/** 
 * Codat's Paging Model
**/
export class ListCompanyConnectionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCompanyConnectionsLinksLinks)
  links: ListCompanyConnectionsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCompanyConnectionsLinksConnection })
  @Expose({ name: "results" })
  @Type(() => ListCompanyConnectionsLinksConnection)
  results?: ListCompanyConnectionsLinksConnection[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCompanyConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCompanyConnectionsLinks;

  @SpeakeasyMetadata()
  listCompanyConnections400ApplicationJSONObject?: ListCompanyConnections400ApplicationJSON;

  @SpeakeasyMetadata()
  listCompanyConnections401ApplicationJSONObject?: ListCompanyConnections401ApplicationJSON;
}