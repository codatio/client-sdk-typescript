/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateAccountRequest = {
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
  accountPrototype?: shared.AccountPrototype | undefined;
};

/** @internal */
export const CreateAccountRequest$inboundSchema: z.ZodType<
  CreateAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  allowSyncOnPushComplete: z.boolean().default(true),
  accountPrototype: shared.AccountPrototype$inboundSchema.optional(),
});

/** @internal */
export type CreateAccountRequest$Outbound = {
  companyId: string;
  connectionId: string;
  timeoutInMinutes?: number | undefined;
  allowSyncOnPushComplete: boolean;
  accountPrototype?: shared.AccountPrototype$Outbound | undefined;
};

/** @internal */
export const CreateAccountRequest$outboundSchema: z.ZodType<
  CreateAccountRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  allowSyncOnPushComplete: z.boolean().default(true),
  accountPrototype: shared.AccountPrototype$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountRequest$ {
  /** @deprecated use `CreateAccountRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountRequest$inboundSchema;
  /** @deprecated use `CreateAccountRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAccountRequest$outboundSchema;
  /** @deprecated use `CreateAccountRequest$Outbound` instead. */
  export type Outbound = CreateAccountRequest$Outbound;
}

export function createAccountRequestToJSON(
  createAccountRequest: CreateAccountRequest,
): string {
  return JSON.stringify(
    CreateAccountRequest$outboundSchema.parse(createAccountRequest),
  );
}

export function createAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountRequest' from JSON`,
  );
}
