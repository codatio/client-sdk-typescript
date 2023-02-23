import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesQueryParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinksSelf;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=suggested" })
  suggested?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccountModifiedDate;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinks
/** 
 * Codat's Paging Model
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccount })
  results?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinksCategorisedAccount[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesLinks;
}