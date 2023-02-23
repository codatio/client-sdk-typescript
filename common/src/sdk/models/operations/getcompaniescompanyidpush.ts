import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdPushPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdPushQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
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
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCompaniesCompanyIdPushLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCompaniesCompanyIdPushLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCompaniesCompanyIdPushLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCompaniesCompanyIdPushLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: GetCompaniesCompanyIdPushLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetCompaniesCompanyIdPushLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetCompaniesCompanyIdPushLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: GetCompaniesCompanyIdPushLinksLinksSelf;
}

export class GetCompaniesCompanyIdPushLinksResultsChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum GetCompaniesCompanyIdPushLinksResultsChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class GetCompaniesCompanyIdPushLinksResultsChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: GetCompaniesCompanyIdPushLinksResultsChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetCompaniesCompanyIdPushLinksResultsChangesTypeEnum;
}
export enum GetCompaniesCompanyIdPushLinksResultsStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class GetCompaniesCompanyIdPushLinksResultsValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// GetCompaniesCompanyIdPushLinksResultsValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class GetCompaniesCompanyIdPushLinksResultsValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem })
  errors?: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem })
  warnings?: GetCompaniesCompanyIdPushLinksResultsValidationValidationItem[];
}

export class GetCompaniesCompanyIdPushLinksResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: GetCompaniesCompanyIdPushLinksResultsChanges })
  changes?: GetCompaniesCompanyIdPushLinksResultsChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCompaniesCompanyIdPushLinksResultsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdPushLinksResultsValidation;
}

// GetCompaniesCompanyIdPushLinks
/** 
 * Codat's Paging Model
**/
export class GetCompaniesCompanyIdPushLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: GetCompaniesCompanyIdPushLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetCompaniesCompanyIdPushLinksResults })
  results?: GetCompaniesCompanyIdPushLinksResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetCompaniesCompanyIdPushResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: GetCompaniesCompanyIdPushLinks;
}