/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { AccountsReceivableTracking } from "./accountsreceivabletracking";
import { PropertieItemRef } from "./propertieitemref";
import { TaxRateRef } from "./taxrateref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

export class InvoiceLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Friendly name of the goods or services provided.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Numerical value of any discounts applied.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountAmount" })
    discountAmount?: number;

    /**
     * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountPercentage" })
    discountPercentage?: number;

    /**
     * The invoice is a direct income if `True`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDirectIncome" })
    isDirectIncome?: boolean;

    /**
     * Reference to the item the line is linked to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "itemRef" })
    @Type(() => PropertieItemRef)
    itemRef?: PropertieItemRef;

    /**
     * Number of units of goods or services provided.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * Amount of the line, inclusive of discounts but exclusive of tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal?: number;

    /**
     * Amount of tax for the line.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxAmount" })
    taxAmount?: number;

    /**
     * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
     *
     * @remarks
     *
     * Found on:
     *
     * - Bill line items
     * - Bill Credit Note line items
     * - Credit Note line items
     * - Direct incomes line items
     * - Invoice line items
     * - Items
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxRateRef" })
    @Type(() => TaxRateRef)
    taxRateRef?: TaxRateRef;

    /**
     * Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * Categories, and a project and customer, against which the item is tracked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking" })
    @Type(() => AccountsReceivableTracking)
    tracking?: AccountsReceivableTracking;

    /**
     * Reference to the tracking categories to which the line item is linked.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "trackingCategoryRefs" })
    @Type(() => TrackingCategoryRef)
    trackingCategoryRefs?: TrackingCategoryRef[];

    /**
     * Price of each unit of goods or services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount: number;
}
