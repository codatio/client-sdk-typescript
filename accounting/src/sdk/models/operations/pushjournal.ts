import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PushJournalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PushJournalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}
export enum PushJournalSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// PushJournalSourceModifiedDateInput
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
export class PushJournalSourceModifiedDateInput extends SpeakeasyBase {
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
  status?: PushJournalSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class PushJournalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PushJournalPathParams;

  @SpeakeasyMetadata()
  queryParams: PushJournalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PushJournalSourceModifiedDateInput;
}

export class PushJournal200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PushJournal200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PushJournal200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PushJournal200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PushJournal200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PushJournal200ApplicationJSONChangesTypeEnum;
}

// PushJournal200ApplicationJSONSourceModifiedDateMetadataMetadata
/** 
 * Additional information about the entity
**/
export class PushJournal200ApplicationJSONSourceModifiedDateMetadataMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PushJournal200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PushJournal200ApplicationJSONSourceModifiedDateMetadataMetadata)
  metadata?: PushJournal200ApplicationJSONSourceModifiedDateMetadataMetadata;
}
export enum PushJournal200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// PushJournal200ApplicationJSONSourceModifiedDate
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
export class PushJournal200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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
  @Type(() => PushJournal200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PushJournal200ApplicationJSONSourceModifiedDateMetadata;

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
  status?: PushJournal200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
export enum PushJournal200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PushJournal200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PushJournal200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PushJournal200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PushJournal200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PushJournal200ApplicationJSONValidationValidationItem)
  errors?: PushJournal200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PushJournal200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PushJournal200ApplicationJSONValidationValidationItem)
  warnings?: PushJournal200ApplicationJSONValidationValidationItem[];
}

export class PushJournal200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PushJournal200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PushJournal200ApplicationJSONChanges)
  changes?: PushJournal200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PushJournal200ApplicationJSONSourceModifiedDate)
  data?: PushJournal200ApplicationJSONSourceModifiedDate;

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
  status: PushJournal200ApplicationJSONStatusEnum;

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
  @Type(() => PushJournal200ApplicationJSONValidation)
  validation?: PushJournal200ApplicationJSONValidation;
}

export class PushJournalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  pushJournal200ApplicationJSONObject?: PushJournal200ApplicationJSON;
}