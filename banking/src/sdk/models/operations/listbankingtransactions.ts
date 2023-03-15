import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListBankingTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListBankingTransactionsQueryParams extends SpeakeasyBase {
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

export class ListBankingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingTransactionsQueryParams;
}
export enum ListBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum {
  Unknown = "Unknown",
  Fee = "Fee",
  Payment = "Payment",
  Cash = "Cash",
  Transfer = "Transfer",
  Interest = "Interest",
  Cashback = "Cashback",
  Cheque = "Cheque",
  DirectDebit = "DirectDebit",
  Purchase = "Purchase",
  StandingOrder = "StandingOrder",
  Adjustment = "Adjustment",
  Credit = "Credit",
  Other = "Other",
  NotSupported = "NotSupported",
}

// ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
/**
 * An object of bank transaction category reference data.
 **/
export class ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListBankingTransactions200ApplicationJSONSourceModifiedDate
/**
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 *
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
 **/
export class ListBankingTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "authorizedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  authorizedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ListBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "postedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  postedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategoryRef" })
  @Type(
    () =>
      ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
  )
  transactionCategoryRef?: ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef;
}

export class ListBankingTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  @Type(() => ListBankingTransactions200ApplicationJSONSourceModifiedDate)
  results?: ListBankingTransactions200ApplicationJSONSourceModifiedDate;
}

export class ListBankingTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listBankingTransactions200ApplicationJSONObject?: ListBankingTransactions200ApplicationJSON;
}
