/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The target bank account in a supported accounting package for ingestion into a bank feed.
 */
export class CreateBankFeedBankFeedBankAccount extends SpeakeasyBase {
  /**
   * The bank account name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  /**
   * The account number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  /**
   * The type of bank account e.g. Credit
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: string;

  /**
   * The latest balance for the bank account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  /**
   * The currency e.g. USD
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * null
   */
  @SpeakeasyMetadata()
  @Expose({ name: "feedStartDate" })
  feedStartDate?: string;

  /**
   * Unique ID for the BankFeedBankAccount
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The last date the bank account was modified
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * The sort code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  /**
   * null
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class CreateBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "request, media_type=application/json",
    elemType: CreateBankFeedBankFeedBankAccount,
  })
  requestBody?: CreateBankFeedBankFeedBankAccount[];

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class CreateBankFeedResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata({ elemType: CreateBankFeedBankFeedBankAccount })
  bankFeedBankAccounts?: CreateBankFeedBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
