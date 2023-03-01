import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListJournalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListJournalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListJournalsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListJournalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListJournalsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListJournalsQueryParams;

  @SpeakeasyMetadata()
  security: ListJournalsSecurity;
}

export class ListJournalsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListJournalsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListJournalsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListJournalsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListJournalsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListJournalsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListJournalsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListJournalsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListJournalsLinksLinksSelf;
}

// ListJournalsLinksSourceModifiedDateMetadataMetadata
/** 
 * Additional information about the entity
**/
export class ListJournalsLinksSourceModifiedDateMetadataMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class ListJournalsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListJournalsLinksSourceModifiedDateMetadataMetadata;
}
export enum ListJournalsLinksSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// ListJournalsLinksSourceModifiedDate
/** 
 * > **Language tip:** For line items, or individual transactions, of a company's financial documents, refer to the [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) data type
 * 
 * > View the coverage for journals in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * In accounting software, journals are used to record all the financial transactions of a company. Each transaction in a journal is represented by a separate [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry). These entries are used to create the general ledger, which is then used to create the financial statements of a business.
 * 
 * When a company records all their transactions in a single journal, it can become large and difficult to maintain and track. This is why large companies often use multiple journals (also known as subjournals) to categorize and manage journal entries.
 * 
 * Such journals can be divided into two categories:
 * 
 * - Special journals: journals used to record specific types of transactions; for example, a purchases journal, a sales journal, or a cash management journal.
 * - General journals: journals used to record transactions that fall outside the scope of the special journals.
 * 
 * Multiple journals or subjournals are used in the following Codat integrations:
 * 
 * - [Sage Intacct](https://docs.codat.io/integrations/accounting/sage-intacct/accounting-sage-intacct)  (mandatory)
 * - [Exact Online](https://docs.codat.io/integrations/accounting/exact-online/accounting-exact-online)  (mandatory)
 * - [Oracle NetSuite](https://docs.codat.io/integrations/accounting/netsuite/accounting-netsuite) (optional)
 * 
 * > When pushing journal entries to an accounting platform that doesn’t support multiple journals (multi-book accounting), the entries will be linked to the platform-generic journal. The Journals data type will only include one object.
 * 
**/
export class ListJournalsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalCode" })
  journalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListJournalsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListJournalsLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

// ListJournalsLinks
/** 
 * Codat's Paging Model
**/
export class ListJournalsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListJournalsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListJournalsLinksSourceModifiedDate })
  results?: ListJournalsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListJournalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListJournalsLinks;
}