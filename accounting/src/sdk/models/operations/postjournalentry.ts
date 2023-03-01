import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostJournalEntrySourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class PostJournalEntrySourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordRefs" })
  recordRefs?: string[];
}

export class PostJournalEntrySourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostJournalEntrySourceModifiedDateJournalLinesAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostJournalEntrySourceModifiedDateJournalLinesTracking;
}

// PostJournalEntrySourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class PostJournalEntrySourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostJournalEntrySourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class PostJournalEntrySourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
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
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalLines", elemType: PostJournalEntrySourceModifiedDateJournalLines })
  journalLines?: PostJournalEntrySourceModifiedDateJournalLines[];

  @SpeakeasyMetadata({ data: "json, name=journalRef" })
  journalRef?: PostJournalEntrySourceModifiedDateJournalRef;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostJournalEntrySourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedOn" })
  postedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostJournalEntrySourceModifiedDateRecordRef;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostJournalEntrySourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}

export class PostJournalEntrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJournalEntryPathParams;

  @SpeakeasyMetadata()
  queryParams: PostJournalEntryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostJournalEntrySourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostJournalEntrySecurity;
}

export class PostJournalEntry200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostJournalEntry200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostJournalEntry200ApplicationJSONChangesTypeEnum;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordRefs" })
  recordRefs?: string[];
}

export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLinesTracking;
}

// PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostJournalEntry200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
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
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalLines", elemType: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines })
  journalLines?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalLines[];

  @SpeakeasyMetadata({ data: "json, name=journalRef" })
  journalRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateJournalRef;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostJournalEntry200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedOn" })
  postedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostJournalEntry200ApplicationJSONSourceModifiedDateRecordRef;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostJournalEntry200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
export enum PostJournalEntry200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostJournalEntry200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostJournalEntry200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostJournalEntry200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostJournalEntry200ApplicationJSONValidationValidationItem })
  errors?: PostJournalEntry200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostJournalEntry200ApplicationJSONValidationValidationItem })
  warnings?: PostJournalEntry200ApplicationJSONValidationValidationItem[];
}

export class PostJournalEntry200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostJournalEntry200ApplicationJSONChanges })
  changes?: PostJournalEntry200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostJournalEntry200ApplicationJSONSourceModifiedDate;

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
  status: PostJournalEntry200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostJournalEntry200ApplicationJSONValidation;
}

export class PostJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postJournalEntry200ApplicationJSONObject?: PostJournalEntry200ApplicationJSON;
}