import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpdateBankFeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bankAccountId" })
  bankAccountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}
export enum UpdateBankFeedBankFeedBankAccountAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// UpdateBankFeedBankFeedBankAccount
/** 
 * The target bank account in a supported accounting package for ingestion into a bank feed.
**/
export class UpdateBankFeedBankFeedBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: UpdateBankFeedBankFeedBankAccountAccountTypeEnum;

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

export class UpdateBankFeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class UpdateBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBankFeedPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateBankFeedBankFeedBankAccount;

  @SpeakeasyMetadata()
  security: UpdateBankFeedSecurity;
}

export class UpdateBankFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankFeedBankAccount?: UpdateBankFeedBankFeedBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}