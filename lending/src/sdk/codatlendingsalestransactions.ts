/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesTransactionsGet } from "../funcs/salesTransactionsGet.js";
import { salesTransactionsList } from "../funcs/salesTransactionsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CodatLendingSalesTransactions extends ClientSDK {
  /**
   * List transactions
   *
   * @remarks
   * The *List transactions* endpoint returns a list of [transactions](https://docs.codat.io/lending-api#/schemas/Transaction) for a given company's connection.
   *
   * [Transactions](https://docs.codat.io/lending-api#/schemas/Transaction) detail all financial affairs recorded in the commerce or point of sale system.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListCommerceTransactionsRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceTransactions> {
    return unwrapAsync(salesTransactionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get transaction
   *
   * @remarks
   * The *Get transaction* endpoint returns a single transaction for a given transactionId.
   *
   * [Transactions](https://docs.codat.io/lending-api#/schemas/Transaction) detail all financial affairs recorded in the commerce or point of sale system.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetCommerceTransactionRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceTransaction> {
    return unwrapAsync(salesTransactionsGet(
      this,
      request,
      options,
    ));
  }
}