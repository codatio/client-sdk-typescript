/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { BankAccounts } from "./bankaccounts.js";
import { BillPayments } from "./billpayments.js";
import { Bills } from "./bills.js";
import { Companies } from "./companies.js";
import { CompanyInformation } from "./companyinformation.js";
import { Connections } from "./connections.js";
import { Suppliers } from "./suppliers.js";

export class CodatSyncPayables extends ClientSDK {
  private _companies?: Companies;
  get companies(): Companies {
    return (this._companies ??= new Companies(this.options$));
  }

  private _connections?: Connections;
  get connections(): Connections {
    return (this._connections ??= new Connections(this.options$));
  }

  private _companyInformation?: CompanyInformation;
  get companyInformation(): CompanyInformation {
    return (this._companyInformation ??= new CompanyInformation(this.options$));
  }

  private _bills?: Bills;
  get bills(): Bills {
    return (this._bills ??= new Bills(this.options$));
  }

  private _billPayments?: BillPayments;
  get billPayments(): BillPayments {
    return (this._billPayments ??= new BillPayments(this.options$));
  }

  private _suppliers?: Suppliers;
  get suppliers(): Suppliers {
    return (this._suppliers ??= new Suppliers(this.options$));
  }

  private _bankAccounts?: BankAccounts;
  get bankAccounts(): BankAccounts {
    return (this._bankAccounts ??= new BankAccounts(this.options$));
  }
}
