/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BillPaymentAccountRef,
  BillPaymentAccountRef$inboundSchema,
  BillPaymentAccountRef$Outbound,
  BillPaymentAccountRef$outboundSchema,
} from "./billpaymentaccountref.js";

export type BillPaymentPrototype = {
  /**
   * Amount of the payment in the bill currency.
   */
  amount: Decimal$ | number;
  date: string;
  /**
   * Additional information associated with the payment.
   */
  reference?: string | null | undefined;
  /**
   * Reference to the bank account / credit card which you are using to pay the bill.
   */
  accountRef: BillPaymentAccountRef;
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
};

/** @internal */
export const BillPaymentPrototype$inboundSchema: z.ZodType<
  BillPaymentPrototype,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => new Decimal$(v)),
  date: z.string(),
  reference: z.nullable(z.string()).optional(),
  accountRef: BillPaymentAccountRef$inboundSchema,
  currencyRate: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
});

/** @internal */
export type BillPaymentPrototype$Outbound = {
  amount: number;
  date: string;
  reference?: string | null | undefined;
  accountRef: BillPaymentAccountRef$Outbound;
  currencyRate?: number | null | undefined;
};

/** @internal */
export const BillPaymentPrototype$outboundSchema: z.ZodType<
  BillPaymentPrototype$Outbound,
  z.ZodTypeDef,
  BillPaymentPrototype
> = z.object({
  amount: z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
    typeof v === "number" ? v : v.toNumber()
  ),
  date: z.string(),
  reference: z.nullable(z.string()).optional(),
  accountRef: BillPaymentAccountRef$outboundSchema,
  currencyRate: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillPaymentPrototype$ {
  /** @deprecated use `BillPaymentPrototype$inboundSchema` instead. */
  export const inboundSchema = BillPaymentPrototype$inboundSchema;
  /** @deprecated use `BillPaymentPrototype$outboundSchema` instead. */
  export const outboundSchema = BillPaymentPrototype$outboundSchema;
  /** @deprecated use `BillPaymentPrototype$Outbound` instead. */
  export type Outbound = BillPaymentPrototype$Outbound;
}

export function billPaymentPrototypeToJSON(
  billPaymentPrototype: BillPaymentPrototype,
): string {
  return JSON.stringify(
    BillPaymentPrototype$outboundSchema.parse(billPaymentPrototype),
  );
}

export function billPaymentPrototypeFromJSON(
  jsonString: string,
): SafeParseResult<BillPaymentPrototype, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillPaymentPrototype$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillPaymentPrototype' from JSON`,
  );
}
