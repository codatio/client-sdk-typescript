/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingInvoice,
  AccountingInvoice$inboundSchema,
  AccountingInvoice$Outbound,
  AccountingInvoice$outboundSchema,
} from "./accountinginvoice.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type AccountingInvoices = {
  results?: Array<AccountingInvoice | null> | undefined;
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
export const AccountingInvoices$inboundSchema: z.ZodType<
  AccountingInvoices,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(z.nullable(AccountingInvoice$inboundSchema)).optional(),
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
export type AccountingInvoices$Outbound = {
  results?: Array<AccountingInvoice$Outbound | null> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const AccountingInvoices$outboundSchema: z.ZodType<
  AccountingInvoices$Outbound,
  z.ZodTypeDef,
  AccountingInvoices
> = z.object({
  results: z.array(z.nullable(AccountingInvoice$outboundSchema)).optional(),
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
export namespace AccountingInvoices$ {
  /** @deprecated use `AccountingInvoices$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoices$inboundSchema;
  /** @deprecated use `AccountingInvoices$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoices$outboundSchema;
  /** @deprecated use `AccountingInvoices$Outbound` instead. */
  export type Outbound = AccountingInvoices$Outbound;
}

export function accountingInvoicesToJSON(
  accountingInvoices: AccountingInvoices,
): string {
  return JSON.stringify(
    AccountingInvoices$outboundSchema.parse(accountingInvoices),
  );
}

export function accountingInvoicesFromJSON(
  jsonString: string,
): SafeParseResult<AccountingInvoices, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingInvoices$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingInvoices' from JSON`,
  );
}
