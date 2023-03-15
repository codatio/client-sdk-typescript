import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCompaniesQueryParams extends SpeakeasyBase {
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

export class ListCompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCompaniesQueryParams;
}

export class ListCompanies401ApplicationJSON extends SpeakeasyBase {
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

export class ListCompanies400ApplicationJSON extends SpeakeasyBase {
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

export class ListCompaniesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCompaniesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCompaniesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCompaniesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCompaniesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCompaniesLinksLinksCurrent)
  current: ListCompaniesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCompaniesLinksLinksNext)
  next?: ListCompaniesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCompaniesLinksLinksPrevious)
  previous?: ListCompaniesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCompaniesLinksLinksSelf)
  self: ListCompaniesLinksLinksSelf;
}

export class ListCompaniesLinksCompanyConnectionConnectionInfo extends SpeakeasyBase {
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

export class ListCompaniesLinksCompanyConnectionDataConnectionErrors extends SpeakeasyBase {
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
export enum ListCompaniesLinksCompanyConnectionSourceTypeEnum {
  Accounting = "Accounting",
  Banking = "Banking",
  Commerce = "Commerce",
  Other = "Other",
  Unknown = "Unknown",
}
export enum ListCompaniesLinksCompanyConnectionDataConnectionStatusEnum {
  PendingAuth = "PendingAuth",
  Linked = "Linked",
  Unlinked = "Unlinked",
  Deauthorized = "Deauthorized",
}

// ListCompaniesLinksCompanyConnection
/**
 * A connection represents the link between a `company` and a source of data.
 **/
export class ListCompaniesLinksCompanyConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionInfo" })
  @Type(() => ListCompaniesLinksCompanyConnectionConnectionInfo)
  connectionInfo?: ListCompaniesLinksCompanyConnectionConnectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata({
    elemType: ListCompaniesLinksCompanyConnectionDataConnectionErrors,
  })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => ListCompaniesLinksCompanyConnectionDataConnectionErrors)
  dataConnectionErrors?: ListCompaniesLinksCompanyConnectionDataConnectionErrors[];

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
  sourceType: ListCompaniesLinksCompanyConnectionSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListCompaniesLinksCompanyConnectionDataConnectionStatusEnum;
}

// ListCompaniesLinksCompany
/**
 * A company in Codat represent a small or medium sized business, whose data you wish to share
 **/
export class ListCompaniesLinksCompany extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ elemType: ListCompaniesLinksCompanyConnection })
  @Expose({ name: "dataConnections" })
  @Type(() => ListCompaniesLinksCompanyConnection)
  dataConnections?: ListCompaniesLinksCompanyConnection[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

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
  platform?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect" })
  redirect: string;
}

// ListCompaniesLinks
/**
 * Codat's Paging Model
 **/
export class ListCompaniesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCompaniesLinksLinks)
  links: ListCompaniesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCompaniesLinksCompany })
  @Expose({ name: "results" })
  @Type(() => ListCompaniesLinksCompany)
  results?: ListCompaniesLinksCompany[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCompaniesLinks;

  @SpeakeasyMetadata()
  listCompanies400ApplicationJSONObject?: ListCompanies400ApplicationJSON;

  @SpeakeasyMetadata()
  listCompanies401ApplicationJSONObject?: ListCompanies401ApplicationJSON;
}
