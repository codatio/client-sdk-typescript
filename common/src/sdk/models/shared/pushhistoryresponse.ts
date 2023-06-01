/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Links } from "./links";
import { PushOperationSummary } from "./pushoperationsummary";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class PushHistoryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "_links" })
    @Type(() => Links)
    links: Links;

    @SpeakeasyMetadata()
    @Expose({ name: "pageNumber" })
    pageNumber: number;

    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize: number;

    @SpeakeasyMetadata({ elemType: PushOperationSummary })
    @Expose({ name: "results" })
    @Type(() => PushOperationSummary)
    results?: PushOperationSummary[];

    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}
