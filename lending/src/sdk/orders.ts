/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesOrdersGet } from "../funcs/salesOrdersGet.js";
import { salesOrdersList } from "../funcs/salesOrdersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Orders extends ClientSDK {
  /**
   * List orders
   *
   * @remarks
   * The *List orders* endpoint returns a list of [orders](https://docs.codat.io/lending-api#/schemas/Order) for a given company's connection.
   *
   * [Orders](https://docs.codat.io/lending-api#/schemas/Order) contain the transaction details for all products sold by the company.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListCommerceOrdersRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceOrders> {
    return unwrapAsync(salesOrdersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get order
   *
   * @remarks
   * The *Get order* endpoint returns a single order for a given orderId.
   *
   * [Orders](https://docs.codat.io/lending-api#/schemas/Order) contain the transaction details for all products sold by the company.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders) for integrations that support getting a specific order.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetCommerceOrderRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceOrder> {
    return unwrapAsync(salesOrdersGet(
      this,
      request,
      options,
    ));
  }
}
