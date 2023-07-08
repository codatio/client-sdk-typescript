/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExpenseTransactionLine } from "./expensetransactionline";
import { Expose, Type } from "class-transformer";

export class UpdateExpenseRequest extends SpeakeasyBase {
    /**
     * Currency the transaction was recorded in.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Date the transaction was recorded.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "issueDate" })
    issueDate: string;

    /**
     * Array of transaction lines.
     */
    @SpeakeasyMetadata({ elemType: ExpenseTransactionLine })
    @Expose({ name: "lines" })
    @Type(() => ExpenseTransactionLine)
    lines?: ExpenseTransactionLine[];

    /**
     * Name of the merchant where the purchase took place
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantName" })
    merchantName?: string;

    /**
     * Any private, company notes about the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: any;
}