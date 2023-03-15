import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompaniesCompanyIdPushPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetCompaniesCompanyIdPushQueryParams extends SpeakeasyBase {
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

export class GetCompaniesCompanyIdPushRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdPushPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdPushQueryParams;
}

export class GetCompaniesCompanyIdPushLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompaniesCompanyIdPushLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompaniesCompanyIdPushLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompaniesCompanyIdPushLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompaniesCompanyIdPushLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetCompaniesCompanyIdPushLinksLinksCurrent)
  current: GetCompaniesCompanyIdPushLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetCompaniesCompanyIdPushLinksLinksNext)
  next?: GetCompaniesCompanyIdPushLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetCompaniesCompanyIdPushLinksLinksPrevious)
  previous?: GetCompaniesCompanyIdPushLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetCompaniesCompanyIdPushLinksLinksSelf)
  self: GetCompaniesCompanyIdPushLinksLinksSelf;
}

export class GetCompaniesCompanyIdPushLinksResultsChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum GetCompaniesCompanyIdPushLinksResultsChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class GetCompaniesCompanyIdPushLinksResultsChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () => GetCompaniesCompanyIdPushLinksResultsChangesPushOperationRecordRef
  )
  recordRef?: GetCompaniesCompanyIdPushLinksResultsChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCompaniesCompanyIdPushLinksResultsChangesTypeEnum;
}
export enum GetCompaniesCompanyIdPushLinksResultsStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class GetCompaniesCompanyIdPushLinksResultsValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// GetCompaniesCompanyIdPushLinksResultsValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class GetCompaniesCompanyIdPushLinksResultsValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => GetCompaniesCompanyIdPushLinksResultsValidationValidationItem)
  errors?: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdPushLinksResultsValidationValidationItem)
  warnings?: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem[];
}

export class GetCompaniesCompanyIdPushLinksResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdPushLinksResultsChanges })
  @Expose({ name: "changes" })
  @Type(() => GetCompaniesCompanyIdPushLinksResultsChanges)
  changes?: GetCompaniesCompanyIdPushLinksResultsChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompaniesCompanyIdPushLinksResultsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdPushLinksResultsValidation)
  validation?: GetCompaniesCompanyIdPushLinksResultsValidation;
}

// GetCompaniesCompanyIdPushLinks
/**
 * Codat's Paging Model
 **/
export class GetCompaniesCompanyIdPushLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetCompaniesCompanyIdPushLinksLinks)
  links: GetCompaniesCompanyIdPushLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdPushLinksResults })
  @Expose({ name: "results" })
  @Type(() => GetCompaniesCompanyIdPushLinksResults)
  results?: GetCompaniesCompanyIdPushLinksResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetCompaniesCompanyIdPushResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: GetCompaniesCompanyIdPushLinks;
}
