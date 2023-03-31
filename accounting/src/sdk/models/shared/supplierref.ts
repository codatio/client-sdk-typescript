/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Reference to the supplier the record relates to.
 */
export class SupplierRef extends SpeakeasyBase {
  /**
   * The supplier's unique ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The supplier's name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}
