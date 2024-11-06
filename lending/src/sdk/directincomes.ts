/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivableDirectIncomesDownloadAttachment } from "../funcs/accountsReceivableDirectIncomesDownloadAttachment.js";
import { accountsReceivableDirectIncomesGet } from "../funcs/accountsReceivableDirectIncomesGet.js";
import { accountsReceivableDirectIncomesGetAttachment } from "../funcs/accountsReceivableDirectIncomesGetAttachment.js";
import { accountsReceivableDirectIncomesList } from "../funcs/accountsReceivableDirectIncomesList.js";
import { accountsReceivableDirectIncomesListAttachments } from "../funcs/accountsReceivableDirectIncomesListAttachments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class DirectIncomes extends ClientSDK {
  /**
   * List direct incomes
   *
   * @remarks
   * The *List direct incomes* endpoint returns a list of [direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) for a given company's connection.
   *
   * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListAccountingDirectIncomesRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingDirectIncomes> {
    return unwrapAsync(accountsReceivableDirectIncomesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get direct income
   *
   * @remarks
   * The *Get direct income* endpoint returns a single direct income for a given directIncomeId.
   *
   * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetAccountingDirectIncomeRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingDirectIncome> {
    return unwrapAsync(accountsReceivableDirectIncomesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get direct income attachment
   *
   * @remarks
   * The *Get direct income attachment* endpoint returns a specific attachment for a given `directIncomeId` and `attachmentId`.
   *
   * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
   */
  async getAttachment(
    request: operations.GetAccountingDirectIncomeAttachmentRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAttachment> {
    return unwrapAsync(accountsReceivableDirectIncomesGetAttachment(
      this,
      request,
      options,
    ));
  }

  /**
   * Download direct income attachment
   *
   * @remarks
   * The *Download direct income attachment* endpoint downloads a specific attachment for a given `directIncomeId` and `attachmentId`.
   *
   * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
   */
  async downloadAttachment(
    request: operations.DownloadAccountingDirectIncomeAttachmentRequest,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(accountsReceivableDirectIncomesDownloadAttachment(
      this,
      request,
      options,
    ));
  }

  /**
   * List direct income attachments
   *
   * @remarks
   * The *List direct income attachments* endpoint returns a list of attachments available to download for given `directIncomeId`.
   *
   * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
   */
  async listAttachments(
    request: operations.ListAccountingDirectIncomeAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<shared.Attachments> {
    return unwrapAsync(accountsReceivableDirectIncomesListAttachments(
      this,
      request,
      options,
    ));
  }
}
