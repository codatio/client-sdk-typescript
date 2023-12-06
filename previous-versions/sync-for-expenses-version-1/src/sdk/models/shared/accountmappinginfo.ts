/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of the account.
 */
export enum AccountType {
    Asset = "Asset",
    Liability = "Liability",
    Income = "Income",
    Expense = "Expense",
    Equity = "Equity",
}

export enum ValidTransactionTypes {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut",
}

export class AccountMappingInfo extends SpeakeasyBase {
    /**
     * Type of the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountType;

    /**
     * Currency of the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Unique identifier of account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Name of the account as it appears in the companies accounting software.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Supported transaction types for the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validTransactionTypes" })
    validTransactionTypes?: ValidTransactionTypes[];
}
