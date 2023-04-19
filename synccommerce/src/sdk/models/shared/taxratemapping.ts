/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TaxRateMapping extends SpeakeasyBase {
  /**
   * Selected tax rate id from the list of tax rates on the accounting software.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  /**
   * Selected tax component id from the list of tax components on the commerce software.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}