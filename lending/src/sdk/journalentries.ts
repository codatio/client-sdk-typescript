/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsJournalEntriesGet } from "../funcs/transactionsJournalEntriesGet.js";
import { transactionsJournalEntriesList } from "../funcs/transactionsJournalEntriesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class JournalEntries extends ClientSDK {
  /**
   * List journal entries
   *
   * @remarks
   * The *List journal entries* endpoint returns a list of [journal entries](https://docs.codat.io/lending-api#/schemas/JournalEntry) for a given company's connection.
   *
   * [Journal entries](https://docs.codat.io/lending-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListAccountingJournalEntriesRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingJournalEntries> {
    return unwrapAsync(transactionsJournalEntriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get journal entry
   *
   * @remarks
   * The *Get journal entry* endpoint returns a single journal entry for a given journalEntryId.
   *
   * [Journal entries](https://docs.codat.io/lending-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
   *
   * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support getting a specific journal entry.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetAccountingJournalEntryRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingJournalEntry> {
    return unwrapAsync(transactionsJournalEntriesGet(
      this,
      request,
      options,
    ));
  }
}
