/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Status of transaction.
 */
export const TransactionStatus1 = {
  Unknown: "Unknown",
  PushError: "PushError",
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
} as const;
/**
 * Status of transaction.
 */
export type TransactionStatus1 = ClosedEnum<typeof TransactionStatus1>;

export type DefinitionTransaction = {
  /**
   * Unique identifier of the transaction.
   */
  id?: string | undefined;
  /**
   * Status of transaction.
   */
  status?: TransactionStatus1 | undefined;
  /**
   * Error message for failed transaction.
   */
  errorMessage?: string | null | undefined;
};

/** @internal */
export const TransactionStatus1$inboundSchema: z.ZodNativeEnum<
  typeof TransactionStatus1
> = z.nativeEnum(TransactionStatus1);

/** @internal */
export const TransactionStatus1$outboundSchema: z.ZodNativeEnum<
  typeof TransactionStatus1
> = TransactionStatus1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionStatus1$ {
  /** @deprecated use `TransactionStatus1$inboundSchema` instead. */
  export const inboundSchema = TransactionStatus1$inboundSchema;
  /** @deprecated use `TransactionStatus1$outboundSchema` instead. */
  export const outboundSchema = TransactionStatus1$outboundSchema;
}

/** @internal */
export const DefinitionTransaction$inboundSchema: z.ZodType<
  DefinitionTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  status: TransactionStatus1$inboundSchema.optional(),
  errorMessage: z.nullable(z.string()).optional(),
});

/** @internal */
export type DefinitionTransaction$Outbound = {
  id?: string | undefined;
  status?: string | undefined;
  errorMessage?: string | null | undefined;
};

/** @internal */
export const DefinitionTransaction$outboundSchema: z.ZodType<
  DefinitionTransaction$Outbound,
  z.ZodTypeDef,
  DefinitionTransaction
> = z.object({
  id: z.string().optional(),
  status: TransactionStatus1$outboundSchema.optional(),
  errorMessage: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefinitionTransaction$ {
  /** @deprecated use `DefinitionTransaction$inboundSchema` instead. */
  export const inboundSchema = DefinitionTransaction$inboundSchema;
  /** @deprecated use `DefinitionTransaction$outboundSchema` instead. */
  export const outboundSchema = DefinitionTransaction$outboundSchema;
  /** @deprecated use `DefinitionTransaction$Outbound` instead. */
  export type Outbound = DefinitionTransaction$Outbound;
}

export function definitionTransactionToJSON(
  definitionTransaction: DefinitionTransaction,
): string {
  return JSON.stringify(
    DefinitionTransaction$outboundSchema.parse(definitionTransaction),
  );
}

export function definitionTransactionFromJSON(
  jsonString: string,
): SafeParseResult<DefinitionTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DefinitionTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefinitionTransaction' from JSON`,
  );
}
