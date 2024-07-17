/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types/decimal.js";
import {
    ReimbursableExpenseTransactionLine,
    ReimbursableExpenseTransactionLine$inboundSchema,
    ReimbursableExpenseTransactionLine$Outbound,
    ReimbursableExpenseTransactionLine$outboundSchema,
} from "./reimbursableexpensetransactionline.js";
import {
    ReimbursementContactRef,
    ReimbursementContactRef$inboundSchema,
    ReimbursementContactRef$Outbound,
    ReimbursementContactRef$outboundSchema,
} from "./reimbursementcontactref.js";
import * as z from "zod";

export type ReimbursableExpenseTransaction = {
    /**
     * Your unique identifier for the transaction.
     */
    id: string;
    /**
     * User-friendly reference for the reimbursable expense.
     */
    reference?: string | null | undefined;
    contactRef: ReimbursementContactRef;
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
     *
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
    issueDate: string;
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
     *
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
    dueDate: string;
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
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
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
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, specify a currencyRate in the request body.  |
     */
    currencyRate?: Decimal$ | number | null | undefined;
    /**
     * Any private, company notes about the transaction.
     */
    notes?: string | undefined;
    /**
     * Array of transaction lines.
     */
    lines?: Array<ReimbursableExpenseTransactionLine> | undefined;
};

/** @internal */
export const ReimbursableExpenseTransaction$inboundSchema: z.ZodType<
    ReimbursableExpenseTransaction,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    reference: z.nullable(z.string()).optional(),
    contactRef: ReimbursementContactRef$inboundSchema,
    issueDate: z.string(),
    dueDate: z.string(),
    currency: z.string(),
    currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
    notes: z.string().optional(),
    lines: z.array(ReimbursableExpenseTransactionLine$inboundSchema).optional(),
});

/** @internal */
export type ReimbursableExpenseTransaction$Outbound = {
    id: string;
    reference?: string | null | undefined;
    contactRef: ReimbursementContactRef$Outbound;
    issueDate: string;
    dueDate: string;
    currency: string;
    currencyRate?: number | null | undefined;
    notes?: string | undefined;
    lines?: Array<ReimbursableExpenseTransactionLine$Outbound> | undefined;
};

/** @internal */
export const ReimbursableExpenseTransaction$outboundSchema: z.ZodType<
    ReimbursableExpenseTransaction$Outbound,
    z.ZodTypeDef,
    ReimbursableExpenseTransaction
> = z.object({
    id: z.string(),
    reference: z.nullable(z.string()).optional(),
    contactRef: ReimbursementContactRef$outboundSchema,
    issueDate: z.string(),
    dueDate: z.string(),
    currency: z.string(),
    currencyRate: z
        .nullable(
            z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
        )
        .optional(),
    notes: z.string().optional(),
    lines: z.array(ReimbursableExpenseTransactionLine$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReimbursableExpenseTransaction$ {
    /** @deprecated use `ReimbursableExpenseTransaction$inboundSchema` instead. */
    export const inboundSchema = ReimbursableExpenseTransaction$inboundSchema;
    /** @deprecated use `ReimbursableExpenseTransaction$outboundSchema` instead. */
    export const outboundSchema = ReimbursableExpenseTransaction$outboundSchema;
    /** @deprecated use `ReimbursableExpenseTransaction$Outbound` instead. */
    export type Outbound = ReimbursableExpenseTransaction$Outbound;
}
