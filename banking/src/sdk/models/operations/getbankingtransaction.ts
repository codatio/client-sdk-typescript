import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankingTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}

export class GetBankingTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBankingTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankingTransactionPathParams;

  @SpeakeasyMetadata()
  security: GetBankingTransactionSecurity;
}
export enum GetBankingTransactionSourceModifiedDateCodeEnum {
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

// GetBankingTransactionSourceModifiedDateTransactionCategoryRef
/** 
 * An object of bank transaction category reference data.
**/
export class GetBankingTransactionSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetBankingTransactionSourceModifiedDate
/** 
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 * 
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
**/
export class GetBankingTransactionSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedDate" })
  authorizedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: GetBankingTransactionSourceModifiedDateCodeEnum;

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
  transactionCategoryRef?: GetBankingTransactionSourceModifiedDateTransactionCategoryRef;
}

export class GetBankingTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankingTransactionSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}