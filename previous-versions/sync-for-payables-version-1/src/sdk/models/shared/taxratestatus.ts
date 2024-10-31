/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of the tax rate in the accounting software.
 *
 * @remarks
 * - `Active` - An active tax rate in use by a company.
 * - `Archived` - A tax rate that has been archived or is inactive in the accounting software.
 * - `Unknown` - Where the status of the tax rate cannot be determined from the underlying platform.
 */
export const TaxRateStatus = {
  Unknown: "Unknown",
  Active: "Active",
  Archived: "Archived",
} as const;
/**
 * Status of the tax rate in the accounting software.
 *
 * @remarks
 * - `Active` - An active tax rate in use by a company.
 * - `Archived` - A tax rate that has been archived or is inactive in the accounting software.
 * - `Unknown` - Where the status of the tax rate cannot be determined from the underlying platform.
 */
export type TaxRateStatus = ClosedEnum<typeof TaxRateStatus>;

/** @internal */
export const TaxRateStatus$inboundSchema: z.ZodNativeEnum<
  typeof TaxRateStatus
> = z.nativeEnum(TaxRateStatus);

/** @internal */
export const TaxRateStatus$outboundSchema: z.ZodNativeEnum<
  typeof TaxRateStatus
> = TaxRateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRateStatus$ {
  /** @deprecated use `TaxRateStatus$inboundSchema` instead. */
  export const inboundSchema = TaxRateStatus$inboundSchema;
  /** @deprecated use `TaxRateStatus$outboundSchema` instead. */
  export const outboundSchema = TaxRateStatus$outboundSchema;
}