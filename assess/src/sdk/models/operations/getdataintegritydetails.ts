import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum GetDataIntegrityDetailsDataTypeEnum {
  BankingAccounts = "banking-accounts",
  BankingTransactions = "banking-transactions",
  BankAccounts = "bankAccounts",
  AccountTransactions = "accountTransactions",
}

export class GetDataIntegrityDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=dataType",
  })
  dataType: GetDataIntegrityDetailsDataTypeEnum;
}

export class GetDataIntegrityDetailsQueryParams extends SpeakeasyBase {
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

export class GetDataIntegrityDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataIntegrityDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataIntegrityDetailsQueryParams;
}

export class GetDataIntegrityDetailsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetDataIntegrityDetailsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataIntegrityDetailsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataIntegrityDetailsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetDataIntegrityDetailsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetDataIntegrityDetailsLinksLinksCurrent)
  current: GetDataIntegrityDetailsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetDataIntegrityDetailsLinksLinksNext)
  next?: GetDataIntegrityDetailsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetDataIntegrityDetailsLinksLinksPrevious)
  previous?: GetDataIntegrityDetailsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetDataIntegrityDetailsLinksLinksSelf)
  self: GetDataIntegrityDetailsLinksLinksSelf;
}

export class GetDataIntegrityDetailsLinksDataIntegrityDetailsMatches extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetDataIntegrityDetailsLinksDataIntegrityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({
    elemType: GetDataIntegrityDetailsLinksDataIntegrityDetailsMatches,
  })
  @Expose({ name: "matches" })
  @Type(() => GetDataIntegrityDetailsLinksDataIntegrityDetailsMatches)
  matches?: GetDataIntegrityDetailsLinksDataIntegrityDetailsMatches[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

// GetDataIntegrityDetailsLinks
/**
 * Codat's Paging Model
 **/
export class GetDataIntegrityDetailsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetDataIntegrityDetailsLinksLinks)
  links: GetDataIntegrityDetailsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: GetDataIntegrityDetailsLinksDataIntegrityDetails,
  })
  @Expose({ name: "results" })
  @Type(() => GetDataIntegrityDetailsLinksDataIntegrityDetails)
  results?: GetDataIntegrityDetailsLinksDataIntegrityDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetDataIntegrityDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: GetDataIntegrityDetailsLinks;
}
