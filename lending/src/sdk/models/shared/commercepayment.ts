/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentMethodRef,
  PaymentMethodRef$inboundSchema,
  PaymentMethodRef$Outbound,
  PaymentMethodRef$outboundSchema,
} from "./paymentmethodref.js";
import {
  PaymentStatus,
  PaymentStatus$inboundSchema,
  PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";

/**
 * Payments contain details of all payments made by customers to a company, including: amounts, currency used, payment method, payment provider, and payment status.
 *
 * @remarks
 *
 * Refunds are recorded as separate, negative payments. Note that a refund can only occur in relation to a payment that has been completed (i.e. has a status of `Paid`). When a customer cancels an order _before_ a payment has been completed, the payment shows as `Cancelled`.
 *
 * You can use data from the Payments endpoints to calculate key metrics, such as gross sales and monthly recurring revenue (MRR).
 */
export type CommercePayment = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * A unique, persistent identifier for this record
   */
  id: string;
  /**
   * Payment Amount (including gratuity)
   */
  amount?: Decimal$ | number | undefined;
  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  currency?: string | undefined;
  /**
   * The payment method the record is linked to in the accounting or commerce software.
   */
  paymentMethodRef?: PaymentMethodRef | undefined;
  /**
   * Status of the payment.
   */
  status?: PaymentStatus | undefined;
  /**
   * Service provider of the payment, if applicable.
   */
  paymentProvider?: string | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  dueDate?: string | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  createdDate?: string | undefined;
};

/** @internal */
export const CommercePayment$inboundSchema: z.ZodType<
  CommercePayment,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  amount: z.number().transform(v => new Decimal$(v)).optional(),
  currency: z.string().optional(),
  paymentMethodRef: PaymentMethodRef$inboundSchema.optional(),
  status: PaymentStatus$inboundSchema.optional(),
  paymentProvider: z.string().optional(),
  dueDate: z.string().optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
  createdDate: z.string().optional(),
});

/** @internal */
export type CommercePayment$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id: string;
  amount?: number | undefined;
  currency?: string | undefined;
  paymentMethodRef?: PaymentMethodRef$Outbound | undefined;
  status?: string | undefined;
  paymentProvider?: string | undefined;
  dueDate?: string | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
  createdDate?: string | undefined;
};

/** @internal */
export const CommercePayment$outboundSchema: z.ZodType<
  CommercePayment$Outbound,
  z.ZodTypeDef,
  CommercePayment
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  currency: z.string().optional(),
  paymentMethodRef: PaymentMethodRef$outboundSchema.optional(),
  status: PaymentStatus$outboundSchema.optional(),
  paymentProvider: z.string().optional(),
  dueDate: z.string().optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
  createdDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommercePayment$ {
  /** @deprecated use `CommercePayment$inboundSchema` instead. */
  export const inboundSchema = CommercePayment$inboundSchema;
  /** @deprecated use `CommercePayment$outboundSchema` instead. */
  export const outboundSchema = CommercePayment$outboundSchema;
  /** @deprecated use `CommercePayment$Outbound` instead. */
  export type Outbound = CommercePayment$Outbound;
}

export function commercePaymentToJSON(
  commercePayment: CommercePayment,
): string {
  return JSON.stringify(CommercePayment$outboundSchema.parse(commercePayment));
}

export function commercePaymentFromJSON(
  jsonString: string,
): SafeParseResult<CommercePayment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommercePayment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommercePayment' from JSON`,
  );
}
