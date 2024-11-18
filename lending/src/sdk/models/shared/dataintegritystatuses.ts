/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DataIntegrityStatus,
  DataIntegrityStatus$inboundSchema,
  DataIntegrityStatus$Outbound,
  DataIntegrityStatus$outboundSchema,
} from "./dataintegritystatus.js";

export type DataIntegrityStatuses = {
  metadata?: Array<DataIntegrityStatus> | undefined;
};

/** @internal */
export const DataIntegrityStatuses$inboundSchema: z.ZodType<
  DataIntegrityStatuses,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.array(DataIntegrityStatus$inboundSchema).optional(),
});

/** @internal */
export type DataIntegrityStatuses$Outbound = {
  metadata?: Array<DataIntegrityStatus$Outbound> | undefined;
};

/** @internal */
export const DataIntegrityStatuses$outboundSchema: z.ZodType<
  DataIntegrityStatuses$Outbound,
  z.ZodTypeDef,
  DataIntegrityStatuses
> = z.object({
  metadata: z.array(DataIntegrityStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataIntegrityStatuses$ {
  /** @deprecated use `DataIntegrityStatuses$inboundSchema` instead. */
  export const inboundSchema = DataIntegrityStatuses$inboundSchema;
  /** @deprecated use `DataIntegrityStatuses$outboundSchema` instead. */
  export const outboundSchema = DataIntegrityStatuses$outboundSchema;
  /** @deprecated use `DataIntegrityStatuses$Outbound` instead. */
  export type Outbound = DataIntegrityStatuses$Outbound;
}

export function dataIntegrityStatusesToJSON(
  dataIntegrityStatuses: DataIntegrityStatuses,
): string {
  return JSON.stringify(
    DataIntegrityStatuses$outboundSchema.parse(dataIntegrityStatuses),
  );
}

export function dataIntegrityStatusesFromJSON(
  jsonString: string,
): SafeParseResult<DataIntegrityStatuses, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataIntegrityStatuses$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataIntegrityStatuses' from JSON`,
  );
}
