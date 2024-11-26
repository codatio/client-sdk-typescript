/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UploadBillAttachmentRequest = {
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
  attachmentUpload?: shared.AttachmentUpload | undefined;
};

/** @internal */
export const UploadBillAttachmentRequest$inboundSchema: z.ZodType<
  UploadBillAttachmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
  AttachmentUpload: shared.AttachmentUpload$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "AttachmentUpload": "attachmentUpload",
  });
});

/** @internal */
export type UploadBillAttachmentRequest$Outbound = {
  companyId: string;
  connectionId: string;
  billId: string;
  AttachmentUpload?: shared.AttachmentUpload$Outbound | undefined;
};

/** @internal */
export const UploadBillAttachmentRequest$outboundSchema: z.ZodType<
  UploadBillAttachmentRequest$Outbound,
  z.ZodTypeDef,
  UploadBillAttachmentRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
  attachmentUpload: shared.AttachmentUpload$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    attachmentUpload: "AttachmentUpload",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadBillAttachmentRequest$ {
  /** @deprecated use `UploadBillAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema = UploadBillAttachmentRequest$inboundSchema;
  /** @deprecated use `UploadBillAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema = UploadBillAttachmentRequest$outboundSchema;
  /** @deprecated use `UploadBillAttachmentRequest$Outbound` instead. */
  export type Outbound = UploadBillAttachmentRequest$Outbound;
}

export function uploadBillAttachmentRequestToJSON(
  uploadBillAttachmentRequest: UploadBillAttachmentRequest,
): string {
  return JSON.stringify(
    UploadBillAttachmentRequest$outboundSchema.parse(
      uploadBillAttachmentRequest,
    ),
  );
}

export function uploadBillAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadBillAttachmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadBillAttachmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadBillAttachmentRequest' from JSON`,
  );
}
