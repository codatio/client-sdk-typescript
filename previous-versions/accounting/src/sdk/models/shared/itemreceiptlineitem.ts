/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { InvoiceTo } from "./invoiceto";
import { ItemRef } from "./itemref";
import { Expose, Type } from "class-transformer";

/**
 * Allowed name of the 'dataType'.
 */
export enum ItemReceiptLineItemDataType {
    PurchaseOrders = "purchaseOrders",
}

/**
 * Reference to the item receipt line this line was generated from.
 */
export class RecordLineReference extends SpeakeasyBase {
    /**
     * Allowed name of the 'dataType'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: ItemReceiptLineItemDataType;

    /**
     * 'id' of the underlying record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Line number of the underlying record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lineNumber" })
    lineNumber?: string;
}

export class ItemReceiptLineItemTracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: InvoiceTo })
    @Expose({ name: "recordRefs" })
    @Type(() => InvoiceTo)
    recordRefs?: InvoiceTo[];
}

export class ItemReceiptLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Friendly name of the item or services received.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "itemRef" })
    @Type(() => ItemRef)
    itemRef?: ItemRef;

    /**
     * The item receipt line's number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lineNumber" })
    lineNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchaseOrderLineRef" })
    @Type(() => RecordLineReference)
    purchaseOrderLineRef?: RecordLineReference;

    /**
     * Number of units of item or services received.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * Amount of the line, inclusive of discounts but exclusive of tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal?: number;

    /**
     * Total amount of the line, including tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tracking" })
    @Type(() => ItemReceiptLineItemTracking)
    tracking?: ItemReceiptLineItemTracking;

    /**
     * Price of each unit of item or services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount?: number;

    /**
     * The measurement which defines a unit for this item (e.g. 'kilogram', 'litre').
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitOfMeasurement" })
    unitOfMeasurement?: string;
}
