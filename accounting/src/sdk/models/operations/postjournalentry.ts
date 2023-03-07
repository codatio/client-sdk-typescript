import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostJournalEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostJournalEntryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostJournalEntrySourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class PostJournalEntrySourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostJournalEntrySourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class PostJournalEntrySourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class PostJournalEntrySourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostJournalEntrySourceModifiedDateJournalLinesAccountRef)
  accountRef?: PostJournalEntrySourceModifiedDateJournalLinesAccountRef;

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
  @Type(() => PostJournalEntrySourceModifiedDateJournalLinesTracking)
  tracking?: PostJournalEntrySourceModifiedDateJournalLinesTracking;
}

// PostJournalEntrySourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class PostJournalEntrySourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostJournalEntrySourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostJournalEntrySourceModifiedDateRecordRef
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
export class PostJournalEntrySourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// PostJournalEntrySourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class PostJournalEntrySourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostJournalEntrySourceModifiedDate
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
export class PostJournalEntrySourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: PostJournalEntrySourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => PostJournalEntrySourceModifiedDateJournalLines)
  journalLines?: PostJournalEntrySourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => PostJournalEntrySourceModifiedDateJournalRef)
  journalRef?: PostJournalEntrySourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostJournalEntrySourceModifiedDateMetadata)
  metadata?: PostJournalEntrySourceModifiedDateMetadata;

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
  @Type(() => PostJournalEntrySourceModifiedDateRecordRef)
  recordRef?: PostJournalEntrySourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostJournalEntrySourceModifiedDateSupplementalData)
  supplementalData?: PostJournalEntrySourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}

export class PostJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJournalEntryPathParams;

  @SpeakeasyMetadata()
  queryParams: PostJournalEntryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostJournalEntrySourceModifiedDate;
}

export class PostJournalEntry200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostJournalEntry200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostJournalEntry200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostJournalEntry200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostJournalEntry200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostJournalEntry200ApplicationJSONChangesTypeEnum;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef)
  accountRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef;

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
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking)
  tracking?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostJournalEntry200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateRecordRef
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
export class PostJournalEntry200ApplicationJSONSourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDate
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
export class PostJournalEntry200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines)
  journalLines?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef)
  journalRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostJournalEntry200ApplicationJSONSourceModifiedDateMetadata;

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
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateRecordRef)
  recordRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}
export enum PostJournalEntry200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostJournalEntry200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostJournalEntry200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostJournalEntry200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostJournalEntry200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostJournalEntry200ApplicationJSONValidationValidationItem)
  errors?: PostJournalEntry200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostJournalEntry200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostJournalEntry200ApplicationJSONValidationValidationItem)
  warnings?: PostJournalEntry200ApplicationJSONValidationValidationItem[];
}

export class PostJournalEntry200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostJournalEntry200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostJournalEntry200ApplicationJSONChanges)
  changes?: PostJournalEntry200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostJournalEntry200ApplicationJSONSourceModifiedDate)
  data?: PostJournalEntry200ApplicationJSONSourceModifiedDate;

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
  status: PostJournalEntry200ApplicationJSONStatusEnum;

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
  @Type(() => PostJournalEntry200ApplicationJSONValidation)
  validation?: PostJournalEntry200ApplicationJSONValidation;
}

export class PostJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postJournalEntry200ApplicationJSONObject?: PostJournalEntry200ApplicationJSON;
}