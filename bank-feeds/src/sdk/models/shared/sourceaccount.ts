/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Status of the source account.
 */
export const SourceAccountStatus = {
  Pending: "pending",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Unknown: "unknown",
} as const;
/**
 * Status of the source account.
 */
export type SourceAccountStatus = ClosedEnum<typeof SourceAccountStatus>;

/**
 * The target bank account in a supported accounting software for ingestion into a bank feed.
 */
export type SourceAccount = {
  /**
   * Unique ID for the bank account.
   */
  id: string;
  /**
   * The bank account name.
   */
  accountName?: string | null | undefined;
  /**
   * The type of bank account e.g. Credit.
   */
  accountType?: string | null | undefined;
  /**
   * The account number.
   */
  accountNumber?: string | null | undefined;
  /**
   * The sort code.
   */
  sortCode?: string | null | undefined;
  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  currency?: string | undefined;
  /**
   * The latest balance for the bank account.
   */
  balance?: Decimal$ | number | null | undefined;
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
  modifiedDate?: string | undefined;
  /**
   * Status of the source account.
   */
  status?: SourceAccountStatus | null | undefined;
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
  feedStartDate?: string | undefined;
};

/** @internal */
export const SourceAccountStatus$inboundSchema: z.ZodNativeEnum<
  typeof SourceAccountStatus
> = z.nativeEnum(SourceAccountStatus);

/** @internal */
export const SourceAccountStatus$outboundSchema: z.ZodNativeEnum<
  typeof SourceAccountStatus
> = SourceAccountStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceAccountStatus$ {
  /** @deprecated use `SourceAccountStatus$inboundSchema` instead. */
  export const inboundSchema = SourceAccountStatus$inboundSchema;
  /** @deprecated use `SourceAccountStatus$outboundSchema` instead. */
  export const outboundSchema = SourceAccountStatus$outboundSchema;
}

/** @internal */
export const SourceAccount$inboundSchema: z.ZodType<
  SourceAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  accountName: z.nullable(z.string()).optional(),
  accountType: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  balance: z.nullable(z.number().transform(v => new Decimal$(v))).optional(),
  modifiedDate: z.string().optional(),
  status: z.nullable(SourceAccountStatus$inboundSchema).optional(),
  feedStartDate: z.string().optional(),
});

/** @internal */
export type SourceAccount$Outbound = {
  id: string;
  accountName?: string | null | undefined;
  accountType?: string | null | undefined;
  accountNumber?: string | null | undefined;
  sortCode?: string | null | undefined;
  currency?: string | undefined;
  balance?: number | null | undefined;
  modifiedDate?: string | undefined;
  status?: string | null | undefined;
  feedStartDate?: string | undefined;
};

/** @internal */
export const SourceAccount$outboundSchema: z.ZodType<
  SourceAccount$Outbound,
  z.ZodTypeDef,
  SourceAccount
> = z.object({
  id: z.string(),
  accountName: z.nullable(z.string()).optional(),
  accountType: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()).optional(),
  sortCode: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  balance: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  modifiedDate: z.string().optional(),
  status: z.nullable(SourceAccountStatus$outboundSchema).optional(),
  feedStartDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceAccount$ {
  /** @deprecated use `SourceAccount$inboundSchema` instead. */
  export const inboundSchema = SourceAccount$inboundSchema;
  /** @deprecated use `SourceAccount$outboundSchema` instead. */
  export const outboundSchema = SourceAccount$outboundSchema;
  /** @deprecated use `SourceAccount$Outbound` instead. */
  export type Outbound = SourceAccount$Outbound;
}

export function sourceAccountToJSON(sourceAccount: SourceAccount): string {
  return JSON.stringify(SourceAccount$outboundSchema.parse(sourceAccount));
}

export function sourceAccountFromJSON(
  jsonString: string,
): SafeParseResult<SourceAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SourceAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SourceAccount' from JSON`,
  );
}
