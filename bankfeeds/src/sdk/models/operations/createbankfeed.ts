import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateBankFeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}
export enum CreateBankFeedBankFeedBankAccountAccountTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

// CreateBankFeedBankFeedBankAccount
/**
 * The target bank account in a supported accounting package for ingestion into a bank feed.
 **/
export class CreateBankFeedBankFeedBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: CreateBankFeedBankFeedBankAccountAccountTypeEnum;

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

export class CreateBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBankFeedPathParams;

  @SpeakeasyMetadata({
    data: "request, media_type=application/json",
    elemType: CreateBankFeedBankFeedBankAccount,
  })
  request?: CreateBankFeedBankFeedBankAccount[];
}

export class CreateBankFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateBankFeedBankFeedBankAccount })
  bankFeedBankAccounts?: CreateBankFeedBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
