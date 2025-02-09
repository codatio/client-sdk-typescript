/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { BillCreditNotes } from "./billcreditnotes.js";
import { BillPayments } from "./billpayments.js";
import { Bills } from "./bills.js";
import { Suppliers } from "./suppliers.js";

export class AccountsPayable extends ClientSDK {
  private _billCreditNotes?: BillCreditNotes;
  get billCreditNotes(): BillCreditNotes {
    return (this._billCreditNotes ??= new BillCreditNotes(this._options));
  }

  private _billPayments?: BillPayments;
  get billPayments(): BillPayments {
    return (this._billPayments ??= new BillPayments(this._options));
  }

  private _bills?: Bills;
  get bills(): Bills {
    return (this._bills ??= new Bills(this._options));
  }

  private _suppliers?: Suppliers;
  get suppliers(): Suppliers {
    return (this._suppliers ??= new Suppliers(this._options));
  }
}
