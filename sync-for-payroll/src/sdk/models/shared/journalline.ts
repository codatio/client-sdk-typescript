/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { RecordRef } from "./recordref";
import { Expose, Type } from "class-transformer";

/**
 * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
 */
export class Tracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RecordRef })
    @Expose({ name: "recordRefs" })
    @Type(() => RecordRef)
    recordRefs?: RecordRef[];
}

export class JournalLine extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Currency for the journal line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Description of the journal line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Amount for the journal line. Debit entries are considered positive, and credit entries are considered negative.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "netAmount" })
    netAmount: number;

    /**
     * List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking" })
    @Type(() => Tracking)
    tracking?: Tracking;
}
