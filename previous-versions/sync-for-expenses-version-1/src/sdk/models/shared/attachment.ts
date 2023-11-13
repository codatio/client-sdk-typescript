/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Attachment extends SpeakeasyBase {
    /**
     * Unique ID of company in Codat
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId?: string;

    /**
     * Unique identifier of attachment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Unique identifier of transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionId" })
    transactionId?: string;
}
