/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AgedOutstandingAmount } from "./agedoutstandingamount";
import { Expose, Type } from "class-transformer";

export class AccountingAgedCurrencyOutstanding extends SpeakeasyBase {
    /**
     * Array of outstanding amounts by period.
     */
    @SpeakeasyMetadata({ elemType: AgedOutstandingAmount })
    @Expose({ name: "agedOutstandingAmounts" })
    @Type(() => AgedOutstandingAmount)
    agedOutstandingAmounts?: AgedOutstandingAmount[];

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
    @SpeakeasyMetadata({ elemType: AccountingAgedCurrencyOutstanding })
    @Expose({ name: "agedCurrencyOutstanding" })
    @Type(() => AccountingAgedCurrencyOutstanding)
    agedCurrencyOutstanding?: AccountingAgedCurrencyOutstanding[];

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
