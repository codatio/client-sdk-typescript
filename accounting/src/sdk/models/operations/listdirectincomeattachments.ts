/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListDirectIncomeAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  /**
   * Unique identifier for a direct income
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=directIncomeId",
  })
  directIncomeId: string;
}

export class ListDirectIncomeAttachmentsAttachmentsAttachmentModifiedDate extends SpeakeasyBase {
  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;
}

export class ListDirectIncomeAttachmentsAttachmentsAttachmentSourceModifiedDate extends SpeakeasyBase {
  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;
}

/**
 * The Codat API supports pulling and pushing of file attachments for invoices, bills, direct costs, and direct incomes.
 *
 * @remarks
 *
 * > **Retrieving attachments**
 * >
 * > If a company is authorized, you can query the Codat API to read, download, and upload attachments without requiring a fresh sync of data.
 *
 * Unlike other data types, Codat doesn't support sync settings for attachments.
 *
 * View the coverage for accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts" target="_blank">Data coverage explorer</a>.
 *
 */
export class ListDirectIncomeAttachmentsAttachmentsAttachment extends SpeakeasyBase {
  /**
   * File type of the attachment. This is represented by appending the file type to the [IETF standard file naming requirements](https://tools.ietf.org/html/rfc6838). For example, for a jpeg file the output is **image/jpeg**.
   *
   * @remarks
   *
   * Supported file types vary per platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

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
  @Expose({ name: "dateCreated" })
  dateCreated?: string;

  /**
   * File size in bytes. For example, if this reads **46153**, then the file size is 46kb.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fileSize" })
  fileSize?: number;

  /**
   * Identifier for the attachment, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * If `true`, then the attachment is included with the associated invoice, bill or direct costs when it is printed, emailed, or sent to a customer, if the underlying accounting platform allows this.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "includeWhenSent" })
  includeWhenSent?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Type(() => ListDirectIncomeAttachmentsAttachmentsAttachmentModifiedDate)
  modifiedDate?: ListDirectIncomeAttachmentsAttachmentsAttachmentModifiedDate;

  /**
   * Name of the attachment file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Type(
    () => ListDirectIncomeAttachmentsAttachmentsAttachmentSourceModifiedDate
  )
  sourceModifiedDate?: ListDirectIncomeAttachmentsAttachmentsAttachmentSourceModifiedDate;
}

/**
 * Success
 */
export class ListDirectIncomeAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListDirectIncomeAttachmentsAttachmentsAttachment,
  })
  @Expose({ name: "attachments" })
  @Type(() => ListDirectIncomeAttachmentsAttachmentsAttachment)
  attachments?: ListDirectIncomeAttachmentsAttachmentsAttachment[];
}

export class ListDirectIncomeAttachmentsResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  attachments?: ListDirectIncomeAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
