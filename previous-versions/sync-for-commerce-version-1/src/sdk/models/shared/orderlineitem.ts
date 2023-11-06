/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrderDiscountAllocation } from "./orderdiscountallocation";
import { ProductRef } from "./productref";
import { ProductVariantRef } from "./productvariantref";
import { Taxesitems } from "./taxesitems";
import { Expose, Type } from "class-transformer";

export class OrderLineItem extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: OrderDiscountAllocation })
    @Expose({ name: "discountAllocations" })
    @Type(() => OrderDiscountAllocation)
    discountAllocations?: OrderDiscountAllocation[];

    /**
     * A unique, persistent identifier for this record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Reference that links the line item to the correct product details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "productRef" })
    @Type(() => ProductRef)
    productRef?: ProductRef;

    /**
     * Reference that links the line item to the specific version of product that has been ordered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "productVariantRef" })
    @Type(() => ProductVariantRef)
    productVariantRef?: ProductVariantRef;

    /**
     * Number of units of the product sold.
     *
     * @remarks
     * For refunds, quantity is negative.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * Percentage rate (from 0 to 100) of any sales tax applied to the unit price.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxPercentage" })
    taxPercentage?: number;

    /**
     * Taxes breakdown as applied to order lines.
     */
    @SpeakeasyMetadata({ elemType: Taxesitems })
    @Expose({ name: "taxes" })
    @Type(() => Taxesitems)
    taxes?: Taxesitems[];

    /**
     * Total amount of the line item, including discounts and tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * Total amount of tax applied to the line item, factoring in any discounts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxAmount" })
    totalTaxAmount?: number;

    /**
     * Price per unit of goods or services, excluding discounts and tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitPrice" })
    unitPrice?: number;
}
