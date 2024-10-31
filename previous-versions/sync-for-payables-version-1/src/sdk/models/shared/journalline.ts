/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  AccountRef,
  AccountRef$inboundSchema,
  AccountRef$Outbound,
  AccountRef$outboundSchema,
} from "./accountref.js";
import {
  TrackingRecordRef,
  TrackingRecordRef$inboundSchema,
  TrackingRecordRef$Outbound,
  TrackingRecordRef$outboundSchema,
} from "./trackingrecordref.js";

/**
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
 */
export type JournalLineTracking = {
  recordRefs?: Array<TrackingRecordRef> | null | undefined;
};

/**
 * Allowed name of the 'dataType'.
 */
export const JournalLineDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
} as const;
/**
 * Allowed name of the 'dataType'.
 */
export type JournalLineDataType = ClosedEnum<typeof JournalLineDataType>;

export type ContactReference = {
  /**
   * Unique identifier for a customer or supplier.
   */
  id: string;
  /**
   * Allowed name of the 'dataType'.
   */
  dataType?: JournalLineDataType | null | undefined;
};

export type JournalLine = {
  /**
   * Description of the journal line item.
   */
  description?: string | null | undefined;
  /**
   * Amount for the journal line. Debit entries are considered positive, and credit entries are considered negative.
   */
  netAmount: Decimal$ | number;
  /**
   * Currency for the journal line item.
   */
  currency?: string | null | undefined;
  /**
   * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
   */
  accountRef?: AccountRef | undefined;
  /**
   * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
   */
  tracking?: JournalLineTracking | undefined;
  contactRef?: ContactReference | undefined;
};

/** @internal */
export const JournalLineTracking$inboundSchema: z.ZodType<
  JournalLineTracking,
  z.ZodTypeDef,
  unknown
> = z.object({
  recordRefs: z.nullable(z.array(TrackingRecordRef$inboundSchema)).optional(),
});

/** @internal */
export type JournalLineTracking$Outbound = {
  recordRefs?: Array<TrackingRecordRef$Outbound> | null | undefined;
};

/** @internal */
export const JournalLineTracking$outboundSchema: z.ZodType<
  JournalLineTracking$Outbound,
  z.ZodTypeDef,
  JournalLineTracking
> = z.object({
  recordRefs: z.nullable(z.array(TrackingRecordRef$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalLineTracking$ {
  /** @deprecated use `JournalLineTracking$inboundSchema` instead. */
  export const inboundSchema = JournalLineTracking$inboundSchema;
  /** @deprecated use `JournalLineTracking$outboundSchema` instead. */
  export const outboundSchema = JournalLineTracking$outboundSchema;
  /** @deprecated use `JournalLineTracking$Outbound` instead. */
  export type Outbound = JournalLineTracking$Outbound;
}

/** @internal */
export const JournalLineDataType$inboundSchema: z.ZodNativeEnum<
  typeof JournalLineDataType
> = z.nativeEnum(JournalLineDataType);

/** @internal */
export const JournalLineDataType$outboundSchema: z.ZodNativeEnum<
  typeof JournalLineDataType
> = JournalLineDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalLineDataType$ {
  /** @deprecated use `JournalLineDataType$inboundSchema` instead. */
  export const inboundSchema = JournalLineDataType$inboundSchema;
  /** @deprecated use `JournalLineDataType$outboundSchema` instead. */
  export const outboundSchema = JournalLineDataType$outboundSchema;
}

/** @internal */
export const ContactReference$inboundSchema: z.ZodType<
  ContactReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  dataType: z.nullable(JournalLineDataType$inboundSchema).optional(),
});

/** @internal */
export type ContactReference$Outbound = {
  id: string;
  dataType?: string | null | undefined;
};

/** @internal */
export const ContactReference$outboundSchema: z.ZodType<
  ContactReference$Outbound,
  z.ZodTypeDef,
  ContactReference
> = z.object({
  id: z.string(),
  dataType: z.nullable(JournalLineDataType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactReference$ {
  /** @deprecated use `ContactReference$inboundSchema` instead. */
  export const inboundSchema = ContactReference$inboundSchema;
  /** @deprecated use `ContactReference$outboundSchema` instead. */
  export const outboundSchema = ContactReference$outboundSchema;
  /** @deprecated use `ContactReference$Outbound` instead. */
  export type Outbound = ContactReference$Outbound;
}

/** @internal */
export const JournalLine$inboundSchema: z.ZodType<
  JournalLine,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  netAmount: z.number().transform(v => new Decimal$(v)),
  currency: z.nullable(z.string()).optional(),
  accountRef: AccountRef$inboundSchema.optional(),
  tracking: z.lazy(() => JournalLineTracking$inboundSchema).optional(),
  contactRef: z.lazy(() => ContactReference$inboundSchema).optional(),
});

/** @internal */
export type JournalLine$Outbound = {
  description?: string | null | undefined;
  netAmount: number;
  currency?: string | null | undefined;
  accountRef?: AccountRef$Outbound | undefined;
  tracking?: JournalLineTracking$Outbound | undefined;
  contactRef?: ContactReference$Outbound | undefined;
};

/** @internal */
export const JournalLine$outboundSchema: z.ZodType<
  JournalLine$Outbound,
  z.ZodTypeDef,
  JournalLine
> = z.object({
  description: z.nullable(z.string()).optional(),
  netAmount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  currency: z.nullable(z.string()).optional(),
  accountRef: AccountRef$outboundSchema.optional(),
  tracking: z.lazy(() => JournalLineTracking$outboundSchema).optional(),
  contactRef: z.lazy(() => ContactReference$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JournalLine$ {
  /** @deprecated use `JournalLine$inboundSchema` instead. */
  export const inboundSchema = JournalLine$inboundSchema;
  /** @deprecated use `JournalLine$outboundSchema` instead. */
  export const outboundSchema = JournalLine$outboundSchema;
  /** @deprecated use `JournalLine$Outbound` instead. */
  export type Outbound = JournalLine$Outbound;
}