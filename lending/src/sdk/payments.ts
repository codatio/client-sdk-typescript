/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivablePaymentsGet } from "../funcs/accountsReceivablePaymentsGet.js";
import { accountsReceivablePaymentsList } from "../funcs/accountsReceivablePaymentsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Payments extends ClientSDK {
  /**
   * List payments
   *
   * @remarks
   * The *List payments* endpoint returns a list of [payments](https://docs.codat.io/lending-api#/schemas/Payment) for a given company's connection.
   *
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListAccountingPaymentsRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingPayments> {
    return unwrapAsync(accountsReceivablePaymentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get payment
   *
   * @remarks
   * The *Get payment* endpoint returns a single payment for a given paymentId.
   *
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support getting a specific payment.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetAccountingPaymentRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingPayment> {
    return unwrapAsync(accountsReceivablePaymentsGet(
      this,
      request,
      options,
    ));
  }
}
