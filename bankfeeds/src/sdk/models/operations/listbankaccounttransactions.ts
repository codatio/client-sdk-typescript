import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class ListBankAccountTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListBankAccountTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankAccountTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankAccountTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankAccountTransactionsQueryParams;
}

export class ListBankAccountTransactionsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankAccountTransactionsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankAccountTransactionsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankAccountTransactionsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankAccountTransactionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBankAccountTransactionsLinksLinksCurrent)
  current: ListBankAccountTransactionsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBankAccountTransactionsLinksLinksNext)
  next?: ListBankAccountTransactionsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBankAccountTransactionsLinksLinksPrevious)
  previous?: ListBankAccountTransactionsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBankAccountTransactionsLinksLinksSelf)
  self: ListBankAccountTransactionsLinksLinksSelf;
}
export enum ListBankAccountTransactionsLinksResultsTransactionsTransactionTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
    Int = "Int",
    Div = "Div",
    Fee = "Fee",
    SerChg = "SerChg",
    Dep = "Dep",
    Atm = "Atm",
    Pos = "Pos",
    Xfer = "Xfer",
    Check = "Check",
    Payment = "Payment",
    Cash = "Cash",
    DirectDep = "DirectDep",
    DirectDebit = "DirectDebit",
    RepeatPmt = "RepeatPmt",
    Other = "Other"
}

export class ListBankAccountTransactionsLinksResultsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "counterparty" })
  counterparty?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionType" })
  transactionType: ListBankAccountTransactionsLinksResultsTransactionsTransactionTypeEnum;
}

// ListBankAccountTransactionsLinksResults
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)
 * 
 * > View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Transactional banking data for a specific company and account.
 * 
 * Bank transactions include the:
 * * Amount of the transaction.
 * * Current account balance.
 * * Transaction type, for example, credit, debit, or transfer.
**/
export class ListBankAccountTransactionsLinksResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: ListBankAccountTransactionsLinksResultsTransactions })
  @Expose({ name: "transactions" })
  @Type(() => ListBankAccountTransactionsLinksResultsTransactions)
  transactions?: ListBankAccountTransactionsLinksResultsTransactions[];
}

// ListBankAccountTransactionsLinks
/** 
 * Codat's Paging Model
**/
export class ListBankAccountTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBankAccountTransactionsLinksLinks)
  links: ListBankAccountTransactionsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListBankAccountTransactionsLinksResults })
  @Expose({ name: "results" })
  @Type(() => ListBankAccountTransactionsLinksResults)
  results?: ListBankAccountTransactionsLinksResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBankAccountTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListBankAccountTransactionsLinks;
}