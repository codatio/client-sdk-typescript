/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountStatus,
  AccountStatus$inboundSchema,
  AccountStatus$outboundSchema,
} from "./accountstatus.js";

export type AccountMappingOption = {
  /**
   * Identifier for the account, unique for the company.
   */
  id?: string | undefined;
  /**
   * Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.
   */
  nominalCode?: string | null | undefined;
  /**
   * Name of the account.
   */
  name?: string | null | undefined;
  /**
   * Type of account.
   */
  type?: string | null | undefined;
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
   * The current status of the account.
   */
  status?: AccountStatus | undefined;
  sourceModifiedDate?: string | undefined;
};

/** @internal */
export const AccountMappingOption$inboundSchema: z.ZodType<
  AccountMappingOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  nominalCode: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  status: AccountStatus$inboundSchema.optional(),
  sourceModifiedDate: z.string().optional(),
});

/** @internal */
export type AccountMappingOption$Outbound = {
  id?: string | undefined;
  nominalCode?: string | null | undefined;
  name?: string | null | undefined;
  type?: string | null | undefined;
  currency?: string | undefined;
  status?: string | undefined;
  sourceModifiedDate?: string | undefined;
};

/** @internal */
export const AccountMappingOption$outboundSchema: z.ZodType<
  AccountMappingOption$Outbound,
  z.ZodTypeDef,
  AccountMappingOption
> = z.object({
  id: z.string().optional(),
  nominalCode: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.string()).optional(),
  currency: z.string().optional(),
  status: AccountStatus$outboundSchema.optional(),
  sourceModifiedDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountMappingOption$ {
  /** @deprecated use `AccountMappingOption$inboundSchema` instead. */
  export const inboundSchema = AccountMappingOption$inboundSchema;
  /** @deprecated use `AccountMappingOption$outboundSchema` instead. */
  export const outboundSchema = AccountMappingOption$outboundSchema;
  /** @deprecated use `AccountMappingOption$Outbound` instead. */
  export type Outbound = AccountMappingOption$Outbound;
}

export function accountMappingOptionToJSON(
  accountMappingOption: AccountMappingOption,
): string {
  return JSON.stringify(
    AccountMappingOption$outboundSchema.parse(accountMappingOption),
  );
}

export function accountMappingOptionFromJSON(
  jsonString: string,
): SafeParseResult<AccountMappingOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountMappingOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountMappingOption' from JSON`,
  );
}
