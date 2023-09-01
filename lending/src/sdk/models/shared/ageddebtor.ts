/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AgedCurrencyOutstanding } from "./agedcurrencyoutstanding";
import { Expose, Type } from "class-transformer";

export class AgedDebtor extends SpeakeasyBase {
    /**
     * Array of aged debtors by currency.
     */
    @SpeakeasyMetadata({ elemType: AgedCurrencyOutstanding })
    @Expose({ name: "agedCurrencyOutstanding" })
    @Type(() => AgedCurrencyOutstanding)
    agedCurrencyOutstanding?: AgedCurrencyOutstanding[];

    /**
     * Customer ID of the aged debtor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerId" })
    customerId?: string;

    /**
     * Customer name of the aged debtor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerName" })
    customerName?: string;
}
