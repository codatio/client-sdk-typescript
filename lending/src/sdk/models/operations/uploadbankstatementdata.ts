/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UploadBankStatementDataRequestBody =
  | shared.BankingTransactions
  | shared.BankingAccount
  | any;

export type UploadBankStatementDataRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for the dataset that completed its sync.
   */
  datasetId: string;
  /**
   * The endpoint path of the third-party banking service that the request body originates from. Only required if the source is not `codat`.
   */
  path?: shared.Path | undefined;
  requestBody?:
    | shared.BankingTransactions
    | shared.BankingAccount
    | any
    | undefined;
};

/** @internal */
export const UploadBankStatementDataRequestBody$inboundSchema: z.ZodType<
  UploadBankStatementDataRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.BankingTransactions$inboundSchema,
  shared.BankingAccount$inboundSchema,
  z.any(),
]);

/** @internal */
export type UploadBankStatementDataRequestBody$Outbound =
  | shared.BankingTransactions$Outbound
  | shared.BankingAccount$Outbound
  | any;

/** @internal */
export const UploadBankStatementDataRequestBody$outboundSchema: z.ZodType<
  UploadBankStatementDataRequestBody$Outbound,
  z.ZodTypeDef,
  UploadBankStatementDataRequestBody
> = z.union([
  shared.BankingTransactions$outboundSchema,
  shared.BankingAccount$outboundSchema,
  z.any(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadBankStatementDataRequestBody$ {
  /** @deprecated use `UploadBankStatementDataRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadBankStatementDataRequestBody$inboundSchema;
  /** @deprecated use `UploadBankStatementDataRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UploadBankStatementDataRequestBody$outboundSchema;
  /** @deprecated use `UploadBankStatementDataRequestBody$Outbound` instead. */
  export type Outbound = UploadBankStatementDataRequestBody$Outbound;
}

/** @internal */
export const UploadBankStatementDataRequest$inboundSchema: z.ZodType<
  UploadBankStatementDataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  datasetId: z.string(),
  path: shared.Path$inboundSchema.optional(),
  RequestBody: z.union([
    shared.BankingTransactions$inboundSchema,
    shared.BankingAccount$inboundSchema,
    z.any(),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UploadBankStatementDataRequest$Outbound = {
  companyId: string;
  connectionId: string;
  datasetId: string;
  path?: string | undefined;
  RequestBody?:
    | shared.BankingTransactions$Outbound
    | shared.BankingAccount$Outbound
    | any
    | undefined;
};

/** @internal */
export const UploadBankStatementDataRequest$outboundSchema: z.ZodType<
  UploadBankStatementDataRequest$Outbound,
  z.ZodTypeDef,
  UploadBankStatementDataRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  datasetId: z.string(),
  path: shared.Path$outboundSchema.optional(),
  requestBody: z.union([
    shared.BankingTransactions$outboundSchema,
    shared.BankingAccount$outboundSchema,
    z.any(),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadBankStatementDataRequest$ {
  /** @deprecated use `UploadBankStatementDataRequest$inboundSchema` instead. */
  export const inboundSchema = UploadBankStatementDataRequest$inboundSchema;
  /** @deprecated use `UploadBankStatementDataRequest$outboundSchema` instead. */
  export const outboundSchema = UploadBankStatementDataRequest$outboundSchema;
  /** @deprecated use `UploadBankStatementDataRequest$Outbound` instead. */
  export type Outbound = UploadBankStatementDataRequest$Outbound;
}
