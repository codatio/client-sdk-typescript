import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetAccountTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountTransactionId" })
  accountTransactionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetAccountTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetAccountTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountTransactionPathParams;

  @SpeakeasyMetadata()
  security: GetAccountTransactionSecurity;
}

// GetAccountTransactionSourceModifiedDateBankAccountRef
/** 
 * Reference to the bank account the account transaction is recorded against.
**/
export class GetAccountTransactionSourceModifiedDateBankAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetAccountTransactionSourceModifiedDateLinesRecordRef
/** 
 * Links an account transaction line to the underlying record that created it.
**/
export class GetAccountTransactionSourceModifiedDateLinesRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetAccountTransactionSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: GetAccountTransactionSourceModifiedDateLinesRecordRef;
}

export class GetAccountTransactionSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum GetAccountTransactionSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Unreconciled = "Unreconciled",
    Reconciled = "Reconciled",
    Void = "Void"
}

// GetAccountTransactionSourceModifiedDate
/** 
 * > **Language tip:** In Codat, account transactions represent all transactions posted to a bank account within an accounting platform. For bank transactions posted within a banking platform, refer to [Banking transactions](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions).
 * 
 * > View the coverage for account transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=accountTransactions" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * In Codat’s data model, account transactions represent bank activity within an accounting platform. All transactions that go through a bank account are recorded as account transactions.
 * 
 * Account transactions are created as a result of different business activities, for example:
 * 
 * * Payments: for example, receiving money for payment against an invoice.
 * * Bill payments: for example, spending money for a payment against a bill.
 * * Direct costs: for example, withdrawing money from a bank account, either for cash purposes or to make a payment.
 * * Direct incomes: for example, selling an item directly to a contact and receiving payment at point of sale.
 * * Transfers: for example, transferring money between two bank accounts.
 * 
 * Account transactions is the parent data type of [payments](https://docs.codat.io/accounting-api#/schemas/Payment), [bill payments](https://docs.codat.io/accounting-api#/schemas/BillPayment), [direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost), [direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome), and [transfers](https://docs.codat.io/accounting-api#/schemas/Transfer).
**/
export class GetAccountTransactionSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccountRef" })
  bankAccountRef?: GetAccountTransactionSourceModifiedDateBankAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: GetAccountTransactionSourceModifiedDateLines })
  lines?: GetAccountTransactionSourceModifiedDateLines[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetAccountTransactionSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAccountTransactionSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}

export class GetAccountTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetAccountTransactionSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}