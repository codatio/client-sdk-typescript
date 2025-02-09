/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivableCreditNotesGet } from "../funcs/accountsReceivableCreditNotesGet.js";
import { accountsReceivableCreditNotesList } from "../funcs/accountsReceivableCreditNotesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CreditNotes extends ClientSDK {
  /**
   * List credit notes
   *
   * @remarks
   * The *List credit notes* endpoint returns a list of [credit notes](https://docs.codat.io/lending-api#/schemas/CreditNote) for a given company's connection.
   *
   * [Credit notes](https://docs.codat.io/lending-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async list(
    request: operations.ListAccountingCreditNotesRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingCreditNotes> {
    return unwrapAsync(accountsReceivableCreditNotesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get credit note
   *
   * @remarks
   * The *Get credit note* endpoint returns a single credit note for a given creditNoteId.
   *
   * [Credit notes](https://docs.codat.io/lending-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.
   *
   * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
   */
  async get(
    request: operations.GetAccountingCreditNoteRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingCreditNote> {
    return unwrapAsync(accountsReceivableCreditNotesGet(
      this,
      request,
      options,
    ));
  }
}
