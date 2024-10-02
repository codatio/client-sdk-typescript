/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  DataConnectionError,
  DataConnectionError$inboundSchema,
  DataConnectionError$Outbound,
  DataConnectionError$outboundSchema,
} from "./dataconnectionerror.js";
import {
  DataConnectionStatus,
  DataConnectionStatus$inboundSchema,
  DataConnectionStatus$outboundSchema,
} from "./dataconnectionstatus.js";

/**
 * The type of platform of the connection.
 */
export const SourceType = {
  Accounting: "Accounting",
  Banking: "Banking",
  BankFeed: "BankFeed",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
/**
 * The type of platform of the connection.
 */
export type SourceType = ClosedEnum<typeof SourceType>;

/**
 * A connection represents a [company's](https://docs.codat.io/sync-for-payables-api#/schemas/Company) connection to a data source and allows you to synchronize data (pull and/or push) with that source.
 *
 * @remarks
 *
 * A company can have multiple data connections depending on the type of data source it is connecting to. For example, a single company can link to:
 *
 * - [Accounting data](https://docs.codat.io/accounting-api/overview) - 1 active connection.
 * - [Banking data](https://docs.codat.io/banking-api/overview) - Multiple active connections.
 * - [Commerce data](https://docs.codat.io/commerce-api/overview) - Multiple active connections.
 * Any combination of accounting, banking, and commerce data connections is allowed.
 *
 * Before you can use a data connection to pull or push data, the company must grant you access to their business data by [linking the connection](https://docs.codat.io/auth-flow/overview).
 */
export type Connection = {
  /**
   * Unique identifier for a company's data connection.
   */
  id: string;
  /**
   * A Codat ID representing the integration.
   */
  integrationId: string;
  /**
   * A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.
   */
  integrationKey: string;
  /**
   * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
   */
  sourceId: string;
  /**
   * The type of platform of the connection.
   */
  sourceType: SourceType;
  /**
   * Name of integration connected to company.
   */
  platformName: string;
  /**
   * The link URL your customers can use to authorize access to their business application.
   */
  linkUrl: string;
  /**
   * The current authorization status of the data connection.
   */
  status: DataConnectionStatus;
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
  lastSync?: string | undefined;
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
  created: string;
  dataConnectionErrors?: Array<DataConnectionError> | null | undefined;
  connectionInfo?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const SourceType$inboundSchema: z.ZodNativeEnum<typeof SourceType> = z
  .nativeEnum(SourceType);

/** @internal */
export const SourceType$outboundSchema: z.ZodNativeEnum<typeof SourceType> =
  SourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceType$ {
  /** @deprecated use `SourceType$inboundSchema` instead. */
  export const inboundSchema = SourceType$inboundSchema;
  /** @deprecated use `SourceType$outboundSchema` instead. */
  export const outboundSchema = SourceType$outboundSchema;
}

/** @internal */
export const Connection$inboundSchema: z.ZodType<
  Connection,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  integrationId: z.string(),
  integrationKey: z.string(),
  sourceId: z.string(),
  sourceType: SourceType$inboundSchema,
  platformName: z.string(),
  linkUrl: z.string(),
  status: DataConnectionStatus$inboundSchema,
  lastSync: z.string().optional(),
  created: z.string(),
  dataConnectionErrors: z.nullable(z.array(DataConnectionError$inboundSchema))
    .optional(),
  connectionInfo: z.nullable(z.record(z.string())).optional(),
});

/** @internal */
export type Connection$Outbound = {
  id: string;
  integrationId: string;
  integrationKey: string;
  sourceId: string;
  sourceType: string;
  platformName: string;
  linkUrl: string;
  status: string;
  lastSync?: string | undefined;
  created: string;
  dataConnectionErrors?: Array<DataConnectionError$Outbound> | null | undefined;
  connectionInfo?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const Connection$outboundSchema: z.ZodType<
  Connection$Outbound,
  z.ZodTypeDef,
  Connection
> = z.object({
  id: z.string(),
  integrationId: z.string(),
  integrationKey: z.string(),
  sourceId: z.string(),
  sourceType: SourceType$outboundSchema,
  platformName: z.string(),
  linkUrl: z.string(),
  status: DataConnectionStatus$outboundSchema,
  lastSync: z.string().optional(),
  created: z.string(),
  dataConnectionErrors: z.nullable(z.array(DataConnectionError$outboundSchema))
    .optional(),
  connectionInfo: z.nullable(z.record(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connection$ {
  /** @deprecated use `Connection$inboundSchema` instead. */
  export const inboundSchema = Connection$inboundSchema;
  /** @deprecated use `Connection$outboundSchema` instead. */
  export const outboundSchema = Connection$outboundSchema;
  /** @deprecated use `Connection$Outbound` instead. */
  export type Outbound = Connection$Outbound;
}
