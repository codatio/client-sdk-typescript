import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListAllBankingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

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
export enum ListAllBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum {
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

// ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
/**
 * An object of bank transaction category reference data.
 **/
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListAllBankingTransactions200ApplicationJSONSourceModifiedDate
/**
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 *
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
 **/
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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
  code?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum;

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
      ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
  )
  transactionCategoryRef?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef;
}

export class ListAllBankingTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  @Type(() => ListAllBankingTransactions200ApplicationJSONSourceModifiedDate)
  results?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDate;
}

export class ListAllBankingTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listAllBankingTransactions200ApplicationJSONObject?: ListAllBankingTransactions200ApplicationJSON;
}
