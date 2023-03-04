import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetAccountTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountTransactionId" })
  accountTransactionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetAccountTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountTransactionPathParams;
}

// GetAccountTransactionSourceModifiedDateBankAccountRef
/** 
 * Reference to the bank account the account transaction is recorded against.
**/
export class GetAccountTransactionSourceModifiedDateBankAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetAccountTransactionSourceModifiedDateLinesRecordRef
/** 
 * Links an account transaction line to the underlying record that created it.
**/
export class GetAccountTransactionSourceModifiedDateLinesRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetAccountTransactionSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => GetAccountTransactionSourceModifiedDateLinesRecordRef)
  recordRef?: GetAccountTransactionSourceModifiedDateLinesRecordRef;
}

export class GetAccountTransactionSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccountRef" })
  @Type(() => GetAccountTransactionSourceModifiedDateBankAccountRef)
  bankAccountRef?: GetAccountTransactionSourceModifiedDateBankAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: GetAccountTransactionSourceModifiedDateLines })
  @Expose({ name: "lines" })
  @Type(() => GetAccountTransactionSourceModifiedDateLines)
  lines?: GetAccountTransactionSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetAccountTransactionSourceModifiedDateMetadata)
  metadata?: GetAccountTransactionSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetAccountTransactionSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionId" })
  transactionId?: string;
}

export class GetAccountTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetAccountTransactionSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}