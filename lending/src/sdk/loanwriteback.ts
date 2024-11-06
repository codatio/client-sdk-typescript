/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { BankAccounts } from "./bankaccounts.js";
import { BankTransactions } from "./banktransactions.js";
import { CodatLendingDirectCosts } from "./codatlendingdirectcosts.js";
import { CodatLendingLoanWritebackAccounts } from "./codatlendingloanwritebackaccounts.js";
import { CodatLendingLoanWritebackPayments } from "./codatlendingloanwritebackpayments.js";
import { CodatLendingSuppliers } from "./codatlendingsuppliers.js";
import { CodatLendingTransfers } from "./codatlendingtransfers.js";
import { CreateOperations } from "./createoperations.js";
import { SourceAccounts } from "./sourceaccounts.js";

export class LoanWriteback extends ClientSDK {
  private _bankAccounts?: BankAccounts;
  get bankAccounts(): BankAccounts {
    return (this._bankAccounts ??= new BankAccounts(this._options));
  }

  private _accounts?: CodatLendingLoanWritebackAccounts;
  get accounts(): CodatLendingLoanWritebackAccounts {
    return (this._accounts ??= new CodatLendingLoanWritebackAccounts(
      this._options,
    ));
  }

  private _sourceAccounts?: SourceAccounts;
  get sourceAccounts(): SourceAccounts {
    return (this._sourceAccounts ??= new SourceAccounts(this._options));
  }

  private _suppliers?: CodatLendingSuppliers;
  get suppliers(): CodatLendingSuppliers {
    return (this._suppliers ??= new CodatLendingSuppliers(this._options));
  }

  private _transfers?: CodatLendingTransfers;
  get transfers(): CodatLendingTransfers {
    return (this._transfers ??= new CodatLendingTransfers(this._options));
  }

  private _bankTransactions?: BankTransactions;
  get bankTransactions(): BankTransactions {
    return (this._bankTransactions ??= new BankTransactions(this._options));
  }

  private _directCosts?: CodatLendingDirectCosts;
  get directCosts(): CodatLendingDirectCosts {
    return (this._directCosts ??= new CodatLendingDirectCosts(this._options));
  }

  private _payments?: CodatLendingLoanWritebackPayments;
  get payments(): CodatLendingLoanWritebackPayments {
    return (this._payments ??= new CodatLendingLoanWritebackPayments(
      this._options,
    ));
  }

  private _createOperations?: CreateOperations;
  get createOperations(): CreateOperations {
    return (this._createOperations ??= new CreateOperations(this._options));
  }
}
