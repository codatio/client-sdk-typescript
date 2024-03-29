/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ConfigurationContactRef extends SpeakeasyBase {
    /**
     * Unique identifier for the supplier/customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The supplier/customer's name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
