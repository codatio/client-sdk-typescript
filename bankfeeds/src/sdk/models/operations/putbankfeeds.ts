import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PutBankFeedsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}
export enum PutBankFeedsBankFeedBankAccountAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// PutBankFeedsBankFeedBankAccount
/** 
 * The target bank account in a supported accounting package for ingestion into a bank feed.
**/
export class PutBankFeedsBankFeedBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: PutBankFeedsBankFeedBankAccountAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "feedStartDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  feedStartDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class PutBankFeedsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PutBankFeedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBankFeedsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: PutBankFeedsBankFeedBankAccount })
  request?: PutBankFeedsBankFeedBankAccount[];

  @SpeakeasyMetadata()
  security: PutBankFeedsSecurity;
}

export class PutBankFeedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutBankFeedsBankFeedBankAccount })
  bankFeedBankAccounts?: PutBankFeedsBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}