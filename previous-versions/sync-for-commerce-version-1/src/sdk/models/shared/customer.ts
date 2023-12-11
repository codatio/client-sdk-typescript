/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Option } from "./option";
import { Expose, Type } from "class-transformer";

export class Customer extends SpeakeasyBase {
    /**
     * List of customer options from the list of customer records on the accounting software.
     */
    @SpeakeasyMetadata({ elemType: Option })
    @Expose({ name: "customerOptions" })
    @Type(() => Option)
    customerOptions?: Option[];

    /**
     * Selected customer id from the list of customer records on the accounting software.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "selectedCustomerId" })
    selectedCustomerId?: string;
}
