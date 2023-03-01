import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetJournalEntryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journalEntryId" })
  journalEntryId: string;
}

export class GetJournalEntrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetJournalEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalEntryPathParams;

  @SpeakeasyMetadata()
  security: GetJournalEntrySecurity;
}

// GetJournalEntrySourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class GetJournalEntrySourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetJournalEntrySourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class GetJournalEntrySourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordRefs" })
  recordRefs?: string[];
}

export class GetJournalEntrySourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetJournalEntrySourceModifiedDateJournalLinesAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: GetJournalEntrySourceModifiedDateJournalLinesTracking;
}

// GetJournalEntrySourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class GetJournalEntrySourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetJournalEntrySourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetJournalEntrySourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
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
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalLines", elemType: GetJournalEntrySourceModifiedDateJournalLines })
  journalLines?: GetJournalEntrySourceModifiedDateJournalLines[];

  @SpeakeasyMetadata({ data: "json, name=journalRef" })
  journalRef?: GetJournalEntrySourceModifiedDateJournalRef;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetJournalEntrySourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedOn" })
  postedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: GetJournalEntrySourceModifiedDateRecordRef;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: GetJournalEntrySourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}

export class GetJournalEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetJournalEntrySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}