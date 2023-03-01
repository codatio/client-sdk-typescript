import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListAllBankingTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListAllBankingTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListAllBankingTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListAllBankingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAllBankingTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAllBankingTransactionsQueryParams;

  @SpeakeasyMetadata()
  security: ListAllBankingTransactionsSecurity;
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
    NotSupported = "NotSupported"
}

// ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
/** 
 * An object of bank transaction category reference data.
**/
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListAllBankingTransactions200ApplicationJSONSourceModifiedDate
/** 
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 * 
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
**/
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedDate" })
  authorizedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum;

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
  transactionCategoryRef?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef;
}

export class ListAllBankingTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDate;
}

export class ListAllBankingTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllBankingTransactions200ApplicationJSONObject?: ListAllBankingTransactions200ApplicationJSON;
}