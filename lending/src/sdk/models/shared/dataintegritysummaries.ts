/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataIntegritySummary } from "./dataintegritysummary";
import { Expose, Type } from "class-transformer";

export class DataIntegritySummaries extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: DataIntegritySummary })
    @Expose({ name: "summaries" })
    @Type(() => DataIntegritySummary)
    summaries?: DataIntegritySummary[];
}
