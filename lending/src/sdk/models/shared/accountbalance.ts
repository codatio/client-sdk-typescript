/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountBalance = {
  /**
   * The account's current balance
   */
  available?: Decimal$ | number | undefined;
  /**
   * Funds that are not yet available in the balance
   */
  pending?: Decimal$ | number | undefined;
  /**
   * Funds reserved as holdings
   */
  reserved?: any | undefined;
  /**
   * The currency of the account
   */
  currency?: string | undefined;
};

/** @internal */
export const AccountBalance$inboundSchema: z.ZodType<
  AccountBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  available: z.number().transform(v => new Decimal$(v)).optional(),
  pending: z.number().transform(v => new Decimal$(v)).optional(),
  reserved: z.any().optional(),
  currency: z.string().optional(),
});

/** @internal */
export type AccountBalance$Outbound = {
  available?: number | undefined;
  pending?: number | undefined;
  reserved?: any | undefined;
  currency?: string | undefined;
};

/** @internal */
export const AccountBalance$outboundSchema: z.ZodType<
  AccountBalance$Outbound,
  z.ZodTypeDef,
  AccountBalance
> = z.object({
  available: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  pending: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  reserved: z.any().optional(),
  currency: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountBalance$ {
  /** @deprecated use `AccountBalance$inboundSchema` instead. */
  export const inboundSchema = AccountBalance$inboundSchema;
  /** @deprecated use `AccountBalance$outboundSchema` instead. */
  export const outboundSchema = AccountBalance$outboundSchema;
  /** @deprecated use `AccountBalance$Outbound` instead. */
  export type Outbound = AccountBalance$Outbound;
}

export function accountBalanceToJSON(accountBalance: AccountBalance): string {
  return JSON.stringify(AccountBalance$outboundSchema.parse(accountBalance));
}

export function accountBalanceFromJSON(
  jsonString: string,
): SafeParseResult<AccountBalance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountBalance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountBalance' from JSON`,
  );
}
