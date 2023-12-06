/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContactRef } from "./contactref";
import { ExpenseTransactionLine } from "./expensetransactionline";
import { Expose, Type } from "class-transformer";

/**
 * The type of transaction.
 */
export enum TypeT {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut",
}

export class ExpenseTransaction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "contactRef" })
    @Type(() => ContactRef)
    contactRef?: ContactRef;

    /**
     * Currency the transaction was recorded in.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
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
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    /**
     * Your unique identifier for the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
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
    @SpeakeasyMetadata()
    @Expose({ name: "issueDate" })
    issueDate: string;

    /**
     * Array of transaction lines.
     */
    @SpeakeasyMetadata({ elemType: ExpenseTransactionLine })
    @Expose({ name: "lines" })
    @Type(() => ExpenseTransactionLine)
    lines?: ExpenseTransactionLine[];

    /**
     * Name of the merchant where the purchase took place
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantName" })
    merchantName?: string;

    /**
     * Any private, company notes about the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    /**
     * The type of transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: TypeT;
}
