/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankingTransactionCategoriesGet } from "../funcs/bankingTransactionCategoriesGet.js";
import { bankingTransactionCategoriesList } from "../funcs/bankingTransactionCategoriesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class TransactionCategories extends ClientSDK {
  /**
   * List transaction categories
   *
   * @remarks
   * The *List transaction categories* endpoint returns a list of [transaction categories](https://docs.codat.io/lending-api#/schemas/TransactionCategory) for a given company's connection.
   *
   * [Transaction categories](https://docs.codat.io/lending-api#/schemas/TransactionCategory) are associated with a transaction to provide greater contextual meaning to transaction activity.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListBankingTransactionCategoriesRequest,
    options?: RequestOptions,
  ): Promise<shared.BankingTransactionCategories> {
    return unwrapAsync(bankingTransactionCategoriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get transaction category
   *
   * @remarks
   * The *Get transaction category* endpoint returns a single transaction category for a given transactionCategoryId.
   *
   * [Transaction categories](https://docs.codat.io/lending-api#/schemas/TransactionCategory) are associated with a transaction to provide greater contextual meaning to transaction activity.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactionCategories) for integrations that support getting a specific transaction category.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetBankingTransactionCategoryRequest,
    options?: RequestOptions,
  ): Promise<shared.BankingTransactionCategory> {
    return unwrapAsync(bankingTransactionCategoriesGet(
      this,
      request,
      options,
    ));
  }
}
