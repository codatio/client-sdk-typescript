import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompanyDataHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompanyDataHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetCompanyDataHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyDataHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompanyDataHistoryQueryParams;
}

export class GetCompanyDataHistory404ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistory401ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistory400ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistoryLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: GetCompanyDataHistoryLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetCompanyDataHistoryLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetCompanyDataHistoryLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: GetCompanyDataHistoryLinksLinksSelf;
}
export enum GetCompanyDataHistoryLinksPullOperationStatusEnum {
    Initial = "Initial",
    Queued = "Queued",
    Fetching = "Fetching",
    MapQueued = "MapQueued",
    Mapping = "Mapping",
    Complete = "Complete",
    FetchError = "FetchError",
    MapError = "MapError",
    InternalError = "InternalError",
    ProcessingQueued = "ProcessingQueued",
    Processing = "Processing",
    ProcessingError = "ProcessingError",
    ValidationQueued = "ValidationQueued",
    Validating = "Validating",
    ValidationError = "ValidationError",
    AuthError = "AuthError",
    Cancelled = "Cancelled",
    Routing = "Routing",
    RoutingError = "RoutingError",
    NotSupported = "NotSupported",
    RateLimitError = "RateLimitError",
    PermissionsError = "PermissionsError",
    PrerequisiteNotMet = "PrerequisiteNotMet"
}

// GetCompanyDataHistoryLinksPullOperation
/** 
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
**/
export class GetCompanyDataHistoryLinksPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=requested" })
  requested: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCompanyDataHistoryLinksPullOperationStatusEnum;
}

// GetCompanyDataHistoryLinks
/** 
 * Codat's Paging Model
**/
export class GetCompanyDataHistoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: GetCompanyDataHistoryLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetCompanyDataHistoryLinksPullOperation })
  results?: GetCompanyDataHistoryLinksPullOperation[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetCompanyDataHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: GetCompanyDataHistoryLinks;

  @SpeakeasyMetadata()
  getCompanyDataHistory400ApplicationJSONObject?: GetCompanyDataHistory400ApplicationJSON;

  @SpeakeasyMetadata()
  getCompanyDataHistory401ApplicationJSONObject?: GetCompanyDataHistory401ApplicationJSON;

  @SpeakeasyMetadata()
  getCompanyDataHistory404ApplicationJSONObject?: GetCompanyDataHistory404ApplicationJSON;
}