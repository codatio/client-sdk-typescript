/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvoiceLevelSelection extends SpeakeasyBase {
  /**
   * Options for grouping sales.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  /**
   * Selected array of grouping options.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}