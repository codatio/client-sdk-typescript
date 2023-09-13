/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ServiceChargeType } from "./servicechargetype";
import { Expose, Type } from "class-transformer";

/**
 * Taxes rates reference object depending on the rates being available on source commerce package.
 */
export class ServiceChargeTaxComponentAllocationTaxComponentRef extends SpeakeasyBase {
    /**
     * The unique identitifer of the tax component being referenced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of the tax component being referenced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class ServiceChargeTaxComponentAllocation extends SpeakeasyBase {
    /**
     * Tax amount on order line sale as available from source commerce platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rate" })
    rate?: number;

    /**
     * Taxes rates reference object depending on the rates being available on source commerce package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxComponentRef" })
    @Type(() => ServiceChargeTaxComponentAllocationTaxComponentRef)
    taxComponentRef?: ServiceChargeTaxComponentAllocationTaxComponentRef;
}

export class ServiceCharge extends SpeakeasyBase {
    /**
     * Service charges for this order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The number of times the charge is charged.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * Amount of the service charge that is tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxAmount" })
    taxAmount?: number;

    /**
     * Percentage rate (from 0 to 100) of any tax applied to the service charge.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxPercentage" })
    taxPercentage?: number;

    /**
     * Taxes breakdown as applied to service charges.
     */
    @SpeakeasyMetadata({ elemType: ServiceChargeTaxComponentAllocation })
    @Expose({ name: "taxes" })
    @Type(() => ServiceChargeTaxComponentAllocation)
    taxes?: ServiceChargeTaxComponentAllocation[];

    /**
     * Total service charge, including taxes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * The type of the service charge.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: ServiceChargeType;
}
