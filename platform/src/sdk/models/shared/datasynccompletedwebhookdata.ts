/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertieDataType,
  PropertieDataType$inboundSchema,
  PropertieDataType$outboundSchema,
} from "./propertiedatatype.js";

export type DataSyncCompletedWebhookData = {
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * Unique identifier for the dataset that completed its sync.
   */
  datasetId?: string | undefined;
};

/** @internal */
export const DataSyncCompletedWebhookData$inboundSchema: z.ZodType<
  DataSyncCompletedWebhookData,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataType: PropertieDataType$inboundSchema.optional(),
  datasetId: z.string().optional(),
});

/** @internal */
export type DataSyncCompletedWebhookData$Outbound = {
  dataType?: string | undefined;
  datasetId?: string | undefined;
};

/** @internal */
export const DataSyncCompletedWebhookData$outboundSchema: z.ZodType<
  DataSyncCompletedWebhookData$Outbound,
  z.ZodTypeDef,
  DataSyncCompletedWebhookData
> = z.object({
  dataType: PropertieDataType$outboundSchema.optional(),
  datasetId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSyncCompletedWebhookData$ {
  /** @deprecated use `DataSyncCompletedWebhookData$inboundSchema` instead. */
  export const inboundSchema = DataSyncCompletedWebhookData$inboundSchema;
  /** @deprecated use `DataSyncCompletedWebhookData$outboundSchema` instead. */
  export const outboundSchema = DataSyncCompletedWebhookData$outboundSchema;
  /** @deprecated use `DataSyncCompletedWebhookData$Outbound` instead. */
  export type Outbound = DataSyncCompletedWebhookData$Outbound;
}

export function dataSyncCompletedWebhookDataToJSON(
  dataSyncCompletedWebhookData: DataSyncCompletedWebhookData,
): string {
  return JSON.stringify(
    DataSyncCompletedWebhookData$outboundSchema.parse(
      dataSyncCompletedWebhookData,
    ),
  );
}

export function dataSyncCompletedWebhookDataFromJSON(
  jsonString: string,
): SafeParseResult<DataSyncCompletedWebhookData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataSyncCompletedWebhookData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataSyncCompletedWebhookData' from JSON`,
  );
}
