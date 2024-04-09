/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { Expose, Type } from "class-transformer";

export class TransferDetails extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Amount of the transfer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;
}
