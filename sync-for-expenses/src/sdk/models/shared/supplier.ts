/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class Supplier extends SpeakeasyBase {
    /**
     * id of the supplier for all purchases to be associated to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
