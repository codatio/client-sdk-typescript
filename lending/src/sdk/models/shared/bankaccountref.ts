/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Links to the Account transactions data type.
 */
export type BankAccountRef = {
  /**
   * Bank account 'id' for the account transaction.
   */
  id?: string | undefined;
  /**
   * bank account 'name' for the account transaction.
   */
  name?: string | undefined;
};

/** @internal */
export const BankAccountRef$inboundSchema: z.ZodType<
  BankAccountRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
});

/** @internal */
export type BankAccountRef$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const BankAccountRef$outboundSchema: z.ZodType<
  BankAccountRef$Outbound,
  z.ZodTypeDef,
  BankAccountRef
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountRef$ {
  /** @deprecated use `BankAccountRef$inboundSchema` instead. */
  export const inboundSchema = BankAccountRef$inboundSchema;
  /** @deprecated use `BankAccountRef$outboundSchema` instead. */
  export const outboundSchema = BankAccountRef$outboundSchema;
  /** @deprecated use `BankAccountRef$Outbound` instead. */
  export type Outbound = BankAccountRef$Outbound;
}

export function bankAccountRefToJSON(bankAccountRef: BankAccountRef): string {
  return JSON.stringify(BankAccountRef$outboundSchema.parse(bankAccountRef));
}

export function bankAccountRefFromJSON(
  jsonString: string,
): SafeParseResult<BankAccountRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BankAccountRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BankAccountRef' from JSON`,
  );
}
