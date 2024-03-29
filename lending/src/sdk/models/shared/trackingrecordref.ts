/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Name of underlying data type.
 */
export enum TrackingRecordRefDataType {
    Customers = "customers",
    Suppliers = "suppliers",
    TrackingCategories = "trackingCategories",
}

/**
 * Links to the customer or tracking category.
 */
export class TrackingRecordRef extends SpeakeasyBase {
    /**
     * Name of underlying data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: TrackingRecordRefDataType;

    /**
     * 'id' of the underlying record or data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
