/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Allowed name of the 'dataType'.
 */
export enum ContactRefDataType {
    Customers = "customers",
    Suppliers = "suppliers",
}

/**
 * A customer or supplier associated with the direct cost.
 */
export class ContactRef extends SpeakeasyBase {
    /**
     * Allowed name of the 'dataType'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: ContactRefDataType;

    /**
     * Unique identifier for a customer or supplier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}
