/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateBankAccountRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
  /**
   * Allow a sync upon push completion.
   */
  allowSyncOnPushComplete?: boolean | undefined;
  accountingBankAccount?: shared.AccountingBankAccount | null | undefined;
};

/** @internal */
export const CreateBankAccountRequest$inboundSchema: z.ZodType<
  CreateBankAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  allowSyncOnPushComplete: z.boolean().default(true),
  AccountingBankAccount: z.nullable(shared.AccountingBankAccount$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "AccountingBankAccount": "accountingBankAccount",
  });
});

/** @internal */
export type CreateBankAccountRequest$Outbound = {
  companyId: string;
  connectionId: string;
  timeoutInMinutes?: number | undefined;
  allowSyncOnPushComplete: boolean;
  AccountingBankAccount?:
    | shared.AccountingBankAccount$Outbound
    | null
    | undefined;
};

/** @internal */
export const CreateBankAccountRequest$outboundSchema: z.ZodType<
  CreateBankAccountRequest$Outbound,
  z.ZodTypeDef,
  CreateBankAccountRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  allowSyncOnPushComplete: z.boolean().default(true),
  accountingBankAccount: z.nullable(shared.AccountingBankAccount$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    accountingBankAccount: "AccountingBankAccount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBankAccountRequest$ {
  /** @deprecated use `CreateBankAccountRequest$inboundSchema` instead. */
  export const inboundSchema = CreateBankAccountRequest$inboundSchema;
  /** @deprecated use `CreateBankAccountRequest$outboundSchema` instead. */
  export const outboundSchema = CreateBankAccountRequest$outboundSchema;
  /** @deprecated use `CreateBankAccountRequest$Outbound` instead. */
  export type Outbound = CreateBankAccountRequest$Outbound;
}

export function createBankAccountRequestToJSON(
  createBankAccountRequest: CreateBankAccountRequest,
): string {
  return JSON.stringify(
    CreateBankAccountRequest$outboundSchema.parse(createBankAccountRequest),
  );
}

export function createBankAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateBankAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBankAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBankAccountRequest' from JSON`,
  );
}
