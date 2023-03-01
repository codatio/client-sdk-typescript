import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCompaniesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCompaniesQueryParams;
}

export class ListCompanies401ApplicationJSON extends SpeakeasyBase {
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

export class ListCompanies400ApplicationJSON extends SpeakeasyBase {
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

export class ListCompaniesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCompaniesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCompaniesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCompaniesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCompaniesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCompaniesLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCompaniesLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCompaniesLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCompaniesLinksLinksSelf;
}

export class ListCompaniesLinksCompanyConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

export class ListCompaniesLinksCompanyConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
export enum ListCompaniesLinksCompanyConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum ListCompaniesLinksCompanyConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// ListCompaniesLinksCompanyConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class ListCompaniesLinksCompanyConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: ListCompaniesLinksCompanyConnectionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: ListCompaniesLinksCompanyConnectionDataConnectionErrors })
  dataConnectionErrors?: ListCompaniesLinksCompanyConnectionDataConnectionErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=integrationKey" })
  integrationKey: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType: ListCompaniesLinksCompanyConnectionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListCompaniesLinksCompanyConnectionStatusEnum;
}

// ListCompaniesLinksCompany
/** 
 * A company in Codat represent a small or medium sized business, whose data you wish to share
**/
export class ListCompaniesLinksCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: ListCompaniesLinksCompanyConnection })
  dataConnections?: ListCompaniesLinksCompanyConnection[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect: string;
}

// ListCompaniesLinks
/** 
 * Codat's Paging Model
**/
export class ListCompaniesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCompaniesLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCompaniesLinksCompany })
  results?: ListCompaniesLinksCompany[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCompaniesLinks;

  @SpeakeasyMetadata()
  listCompanies400ApplicationJSONObject?: ListCompanies400ApplicationJSON;

  @SpeakeasyMetadata()
  listCompanies401ApplicationJSONObject?: ListCompanies401ApplicationJSON;
}