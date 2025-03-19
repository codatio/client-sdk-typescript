/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingDirectCost,
  AccountingDirectCost$inboundSchema,
  AccountingDirectCost$Outbound,
  AccountingDirectCost$outboundSchema,
} from "./accountingdirectcost.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type AccountingDirectCosts = {
  results?: Array<AccountingDirectCost | null> | undefined;
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
export const AccountingDirectCosts$inboundSchema: z.ZodType<
  AccountingDirectCosts,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(z.nullable(AccountingDirectCost$inboundSchema)).optional(),
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
export type AccountingDirectCosts$Outbound = {
  results?: Array<AccountingDirectCost$Outbound | null> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const AccountingDirectCosts$outboundSchema: z.ZodType<
  AccountingDirectCosts$Outbound,
  z.ZodTypeDef,
  AccountingDirectCosts
> = z.object({
  results: z.array(z.nullable(AccountingDirectCost$outboundSchema)).optional(),
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
export namespace AccountingDirectCosts$ {
  /** @deprecated use `AccountingDirectCosts$inboundSchema` instead. */
  export const inboundSchema = AccountingDirectCosts$inboundSchema;
  /** @deprecated use `AccountingDirectCosts$outboundSchema` instead. */
  export const outboundSchema = AccountingDirectCosts$outboundSchema;
  /** @deprecated use `AccountingDirectCosts$Outbound` instead. */
  export type Outbound = AccountingDirectCosts$Outbound;
}

export function accountingDirectCostsToJSON(
  accountingDirectCosts: AccountingDirectCosts,
): string {
  return JSON.stringify(
    AccountingDirectCosts$outboundSchema.parse(accountingDirectCosts),
  );
}

export function accountingDirectCostsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingDirectCosts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingDirectCosts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingDirectCosts' from JSON`,
  );
}
