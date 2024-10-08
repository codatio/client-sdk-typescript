/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { taxRatesGet } from "../funcs/taxRatesGet.js";
import { taxRatesList } from "../funcs/taxRatesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class TaxRates extends ClientSDK {
  /**
   * List all tax rates
   *
   * @remarks
   * The *List tax rates* endpoint returns a list of [tax rates](https://docs.codat.io/sync-for-payables-api#/schemas/TaxRate) for a given company's connection.
   *
   * [Tax rates](https://docs.codat.io/sync-for-payables-api#/schemas/TaxRate) are a set of taxes and associated rates within the SMB's accounting software.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListTaxRatesRequest,
    options?: RequestOptions,
  ): Promise<shared.TaxRates> {
    return unwrapAsync(taxRatesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get tax rate
   *
   * @remarks
   * The *Get tax rate* endpoint returns a single tax rate for a given `taxRateId`.
   *
   * [Tax rates](https://docs.codat.io/sync-for-payables-api#/schemas/TaxRate) are a set of taxes and associated rates within the SMB's accounting software.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=taxRates) for integrations that support getting a specific tax rate.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetTaxRateRequest,
    options?: RequestOptions,
  ): Promise<shared.TaxRate> {
    return unwrapAsync(taxRatesGet(
      this,
      request,
      options,
    ));
  }
}
