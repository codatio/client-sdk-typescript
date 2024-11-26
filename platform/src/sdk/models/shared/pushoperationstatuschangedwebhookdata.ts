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
import {
  PushOperationStatus,
  PushOperationStatus$inboundSchema,
  PushOperationStatus$outboundSchema,
} from "./pushoperationstatus.js";

export type PushOperationStatusChangedWebhookData = {
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * The current status of the push operation.
   */
  status?: PushOperationStatus | undefined;
  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  pushOperationKey?: string | undefined;
};

/** @internal */
export const PushOperationStatusChangedWebhookData$inboundSchema: z.ZodType<
  PushOperationStatusChangedWebhookData,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataType: PropertieDataType$inboundSchema.optional(),
  status: PushOperationStatus$inboundSchema.optional(),
  pushOperationKey: z.string().optional(),
});

/** @internal */
export type PushOperationStatusChangedWebhookData$Outbound = {
  dataType?: string | undefined;
  status?: string | undefined;
  pushOperationKey?: string | undefined;
};

/** @internal */
export const PushOperationStatusChangedWebhookData$outboundSchema: z.ZodType<
  PushOperationStatusChangedWebhookData$Outbound,
  z.ZodTypeDef,
  PushOperationStatusChangedWebhookData
> = z.object({
  dataType: PropertieDataType$outboundSchema.optional(),
  status: PushOperationStatus$outboundSchema.optional(),
  pushOperationKey: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOperationStatusChangedWebhookData$ {
  /** @deprecated use `PushOperationStatusChangedWebhookData$inboundSchema` instead. */
  export const inboundSchema =
    PushOperationStatusChangedWebhookData$inboundSchema;
  /** @deprecated use `PushOperationStatusChangedWebhookData$outboundSchema` instead. */
  export const outboundSchema =
    PushOperationStatusChangedWebhookData$outboundSchema;
  /** @deprecated use `PushOperationStatusChangedWebhookData$Outbound` instead. */
  export type Outbound = PushOperationStatusChangedWebhookData$Outbound;
}

export function pushOperationStatusChangedWebhookDataToJSON(
  pushOperationStatusChangedWebhookData: PushOperationStatusChangedWebhookData,
): string {
  return JSON.stringify(
    PushOperationStatusChangedWebhookData$outboundSchema.parse(
      pushOperationStatusChangedWebhookData,
    ),
  );
}

export function pushOperationStatusChangedWebhookDataFromJSON(
  jsonString: string,
): SafeParseResult<PushOperationStatusChangedWebhookData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PushOperationStatusChangedWebhookData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PushOperationStatusChangedWebhookData' from JSON`,
  );
}
