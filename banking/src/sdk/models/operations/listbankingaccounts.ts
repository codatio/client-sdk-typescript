import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListBankingAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListBankingAccountsQueryParams extends SpeakeasyBase {
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

export class ListBankingAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingAccountsQueryParams;
}

export class ListBankingAccountsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankingAccountsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankingAccountsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankingAccountsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankingAccountsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBankingAccountsLinksLinksCurrent)
  current: ListBankingAccountsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBankingAccountsLinksLinksNext)
  next?: ListBankingAccountsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBankingAccountsLinksLinksPrevious)
  previous?: ListBankingAccountsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBankingAccountsLinksLinksSelf)
  self: ListBankingAccountsLinksLinksSelf;
}

// ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts
/**
 * An object containing bank balance data.
 **/
export class ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  current?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;
}
export enum ListBankingAccountsLinksSourceModifiedDateAccountIdentifiersTypeEnum {
  Account = "Account",
  Card = "Card",
  Credit = "Credit",
  Depository = "Depository",
  Investment = "Investment",
  Loan = "Loan",
  Other = "Other",
}

// ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers
/**
 * An object containing bank account identification information.
 **/
export class ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankCode" })
  bankCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "bic" })
  bic?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "maskedAccountNumber" })
  maskedAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListBankingAccountsLinksSourceModifiedDateAccountIdentifiersTypeEnum;
}

// ListBankingAccountsLinksSourceModifiedDateAccountInstitution
/**
 * The bank or other financial institution providing the account.
 **/
export class ListBankingAccountsLinksSourceModifiedDateAccountInstitution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum ListBankingAccountsLinksSourceModifiedDateTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

// ListBankingAccountsLinksSourceModifiedDate
/**
 * An account where payments are made or received, and bank transactions are recorded.
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).
 **/
export class ListBankingAccountsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts)
  balance: ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "holder" })
  holder?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identifiers" })
  @Type(() => ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers)
  identifiers: ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "informalName" })
  informalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  @Type(() => ListBankingAccountsLinksSourceModifiedDateAccountInstitution)
  institution: ListBankingAccountsLinksSourceModifiedDateAccountInstitution;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListBankingAccountsLinksSourceModifiedDateTypeEnum;
}

// ListBankingAccountsLinks
/**
 * Codat's Paging Model
 **/
export class ListBankingAccountsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBankingAccountsLinksLinks)
  links: ListBankingAccountsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  @Type(() => ListBankingAccountsLinksSourceModifiedDate)
  results?: ListBankingAccountsLinksSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBankingAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListBankingAccountsLinks;
}
