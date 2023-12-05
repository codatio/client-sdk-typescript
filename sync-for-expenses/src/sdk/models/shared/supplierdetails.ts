/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SupplierDetails extends SpeakeasyBase {
    /**
     * Identifier for the supplier, unique to the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
