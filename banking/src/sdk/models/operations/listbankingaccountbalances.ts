import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListBankingAccountBalancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListBankingAccountBalancesQueryParams extends SpeakeasyBase {
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

export class ListBankingAccountBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingAccountBalancesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingAccountBalancesQueryParams;
}

export class ListBankingAccountBalancesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankingAccountBalancesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankingAccountBalancesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankingAccountBalancesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankingAccountBalancesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBankingAccountBalancesLinksLinksCurrent)
  current: ListBankingAccountBalancesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBankingAccountBalancesLinksLinksNext)
  next?: ListBankingAccountBalancesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBankingAccountBalancesLinksLinksPrevious)
  previous?: ListBankingAccountBalancesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBankingAccountBalancesLinksLinksSelf)
  self: ListBankingAccountBalancesLinksLinksSelf;
}

// ListBankingAccountBalancesLinksSourceModifiedDateBalance
/**
 * An object containing bank balance data.
 **/
export class ListBankingAccountBalancesLinksSourceModifiedDateBalance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  current: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;
}

// ListBankingAccountBalancesLinksSourceModifiedDate
/**
 * The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.
 **/
export class ListBankingAccountBalancesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => ListBankingAccountBalancesLinksSourceModifiedDateBalance)
  balance: ListBankingAccountBalancesLinksSourceModifiedDateBalance;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

// ListBankingAccountBalancesLinks
/**
 * Codat's Paging Model
 **/
export class ListBankingAccountBalancesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBankingAccountBalancesLinksLinks)
  links: ListBankingAccountBalancesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  @Type(() => ListBankingAccountBalancesLinksSourceModifiedDate)
  results?: ListBankingAccountBalancesLinksSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBankingAccountBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListBankingAccountBalancesLinks;
}
