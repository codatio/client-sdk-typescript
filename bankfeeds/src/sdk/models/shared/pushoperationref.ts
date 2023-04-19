/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataTypeEnum } from "./datatypeenum";
import { Expose } from "class-transformer";

export class PushOperationRef extends SpeakeasyBase {
  /**
   * Available Data types
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: DataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}