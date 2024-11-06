/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { loanWritebackPaymentsCreate } from "../funcs/loanWritebackPaymentsCreate.js";
import { loanWritebackPaymentsGetCreateModel } from "../funcs/loanWritebackPaymentsGetCreateModel.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CodatLendingLoanWritebackPayments extends ClientSDK {
  /**
   * Get create payment model
   *
   * @remarks
   * The *Get create payment model* endpoint returns the expected data for the request payload when creating a [payment](https://docs.codat.io/lending-api#/schemas/Payment) for a given company and integration.
   *
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.
   *
   * **Integration-specific behaviour**
   *
   * See the *response examples* for integration-specific indicative models.
   */
  async getCreateModel(
    request: operations.GetCreatePaymentModelRequest,
    options?: RequestOptions,
  ): Promise<shared.PushOption> {
    return unwrapAsync(loanWritebackPaymentsGetCreateModel(
      this,
      request,
      options,
    ));
  }

  /**
   * Create payment
   *
   * @remarks
   * The *Create payment* endpoint creates a new [payment](https://docs.codat.io/lending-api#/schemas/Payment) for a given company's connection.
   *
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/lending-api#/operations/get-create-payments-model).
   */
  async create(
    request: operations.CreatePaymentRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingCreatePaymentResponse> {
    return unwrapAsync(loanWritebackPaymentsCreate(
      this,
      request,
      options,
    ));
  }
}
