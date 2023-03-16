import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum UpdateBankFeedBankFeedBankAccountAccountTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

// UpdateBankFeedBankFeedBankAccount
/**
 * The target bank account in a supported accounting package for ingestion into a bank feed.
 **/
export class UpdateBankFeedBankFeedBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: UpdateBankFeedBankFeedBankAccountAccountTypeEnum;

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

export class UpdateBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdateBankFeedBankFeedBankAccount;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=bankAccountId",
  })
  bankAccountId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class UpdateBankFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankFeedBankAccount?: UpdateBankFeedBankFeedBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
