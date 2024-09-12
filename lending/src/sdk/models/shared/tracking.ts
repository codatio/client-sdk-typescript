/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  RecordRef,
  RecordRef$inboundSchema,
  RecordRef$Outbound,
  RecordRef$outboundSchema,
} from "./recordref.js";
import {
  TrackingRecordRef,
  TrackingRecordRef$inboundSchema,
  TrackingRecordRef$Outbound,
  TrackingRecordRef$outboundSchema,
} from "./trackingrecordref.js";

export type Tracking = {
  recordRefs: Array<TrackingRecordRef>;
  /**
   * Links the current record to the underlying record or data type that created it.
   *
   * @remarks
   *
   * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
   */
  invoiceTo?: RecordRef | undefined;
};

/** @internal */
export const Tracking$inboundSchema: z.ZodType<
  Tracking,
  z.ZodTypeDef,
  unknown
> = z.object({
  recordRefs: z.array(TrackingRecordRef$inboundSchema),
  invoiceTo: RecordRef$inboundSchema.optional(),
});

/** @internal */
export type Tracking$Outbound = {
  recordRefs: Array<TrackingRecordRef$Outbound>;
  invoiceTo?: RecordRef$Outbound | undefined;
};

/** @internal */
export const Tracking$outboundSchema: z.ZodType<
  Tracking$Outbound,
  z.ZodTypeDef,
  Tracking
> = z.object({
  recordRefs: z.array(TrackingRecordRef$outboundSchema),
  invoiceTo: RecordRef$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tracking$ {
  /** @deprecated use `Tracking$inboundSchema` instead. */
  export const inboundSchema = Tracking$inboundSchema;
  /** @deprecated use `Tracking$outboundSchema` instead. */
  export const outboundSchema = Tracking$outboundSchema;
  /** @deprecated use `Tracking$Outbound` instead. */
  export type Outbound = Tracking$Outbound;
}
