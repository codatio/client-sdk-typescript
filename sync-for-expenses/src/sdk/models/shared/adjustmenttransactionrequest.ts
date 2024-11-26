/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AdjustmentTransactionLine,
  AdjustmentTransactionLine$inboundSchema,
  AdjustmentTransactionLine$Outbound,
  AdjustmentTransactionLine$outboundSchema,
} from "./adjustmenttransactionline.js";

export type AdjustmentTransactionRequest = {
  /**
   * Your unique identifier for the transaction.
   */
  id: string;
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
  date: string;
  /**
   * Currency the transaction was recorded in.
   */
  currency: string;
  /**
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
   *
   * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
   *
   * Where the currency rate is provided by the underlying accounting software, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
   *
   * For accounting software which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
   *
   * ## Examples with base currency of GBP
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **USD**          | $20            | 0.781         | £15.62                     |
   * | **EUR**          | €20            | 0.885         | £17.70                     |
   * | **RUB**          | ₽20            | 0.011         | £0.22                      |
   *
   * ## Examples with base currency of USD
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **GBP**          | £20            | 1.277         | $25.54                     |
   * | **EUR**          | €20            | 1.134         | $22.68                     |
   * | **RUB**          | ₽20            | 0.015         | $0.30                      |
   *
   * ### Integration-specific details
   *
   * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
   * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, specify a currencyRate in the request body.  |
   */
  currencyRate?: Decimal$ | number | null | undefined;
  /**
   * User-friendly reference for the adjustment transaction.
   */
  reference?: string | null | undefined;
  /**
   * Array of transaction lines.
   */
  lines: Array<AdjustmentTransactionLine>;
};

/** @internal */
export const AdjustmentTransactionRequest$inboundSchema: z.ZodType<
  AdjustmentTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  date: z.string(),
  currency: z.string(),
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
  reference: z.nullable(z.string()).optional(),
  lines: z.array(AdjustmentTransactionLine$inboundSchema),
});

/** @internal */
export type AdjustmentTransactionRequest$Outbound = {
  id: string;
  date: string;
  currency: string;
  currencyRate?: number | null | undefined;
  reference?: string | null | undefined;
  lines: Array<AdjustmentTransactionLine$Outbound>;
};

/** @internal */
export const AdjustmentTransactionRequest$outboundSchema: z.ZodType<
  AdjustmentTransactionRequest$Outbound,
  z.ZodTypeDef,
  AdjustmentTransactionRequest
> = z.object({
  id: z.string(),
  date: z.string(),
  currency: z.string(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  reference: z.nullable(z.string()).optional(),
  lines: z.array(AdjustmentTransactionLine$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdjustmentTransactionRequest$ {
  /** @deprecated use `AdjustmentTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = AdjustmentTransactionRequest$inboundSchema;
  /** @deprecated use `AdjustmentTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = AdjustmentTransactionRequest$outboundSchema;
  /** @deprecated use `AdjustmentTransactionRequest$Outbound` instead. */
  export type Outbound = AdjustmentTransactionRequest$Outbound;
}

export function adjustmentTransactionRequestToJSON(
  adjustmentTransactionRequest: AdjustmentTransactionRequest,
): string {
  return JSON.stringify(
    AdjustmentTransactionRequest$outboundSchema.parse(
      adjustmentTransactionRequest,
    ),
  );
}

export function adjustmentTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<AdjustmentTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AdjustmentTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AdjustmentTransactionRequest' from JSON`,
  );
}
