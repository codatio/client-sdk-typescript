/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesPaymentMethodsGet } from "../funcs/salesPaymentMethodsGet.js";
import { salesPaymentMethodsList } from "../funcs/salesPaymentMethodsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class PaymentMethods extends ClientSDK {
  /**
   * List payment methods
   *
   * @remarks
   * The *List payment methods* endpoint returns a list of [payment methods](https://docs.codat.io/lending-api#/schemas/PaymentMethod) for a given company's connection.
   *
   * [Payment methods](https://docs.codat.io/lending-api#/schemas/PaymentMethod) represent the payment method(s) used to make payments.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListCommercePaymentMethodsRequest,
    options?: RequestOptions,
  ): Promise<shared.CommercePaymentMethods> {
    return unwrapAsync(salesPaymentMethodsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get payment method
   *
   * @remarks
   * The *Get payment method* endpoint returns a single payment method for a given paymentMethodId.
   *
   * [Payment methods](https://docs.codat.io/lending-api#/schemas/PaymentMethod) represent the payment method(s) used to make payments.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetCommercePaymentMethodRequest,
    options?: RequestOptions,
  ): Promise<shared.CommercePaymentMethod> {
    return unwrapAsync(salesPaymentMethodsGet(
      this,
      request,
      options,
    ));
  }
}
