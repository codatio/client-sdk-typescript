/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Client's configuration details for a specific custom data type and platform pair.
 */
export class CustomDataTypeConfiguration extends SpeakeasyBase {
    /**
     * Underlying endpoint of the source platform that will serve as a data source for the custom data type. This value is not validated by Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataSource" })
    dataSource?: string;

    /**
     * An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. This value is not validated by Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "keyBy" })
    keyBy?: string[];

    /**
     * Properties required to be fetched from the underlying platform for the custom data type that is being configured. This value is not validated by Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requiredData" })
    requiredData?: Record<string, string>;

    /**
     * Property in the source platform nominated by the client that defines the date when a record was last modified there. This value is not validated by Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string[];
}
