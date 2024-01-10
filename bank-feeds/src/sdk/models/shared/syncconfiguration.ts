/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SyncAsBankFeeds } from "./syncasbankfeeds";
import { SyncAsExpenses } from "./syncasexpenses";
import { Expose, Type } from "class-transformer";

export class SyncConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "syncAsBankFeeds" })
    @Type(() => SyncAsBankFeeds)
    syncAsBankFeeds?: SyncAsBankFeeds;

    @SpeakeasyMetadata()
    @Expose({ name: "syncAsExpenses" })
    @Type(() => SyncAsExpenses)
    syncAsExpenses?: SyncAsExpenses;
}
