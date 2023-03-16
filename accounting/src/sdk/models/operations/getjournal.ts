import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetJournalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=journalId",
  })
  journalId: string;
}

// GetJournalSourceModifiedDateMetadataMetadata
/**
 * Additional information about the entity
 **/
export class GetJournalSourceModifiedDateMetadataMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class GetJournalSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetJournalSourceModifiedDateMetadataMetadata)
  metadata?: GetJournalSourceModifiedDateMetadataMetadata;
}
export enum GetJournalSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

// GetJournalSourceModifiedDate
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
export class GetJournalSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "journalCode" })
  journalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetJournalSourceModifiedDateMetadata)
  metadata?: GetJournalSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetJournalSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetJournalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetJournalSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
