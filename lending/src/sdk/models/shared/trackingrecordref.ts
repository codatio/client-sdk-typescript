/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Name of underlying data type.
 */
export const TrackingRecordRefDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
/**
 * Name of underlying data type.
 */
export type TrackingRecordRefDataType = ClosedEnum<
  typeof TrackingRecordRefDataType
>;

/**
 * Links to the customer or tracking category.
 */
export type TrackingRecordRef = {
  /**
   * 'id' of the underlying record or data type.
   */
  id?: string | undefined;
  /**
   * Name of underlying data type.
   */
  dataType?: TrackingRecordRefDataType | undefined;
};

/** @internal */
export const TrackingRecordRefDataType$inboundSchema: z.ZodNativeEnum<
  typeof TrackingRecordRefDataType
> = z.nativeEnum(TrackingRecordRefDataType);

/** @internal */
export const TrackingRecordRefDataType$outboundSchema: z.ZodNativeEnum<
  typeof TrackingRecordRefDataType
> = TrackingRecordRefDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingRecordRefDataType$ {
  /** @deprecated use `TrackingRecordRefDataType$inboundSchema` instead. */
  export const inboundSchema = TrackingRecordRefDataType$inboundSchema;
  /** @deprecated use `TrackingRecordRefDataType$outboundSchema` instead. */
  export const outboundSchema = TrackingRecordRefDataType$outboundSchema;
}

/** @internal */
export const TrackingRecordRef$inboundSchema: z.ZodType<
  TrackingRecordRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  dataType: TrackingRecordRefDataType$inboundSchema.optional(),
});

/** @internal */
export type TrackingRecordRef$Outbound = {
  id?: string | undefined;
  dataType?: string | undefined;
};

/** @internal */
export const TrackingRecordRef$outboundSchema: z.ZodType<
  TrackingRecordRef$Outbound,
  z.ZodTypeDef,
  TrackingRecordRef
> = z.object({
  id: z.string().optional(),
  dataType: TrackingRecordRefDataType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingRecordRef$ {
  /** @deprecated use `TrackingRecordRef$inboundSchema` instead. */
  export const inboundSchema = TrackingRecordRef$inboundSchema;
  /** @deprecated use `TrackingRecordRef$outboundSchema` instead. */
  export const outboundSchema = TrackingRecordRef$outboundSchema;
  /** @deprecated use `TrackingRecordRef$Outbound` instead. */
  export type Outbound = TrackingRecordRef$Outbound;
}

export function trackingRecordRefToJSON(
  trackingRecordRef: TrackingRecordRef,
): string {
  return JSON.stringify(
    TrackingRecordRef$outboundSchema.parse(trackingRecordRef),
  );
}

export function trackingRecordRefFromJSON(
  jsonString: string,
): SafeParseResult<TrackingRecordRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackingRecordRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackingRecordRef' from JSON`,
  );
}
