/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { suppliersCreate } from "../funcs/suppliersCreate.js";
import { suppliersList } from "../funcs/suppliersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Suppliers extends ClientSDK {
  /**
   * List suppliers
   *
   * @remarks
   * The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * By default, this endpoint returns a list of active and archived suppliers. You can use [querying](https://docs.codat.io/using-the-api/querying) to change that.
   *
   * For example, to retrieve only active suppliers (i.e. `status=Active`) or suppliers created within the specified number of days (e.g. `sourceModifiedDate>2023-12-15T00:00:00.000Z`), query the endpoint as follows: `/payables/suppliers?query=sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active`.For example, to retrieve active suppliers modified after a particular date use `query=sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active`.
   */
  async list(
    request: operations.ListSuppliersRequest,
    options?: RequestOptions,
  ): Promise<shared.Suppliers> {
    return unwrapAsync(suppliersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create supplier
   *
   * @remarks
   * The *Create supplier* endpoint creates a new [supplier](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   */
  async create(
    request: operations.CreateSupplierRequest,
    options?: RequestOptions,
  ): Promise<shared.Supplier> {
    return unwrapAsync(suppliersCreate(
      this,
      request,
      options,
    ));
  }
}
