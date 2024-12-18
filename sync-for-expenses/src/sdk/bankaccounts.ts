/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankAccountsCreate } from "../funcs/bankAccountsCreate.js";
import { bankAccountsGetCreateModel } from "../funcs/bankAccountsGetCreateModel.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class BankAccounts extends ClientSDK {
  /**
   * Create bank account
   *
   * @remarks
   * The *Create bank account* endpoint creates a new [bank account](https://docs.codat.io/sync-for-expenses-api#/schemas/BankAccount) for a given company's connection.
   *
   * [Bank accounts](https://docs.codat.io/sync-for-expenses-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.
   *
   * **Integration-specific behaviour**
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update bank account model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-bankAccounts-model).
   */
  async create(
    request: operations.CreateBankAccountRequest,
    options?: RequestOptions,
  ): Promise<shared.CreateBankAccountResponse> {
    return unwrapAsync(bankAccountsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get create bank account model
   *
   * @remarks
   * The *Get create/update bank account model* endpoint returns the expected data for the request payload when creating and updating a [bank account](https://docs.codat.io/sync-for-expenses-api#/schemas/BankAccount) for a given company and integration.
   *
   * [Bank accounts](https://docs.codat.io/sync-for-expenses-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.
   *
   * **Integration-specific behaviour**
   *
   * See the *response examples* for integration-specific indicative models.
   */
  async getCreateModel(
    request: operations.GetCreateBankAccountsModelRequest,
    options?: RequestOptions,
  ): Promise<shared.PushOption> {
    return unwrapAsync(bankAccountsGetCreateModel(
      this,
      request,
      options,
    ));
  }
}
