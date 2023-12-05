/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Reference to the item the line is linked to.
 */
export class PropertieItemRef extends SpeakeasyBase {
    /**
     * Unique identifier for the item in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of the item in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
