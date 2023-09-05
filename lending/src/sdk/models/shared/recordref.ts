/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Links the current record to the underlying record or data type that created it.
 *
 * @remarks
 *
 * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
 */
export class RecordRef extends SpeakeasyBase {
    /**
     * Allowed name of the 'dataType'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: string;

    /**
     * 'id' of the underlying record or data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}