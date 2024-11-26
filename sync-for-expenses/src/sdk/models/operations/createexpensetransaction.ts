/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateExpenseTransactionRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  requestBody?: Array<shared.ExpenseTransaction> | undefined;
};

/** @internal */
export const CreateExpenseTransactionRequest$inboundSchema: z.ZodType<
  CreateExpenseTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  RequestBody: z.array(shared.ExpenseTransaction$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateExpenseTransactionRequest$Outbound = {
  companyId: string;
  RequestBody?: Array<shared.ExpenseTransaction$Outbound> | undefined;
};

/** @internal */
export const CreateExpenseTransactionRequest$outboundSchema: z.ZodType<
  CreateExpenseTransactionRequest$Outbound,
  z.ZodTypeDef,
  CreateExpenseTransactionRequest
> = z.object({
  companyId: z.string(),
  requestBody: z.array(shared.ExpenseTransaction$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateExpenseTransactionRequest$ {
  /** @deprecated use `CreateExpenseTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateExpenseTransactionRequest$inboundSchema;
  /** @deprecated use `CreateExpenseTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = CreateExpenseTransactionRequest$outboundSchema;
  /** @deprecated use `CreateExpenseTransactionRequest$Outbound` instead. */
  export type Outbound = CreateExpenseTransactionRequest$Outbound;
}

export function createExpenseTransactionRequestToJSON(
  createExpenseTransactionRequest: CreateExpenseTransactionRequest,
): string {
  return JSON.stringify(
    CreateExpenseTransactionRequest$outboundSchema.parse(
      createExpenseTransactionRequest,
    ),
  );
}

export function createExpenseTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateExpenseTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateExpenseTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateExpenseTransactionRequest' from JSON`,
  );
}
