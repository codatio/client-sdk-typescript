/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionCategoryRef } from "./transactioncategoryref";
import { TransactionCode } from "./transactioncode";
import { Expose, Type } from "class-transformer";

/**
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 *
 * @remarks
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 *
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
 */
export class Transaction extends SpeakeasyBase {
  /**
   * The unique identifier of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  /**
   * The amount of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

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
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorizedDate" })
  authorizedDate?: string;

  /**
   * Code to identify the underlying transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: TransactionCode;

  /**
   * The currency of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * The description of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The unique identifier of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The name of the merchant.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

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
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postedDate" })
  postedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * An object of bank transaction category reference data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategoryRef" })
  @Type(() => TransactionCategoryRef)
  transactionCategoryRef?: TransactionCategoryRef;
}
