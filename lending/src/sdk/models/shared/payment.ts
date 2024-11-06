/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
  BankingTransactionRef,
  BankingTransactionRef$inboundSchema,
  BankingTransactionRef$Outbound,
  BankingTransactionRef$outboundSchema,
} from "./bankingtransactionref.js";

export type Payment = {
  /**
   * ID of the invoice, which may be a GUID but it may be something else depending on the accounting software.
   */
  id?: string | undefined;
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
  date?: string | undefined;
  /**
   * The type of payment.
   */
  paymentType?: string | undefined;
  /**
   * Payment amount.
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
  bankingTransactionRefs?: Array<BankingTransactionRef> | undefined;
};

/** @internal */
export const Payment$inboundSchema: z.ZodType<Payment, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    date: z.string().optional(),
    paymentType: z.string().optional(),
    amount: z.number().transform(v => new Decimal$(v)).optional(),
    currency: z.string().optional(),
    currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
      .optional(),
    bankingTransactionRefs: z.array(BankingTransactionRef$inboundSchema)
      .optional(),
  });

/** @internal */
export type Payment$Outbound = {
  id?: string | undefined;
  date?: string | undefined;
  paymentType?: string | undefined;
  amount?: number | undefined;
  currency?: string | undefined;
  currencyRate?: number | null | undefined;
  bankingTransactionRefs?: Array<BankingTransactionRef$Outbound> | undefined;
};

/** @internal */
export const Payment$outboundSchema: z.ZodType<
  Payment$Outbound,
  z.ZodTypeDef,
  Payment
> = z.object({
  id: z.string().optional(),
  date: z.string().optional(),
  paymentType: z.string().optional(),
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ).optional(),
  currency: z.string().optional(),
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
  bankingTransactionRefs: z.array(BankingTransactionRef$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Payment$ {
  /** @deprecated use `Payment$inboundSchema` instead. */
  export const inboundSchema = Payment$inboundSchema;
  /** @deprecated use `Payment$outboundSchema` instead. */
  export const outboundSchema = Payment$outboundSchema;
  /** @deprecated use `Payment$Outbound` instead. */
  export type Outbound = Payment$Outbound;
}
