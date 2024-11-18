/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingJournal,
  AccountingJournal$inboundSchema,
  AccountingJournal$Outbound,
  AccountingJournal$outboundSchema,
} from "./accountingjournal.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type AccountingJournals = {
  results?: Array<AccountingJournal> | undefined;
  /**
   * Current page number.
   */
  pageNumber: number;
  /**
   * Number of items to return in results array.
   */
  pageSize: number;
  /**
   * Total number of items.
   */
  totalResults: number;
  links: Links;
};

/** @internal */
export const AccountingJournals$inboundSchema: z.ZodType<
  AccountingJournals,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(AccountingJournal$inboundSchema).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  _links: Links$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type AccountingJournals$Outbound = {
  results?: Array<AccountingJournal$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const AccountingJournals$outboundSchema: z.ZodType<
  AccountingJournals$Outbound,
  z.ZodTypeDef,
  AccountingJournals
> = z.object({
  results: z.array(AccountingJournal$outboundSchema).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  links: Links$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournals$ {
  /** @deprecated use `AccountingJournals$inboundSchema` instead. */
  export const inboundSchema = AccountingJournals$inboundSchema;
  /** @deprecated use `AccountingJournals$outboundSchema` instead. */
  export const outboundSchema = AccountingJournals$outboundSchema;
  /** @deprecated use `AccountingJournals$Outbound` instead. */
  export type Outbound = AccountingJournals$Outbound;
}

export function accountingJournalsToJSON(
  accountingJournals: AccountingJournals,
): string {
  return JSON.stringify(
    AccountingJournals$outboundSchema.parse(accountingJournals),
  );
}

export function accountingJournalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingJournals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournals' from JSON`,
  );
}
