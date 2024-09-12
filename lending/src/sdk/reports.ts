/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesReportsGetOrders } from "../funcs/salesReportsGetOrders.js";
import { salesReportsGetRefunds } from "../funcs/salesReportsGetRefunds.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Reports extends ClientSDK {
  /**
   * Get orders report
   *
   * @remarks
   * The *Get orders report* endpoint returns the number of orders, total value, and average order value for a specific company's commerce connection over one or more periods of time.
   *
   * This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.
   *
   * Learn more about the formulas used to calculate the order metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).
   *
   * Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.
   *
   * #### Response structure
   *
   * The Orders report's dimensions and measures are:
   *
   * | Index         | Dimensions     |
   * |---------------|----------------|
   * |   `index` = 0 | Period         |
   * |   `index` = 1 | Order metrics  |
   *
   * | Index         | Measures   |
   * |---------------|------------|
   * | `index` = 0   | Count      |
   * | `index` = 1   | Value      |
   *
   * The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.
   */
  async getOrders(
    request: operations.GetCommerceOrdersReportRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReport> {
    return unwrapAsync(salesReportsGetOrders(
      this,
      request,
      options,
    ));
  }

  /**
   * Get refunds report
   *
   * @remarks
   * The *Get refunds report* endpoint returns the number and total value of refunds and the refund rate for a specific company's commerce connection over one or more periods of time.
   *
   * This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.
   *
   * Learn more about the formulas used to calculate the refunds metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).
   *
   * Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.
   *
   * #### Response structure
   *
   * The Refunds report's dimensions and measures are:
   *
   * | Index          | Dimensions     |
   * |----------------|----------------|
   * | `index` = 0    | Period         |
   * | `index` = 1    | Refund metrics |
   *
   * | Index          | Measures    |
   * |----------------|------------|
   * | `index` = 0    | Count      |
   * | `index` = 1    | Value      |
   * | `index` = 2    | Percentage |
   *
   * The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.
   */
  async getRefunds(
    request: operations.GetCommerceRefundsReportRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReport> {
    return unwrapAsync(salesReportsGetRefunds(
      this,
      request,
      options,
    ));
  }
}
