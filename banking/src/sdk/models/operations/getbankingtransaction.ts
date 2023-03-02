import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetBankingTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}

export class GetBankingTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetBankingTransactionSourceModifiedDate
/** 
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 * 
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
**/
export class GetBankingTransactionSourceModifiedDate extends SpeakeasyBase {
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
  code?: GetBankingTransactionSourceModifiedDateCodeEnum;

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
  @Type(() => GetBankingTransactionSourceModifiedDateTransactionCategoryRef)
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