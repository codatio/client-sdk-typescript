/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataType } from "./datatype";
import { PushOperationChange } from "./pushoperationchange";
import { PushOperationStatus } from "./pushoperationstatus";
import { Validation } from "./validation";
import { Expose, Type } from "class-transformer";

/**
 * The type of transactions and balances on the account.
 *
 * @remarks
 * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
 * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
 */
export enum BankAccountCreateResponseBankAccountType {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
}

export class Metadata extends SpeakeasyBase {
    /**
     * Indicates whether the record has been deleted in the third-party system this record originated from.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDeleted" })
    isDeleted?: boolean;
}

/**
 * Supplemental data is additional data you can include in our standard data types.
 *
 * @remarks
 *
 * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
 */
export class SupplementalData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: Record<string, Record<string, any>>;
}

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/bank-feeds-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific data connection.
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export class AccountingBankAccount extends SpeakeasyBase {
    /**
     * Name of the bank account in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountName" })
    accountName?: string;

    /**
     * Account number for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
     *
     * FreeAgent integrations
     * For Credit accounts, only the last four digits are required. For other types, the field is optional.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber?: string;

    /**
     * The type of transactions and balances on the account.
     *
     * @remarks
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: BankAccountCreateResponseBankAccountType;

    /**
     * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "availableBalance" })
    availableBalance?: number;

    /**
     * Balance of the bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * International bank account number of the account. Often used when making or receiving international payments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iBan" })
    iBan?: string;

    /**
     * Identifier for the account, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The institution of the bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "institution" })
    institution?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Code used to identify each nominal account for a business.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nominalCode" })
    nominalCode?: string;

    /**
     * Pre-arranged overdraft limit of the account.
     *
     * @remarks
     *
     * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "overdraftLimit" })
    overdraftLimit?: number;

    /**
     * Sort code for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sortCode" })
    sortCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;
}

export class BankAccountCreateResponse extends SpeakeasyBase {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    @SpeakeasyMetadata({ elemType: PushOperationChange })
    @Expose({ name: "changes" })
    @Type(() => PushOperationChange)
    changes?: PushOperationChange[];

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId: string;

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
    @Expose({ name: "completedOnUtc" })
    completedOnUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => AccountingBankAccount)
    data?: AccountingBankAccount;

    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataConnectionKey" })
    dataConnectionKey: string;

    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: DataType;

    /**
     * A message about the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage?: string;

    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pushOperationKey" })
    pushOperationKey: string;

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
    @Expose({ name: "requestedOnUtc" })
    requestedOnUtc: string;

    /**
     * The current status of the push operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PushOperationStatus;

    /**
     * Push status code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode: number;

    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInMinutes" })
    timeoutInMinutes?: number;

    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInSeconds" })
    timeoutInSeconds?: number;

    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    @Type(() => Validation)
    validation?: Validation;
}
