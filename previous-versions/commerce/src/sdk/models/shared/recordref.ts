/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RecordRef extends SpeakeasyBase {
    /**
     * The unique identitifer of the record being referenced
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The type of record being referenced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}