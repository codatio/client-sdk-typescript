/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBankStatementUploadConfigurationRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const GetBankStatementUploadConfigurationRequest$inboundSchema:
  z.ZodType<GetBankStatementUploadConfigurationRequest, z.ZodTypeDef, unknown> =
    z.object({
      companyId: z.string(),
      connectionId: z.string(),
    });

/** @internal */
export type GetBankStatementUploadConfigurationRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetBankStatementUploadConfigurationRequest$outboundSchema:
  z.ZodType<
    GetBankStatementUploadConfigurationRequest$Outbound,
    z.ZodTypeDef,
    GetBankStatementUploadConfigurationRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBankStatementUploadConfigurationRequest$ {
  /** @deprecated use `GetBankStatementUploadConfigurationRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetBankStatementUploadConfigurationRequest$inboundSchema;
  /** @deprecated use `GetBankStatementUploadConfigurationRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetBankStatementUploadConfigurationRequest$outboundSchema;
  /** @deprecated use `GetBankStatementUploadConfigurationRequest$Outbound` instead. */
  export type Outbound = GetBankStatementUploadConfigurationRequest$Outbound;
}

export function getBankStatementUploadConfigurationRequestToJSON(
  getBankStatementUploadConfigurationRequest:
    GetBankStatementUploadConfigurationRequest,
): string {
  return JSON.stringify(
    GetBankStatementUploadConfigurationRequest$outboundSchema.parse(
      getBankStatementUploadConfigurationRequest,
    ),
  );
}

export function getBankStatementUploadConfigurationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetBankStatementUploadConfigurationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetBankStatementUploadConfigurationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetBankStatementUploadConfigurationRequest' from JSON`,
  );
}
