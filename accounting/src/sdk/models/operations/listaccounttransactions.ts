import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListAccountTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

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

export class ListAccountTransactionsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListAccountTransactionsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListAccountTransactionsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListAccountTransactionsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListAccountTransactionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListAccountTransactionsLinksLinksCurrent)
  current: ListAccountTransactionsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListAccountTransactionsLinksLinksNext)
  next?: ListAccountTransactionsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListAccountTransactionsLinksLinksPrevious)
  previous?: ListAccountTransactionsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListAccountTransactionsLinksLinksSelf)
  self: ListAccountTransactionsLinksLinksSelf;
}

// ListAccountTransactionsLinksSourceModifiedDateBankAccountRef
/**
 * Reference to the bank account the account transaction is recorded against.
 **/
export class ListAccountTransactionsLinksSourceModifiedDateBankAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListAccountTransactionsLinksSourceModifiedDateLinesRecordRef
/**
 * Links an account transaction line to the underlying record that created it.
 **/
export class ListAccountTransactionsLinksSourceModifiedDateLinesRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class ListAccountTransactionsLinksSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => ListAccountTransactionsLinksSourceModifiedDateLinesRecordRef)
  recordRef?: ListAccountTransactionsLinksSourceModifiedDateLinesRecordRef;
}

export class ListAccountTransactionsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum ListAccountTransactionsLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Unreconciled = "Unreconciled",
  Reconciled = "Reconciled",
  Void = "Void",
}

// ListAccountTransactionsLinksSourceModifiedDate
/**
 * > **Language tip:** In Codat, account transactions represent all transactions posted to a bank account within an accounting platform. For bank transactions posted within a banking platform, refer to [Banking transactions](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions).
 *
 * > View the coverage for account transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=accountTransactions" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In Codat’s data model, account transactions represent bank activity within an accounting platform. All transactions that go through a bank account are recorded as account transactions.
 *
 * Account transactions are created as a result of different business activities, for example:
 *
 * * Payments: for example, receiving money for payment against an invoice.
 * * Bill payments: for example, spending money for a payment against a bill.
 * * Direct costs: for example, withdrawing money from a bank account, either for cash purposes or to make a payment.
 * * Direct incomes: for example, selling an item directly to a contact and receiving payment at point of sale.
 * * Transfers: for example, transferring money between two bank accounts.
 *
 * Account transactions is the parent data type of [payments](https://docs.codat.io/accounting-api#/schemas/Payment), [bill payments](https://docs.codat.io/accounting-api#/schemas/BillPayment), [direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost), [direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome), and [transfers](https://docs.codat.io/accounting-api#/schemas/Transfer).
 **/
export class ListAccountTransactionsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccountRef" })
  @Type(() => ListAccountTransactionsLinksSourceModifiedDateBankAccountRef)
  bankAccountRef?: ListAccountTransactionsLinksSourceModifiedDateBankAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({
    elemType: ListAccountTransactionsLinksSourceModifiedDateLines,
  })
  @Expose({ name: "lines" })
  @Type(() => ListAccountTransactionsLinksSourceModifiedDateLines)
  lines?: ListAccountTransactionsLinksSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListAccountTransactionsLinksSourceModifiedDateMetadata)
  metadata?: ListAccountTransactionsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListAccountTransactionsLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionId" })
  transactionId?: string;
}

// ListAccountTransactionsLinks
/**
 * Codat's Paging Model
 **/
export class ListAccountTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListAccountTransactionsLinksLinks)
  links: ListAccountTransactionsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: ListAccountTransactionsLinksSourceModifiedDate,
  })
  @Expose({ name: "results" })
  @Type(() => ListAccountTransactionsLinksSourceModifiedDate)
  results?: ListAccountTransactionsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListAccountTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListAccountTransactionsLinks;
}
