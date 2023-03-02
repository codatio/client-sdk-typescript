import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PostBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBankAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowSyncOnPushComplete" })
  allowSyncOnPushComplete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}
export enum PostBankAccountSourceModifiedDateAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

export class PostBankAccountSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostBankAccountSourceModifiedDate
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * > 
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 * 
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 * 
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
**/
export class PostBankAccountSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: PostBankAccountSourceModifiedDateAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iBan" })
  iBan?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBankAccountSourceModifiedDateMetadata)
  metadata?: PostBankAccountSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overdraftLimit" })
  overdraftLimit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

export class PostBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PostBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBankAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: PostBankAccountQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostBankAccountSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostBankAccountSecurity;
}

export class PostBankAccount200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostBankAccount200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostBankAccount200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostBankAccount200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostBankAccount200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostBankAccount200ApplicationJSONChangesTypeEnum;
}
export enum PostBankAccount200ApplicationJSONSourceModifiedDateAccountTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

export class PostBankAccount200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostBankAccount200ApplicationJSONSourceModifiedDate
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * > 
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 * 
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 * 
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
**/
export class PostBankAccount200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: PostBankAccount200ApplicationJSONSourceModifiedDateAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iBan" })
  iBan?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBankAccount200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostBankAccount200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overdraftLimit" })
  overdraftLimit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}
export enum PostBankAccount200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBankAccount200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// PostBankAccount200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBankAccount200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBankAccount200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostBankAccount200ApplicationJSONValidationValidationItem)
  errors?: PostBankAccount200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostBankAccount200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostBankAccount200ApplicationJSONValidationValidationItem)
  warnings?: PostBankAccount200ApplicationJSONValidationValidationItem[];
}

export class PostBankAccount200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBankAccount200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostBankAccount200ApplicationJSONChanges)
  changes?: PostBankAccount200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostBankAccount200ApplicationJSONSourceModifiedDate)
  data?: PostBankAccount200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostBankAccount200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => PostBankAccount200ApplicationJSONValidation)
  validation?: PostBankAccount200ApplicationJSONValidation;
}

export class PostBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBankAccount200ApplicationJSONObject?: PostBankAccount200ApplicationJSON;
}