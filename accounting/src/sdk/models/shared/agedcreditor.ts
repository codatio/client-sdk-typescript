/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType extends SpeakeasyBase {
    /**
     * The amount outstanding.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * Name of data type with outstanding amount for given period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount extends SpeakeasyBase {
    /**
     * The amount outstanding.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * Array of details.
     */
    @SpeakeasyMetadata({
        elemType:
            AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType,
    })
    @Expose({ name: "details" })
    @Type(
        () => AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType
    )
    details?: AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType[];

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
    @Expose({ name: "fromDate" })
    fromDate?: string;

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
    @Expose({ name: "toDate" })
    toDate?: string;
}

export class AgedCreditorAgedCurrencyOutstanding extends SpeakeasyBase {
    /**
     * Array of outstanding amounts by period.
     */
    @SpeakeasyMetadata({ elemType: AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount })
    @Expose({ name: "agedOutstandingAmounts" })
    @Type(() => AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount)
    agedOutstandingAmounts?: AgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount[];

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
}

export class AgedCreditor extends SpeakeasyBase {
    /**
     * Array of aged creditors by currency.
     */
    @SpeakeasyMetadata({ elemType: AgedCreditorAgedCurrencyOutstanding })
    @Expose({ name: "agedCurrencyOutstanding" })
    @Type(() => AgedCreditorAgedCurrencyOutstanding)
    agedCurrencyOutstanding?: AgedCreditorAgedCurrencyOutstanding[];

    /**
     * Supplier ID of the aged creditor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplierId" })
    supplierId?: string;

    /**
     * Supplier name of the aged creditor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplierName" })
    supplierName?: string;
}
