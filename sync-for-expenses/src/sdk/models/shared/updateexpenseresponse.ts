/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateExpenseResponse = {
  /**
   * Unique identifier for the update expense sync.
   */
  syncId?: string | undefined;
};

/** @internal */
export const UpdateExpenseResponse$inboundSchema: z.ZodType<
  UpdateExpenseResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  syncId: z.string().optional(),
});

/** @internal */
export type UpdateExpenseResponse$Outbound = {
  syncId?: string | undefined;
};

/** @internal */
export const UpdateExpenseResponse$outboundSchema: z.ZodType<
  UpdateExpenseResponse$Outbound,
  z.ZodTypeDef,
  UpdateExpenseResponse
> = z.object({
  syncId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateExpenseResponse$ {
  /** @deprecated use `UpdateExpenseResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateExpenseResponse$inboundSchema;
  /** @deprecated use `UpdateExpenseResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateExpenseResponse$outboundSchema;
  /** @deprecated use `UpdateExpenseResponse$Outbound` instead. */
  export type Outbound = UpdateExpenseResponse$Outbound;
}

export function updateExpenseResponseToJSON(
  updateExpenseResponse: UpdateExpenseResponse,
): string {
  return JSON.stringify(
    UpdateExpenseResponse$outboundSchema.parse(updateExpenseResponse),
  );
}

export function updateExpenseResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateExpenseResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateExpenseResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateExpenseResponse' from JSON`,
  );
}
