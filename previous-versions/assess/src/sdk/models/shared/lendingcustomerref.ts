/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LendingCustomerRef extends SpeakeasyBase {
    /**
     * `customerName` from the Customer data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerName" })
    customerName?: string;

    /**
     * `id` from the Customers data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
