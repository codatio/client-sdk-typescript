import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListBankingAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListBankingAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankingAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListBankingAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingAccountsQueryParams;

  @SpeakeasyMetadata()
  security: ListBankingAccountsSecurity;
}

export class ListBankingAccountsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankingAccountsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankingAccountsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankingAccountsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankingAccountsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListBankingAccountsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListBankingAccountsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListBankingAccountsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListBankingAccountsLinksLinksSelf;
}

// ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts
/** 
 * An object containing bank balance data.
**/
export class ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}
export enum ListBankingAccountsLinksSourceModifiedDateAccountIdentifiersTypeEnum {
    Account = "Account",
    Card = "Card",
    Credit = "Credit",
    Depository = "Depository",
    Investment = "Investment",
    Loan = "Loan",
    Other = "Other"
}

// ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers
/** 
 * An object containing bank account identification information.
**/
export class ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankCode" })
  bankCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=maskedAccountNumber" })
  maskedAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListBankingAccountsLinksSourceModifiedDateAccountIdentifiersTypeEnum;
}

// ListBankingAccountsLinksSourceModifiedDateAccountInstitution
/** 
 * The bank or other financial institution providing the account.
**/
export class ListBankingAccountsLinksSourceModifiedDateAccountInstitution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
export enum ListBankingAccountsLinksSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// ListBankingAccountsLinksSourceModifiedDate
/** 
 * An account where payments are made or received, and bank transactions are recorded.
 * 
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).
**/
export class ListBankingAccountsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: ListBankingAccountsLinksSourceModifiedDateAccountBalanceAmounts;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=holder" })
  holder?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers: ListBankingAccountsLinksSourceModifiedDateAccountIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=informalName" })
  informalName?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution: ListBankingAccountsLinksSourceModifiedDateAccountInstitution;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListBankingAccountsLinksSourceModifiedDateTypeEnum;
}

// ListBankingAccountsLinks
/** 
 * Codat's Paging Model
**/
export class ListBankingAccountsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListBankingAccountsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: ListBankingAccountsLinksSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListBankingAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListBankingAccountsLinks;
}