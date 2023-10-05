/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of transaction for the bank statement line.
 */
export enum BankTransactionsBankTransactionType {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
    Int = "Int",
    Div = "Div",
    Fee = "Fee",
    SerChg = "SerChg",
    Dep = "Dep",
    Atm = "Atm",
    Pos = "Pos",
    Xfer = "Xfer",
    Check = "Check",
    Payment = "Payment",
    Cash = "Cash",
    DirectDep = "DirectDep",
    DirectDebit = "DirectDebit",
    RepeatPmt = "RepeatPmt",
    Other = "Other",
}

export class BankTransactions extends SpeakeasyBase {
    /**
     * The amount transacted in the bank transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * The remaining balance in the account with ID `accountId`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clearedOnDate" })
    clearedOnDate?: string;

    /**
     * The giving or receiving party such as a person or organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "counterparty" })
    counterparty?: string;

    /**
     * Description of the bank transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Identifier for the bank account transaction, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * `True` if the bank transaction has been [reconciled](https://www.xero.com/uk/guides/what-is-bank-reconciliation/) in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reconciled" })
    reconciled?: boolean;

    /**
     * An optional reference to the bank transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    /**
     * Type of transaction for the bank statement line.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionType" })
    transactionType?: BankTransactionsBankTransactionType;
}
