/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DataIntegritySummary,
  DataIntegritySummary$inboundSchema,
  DataIntegritySummary$Outbound,
  DataIntegritySummary$outboundSchema,
} from "./dataintegritysummary.js";

export type DataIntegritySummaries = {
  summaries?: Array<DataIntegritySummary> | undefined;
};

/** @internal */
export const DataIntegritySummaries$inboundSchema: z.ZodType<
  DataIntegritySummaries,
  z.ZodTypeDef,
  unknown
> = z.object({
  summaries: z.array(DataIntegritySummary$inboundSchema).optional(),
});

/** @internal */
export type DataIntegritySummaries$Outbound = {
  summaries?: Array<DataIntegritySummary$Outbound> | undefined;
};

/** @internal */
export const DataIntegritySummaries$outboundSchema: z.ZodType<
  DataIntegritySummaries$Outbound,
  z.ZodTypeDef,
  DataIntegritySummaries
> = z.object({
  summaries: z.array(DataIntegritySummary$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataIntegritySummaries$ {
  /** @deprecated use `DataIntegritySummaries$inboundSchema` instead. */
  export const inboundSchema = DataIntegritySummaries$inboundSchema;
  /** @deprecated use `DataIntegritySummaries$outboundSchema` instead. */
  export const outboundSchema = DataIntegritySummaries$outboundSchema;
  /** @deprecated use `DataIntegritySummaries$Outbound` instead. */
  export type Outbound = DataIntegritySummaries$Outbound;
}
