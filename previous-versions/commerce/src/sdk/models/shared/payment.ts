/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMethodRef } from "./paymentmethodref";
import { PaymentStatus } from "./paymentstatus";
import { SupplementalData } from "./supplementaldata";
import { Expose, Type } from "class-transformer";

/**
 * Payments contain details of all payments made by customers to a company, including: amounts, currency used, payment method, payment provider, and payment status.
 *
 * @remarks
 *
 * Refunds are recorded as separate, negative payments. Note that a refund can only occur in relation to a payment that has been completed (i.e. has a status of `Paid`). When a customer cancels an order _before_ a payment has been completed, the payment shows as `Cancelled`.
 *
 * You can use data from the Payments endpoints to calculate key metrics, such as gross sales and monthly recurring revenue (MRR).
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments) for this data type.
 */
export class Payment extends SpeakeasyBase {
    /**
     * Payment Amount (including gratuity)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

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
    @Expose({ name: "createdDate" })
    createdDate?: string;

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
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

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
    @Expose({ name: "dueDate" })
    dueDate?: string;

    /**
     * A unique, persistent identifier for this record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * The payment method the record is linked to in the accounting or commerce platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodRef" })
    @Type(() => PaymentMethodRef)
    paymentMethodRef?: PaymentMethodRef;

    /**
     * Service provider of the payment, if applicable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentProvider" })
    paymentProvider?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Status of the payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: PaymentStatus;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;
}
