/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesProductsGet } from "../funcs/salesProductsGet.js";
import { salesProductsList } from "../funcs/salesProductsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Products extends ClientSDK {
  /**
   * List products
   *
   * @remarks
   * The *List products* endpoint returns a list of [products](https://docs.codat.io/lending-api#/schemas/Product) for a given company's connection.
   *
   * [Products](https://docs.codat.io/lending-api#/schemas/Product) are items in the company's inventory that are available for sale.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListCommerceProductsRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceProducts> {
    return unwrapAsync(salesProductsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get product
   *
   * @remarks
   * The *Get product* endpoint returns a single product for a given productId.
   *
   * [Products](https://docs.codat.io/lending-api#/schemas/Product) are items in the company's inventory that are available for sale.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetCommerceProductRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceProduct> {
    return unwrapAsync(salesProductsGet(
      this,
      request,
      options,
    ));
  }
}
