/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DataIntegrityByAmount,
  DataIntegrityByAmount$inboundSchema,
  DataIntegrityByAmount$Outbound,
  DataIntegrityByAmount$outboundSchema,
} from "./dataintegritybyamount.js";
import {
  DataIntegrityByCount,
  DataIntegrityByCount$inboundSchema,
  DataIntegrityByCount$Outbound,
  DataIntegrityByCount$outboundSchema,
} from "./dataintegritybycount.js";

export type DataIntegritySummary = {
  /**
   * The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions.
   */
  type?: string | undefined;
  byAmount?: DataIntegrityByAmount | undefined;
  byCount?: DataIntegrityByCount | undefined;
};

/** @internal */
export const DataIntegritySummary$inboundSchema: z.ZodType<
  DataIntegritySummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().optional(),
  byAmount: DataIntegrityByAmount$inboundSchema.optional(),
  byCount: DataIntegrityByCount$inboundSchema.optional(),
});

/** @internal */
export type DataIntegritySummary$Outbound = {
  type?: string | undefined;
  byAmount?: DataIntegrityByAmount$Outbound | undefined;
  byCount?: DataIntegrityByCount$Outbound | undefined;
};

/** @internal */
export const DataIntegritySummary$outboundSchema: z.ZodType<
  DataIntegritySummary$Outbound,
  z.ZodTypeDef,
  DataIntegritySummary
> = z.object({
  type: z.string().optional(),
  byAmount: DataIntegrityByAmount$outboundSchema.optional(),
  byCount: DataIntegrityByCount$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataIntegritySummary$ {
  /** @deprecated use `DataIntegritySummary$inboundSchema` instead. */
  export const inboundSchema = DataIntegritySummary$inboundSchema;
  /** @deprecated use `DataIntegritySummary$outboundSchema` instead. */
  export const outboundSchema = DataIntegritySummary$outboundSchema;
  /** @deprecated use `DataIntegritySummary$Outbound` instead. */
  export type Outbound = DataIntegritySummary$Outbound;
}

export function dataIntegritySummaryToJSON(
  dataIntegritySummary: DataIntegritySummary,
): string {
  return JSON.stringify(
    DataIntegritySummary$outboundSchema.parse(dataIntegritySummary),
  );
}

export function dataIntegritySummaryFromJSON(
  jsonString: string,
): SafeParseResult<DataIntegritySummary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataIntegritySummary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataIntegritySummary' from JSON`,
  );
}
