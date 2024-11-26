/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SourceAccount,
  SourceAccount$inboundSchema,
  SourceAccount$Outbound,
  SourceAccount$outboundSchema,
} from "./sourceaccount.js";

/**
 * The account ID and source account object of the successfully created source account.
 */
export type SourceAccountBatchCreateResponse = {
  /**
   * Unique ID for the source account.
   */
  sourceAccountId?: string | undefined;
  /**
   * The target bank account in a supported accounting software for ingestion into a bank feed.
   */
  result?: SourceAccount | undefined;
};

/** @internal */
export const SourceAccountBatchCreateResponse$inboundSchema: z.ZodType<
  SourceAccountBatchCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceAccountId: z.string().optional(),
  result: SourceAccount$inboundSchema.optional(),
});

/** @internal */
export type SourceAccountBatchCreateResponse$Outbound = {
  sourceAccountId?: string | undefined;
  result?: SourceAccount$Outbound | undefined;
};

/** @internal */
export const SourceAccountBatchCreateResponse$outboundSchema: z.ZodType<
  SourceAccountBatchCreateResponse$Outbound,
  z.ZodTypeDef,
  SourceAccountBatchCreateResponse
> = z.object({
  sourceAccountId: z.string().optional(),
  result: SourceAccount$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceAccountBatchCreateResponse$ {
  /** @deprecated use `SourceAccountBatchCreateResponse$inboundSchema` instead. */
  export const inboundSchema = SourceAccountBatchCreateResponse$inboundSchema;
  /** @deprecated use `SourceAccountBatchCreateResponse$outboundSchema` instead. */
  export const outboundSchema = SourceAccountBatchCreateResponse$outboundSchema;
  /** @deprecated use `SourceAccountBatchCreateResponse$Outbound` instead. */
  export type Outbound = SourceAccountBatchCreateResponse$Outbound;
}

export function sourceAccountBatchCreateResponseToJSON(
  sourceAccountBatchCreateResponse: SourceAccountBatchCreateResponse,
): string {
  return JSON.stringify(
    SourceAccountBatchCreateResponse$outboundSchema.parse(
      sourceAccountBatchCreateResponse,
    ),
  );
}

export function sourceAccountBatchCreateResponseFromJSON(
  jsonString: string,
): SafeParseResult<SourceAccountBatchCreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SourceAccountBatchCreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SourceAccountBatchCreateResponse' from JSON`,
  );
}
