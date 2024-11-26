/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListBillAttachmentsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a bill.
   */
  billId: string;
};

/** @internal */
export const ListBillAttachmentsRequest$inboundSchema: z.ZodType<
  ListBillAttachmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
});

/** @internal */
export type ListBillAttachmentsRequest$Outbound = {
  companyId: string;
  connectionId: string;
  billId: string;
};

/** @internal */
export const ListBillAttachmentsRequest$outboundSchema: z.ZodType<
  ListBillAttachmentsRequest$Outbound,
  z.ZodTypeDef,
  ListBillAttachmentsRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBillAttachmentsRequest$ {
  /** @deprecated use `ListBillAttachmentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListBillAttachmentsRequest$inboundSchema;
  /** @deprecated use `ListBillAttachmentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListBillAttachmentsRequest$outboundSchema;
  /** @deprecated use `ListBillAttachmentsRequest$Outbound` instead. */
  export type Outbound = ListBillAttachmentsRequest$Outbound;
}

export function listBillAttachmentsRequestToJSON(
  listBillAttachmentsRequest: ListBillAttachmentsRequest,
): string {
  return JSON.stringify(
    ListBillAttachmentsRequest$outboundSchema.parse(listBillAttachmentsRequest),
  );
}

export function listBillAttachmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListBillAttachmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBillAttachmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBillAttachmentsRequest' from JSON`,
  );
}
