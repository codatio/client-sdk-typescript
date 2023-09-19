/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataType } from "./datatype";
import { Expose } from "class-transformer";

export class PushOperationRef extends SpeakeasyBase {
    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: DataType;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}