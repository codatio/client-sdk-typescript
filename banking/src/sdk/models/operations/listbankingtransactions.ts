import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListBankingTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListBankingTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBankingTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListBankingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBankingTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBankingTransactionsQueryParams;

  @SpeakeasyMetadata()
  security: ListBankingTransactionsSecurity;
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
    NotSupported = "NotSupported"
}

// ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
/** 
 * An object of bank transaction category reference data.
**/
export class ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListBankingTransactions200ApplicationJSONSourceModifiedDate
/** 
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 * 
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
**/
export class ListBankingTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedDate" })
  authorizedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ListBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedDate" })
  postedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionCategoryRef" })
  transactionCategoryRef?: ListBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef;
}

export class ListBankingTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: ListBankingTransactions200ApplicationJSONSourceModifiedDate;
}

export class ListBankingTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBankingTransactions200ApplicationJSONObject?: ListBankingTransactions200ApplicationJSON;
}