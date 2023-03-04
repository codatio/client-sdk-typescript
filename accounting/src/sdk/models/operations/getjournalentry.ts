import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetJournalEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journalEntryId" })
  journalEntryId: string;
}

export class GetJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalEntryPathParams;
}

// GetJournalEntrySourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class GetJournalEntrySourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetJournalEntrySourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class GetJournalEntrySourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class GetJournalEntrySourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetJournalEntrySourceModifiedDateJournalLinesAccountRef)
  accountRef?: GetJournalEntrySourceModifiedDateJournalLinesAccountRef;

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
  @Type(() => GetJournalEntrySourceModifiedDateJournalLinesTracking)
  tracking?: GetJournalEntrySourceModifiedDateJournalLinesTracking;
}

// GetJournalEntrySourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class GetJournalEntrySourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetJournalEntrySourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// GetJournalEntrySourceModifiedDateRecordRef
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
export class GetJournalEntrySourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetJournalEntrySourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// GetJournalEntrySourceModifiedDate
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
export class GetJournalEntrySourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: GetJournalEntrySourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => GetJournalEntrySourceModifiedDateJournalLines)
  journalLines?: GetJournalEntrySourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => GetJournalEntrySourceModifiedDateJournalRef)
  journalRef?: GetJournalEntrySourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetJournalEntrySourceModifiedDateMetadata)
  metadata?: GetJournalEntrySourceModifiedDateMetadata;

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
  @Type(() => GetJournalEntrySourceModifiedDateRecordRef)
  recordRef?: GetJournalEntrySourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetJournalEntrySourceModifiedDateSupplementalData)
  supplementalData?: GetJournalEntrySourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}

export class GetJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetJournalEntrySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}