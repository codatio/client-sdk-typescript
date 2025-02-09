/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingDirectCostAttachmentsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a direct cost.
   */
  directCostId: string;
};

/** @internal */
export const ListAccountingDirectCostAttachmentsRequest$inboundSchema:
  z.ZodType<ListAccountingDirectCostAttachmentsRequest, z.ZodTypeDef, unknown> =
    z.object({
      companyId: z.string(),
      connectionId: z.string(),
      directCostId: z.string(),
    });

/** @internal */
export type ListAccountingDirectCostAttachmentsRequest$Outbound = {
  companyId: string;
  connectionId: string;
  directCostId: string;
};

/** @internal */
export const ListAccountingDirectCostAttachmentsRequest$outboundSchema:
  z.ZodType<
    ListAccountingDirectCostAttachmentsRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingDirectCostAttachmentsRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    directCostId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingDirectCostAttachmentsRequest$ {
  /** @deprecated use `ListAccountingDirectCostAttachmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingDirectCostAttachmentsRequest$inboundSchema;
  /** @deprecated use `ListAccountingDirectCostAttachmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingDirectCostAttachmentsRequest$outboundSchema;
  /** @deprecated use `ListAccountingDirectCostAttachmentsRequest$Outbound` instead. */
  export type Outbound = ListAccountingDirectCostAttachmentsRequest$Outbound;
}

export function listAccountingDirectCostAttachmentsRequestToJSON(
  listAccountingDirectCostAttachmentsRequest:
    ListAccountingDirectCostAttachmentsRequest,
): string {
  return JSON.stringify(
    ListAccountingDirectCostAttachmentsRequest$outboundSchema.parse(
      listAccountingDirectCostAttachmentsRequest,
    ),
  );
}

export function listAccountingDirectCostAttachmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListAccountingDirectCostAttachmentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingDirectCostAttachmentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListAccountingDirectCostAttachmentsRequest' from JSON`,
  );
}
