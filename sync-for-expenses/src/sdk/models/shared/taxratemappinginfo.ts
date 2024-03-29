/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TaxRateMappingInfoValidTransactionTypes {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut",
}

export class TaxRateMappingInfo extends SpeakeasyBase {
    /**
     * Code for the tax rate from the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Effective tax rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effectiveTaxRate" })
    effectiveTaxRate?: number;

    /**
     * Unique identifier of tax rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Name of the tax rate in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Total (not compounded) sum of the components of a tax rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxRate" })
    totalTaxRate?: number;

    /**
     * Supported transaction types for the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validTransactionTypes" })
    validTransactionTypes?: TaxRateMappingInfoValidTransactionTypes[];
}
