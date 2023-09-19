/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupingLevels } from "./groupinglevels";
import { GroupingPeriod } from "./groupingperiod";
import { Expose, Type } from "class-transformer";

export class Grouping extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "groupingLevels" })
    @Type(() => GroupingLevels)
    groupingLevels?: GroupingLevels;

    @SpeakeasyMetadata()
    @Expose({ name: "groupingPeriod" })
    @Type(() => GroupingPeriod)
    groupingPeriod?: GroupingPeriod;
}