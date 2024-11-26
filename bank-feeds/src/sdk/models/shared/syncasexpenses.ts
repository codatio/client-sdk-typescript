/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BankAccountOption,
  BankAccountOption$inboundSchema,
  BankAccountOption$Outbound,
  BankAccountOption$outboundSchema,
} from "./bankaccountoption.js";
import {
  ConfigurationCustomer,
  ConfigurationCustomer$inboundSchema,
  ConfigurationCustomer$Outbound,
  ConfigurationCustomer$outboundSchema,
} from "./configurationcustomer.js";
import {
  ConfigurationSupplier,
  ConfigurationSupplier$inboundSchema,
  ConfigurationSupplier$Outbound,
  ConfigurationSupplier$outboundSchema,
} from "./configurationsupplier.js";

export type SyncAsExpenses = {
  /**
   * True if expense sync is enabled.
   */
  enableSync?: boolean | undefined;
  supplier?: ConfigurationSupplier | undefined;
  customer?: ConfigurationCustomer | undefined;
  /**
   * The bank account ID being synced.
   */
  selectedBankAccountId?: string | undefined;
  bankAccountOptions?: Array<BankAccountOption> | undefined;
};

/** @internal */
export const SyncAsExpenses$inboundSchema: z.ZodType<
  SyncAsExpenses,
  z.ZodTypeDef,
  unknown
> = z.object({
  enableSync: z.boolean().optional(),
  supplier: ConfigurationSupplier$inboundSchema.optional(),
  customer: ConfigurationCustomer$inboundSchema.optional(),
  selectedBankAccountId: z.string().optional(),
  bankAccountOptions: z.array(BankAccountOption$inboundSchema).optional(),
});

/** @internal */
export type SyncAsExpenses$Outbound = {
  enableSync?: boolean | undefined;
  supplier?: ConfigurationSupplier$Outbound | undefined;
  customer?: ConfigurationCustomer$Outbound | undefined;
  selectedBankAccountId?: string | undefined;
  bankAccountOptions?: Array<BankAccountOption$Outbound> | undefined;
};

/** @internal */
export const SyncAsExpenses$outboundSchema: z.ZodType<
  SyncAsExpenses$Outbound,
  z.ZodTypeDef,
  SyncAsExpenses
> = z.object({
  enableSync: z.boolean().optional(),
  supplier: ConfigurationSupplier$outboundSchema.optional(),
  customer: ConfigurationCustomer$outboundSchema.optional(),
  selectedBankAccountId: z.string().optional(),
  bankAccountOptions: z.array(BankAccountOption$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SyncAsExpenses$ {
  /** @deprecated use `SyncAsExpenses$inboundSchema` instead. */
  export const inboundSchema = SyncAsExpenses$inboundSchema;
  /** @deprecated use `SyncAsExpenses$outboundSchema` instead. */
  export const outboundSchema = SyncAsExpenses$outboundSchema;
  /** @deprecated use `SyncAsExpenses$Outbound` instead. */
  export type Outbound = SyncAsExpenses$Outbound;
}

export function syncAsExpensesToJSON(syncAsExpenses: SyncAsExpenses): string {
  return JSON.stringify(SyncAsExpenses$outboundSchema.parse(syncAsExpenses));
}

export function syncAsExpensesFromJSON(
  jsonString: string,
): SafeParseResult<SyncAsExpenses, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SyncAsExpenses$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SyncAsExpenses' from JSON`,
  );
}
