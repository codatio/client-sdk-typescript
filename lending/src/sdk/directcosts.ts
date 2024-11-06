/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsDirectCostsDownloadAttachment } from "../funcs/transactionsDirectCostsDownloadAttachment.js";
import { transactionsDirectCostsGet } from "../funcs/transactionsDirectCostsGet.js";
import { transactionsDirectCostsGetAttachment } from "../funcs/transactionsDirectCostsGetAttachment.js";
import { transactionsDirectCostsList } from "../funcs/transactionsDirectCostsList.js";
import { transactionsDirectCostsListAttachments } from "../funcs/transactionsDirectCostsListAttachments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class DirectCosts extends ClientSDK {
  /**
   * List direct costs
   *
   * @remarks
   * The *List direct costs* endpoint returns a list of [direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company's connection.
   *
   * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListAccountingDirectCostsRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingDirectCosts> {
    return unwrapAsync(transactionsDirectCostsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get direct cost
   *
   * @remarks
   * The *Get direct cost* endpoint returns a single direct cost for a given directCostId.
   *
   * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetAccountingDirectCostRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingDirectCost> {
    return unwrapAsync(transactionsDirectCostsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get direct cost attachment
   *
   * @remarks
   * The *Get direct cost attachment* endpoint returns a specific attachment for a given `directCostId` and `attachmentId`.
   *
   * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
   */
  async getAttachment(
    request: operations.GetAccountingDirectCostAttachmentRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAttachment> {
    return unwrapAsync(transactionsDirectCostsGetAttachment(
      this,
      request,
      options,
    ));
  }

  /**
   * Download direct cost attachment
   *
   * @remarks
   * The *Download direct cost attachment* endpoint downloads a specific attachment for a given `directCostId` and `attachmentId`.
   *
   * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
   */
  async downloadAttachment(
    request: operations.DownloadAccountingDirectCostAttachmentRequest,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(transactionsDirectCostsDownloadAttachment(
      this,
      request,
      options,
    ));
  }

  /**
   * List direct cost attachments
   *
   * @remarks
   * The *List direct cost attachments* endpoint returns a list of attachments available to download for given `directCostId`.
   *
   * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
   */
  async listAttachments(
    request: operations.ListAccountingDirectCostAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<shared.Attachments> {
    return unwrapAsync(transactionsDirectCostsListAttachments(
      this,
      request,
      options,
    ));
  }
}
