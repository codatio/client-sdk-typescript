/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DownloadFilesRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Only download files uploaded on this date.
   */
  date?: string | undefined;
};

/** @internal */
export const DownloadFilesRequest$inboundSchema: z.ZodType<
  DownloadFilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  date: z.string().optional(),
});

/** @internal */
export type DownloadFilesRequest$Outbound = {
  companyId: string;
  date?: string | undefined;
};

/** @internal */
export const DownloadFilesRequest$outboundSchema: z.ZodType<
  DownloadFilesRequest$Outbound,
  z.ZodTypeDef,
  DownloadFilesRequest
> = z.object({
  companyId: z.string(),
  date: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadFilesRequest$ {
  /** @deprecated use `DownloadFilesRequest$inboundSchema` instead. */
  export const inboundSchema = DownloadFilesRequest$inboundSchema;
  /** @deprecated use `DownloadFilesRequest$outboundSchema` instead. */
  export const outboundSchema = DownloadFilesRequest$outboundSchema;
  /** @deprecated use `DownloadFilesRequest$Outbound` instead. */
  export type Outbound = DownloadFilesRequest$Outbound;
}

export function downloadFilesRequestToJSON(
  downloadFilesRequest: DownloadFilesRequest,
): string {
  return JSON.stringify(
    DownloadFilesRequest$outboundSchema.parse(downloadFilesRequest),
  );
}

export function downloadFilesRequestFromJSON(
  jsonString: string,
): SafeParseResult<DownloadFilesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DownloadFilesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DownloadFilesRequest' from JSON`,
  );
}
