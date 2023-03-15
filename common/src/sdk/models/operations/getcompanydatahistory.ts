import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompanyDataHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetCompanyDataHistoryQueryParams extends SpeakeasyBase {
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

export class GetCompanyDataHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyDataHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompanyDataHistoryQueryParams;
}

export class GetCompanyDataHistory404ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistory401ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistory400ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistoryLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetCompanyDataHistoryLinksLinksCurrent)
  current: GetCompanyDataHistoryLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetCompanyDataHistoryLinksLinksNext)
  next?: GetCompanyDataHistoryLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetCompanyDataHistoryLinksLinksPrevious)
  previous?: GetCompanyDataHistoryLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetCompanyDataHistoryLinksLinksSelf)
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
  PrerequisiteNotMet = "PrerequisiteNotMet",
}

// GetCompanyDataHistoryLinksPullOperation
/**
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
 **/
export class GetCompanyDataHistoryLinksPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "progress" })
  progress: number;

  @SpeakeasyMetadata()
  @Expose({ name: "requested" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requested: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompanyDataHistoryLinksPullOperationStatusEnum;
}

// GetCompanyDataHistoryLinks
/**
 * Codat's Paging Model
 **/
export class GetCompanyDataHistoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetCompanyDataHistoryLinksLinks)
  links: GetCompanyDataHistoryLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetCompanyDataHistoryLinksPullOperation })
  @Expose({ name: "results" })
  @Type(() => GetCompanyDataHistoryLinksPullOperation)
  results?: GetCompanyDataHistoryLinksPullOperation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetCompanyDataHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: GetCompanyDataHistoryLinks;

  @SpeakeasyMetadata()
  getCompanyDataHistory400ApplicationJSONObject?: GetCompanyDataHistory400ApplicationJSON;

  @SpeakeasyMetadata()
  getCompanyDataHistory401ApplicationJSONObject?: GetCompanyDataHistory401ApplicationJSON;

  @SpeakeasyMetadata()
  getCompanyDataHistory404ApplicationJSONObject?: GetCompanyDataHistory404ApplicationJSON;
}
