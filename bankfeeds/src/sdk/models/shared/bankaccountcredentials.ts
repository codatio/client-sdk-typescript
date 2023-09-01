/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Result of generate credentials
 */
export class BankAccountCredentials extends SpeakeasyBase {
    /**
     * Password to enable the bank feeds platform to securely retrieve transactions.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    /**
     * Username used by the bank feeds platform to retrieve transactions
     */
    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}
