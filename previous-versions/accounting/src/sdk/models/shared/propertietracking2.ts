/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceTo } from "./invoiceto";
import { Expose, Type } from "class-transformer";

export class PropertieTracking2 extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: InvoiceTo })
    @Expose({ name: "recordRefs" })
    @Type(() => InvoiceTo)
    recordRefs?: InvoiceTo[];
}
