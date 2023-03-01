import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostBankTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBankTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowSyncOnPushComplete" })
  allowSyncOnPushComplete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}
export enum PostBankTransactionsRequestBodyTransactionsTransactionTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
    Int = "Int",
    Div = "Div",
    Fee = "Fee",
    SerChg = "SerChg",
    Dep = "Dep",
    Atm = "Atm",
    Pos = "Pos",
    Xfer = "Xfer",
    Check = "Check",
    Payment = "Payment",
    Cash = "Cash",
    DirectDep = "DirectDep",
    DirectDebit = "DirectDebit",
    RepeatPmt = "RepeatPmt",
    Other = "Other"
}

export class PostBankTransactionsRequestBodyTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=counterparty" })
  counterparty?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType: PostBankTransactionsRequestBodyTransactionsTransactionTypeEnum;
}

// PostBankTransactionsRequestBody
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)
 * 
 * > View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Transactional banking data for a specific company and account.
 * 
 * Bank transactions include the:
 * * Amount of the transaction.
 * * Current account balance.
 * * Transaction type, for example, credit, debit, or transfer.
**/
export class PostBankTransactionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: PostBankTransactionsRequestBodyTransactions })
  transactions?: PostBankTransactionsRequestBodyTransactions[];
}

export class PostBankTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostBankTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBankTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostBankTransactionsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostBankTransactionsRequestBody;

  @SpeakeasyMetadata()
  security: PostBankTransactionsSecurity;
}

export class PostBankTransactions200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum PostBankTransactions200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostBankTransactions200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostBankTransactions200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostBankTransactions200ApplicationJSONChangesTypeEnum;
}
export enum PostBankTransactions200ApplicationJSONDataTransactionsTransactionTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
    Int = "Int",
    Div = "Div",
    Fee = "Fee",
    SerChg = "SerChg",
    Dep = "Dep",
    Atm = "Atm",
    Pos = "Pos",
    Xfer = "Xfer",
    Check = "Check",
    Payment = "Payment",
    Cash = "Cash",
    DirectDep = "DirectDep",
    DirectDebit = "DirectDebit",
    RepeatPmt = "RepeatPmt",
    Other = "Other"
}

export class PostBankTransactions200ApplicationJSONDataTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=counterparty" })
  counterparty?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType: PostBankTransactions200ApplicationJSONDataTransactionsTransactionTypeEnum;
}

// PostBankTransactions200ApplicationJSONData
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)
 * 
 * > View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Transactional banking data for a specific company and account.
 * 
 * Bank transactions include the:
 * * Amount of the transaction.
 * * Current account balance.
 * * Transaction type, for example, credit, debit, or transfer.
**/
export class PostBankTransactions200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: PostBankTransactions200ApplicationJSONDataTransactions })
  transactions?: PostBankTransactions200ApplicationJSONDataTransactions[];
}
export enum PostBankTransactions200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBankTransactions200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostBankTransactions200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBankTransactions200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostBankTransactions200ApplicationJSONValidationValidationItem })
  errors?: PostBankTransactions200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostBankTransactions200ApplicationJSONValidationValidationItem })
  warnings?: PostBankTransactions200ApplicationJSONValidationValidationItem[];
}

export class PostBankTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostBankTransactions200ApplicationJSONChanges })
  changes?: PostBankTransactions200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostBankTransactions200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostBankTransactions200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostBankTransactions200ApplicationJSONValidation;
}

export class PostBankTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBankTransactions200ApplicationJSONObject?: PostBankTransactions200ApplicationJSON;
}