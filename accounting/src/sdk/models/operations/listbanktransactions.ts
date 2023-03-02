import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListBankTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListBankTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class ListBankTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankTransactionsQueryParams;

  @SpeakeasyMetadata()
  security: ListBankTransactionsSecurity;
}

export class ListBankTransactionsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankTransactionsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankTransactionsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankTransactionsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBankTransactionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBankTransactionsLinksLinksCurrent)
  current: ListBankTransactionsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBankTransactionsLinksLinksNext)
  next?: ListBankTransactionsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBankTransactionsLinksLinksPrevious)
  previous?: ListBankTransactionsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBankTransactionsLinksLinksSelf)
  self: ListBankTransactionsLinksLinksSelf;
}
export enum ListBankTransactionsLinksResultsTransactionTypeEnum {
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

export class ListBankTransactionsLinksResults extends SpeakeasyBase {
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
  transactionType: ListBankTransactionsLinksResultsTransactionTypeEnum;
}

// ListBankTransactionsLinks
/** 
 * Codat's Paging Model
**/
export class ListBankTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBankTransactionsLinksLinks)
  links: ListBankTransactionsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListBankTransactionsLinksResults })
  @Expose({ name: "results" })
  @Type(() => ListBankTransactionsLinksResults)
  results?: ListBankTransactionsLinksResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBankTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListBankTransactionsLinks;
}