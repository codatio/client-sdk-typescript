/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TargetAccountOption,
  TargetAccountOption$inboundSchema,
  TargetAccountOption$Outbound,
  TargetAccountOption$outboundSchema,
} from "./targetaccountoption.js";

/**
 * A bank feed connection between a source account and a target account, including potential target accounts.
 */
export type BankFeedMapping = {
  /**
   * Unique ID for the source account.
   */
  sourceAccountId?: string | undefined;
  /**
   * Name for the source account.
   */
  sourceAccountName?: string | undefined;
  /**
   * Account number for the source account.
   */
  sourceAccountNumber?: string | undefined;
  /**
   * Balance for the source account.
   */
  sourceBalance?: Decimal$ | number | undefined;
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
  sourceCurrency?: string | undefined;
  /**
   * Unique ID for the target account in the accounting software.
   */
  targetAccountId?: string | null | undefined;
  /**
   * Name for the target account in the accounting software.
   */
  targetAccountName?: string | undefined;
  /**
   * The status.
   */
  status?: string | undefined;
  /**
   * An array of potential target accounts.
   */
  targetAccountOptions?: Array<TargetAccountOption> | null | undefined;
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
export const BankFeedMapping$inboundSchema: z.ZodType<
  BankFeedMapping,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceAccountId: z.string().optional(),
  sourceAccountName: z.string().optional(),
  sourceAccountNumber: z.string().optional(),
  sourceBalance: z.number().transform(v => new Decimal$(v)).optional(),
  sourceCurrency: z.string().optional(),
  targetAccountId: z.nullable(z.string()).optional(),
  targetAccountName: z.string().optional(),
  status: z.string().optional(),
  targetAccountOptions: z.nullable(z.array(TargetAccountOption$inboundSchema))
    .optional(),
  feedStartDate: z.string().optional(),
});

/** @internal */
export type BankFeedMapping$Outbound = {
  sourceAccountId?: string | undefined;
  sourceAccountName?: string | undefined;
  sourceAccountNumber?: string | undefined;
  sourceBalance?: number | undefined;
  sourceCurrency?: string | undefined;
  targetAccountId?: string | null | undefined;
  targetAccountName?: string | undefined;
  status?: string | undefined;
  targetAccountOptions?: Array<TargetAccountOption$Outbound> | null | undefined;
  feedStartDate?: string | undefined;
};

/** @internal */
export const BankFeedMapping$outboundSchema: z.ZodType<
  BankFeedMapping$Outbound,
  z.ZodTypeDef,
  BankFeedMapping
> = z.object({
  sourceAccountId: z.string().optional(),
  sourceAccountName: z.string().optional(),
  sourceAccountNumber: z.string().optional(),
  sourceBalance: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  sourceCurrency: z.string().optional(),
  targetAccountId: z.nullable(z.string()).optional(),
  targetAccountName: z.string().optional(),
  status: z.string().optional(),
  targetAccountOptions: z.nullable(z.array(TargetAccountOption$outboundSchema))
    .optional(),
  feedStartDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankFeedMapping$ {
  /** @deprecated use `BankFeedMapping$inboundSchema` instead. */
  export const inboundSchema = BankFeedMapping$inboundSchema;
  /** @deprecated use `BankFeedMapping$outboundSchema` instead. */
  export const outboundSchema = BankFeedMapping$outboundSchema;
  /** @deprecated use `BankFeedMapping$Outbound` instead. */
  export type Outbound = BankFeedMapping$Outbound;
}

export function bankFeedMappingToJSON(
  bankFeedMapping: BankFeedMapping,
): string {
  return JSON.stringify(BankFeedMapping$outboundSchema.parse(bankFeedMapping));
}

export function bankFeedMappingFromJSON(
  jsonString: string,
): SafeParseResult<BankFeedMapping, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BankFeedMapping$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BankFeedMapping' from JSON`,
  );
}
