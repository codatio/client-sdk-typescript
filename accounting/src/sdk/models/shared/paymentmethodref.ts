/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaymentMethodRef extends SpeakeasyBase {
  /**
   * `id` from the Payment Methods data type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * `name` from the Payment Methods data type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
