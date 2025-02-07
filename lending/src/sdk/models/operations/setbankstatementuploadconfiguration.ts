/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type SetBankStatementUploadConfigurationRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  bankStatementUploadConfiguration?:
    | shared.BankStatementUploadConfiguration
    | undefined;
};

/** @internal */
export const SetBankStatementUploadConfigurationRequest$inboundSchema:
  z.ZodType<SetBankStatementUploadConfigurationRequest, z.ZodTypeDef, unknown> =
    z.object({
      companyId: z.string(),
      connectionId: z.string(),
      BankStatementUploadConfiguration: shared
        .BankStatementUploadConfiguration$inboundSchema.optional(),
    }).transform((v) => {
      return remap$(v, {
        "BankStatementUploadConfiguration": "bankStatementUploadConfiguration",
      });
    });

/** @internal */
export type SetBankStatementUploadConfigurationRequest$Outbound = {
  companyId: string;
  connectionId: string;
  BankStatementUploadConfiguration?:
    | shared.BankStatementUploadConfiguration$Outbound
    | undefined;
};

/** @internal */
export const SetBankStatementUploadConfigurationRequest$outboundSchema:
  z.ZodType<
    SetBankStatementUploadConfigurationRequest$Outbound,
    z.ZodTypeDef,
    SetBankStatementUploadConfigurationRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    bankStatementUploadConfiguration: shared
      .BankStatementUploadConfiguration$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      bankStatementUploadConfiguration: "BankStatementUploadConfiguration",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetBankStatementUploadConfigurationRequest$ {
  /** @deprecated use `SetBankStatementUploadConfigurationRequest$inboundSchema` instead. */
  export const inboundSchema =
    SetBankStatementUploadConfigurationRequest$inboundSchema;
  /** @deprecated use `SetBankStatementUploadConfigurationRequest$outboundSchema` instead. */
  export const outboundSchema =
    SetBankStatementUploadConfigurationRequest$outboundSchema;
  /** @deprecated use `SetBankStatementUploadConfigurationRequest$Outbound` instead. */
  export type Outbound = SetBankStatementUploadConfigurationRequest$Outbound;
}

export function setBankStatementUploadConfigurationRequestToJSON(
  setBankStatementUploadConfigurationRequest:
    SetBankStatementUploadConfigurationRequest,
): string {
  return JSON.stringify(
    SetBankStatementUploadConfigurationRequest$outboundSchema.parse(
      setBankStatementUploadConfigurationRequest,
    ),
  );
}

export function setBankStatementUploadConfigurationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SetBankStatementUploadConfigurationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SetBankStatementUploadConfigurationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SetBankStatementUploadConfigurationRequest' from JSON`,
  );
}
