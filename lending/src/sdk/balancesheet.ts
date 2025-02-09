/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { financialStatementsBalanceSheetGet } from "../funcs/financialStatementsBalanceSheetGet.js";
import { financialStatementsBalanceSheetGetCategorizedAccounts } from "../funcs/financialStatementsBalanceSheetGetCategorizedAccounts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class BalanceSheet extends ClientSDK {
  /**
   * Get categorized balance sheet statement
   *
   * @remarks
   * The *Get categorized balance sheet statement* endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.
   *
   * Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/features/financial-statements-overview#recategorizing-accounts) to a more suitable one.
   */
  async getCategorizedAccounts(
    request: operations.GetCategorizedBalanceSheetStatementRequest,
    options?: RequestOptions,
  ): Promise<shared.EnhancedFinancialReport> {
    return unwrapAsync(financialStatementsBalanceSheetGetCategorizedAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * Get balance sheet
   *
   * @remarks
   * Gets the latest balance sheet for a company.
   */
  async get(
    request: operations.GetAccountingBalanceSheetRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingBalanceSheet> {
    return unwrapAsync(financialStatementsBalanceSheetGet(
      this,
      request,
      options,
    ));
  }
}
