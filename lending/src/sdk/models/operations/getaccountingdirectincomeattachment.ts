/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccountingDirectIncomeAttachmentRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a direct income.
   */
  directIncomeId: string;
  /**
   * Unique identifier for an attachment.
   */
  attachmentId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
};

/** @internal */
export const GetAccountingDirectIncomeAttachmentRequest$inboundSchema:
  z.ZodType<GetAccountingDirectIncomeAttachmentRequest, z.ZodTypeDef, unknown> =
    z.object({
      companyId: z.string(),
      connectionId: z.string(),
      directIncomeId: z.string(),
      attachmentId: z.string(),
      timeoutInMinutes: z.number().int().optional(),
    });

/** @internal */
export type GetAccountingDirectIncomeAttachmentRequest$Outbound = {
  companyId: string;
  connectionId: string;
  directIncomeId: string;
  attachmentId: string;
  timeoutInMinutes?: number | undefined;
};

/** @internal */
export const GetAccountingDirectIncomeAttachmentRequest$outboundSchema:
  z.ZodType<
    GetAccountingDirectIncomeAttachmentRequest$Outbound,
    z.ZodTypeDef,
    GetAccountingDirectIncomeAttachmentRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    directIncomeId: z.string(),
    attachmentId: z.string(),
    timeoutInMinutes: z.number().int().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingDirectIncomeAttachmentRequest$ {
  /** @deprecated use `GetAccountingDirectIncomeAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetAccountingDirectIncomeAttachmentRequest$inboundSchema;
  /** @deprecated use `GetAccountingDirectIncomeAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAccountingDirectIncomeAttachmentRequest$outboundSchema;
  /** @deprecated use `GetAccountingDirectIncomeAttachmentRequest$Outbound` instead. */
  export type Outbound = GetAccountingDirectIncomeAttachmentRequest$Outbound;
}

export function getAccountingDirectIncomeAttachmentRequestToJSON(
  getAccountingDirectIncomeAttachmentRequest:
    GetAccountingDirectIncomeAttachmentRequest,
): string {
  return JSON.stringify(
    GetAccountingDirectIncomeAttachmentRequest$outboundSchema.parse(
      getAccountingDirectIncomeAttachmentRequest,
    ),
  );
}

export function getAccountingDirectIncomeAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAccountingDirectIncomeAttachmentRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAccountingDirectIncomeAttachmentRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetAccountingDirectIncomeAttachmentRequest' from JSON`,
  );
}
