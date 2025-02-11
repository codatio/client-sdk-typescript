/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateReimbursableExpenseResponse = {
  /**
   * Unique id of sync created
   */
  syncId?: string | undefined;
};

/** @internal */
export const CreateReimbursableExpenseResponse$inboundSchema: z.ZodType<
  CreateReimbursableExpenseResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  syncId: z.string().optional(),
});

/** @internal */
export type CreateReimbursableExpenseResponse$Outbound = {
  syncId?: string | undefined;
};

/** @internal */
export const CreateReimbursableExpenseResponse$outboundSchema: z.ZodType<
  CreateReimbursableExpenseResponse$Outbound,
  z.ZodTypeDef,
  CreateReimbursableExpenseResponse
> = z.object({
  syncId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateReimbursableExpenseResponse$ {
  /** @deprecated use `CreateReimbursableExpenseResponse$inboundSchema` instead. */
  export const inboundSchema = CreateReimbursableExpenseResponse$inboundSchema;
  /** @deprecated use `CreateReimbursableExpenseResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateReimbursableExpenseResponse$outboundSchema;
  /** @deprecated use `CreateReimbursableExpenseResponse$Outbound` instead. */
  export type Outbound = CreateReimbursableExpenseResponse$Outbound;
}

export function createReimbursableExpenseResponseToJSON(
  createReimbursableExpenseResponse: CreateReimbursableExpenseResponse,
): string {
  return JSON.stringify(
    CreateReimbursableExpenseResponse$outboundSchema.parse(
      createReimbursableExpenseResponse,
    ),
  );
}

export function createReimbursableExpenseResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateReimbursableExpenseResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateReimbursableExpenseResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateReimbursableExpenseResponse' from JSON`,
  );
}
