import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankFeedsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankFeedsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBankFeedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankFeedsPathParams;

  @SpeakeasyMetadata()
  security: GetBankFeedsSecurity;
}
export enum GetBankFeedsBankFeedBankAccountAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// GetBankFeedsBankFeedBankAccount
/** 
 * The target bank account in a supported accounting package for ingestion into a bank feed.
**/
export class GetBankFeedsBankFeedBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: GetBankFeedsBankFeedBankAccountAccountTypeEnum;

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

export class GetBankFeedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankFeedsBankFeedBankAccount })
  bankFeedBankAccounts?: GetBankFeedsBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}