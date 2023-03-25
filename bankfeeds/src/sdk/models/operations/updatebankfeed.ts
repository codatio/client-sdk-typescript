/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The target bank account in a supported accounting package for ingestion into a bank feed.
 */
export class UpdateBankFeedBankFeedBankAccount extends SpeakeasyBase {
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
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > 📘 Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
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

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class UpdateBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdateBankFeedBankFeedBankAccount;

  /**
   * Unique identifier for an account
   */
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
  /**
   * Success
   */
  @SpeakeasyMetadata()
  bankFeedBankAccount?: UpdateBankFeedBankFeedBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
