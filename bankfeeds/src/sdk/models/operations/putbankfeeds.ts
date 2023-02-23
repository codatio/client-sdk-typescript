import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: PutBankFeedsBankFeedBankAccountAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=feedStartDate" })
  feedStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class PutBankFeedsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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