import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListJournalEntriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListJournalEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListJournalEntriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class ListJournalEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListJournalEntriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListJournalEntriesQueryParams;

  @SpeakeasyMetadata()
  security: ListJournalEntriesSecurity;
}

export class ListJournalEntriesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListJournalEntriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListJournalEntriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListJournalEntriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListJournalEntriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListJournalEntriesLinksLinksCurrent)
  current: ListJournalEntriesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListJournalEntriesLinksLinksNext)
  next?: ListJournalEntriesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListJournalEntriesLinksLinksPrevious)
  previous?: ListJournalEntriesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListJournalEntriesLinksLinksSelf)
  self: ListJournalEntriesLinksLinksSelf;
}

// ListJournalEntriesLinksSourceModifiedDateJournalLinesAccountRef
/** 
 * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
**/
export class ListJournalEntriesLinksSourceModifiedDateJournalLinesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListJournalEntriesLinksSourceModifiedDateJournalLinesTracking
/** 
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
**/
export class ListJournalEntriesLinksSourceModifiedDateJournalLinesTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class ListJournalEntriesLinksSourceModifiedDateJournalLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDateJournalLinesAccountRef)
  accountRef?: ListJournalEntriesLinksSourceModifiedDateJournalLinesAccountRef;

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
  @Type(() => ListJournalEntriesLinksSourceModifiedDateJournalLinesTracking)
  tracking?: ListJournalEntriesLinksSourceModifiedDateJournalLinesTracking;
}

// ListJournalEntriesLinksSourceModifiedDateJournalRef
/** 
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
**/
export class ListJournalEntriesLinksSourceModifiedDateJournalRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListJournalEntriesLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// ListJournalEntriesLinksSourceModifiedDateRecordRef
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
export class ListJournalEntriesLinksSourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class ListJournalEntriesLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// ListJournalEntriesLinksSourceModifiedDate
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
export class ListJournalEntriesLinksSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: ListJournalEntriesLinksSourceModifiedDateJournalLines })
  @Expose({ name: "journalLines" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDateJournalLines)
  journalLines?: ListJournalEntriesLinksSourceModifiedDateJournalLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDateJournalRef)
  journalRef?: ListJournalEntriesLinksSourceModifiedDateJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDateMetadata)
  metadata?: ListJournalEntriesLinksSourceModifiedDateMetadata;

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
  @Type(() => ListJournalEntriesLinksSourceModifiedDateRecordRef)
  recordRef?: ListJournalEntriesLinksSourceModifiedDateRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListJournalEntriesLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}

// ListJournalEntriesLinks
/** 
 * Codat's Paging Model
**/
export class ListJournalEntriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListJournalEntriesLinksLinks)
  links: ListJournalEntriesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListJournalEntriesLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListJournalEntriesLinksSourceModifiedDate)
  results?: ListJournalEntriesLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListJournalEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListJournalEntriesLinks;
}