/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateExpenseResponse = {
  /**
   * Unique id of sync created
   */
  syncId?: string | undefined;
};

/** @internal */
export const CreateExpenseResponse$inboundSchema: z.ZodType<
  CreateExpenseResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  syncId: z.string().optional(),
});

/** @internal */
export type CreateExpenseResponse$Outbound = {
  syncId?: string | undefined;
};

/** @internal */
export const CreateExpenseResponse$outboundSchema: z.ZodType<
  CreateExpenseResponse$Outbound,
  z.ZodTypeDef,
  CreateExpenseResponse
> = z.object({
  syncId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateExpenseResponse$ {
  /** @deprecated use `CreateExpenseResponse$inboundSchema` instead. */
  export const inboundSchema = CreateExpenseResponse$inboundSchema;
  /** @deprecated use `CreateExpenseResponse$outboundSchema` instead. */
  export const outboundSchema = CreateExpenseResponse$outboundSchema;
  /** @deprecated use `CreateExpenseResponse$Outbound` instead. */
  export type Outbound = CreateExpenseResponse$Outbound;
}

export function createExpenseResponseToJSON(
  createExpenseResponse: CreateExpenseResponse,
): string {
  return JSON.stringify(
    CreateExpenseResponse$outboundSchema.parse(createExpenseResponse),
  );
}

export function createExpenseResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateExpenseResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateExpenseResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateExpenseResponse' from JSON`,
  );
}
