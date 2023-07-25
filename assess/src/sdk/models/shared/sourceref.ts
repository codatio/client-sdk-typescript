/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A source reference containing the `sourceType` object "Banking".
 */
export class SourceRef extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sourceType" })
    sourceType?: string;
}
