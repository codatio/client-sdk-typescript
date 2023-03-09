import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class CreateJournalEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class CreateJournalEntryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// CreateJournalEntrySourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class CreateJournalEntrySourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateJournalEntrySourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class CreateJournalEntrySourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class CreateJournalEntrySourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateJournalEntrySourceModifiedDateJournalLinesAccountRef)
  accountRef?: CreateJournalEntrySourceModifiedDateJournalLinesAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "netAmount" })
  netAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateJournalEntrySourceModifiedDateJournalLinesTracking)
  tracking?: CreateJournalEntrySourceModifiedDateJournalLinesTracking;
}

// CreateJournalEntrySourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class CreateJournalEntrySourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateJournalEntrySourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateJournalEntrySourceModifiedDateRecordRef
/** 
 * Links to the underlying record or data type.
 * 
 * Found on:
 * 
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
**/
export class CreateJournalEntrySourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// CreateJournalEntrySourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class CreateJournalEntrySourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateJournalEntrySourceModifiedDate
/** 
 * > **Language tip:** For the top-level record of a company's financial transactions, refer to the [Journals](https://docs.codat.io/accounting-api#/schemas/Journal) data type
 * 
 * > View the coverage for journal entries in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A journal entry report shows the entries made in a company's general ledger, or [accounts](https://api.codat.io/swagger/index.html#/Accounts/get_companies__companyId__data_accounts), when transactions are approved. The journal line items for each journal entry should balance.
 * 
 * A journal entry line item is a single transaction line on the journal entry. For example: 
 * 
 * - When a journal entry is recording a receipt of cash, the credit to accounts receivable and the debit to cash are separate line items. 
 * - When a company needs to recognise revenue from an annual contract on a monthly basis, on receipt of cash for month one, they make a debit to deferred income and a credit to revenue.
 * 
 * In Codat a journal entry contains details of:
 * 
 * - The date on which the entry was created and posted.
 * - Itemised lines, including amounts and currency.
 * - A reference to the associated accounts.
 * - A reference to the underlying record. For example, the invoice, bill, or other data type that triggered the posting of the journal entry to the general ledger. 
 * 
 * > **Pushing journal entries **  
 * > Codat only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.
**/
export class CreateJournalEntrySourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CreateJournalEntrySourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => CreateJournalEntrySourceModifiedDateJournalLines)
  journalLines?: CreateJournalEntrySourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => CreateJournalEntrySourceModifiedDateJournalRef)
  journalRef?: CreateJournalEntrySourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateJournalEntrySourceModifiedDateMetadata)
  metadata?: CreateJournalEntrySourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "postedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  postedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateJournalEntrySourceModifiedDateRecordRef)
  recordRef?: CreateJournalEntrySourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateJournalEntrySourceModifiedDateSupplementalData)
  supplementalData?: CreateJournalEntrySourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}

export class CreateJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateJournalEntryPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateJournalEntryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateJournalEntrySourceModifiedDate;
}

export class CreateJournalEntry200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateJournalEntry200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class CreateJournalEntry200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateJournalEntry200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateJournalEntry200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateJournalEntry200ApplicationJSONChangesTypeEnum;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef)
  accountRef?: CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "netAmount" })
  netAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking)
  tracking?: CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateJournalEntry200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDateRecordRef
/** 
 * Links to the underlying record or data type.
 * 
 * Found on:
 * 
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateJournalEntry200ApplicationJSONSourceModifiedDate
/** 
 * > **Language tip:** For the top-level record of a company's financial transactions, refer to the [Journals](https://docs.codat.io/accounting-api#/schemas/Journal) data type
 * 
 * > View the coverage for journal entries in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A journal entry report shows the entries made in a company's general ledger, or [accounts](https://api.codat.io/swagger/index.html#/Accounts/get_companies__companyId__data_accounts), when transactions are approved. The journal line items for each journal entry should balance.
 * 
 * A journal entry line item is a single transaction line on the journal entry. For example: 
 * 
 * - When a journal entry is recording a receipt of cash, the credit to accounts receivable and the debit to cash are separate line items. 
 * - When a company needs to recognise revenue from an annual contract on a monthly basis, on receipt of cash for month one, they make a debit to deferred income and a credit to revenue.
 * 
 * In Codat a journal entry contains details of:
 * 
 * - The date on which the entry was created and posted.
 * - Itemised lines, including amounts and currency.
 * - A reference to the associated accounts.
 * - A reference to the underlying record. For example, the invoice, bill, or other data type that triggered the posting of the journal entry to the general ledger. 
 * 
 * > **Pushing journal entries **  
 * > Codat only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.
**/
export class CreateJournalEntry200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLines)
  journalLines?: CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalRef)
  journalRef?: CreateJournalEntry200ApplicationJSONSourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateJournalEntry200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "postedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  postedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateRecordRef)
  recordRef?: CreateJournalEntry200ApplicationJSONSourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: CreateJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}
export enum CreateJournalEntry200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class CreateJournalEntry200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateJournalEntry200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class CreateJournalEntry200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateJournalEntry200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => CreateJournalEntry200ApplicationJSONValidationValidationItem)
  errors?: CreateJournalEntry200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: CreateJournalEntry200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => CreateJournalEntry200ApplicationJSONValidationValidationItem)
  warnings?: CreateJournalEntry200ApplicationJSONValidationValidationItem[];
}

export class CreateJournalEntry200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateJournalEntry200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateJournalEntry200ApplicationJSONChanges)
  changes?: CreateJournalEntry200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateJournalEntry200ApplicationJSONSourceModifiedDate)
  data?: CreateJournalEntry200ApplicationJSONSourceModifiedDate;

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
  status: CreateJournalEntry200ApplicationJSONStatusEnum;

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
  @Type(() => CreateJournalEntry200ApplicationJSONValidation)
  validation?: CreateJournalEntry200ApplicationJSONValidation;
}

export class CreateJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createJournalEntry200ApplicationJSONObject?: CreateJournalEntry200ApplicationJSON;
}