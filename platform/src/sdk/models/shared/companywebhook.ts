/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CompanyDetails,
  CompanyDetails$inboundSchema,
  CompanyDetails$Outbound,
  CompanyDetails$outboundSchema,
} from "./companydetails.js";

export type CompanyWebhook = {
  /**
   * Unique identifier of the event
   */
  id?: string | undefined;
  /**
   * The type of event.
   */
  eventType?: string | undefined;
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
  generatedDate?: string | undefined;
  payload?: CompanyDetails | undefined;
};

/** @internal */
export const CompanyWebhook$inboundSchema: z.ZodType<
  CompanyWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  eventType: z.string().optional(),
  generatedDate: z.string().optional(),
  payload: CompanyDetails$inboundSchema.optional(),
});

/** @internal */
export type CompanyWebhook$Outbound = {
  id?: string | undefined;
  eventType?: string | undefined;
  generatedDate?: string | undefined;
  payload?: CompanyDetails$Outbound | undefined;
};

/** @internal */
export const CompanyWebhook$outboundSchema: z.ZodType<
  CompanyWebhook$Outbound,
  z.ZodTypeDef,
  CompanyWebhook
> = z.object({
  id: z.string().optional(),
  eventType: z.string().optional(),
  generatedDate: z.string().optional(),
  payload: CompanyDetails$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyWebhook$ {
  /** @deprecated use `CompanyWebhook$inboundSchema` instead. */
  export const inboundSchema = CompanyWebhook$inboundSchema;
  /** @deprecated use `CompanyWebhook$outboundSchema` instead. */
  export const outboundSchema = CompanyWebhook$outboundSchema;
  /** @deprecated use `CompanyWebhook$Outbound` instead. */
  export type Outbound = CompanyWebhook$Outbound;
}
