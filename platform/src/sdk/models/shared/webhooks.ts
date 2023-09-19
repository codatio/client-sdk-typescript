/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Links } from "./links";
import { Webhook } from "./webhook";
import { Expose, Type } from "class-transformer";

export class Webhooks extends SpeakeasyBase {
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

    @SpeakeasyMetadata({ elemType: Webhook })
    @Expose({ name: "results" })
    @Type(() => Webhook)
    results?: Webhook[];

    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}