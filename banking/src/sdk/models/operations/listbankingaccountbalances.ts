import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListBankingAccountBalancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListBankingAccountBalancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankingAccountBalancesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListBankingAccountBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingAccountBalancesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingAccountBalancesQueryParams;

  @SpeakeasyMetadata()
  security: ListBankingAccountBalancesSecurity;
}

export class ListBankingAccountBalancesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankingAccountBalancesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankingAccountBalancesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankingAccountBalancesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankingAccountBalancesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListBankingAccountBalancesLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListBankingAccountBalancesLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListBankingAccountBalancesLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListBankingAccountBalancesLinksLinksSelf;
}

// ListBankingAccountBalancesLinksSourceModifiedDateBalance
/** 
 * An object containing bank balance data.
**/
export class ListBankingAccountBalancesLinksSourceModifiedDateBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}

// ListBankingAccountBalancesLinksSourceModifiedDate
/** 
 * The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.
**/
export class ListBankingAccountBalancesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: ListBankingAccountBalancesLinksSourceModifiedDateBalance;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

// ListBankingAccountBalancesLinks
/** 
 * Codat's Paging Model
**/
export class ListBankingAccountBalancesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListBankingAccountBalancesLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: ListBankingAccountBalancesLinksSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListBankingAccountBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListBankingAccountBalancesLinks;
}