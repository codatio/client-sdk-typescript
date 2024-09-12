/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesPaymentsGet } from "../funcs/salesPaymentsGet.js";
import { salesPaymentsList } from "../funcs/salesPaymentsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CodatLendingPayments extends ClientSDK {
  /**
   * List payments
   *
   * @remarks
   * The *List payments* endpoint returns a list of [payments](https://docs.codat.io/lending-api#/schemas/Payment) for a given company's connection.
   *
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) contain details of all payments made by customers to the company.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListCommercePaymentsRequest,
    options?: RequestOptions,
  ): Promise<shared.CommercePayments> {
    return unwrapAsync(salesPaymentsList(
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
   * [Payments](https://docs.codat.io/lending-api#/schemas/Payment) contain details of all payments made by customers to the company.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments) for integrations that support getting a specific payment.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetCommercePaymentRequest,
    options?: RequestOptions,
  ): Promise<shared.CommercePayment> {
    return unwrapAsync(salesPaymentsGet(
      this,
      request,
      options,
    ));
  }
}
