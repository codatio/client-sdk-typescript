/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetCreateUpdateModelOptionsByDataTypeRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * The key of a Codat data type.
   */
  dataType: shared.DataType;
};

/** @internal */
export const GetCreateUpdateModelOptionsByDataTypeRequest$inboundSchema:
  z.ZodType<
    GetCreateUpdateModelOptionsByDataTypeRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    dataType: shared.DataType$inboundSchema,
  });

/** @internal */
export type GetCreateUpdateModelOptionsByDataTypeRequest$Outbound = {
  companyId: string;
  connectionId: string;
  dataType: string;
};

/** @internal */
export const GetCreateUpdateModelOptionsByDataTypeRequest$outboundSchema:
  z.ZodType<
    GetCreateUpdateModelOptionsByDataTypeRequest$Outbound,
    z.ZodTypeDef,
    GetCreateUpdateModelOptionsByDataTypeRequest
  > = z.object({
    companyId: z.string(),
    connectionId: z.string(),
    dataType: shared.DataType$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateUpdateModelOptionsByDataTypeRequest$ {
  /** @deprecated use `GetCreateUpdateModelOptionsByDataTypeRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCreateUpdateModelOptionsByDataTypeRequest$inboundSchema;
  /** @deprecated use `GetCreateUpdateModelOptionsByDataTypeRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCreateUpdateModelOptionsByDataTypeRequest$outboundSchema;
  /** @deprecated use `GetCreateUpdateModelOptionsByDataTypeRequest$Outbound` instead. */
  export type Outbound = GetCreateUpdateModelOptionsByDataTypeRequest$Outbound;
}
