/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { suppliersCreate } from "../funcs/suppliersCreate.js";
import { suppliersGet } from "../funcs/suppliersGet.js";
import { suppliersGetCreateUpdateModel } from "../funcs/suppliersGetCreateUpdateModel.js";
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
   * The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
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
   * The *Get supplier* endpoint returns a single supplier for a given `supplierId`.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support getting a specific supplier.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
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
   * Get create/update supplier model
   *
   * @remarks
   * The *Get create/update supplier model* endpoint returns the expected data for the request payload when creating and updating a [supplier](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company and integration.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * **Integration-specific behaviour**
   *
   * See the *response examples* for integration-specific indicative models.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating and updating a supplier.
   */
  async getCreateUpdateModel(
    request: operations.GetCreateUpdateSupplierModelRequest,
    options?: RequestOptions,
  ): Promise<shared.PushOption> {
    return unwrapAsync(suppliersGetCreateUpdateModel(
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
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-suppliers-model).
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating a supplier.
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
   * The *Update supplier* endpoint updates an existing [supplier](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.
   *
   * [Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-suppliers-model).
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating a supplier.
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