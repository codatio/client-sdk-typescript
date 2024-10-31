/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CompanyReference,
  CompanyReference$inboundSchema,
  CompanyReference$Outbound,
  CompanyReference$outboundSchema,
} from "./companyreference.js";
import {
  PropertieDataType,
  PropertieDataType$inboundSchema,
  PropertieDataType$outboundSchema,
} from "./propertiedatatype.js";
import {
  Status,
  Status$inboundSchema,
  Status$outboundSchema,
} from "./status.js";

export type DataTypes = {
  /**
   * Unique identifier for a company's data connection.
   */
  connectionId?: string | undefined;
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * `True` if records have been created, updated or deleted in Codat's cache.
   */
  recordsModified?: boolean | undefined;
  /**
   * The current status of the dataset.
   */
  status?: Status | undefined;
};

export type ReadCompletedWebhookPayload = {
  referenceCompany?: CompanyReference | undefined;
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
  modifiedFromDate?: string | undefined;
  dataTypes?: Array<DataTypes> | undefined;
};

/** @internal */
export const DataTypes$inboundSchema: z.ZodType<
  DataTypes,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectionId: z.string().optional(),
  dataType: PropertieDataType$inboundSchema.optional(),
  recordsModified: z.boolean().optional(),
  status: Status$inboundSchema.optional(),
});

/** @internal */
export type DataTypes$Outbound = {
  connectionId?: string | undefined;
  dataType?: string | undefined;
  recordsModified?: boolean | undefined;
  status?: string | undefined;
};

/** @internal */
export const DataTypes$outboundSchema: z.ZodType<
  DataTypes$Outbound,
  z.ZodTypeDef,
  DataTypes
> = z.object({
  connectionId: z.string().optional(),
  dataType: PropertieDataType$outboundSchema.optional(),
  recordsModified: z.boolean().optional(),
  status: Status$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataTypes$ {
  /** @deprecated use `DataTypes$inboundSchema` instead. */
  export const inboundSchema = DataTypes$inboundSchema;
  /** @deprecated use `DataTypes$outboundSchema` instead. */
  export const outboundSchema = DataTypes$outboundSchema;
  /** @deprecated use `DataTypes$Outbound` instead. */
  export type Outbound = DataTypes$Outbound;
}

/** @internal */
export const ReadCompletedWebhookPayload$inboundSchema: z.ZodType<
  ReadCompletedWebhookPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  referenceCompany: CompanyReference$inboundSchema.optional(),
  modifiedFromDate: z.string().optional(),
  dataTypes: z.array(z.lazy(() => DataTypes$inboundSchema)).optional(),
});

/** @internal */
export type ReadCompletedWebhookPayload$Outbound = {
  referenceCompany?: CompanyReference$Outbound | undefined;
  modifiedFromDate?: string | undefined;
  dataTypes?: Array<DataTypes$Outbound> | undefined;
};

/** @internal */
export const ReadCompletedWebhookPayload$outboundSchema: z.ZodType<
  ReadCompletedWebhookPayload$Outbound,
  z.ZodTypeDef,
  ReadCompletedWebhookPayload
> = z.object({
  referenceCompany: CompanyReference$outboundSchema.optional(),
  modifiedFromDate: z.string().optional(),
  dataTypes: z.array(z.lazy(() => DataTypes$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadCompletedWebhookPayload$ {
  /** @deprecated use `ReadCompletedWebhookPayload$inboundSchema` instead. */
  export const inboundSchema = ReadCompletedWebhookPayload$inboundSchema;
  /** @deprecated use `ReadCompletedWebhookPayload$outboundSchema` instead. */
  export const outboundSchema = ReadCompletedWebhookPayload$outboundSchema;
  /** @deprecated use `ReadCompletedWebhookPayload$Outbound` instead. */
  export type Outbound = ReadCompletedWebhookPayload$Outbound;
}