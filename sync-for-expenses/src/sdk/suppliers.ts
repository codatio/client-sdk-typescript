/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { suppliersCreate } from "../funcs/suppliersCreate.js";
import { suppliersGet } from "../funcs/suppliersGet.js";
import { suppliersList } from "../funcs/suppliersList.js";
import { suppliersUpdate } from "../funcs/suppliersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Suppliers extends ClientSDK {
  /**
   * List suppliers
   *
   * @remarks
   * The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).
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
   * Get supplier
   *
   * @remarks
   * The *Get supplier* endpoint returns a single supplier for a given supplierId.
   *
   * [Suppliers](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetSupplierRequest,
    options?: RequestOptions,
  ): Promise<shared.Supplier> {
    return unwrapAsync(suppliersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create supplier
   *
   * @remarks
   * The *Create supplier* endpoint creates a new [supplier](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-suppliers-model).
   */
  async create(
    request: operations.CreateSupplierRequest,
    options?: RequestOptions,
  ): Promise<shared.CreateSupplierResponse> {
    return unwrapAsync(suppliersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update supplier
   *
   * @remarks
   * The *Update supplier* endpoint updates an existing [supplier](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-expenses-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-suppliers-model).
   */
  async update(
    request: operations.UpdateSupplierRequest,
    options?: RequestOptions,
  ): Promise<shared.UpdateSupplierResponse> {
    return unwrapAsync(suppliersUpdate(
      this,
      request,
      options,
    ));
  }
}
