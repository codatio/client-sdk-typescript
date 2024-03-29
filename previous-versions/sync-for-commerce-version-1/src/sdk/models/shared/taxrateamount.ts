/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Option } from "./option";
import { Expose, Type } from "class-transformer";

export class TaxRateAmount extends SpeakeasyBase {
    /**
     * Selected tax rate id from the list of tax rates on the accounting software.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "selectedTaxRateId" })
    selectedTaxRateId?: string;

    /**
     * Array of tax rate options object.
     */
    @SpeakeasyMetadata({ elemType: Option })
    @Expose({ name: "taxRateOptions" })
    @Type(() => Option)
    taxRateOptions?: Option[];
}
