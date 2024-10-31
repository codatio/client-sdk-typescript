/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  PaymentMethodType,
  PaymentMethodType$inboundSchema,
  PaymentMethodType$outboundSchema,
} from "./paymentmethodtype.js";

/**
 * Status of the Payment Method.
 */
export const PaymentMethodStatus = {
  Unknown: "Unknown",
  Active: "Active",
  Archived: "Archived",
} as const;
/**
 * Status of the Payment Method.
 */
export type PaymentMethodStatus = ClosedEnum<typeof PaymentMethodStatus>;

/**
 * > View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/sync-for-payables-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/sync-for-payables-api#/schemas/Payment).
 */
export type PaymentMethod = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Unique identifier for the payment method.
   */
  id?: string | undefined;
  /**
   * Name of the payment method.
   */
  name?: string | null | undefined;
  /**
   * Method of payment.
   */
  type?: PaymentMethodType | undefined;
  /**
   * Status of the Payment Method.
   */
  status?: PaymentMethodStatus | undefined;
  metadata?: Metadata | undefined;
};

/** @internal */
export const PaymentMethodStatus$inboundSchema: z.ZodNativeEnum<
  typeof PaymentMethodStatus
> = z.nativeEnum(PaymentMethodStatus);

/** @internal */
export const PaymentMethodStatus$outboundSchema: z.ZodNativeEnum<
  typeof PaymentMethodStatus
> = PaymentMethodStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodStatus$ {
  /** @deprecated use `PaymentMethodStatus$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodStatus$inboundSchema;
  /** @deprecated use `PaymentMethodStatus$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodStatus$outboundSchema;
}

/** @internal */
export const PaymentMethod$inboundSchema: z.ZodType<
  PaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  type: PaymentMethodType$inboundSchema.optional(),
  status: PaymentMethodStatus$inboundSchema.optional(),
  metadata: Metadata$inboundSchema.optional(),
});

/** @internal */
export type PaymentMethod$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  name?: string | null | undefined;
  type?: string | undefined;
  status?: string | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const PaymentMethod$outboundSchema: z.ZodType<
  PaymentMethod$Outbound,
  z.ZodTypeDef,
  PaymentMethod
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  type: PaymentMethodType$outboundSchema.optional(),
  status: PaymentMethodStatus$outboundSchema.optional(),
  metadata: Metadata$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethod$ {
  /** @deprecated use `PaymentMethod$inboundSchema` instead. */
  export const inboundSchema = PaymentMethod$inboundSchema;
  /** @deprecated use `PaymentMethod$outboundSchema` instead. */
  export const outboundSchema = PaymentMethod$outboundSchema;
  /** @deprecated use `PaymentMethod$Outbound` instead. */
  export type Outbound = PaymentMethod$Outbound;
}