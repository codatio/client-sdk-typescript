/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaxComponentRef } from "./taxcomponentref";
import { Expose, Type } from "class-transformer";

export class TaxComponentAllocation extends SpeakeasyBase {
    /**
     * Tax amount on order line sale as available from source commerce platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rate" })
    rate?: number;

    /**
     * Taxes rates reference object depending on the rates being available on source commerce package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxComponentRef" })
    @Type(() => TaxComponentRef)
    taxComponentRef?: TaxComponentRef;
}