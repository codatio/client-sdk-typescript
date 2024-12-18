/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DownloadAccountingSupplierAttachmentRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a supplier.
   */
  supplierId: string;
  /**
   * Unique identifier for an attachment.
   */
  attachmentId: string;
};

/** @internal */
export const DownloadAccountingSupplierAttachmentRequest$inboundSchema:
  z.ZodType<
    DownloadAccountingSupplierAttachmentRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    supplierId: z.string(),
    attachmentId: z.string(),
  });

/** @internal */
export type DownloadAccountingSupplierAttachmentRequest$Outbound = {
  companyId: string;
  connectionId: string;
  supplierId: string;
  attachmentId: string;
};

/** @internal */
export const DownloadAccountingSupplierAttachmentRequest$outboundSchema:
  z.ZodType<
    DownloadAccountingSupplierAttachmentRequest$Outbound,
    z.ZodTypeDef,
    DownloadAccountingSupplierAttachmentRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    supplierId: z.string(),
    attachmentId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadAccountingSupplierAttachmentRequest$ {
  /** @deprecated use `DownloadAccountingSupplierAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema =
    DownloadAccountingSupplierAttachmentRequest$inboundSchema;
  /** @deprecated use `DownloadAccountingSupplierAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema =
    DownloadAccountingSupplierAttachmentRequest$outboundSchema;
  /** @deprecated use `DownloadAccountingSupplierAttachmentRequest$Outbound` instead. */
  export type Outbound = DownloadAccountingSupplierAttachmentRequest$Outbound;
}

export function downloadAccountingSupplierAttachmentRequestToJSON(
  downloadAccountingSupplierAttachmentRequest:
    DownloadAccountingSupplierAttachmentRequest,
): string {
  return JSON.stringify(
    DownloadAccountingSupplierAttachmentRequest$outboundSchema.parse(
      downloadAccountingSupplierAttachmentRequest,
    ),
  );
}

export function downloadAccountingSupplierAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DownloadAccountingSupplierAttachmentRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DownloadAccountingSupplierAttachmentRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DownloadAccountingSupplierAttachmentRequest' from JSON`,
  );
}
