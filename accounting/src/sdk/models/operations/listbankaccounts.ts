import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListBankAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListBankAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankAccountsQueryParams;

  @SpeakeasyMetadata()
  security: ListBankAccountsSecurity;
}

export class ListBankAccountsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankAccountsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankAccountsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBankAccountsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBankAccountsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListBankAccountsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListBankAccountsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListBankAccountsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListBankAccountsLinksLinksSelf;
}
export enum ListBankAccountsLinksSourceModifiedDateAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

export class ListBankAccountsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

// ListBankAccountsLinksSourceModifiedDate
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * > 
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 * 
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 * 
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
**/
export class ListBankAccountsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: ListBankAccountsLinksSourceModifiedDateAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=iBan" })
  iBan?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListBankAccountsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=overdraftLimit" })
  overdraftLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

// ListBankAccountsLinks
/** 
 * Codat's Paging Model
**/
export class ListBankAccountsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListBankAccountsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListBankAccountsLinksSourceModifiedDate })
  results?: ListBankAccountsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListBankAccountsLinks;
}