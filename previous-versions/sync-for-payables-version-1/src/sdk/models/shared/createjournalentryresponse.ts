/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  JournalEntryRecordRef,
  JournalEntryRecordRef$inboundSchema,
  JournalEntryRecordRef$Outbound,
  JournalEntryRecordRef$outboundSchema,
} from "./journalentryrecordref.js";
import {
  JournalLine,
  JournalLine$inboundSchema,
  JournalLine$Outbound,
  JournalLine$outboundSchema,
} from "./journalline.js";
import {
  JournalRef,
  JournalRef$inboundSchema,
  JournalRef$Outbound,
  JournalRef$outboundSchema,
} from "./journalref.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  PropertieDataType,
  PropertieDataType$inboundSchema,
  PropertieDataType$outboundSchema,
} from "./propertiedatatype.js";
import {
  PushOperationChange,
  PushOperationChange$inboundSchema,
  PushOperationChange$Outbound,
  PushOperationChange$outboundSchema,
} from "./pushoperationchange.js";
import {
  PushOperationStatus,
  PushOperationStatus$inboundSchema,
  PushOperationStatus$outboundSchema,
} from "./pushoperationstatus.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";
import {
  Validation,
  Validation$inboundSchema,
  Validation$Outbound,
  Validation$outboundSchema,
} from "./validation.js";

/**
 * > **Language tip:** For the top-level record of a company's financial transactions, refer to the [Journals](https://docs.codat.io/sync-for-payables-api#/schemas/Journal) data type
 *
 * @remarks
 *
 * > View the coverage for journal entries in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A journal entry report shows the entries made in a company's general ledger, or [accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account), when transactions are approved. The journal line items for each journal entry should balance.
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
 * > **Pushing journal entries**
 * > Codat only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingJournalEntry = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Unique identifier of the journal entry for the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Optional description of the journal entry.
   */
  description?: string | null | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  postedOn?: string | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  createdOn?: string | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  updatedOn?: string | undefined;
  /**
   * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
   */
  journalRef?: JournalRef | undefined;
  /**
   * An array of journal lines.
   */
  journalLines?: Array<JournalLine> | null | undefined;
  /**
   * Links a journal entry to the underlying record that created it.
   */
  recordRef?: JournalEntryRecordRef | undefined;
  metadata?: Metadata | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
};

export type CreateJournalEntryResponse = {
  data?: AccountingJournalEntry | null | undefined;
  /**
   * Contains a single entry that communicates which record has changed and the manner in which it changed.
   */
  changes?: Array<PushOperationChange> | null | undefined;
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId: string;
  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  pushOperationKey: string;
  /**
   * Unique identifier for a company's data connection.
   */
  dataConnectionKey: string;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  requestedOnUtc: string;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  completedOnUtc?: string | undefined;
  /**
   * Number of minutes the push operation must complete within before it times out.
   */
  timeoutInMinutes?: number | null | undefined;
  /**
   * Number of seconds the push operation must complete within before it times out.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  timeoutInSeconds?: number | null | undefined;
  /**
   * The current status of the push operation.
   */
  status: PushOperationStatus;
  /**
   * A message about the error.
   */
  errorMessage?: string | null | undefined;
  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  validation?: Validation | undefined;
  /**
   * Push status code.
   */
  statusCode: number;
};

/** @internal */
export const AccountingJournalEntry$inboundSchema: z.ZodType<
  AccountingJournalEntry,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  description: z.nullable(z.string()).optional(),
  postedOn: z.string().optional(),
  createdOn: z.string().optional(),
  updatedOn: z.string().optional(),
  journalRef: JournalRef$inboundSchema.optional(),
  journalLines: z.nullable(z.array(JournalLine$inboundSchema)).optional(),
  recordRef: JournalEntryRecordRef$inboundSchema.optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingJournalEntry$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  description?: string | null | undefined;
  postedOn?: string | undefined;
  createdOn?: string | undefined;
  updatedOn?: string | undefined;
  journalRef?: JournalRef$Outbound | undefined;
  journalLines?: Array<JournalLine$Outbound> | null | undefined;
  recordRef?: JournalEntryRecordRef$Outbound | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingJournalEntry$outboundSchema: z.ZodType<
  AccountingJournalEntry$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntry
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  description: z.nullable(z.string()).optional(),
  postedOn: z.string().optional(),
  createdOn: z.string().optional(),
  updatedOn: z.string().optional(),
  journalRef: JournalRef$outboundSchema.optional(),
  journalLines: z.nullable(z.array(JournalLine$outboundSchema)).optional(),
  recordRef: JournalEntryRecordRef$outboundSchema.optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntry$ {
  /** @deprecated use `AccountingJournalEntry$inboundSchema` instead. */
  export const inboundSchema = AccountingJournalEntry$inboundSchema;
  /** @deprecated use `AccountingJournalEntry$outboundSchema` instead. */
  export const outboundSchema = AccountingJournalEntry$outboundSchema;
  /** @deprecated use `AccountingJournalEntry$Outbound` instead. */
  export type Outbound = AccountingJournalEntry$Outbound;
}

/** @internal */
export const CreateJournalEntryResponse$inboundSchema: z.ZodType<
  CreateJournalEntryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.nullable(z.lazy(() => AccountingJournalEntry$inboundSchema))
    .optional(),
  changes: z.nullable(z.array(PushOperationChange$inboundSchema)).optional(),
  dataType: PropertieDataType$inboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$inboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$inboundSchema.optional(),
  statusCode: z.number().int(),
});

/** @internal */
export type CreateJournalEntryResponse$Outbound = {
  data?: AccountingJournalEntry$Outbound | null | undefined;
  changes?: Array<PushOperationChange$Outbound> | null | undefined;
  dataType?: string | undefined;
  companyId: string;
  pushOperationKey: string;
  dataConnectionKey: string;
  requestedOnUtc: string;
  completedOnUtc?: string | undefined;
  timeoutInMinutes?: number | null | undefined;
  timeoutInSeconds?: number | null | undefined;
  status: string;
  errorMessage?: string | null | undefined;
  validation?: Validation$Outbound | undefined;
  statusCode: number;
};

/** @internal */
export const CreateJournalEntryResponse$outboundSchema: z.ZodType<
  CreateJournalEntryResponse$Outbound,
  z.ZodTypeDef,
  CreateJournalEntryResponse
> = z.object({
  data: z.nullable(z.lazy(() => AccountingJournalEntry$outboundSchema))
    .optional(),
  changes: z.nullable(z.array(PushOperationChange$outboundSchema)).optional(),
  dataType: PropertieDataType$outboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$outboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$outboundSchema.optional(),
  statusCode: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateJournalEntryResponse$ {
  /** @deprecated use `CreateJournalEntryResponse$inboundSchema` instead. */
  export const inboundSchema = CreateJournalEntryResponse$inboundSchema;
  /** @deprecated use `CreateJournalEntryResponse$outboundSchema` instead. */
  export const outboundSchema = CreateJournalEntryResponse$outboundSchema;
  /** @deprecated use `CreateJournalEntryResponse$Outbound` instead. */
  export type Outbound = CreateJournalEntryResponse$Outbound;
}
