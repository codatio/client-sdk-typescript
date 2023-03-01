import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsDataTypeEnum {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
    BankAccounts = "bankAccounts",
    AccountTransactions = "accountTransactions"
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsDataTypeEnum;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryParams;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinksSelf;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetailsMatches extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetailsMatches })
  matches?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetailsMatches[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

// GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinks
/** 
 * Codat's Paging Model
**/
export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetails })
  results?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinksDataIntegrityDetails[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsLinks;
}