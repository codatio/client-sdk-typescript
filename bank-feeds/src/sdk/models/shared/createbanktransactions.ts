/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BankTransactions } from "./banktransactions";
import { Expose, Type } from "class-transformer";

export class CreateBankTransactions extends SpeakeasyBase {
    /**
     * Unique identifier for a bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    @SpeakeasyMetadata({ elemType: BankTransactions })
    @Expose({ name: "transactions" })
    @Type(() => BankTransactions)
    transactions?: BankTransactions[];
}
