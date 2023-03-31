/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BilledToTypeEnum1 } from "./billedtotypeenum1";
import { CustomerRef } from "./customerref";
import { ProjectRef } from "./projectref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class Propertiestracking1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
  @Expose({ name: "categoryRefs" })
  @Type(() => TrackingCategoryRef)
  categoryRefs: TrackingCategoryRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CustomerRef)
  customerRef?: CustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: BilledToTypeEnum1;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: BilledToTypeEnum1;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ProjectRef)
  projectRef?: ProjectRef;
}
