/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TransactionSourceType,
  TransactionSourceType$inboundSchema,
  TransactionSourceType$outboundSchema,
} from "./transactionsourcetype.js";

export type TransactionSourceRef = {
  /**
   * The unique identitifer of the record being referenced
   */
  id: string;
  /**
   * The type of source the transaction arose.
   */
  type: TransactionSourceType;
};

/** @internal */
export const TransactionSourceRef$inboundSchema: z.ZodType<
  TransactionSourceRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: TransactionSourceType$inboundSchema,
});

/** @internal */
export type TransactionSourceRef$Outbound = {
  id: string;
  type: string;
};

/** @internal */
export const TransactionSourceRef$outboundSchema: z.ZodType<
  TransactionSourceRef$Outbound,
  z.ZodTypeDef,
  TransactionSourceRef
> = z.object({
  id: z.string(),
  type: TransactionSourceType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionSourceRef$ {
  /** @deprecated use `TransactionSourceRef$inboundSchema` instead. */
  export const inboundSchema = TransactionSourceRef$inboundSchema;
  /** @deprecated use `TransactionSourceRef$outboundSchema` instead. */
  export const outboundSchema = TransactionSourceRef$outboundSchema;
  /** @deprecated use `TransactionSourceRef$Outbound` instead. */
  export type Outbound = TransactionSourceRef$Outbound;
}

export function transactionSourceRefToJSON(
  transactionSourceRef: TransactionSourceRef,
): string {
  return JSON.stringify(
    TransactionSourceRef$outboundSchema.parse(transactionSourceRef),
  );
}

export function transactionSourceRefFromJSON(
  jsonString: string,
): SafeParseResult<TransactionSourceRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionSourceRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionSourceRef' from JSON`,
  );
}
