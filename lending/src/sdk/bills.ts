/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsPayableBillsDownloadAttachment } from "../funcs/accountsPayableBillsDownloadAttachment.js";
import { accountsPayableBillsGet } from "../funcs/accountsPayableBillsGet.js";
import { accountsPayableBillsGetAttachment } from "../funcs/accountsPayableBillsGetAttachment.js";
import { accountsPayableBillsList } from "../funcs/accountsPayableBillsList.js";
import { accountsPayableBillsListAttachments } from "../funcs/accountsPayableBillsListAttachments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Bills extends ClientSDK {
  /**
   * List bills
   *
   * @remarks
   * The *List bills* endpoint returns a list of [bills](https://docs.codat.io/lending-api#/schemas/Bill) for a given company's connection.
   *
   * [Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   *
   * ### Tips and traps
   *
   * To access the `paymentAllocations` property, ensure that the `billPayments` data type is queued and cached in Codat before retrieving `bills` from Codat's cache.
   */
  async list(
    request: operations.ListAccountingBillsRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingBills> {
    return unwrapAsync(accountsPayableBillsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get bill
   *
   * @remarks
   * The *Get bill* endpoint returns a single bill for a given billId.
   *
   * [Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a specific bill.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   *
   * ### Tips and traps
   *
   * To access the `paymentAllocations` property, ensure that the `billPayments` data type is queued and cached in Codat before retrieving `bills` from Codat's cache.
   */
  async get(
    request: operations.GetAccountingBillRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingBill> {
    return unwrapAsync(accountsPayableBillsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * List bill attachments
   *
   * @remarks
   * The *List bill attachments* endpoint returns a list of attachments available to download for a given `billId`.
   *
   * [Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support listing bill attachments.
   */
  async listAttachments(
    request: operations.ListAccountingBillAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<shared.Attachments> {
    return unwrapAsync(accountsPayableBillsListAttachments(
      this,
      request,
      options,
    ));
  }

  /**
   * Get bill attachment
   *
   * @remarks
   * The *Get bill attachment* endpoint returns a specific attachment for a given `billId` and `attachmentId`.
   *
   * [Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a bill attachment.
   */
  async getAttachment(
    request: operations.GetAccountingBillAttachmentRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAttachment> {
    return unwrapAsync(accountsPayableBillsGetAttachment(
      this,
      request,
      options,
    ));
  }

  /**
   * Download bill attachment
   *
   * @remarks
   * The *Download bill attachment* endpoint downloads a specific attachment for a given `billId` and `attachmentId`.
   *
   * [Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support downloading a bill attachment.
   */
  async downloadAttachment(
    request: operations.DownloadAccountingBillAttachmentRequest,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(accountsPayableBillsDownloadAttachment(
      this,
      request,
      options,
    ));
  }
}
