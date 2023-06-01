/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).
 */
export class JournalRef extends SpeakeasyBase {
    /**
     * GUID of the underlying journal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of journal
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
