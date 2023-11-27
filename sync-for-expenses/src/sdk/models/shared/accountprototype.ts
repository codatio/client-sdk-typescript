/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
import { AccountType } from "./accounttype";
import { SupplementalData } from "./supplementaldata";
import { Expose, Type } from "class-transformer";

/**
 * When querying Codat's data model, some data types return `validDatatypeLinks` metadata in the JSON response. This indicates where that object can be used as a reference—a _valid link_—when creating or updating other data.
 *
 * @remarks
 *
 * For example, `validDatatypeLinks` might indicate the following references:
 *
 * - Which tax rates are valid to use on the line item of a bill.
 * - Which items can be used when creating an invoice.
 *
 * You can use `validDatatypeLinks` to present your SMB customers with only valid choices when selecting objects from a list, for example.
 *
 * ## `validDatatypeLinks` example
 *
 * The following example uses the `Accounting.Accounts` data type. It shows that, on the linked integration, this account is valid as the account on a payment or bill payment; and as the account referenced on the line item of a direct income or direct cost. Because there is no valid link to Invoices or Bills, using this account on those data types will result in an error.
 *
 * ```json validDatatypeLinks for an account
 * {
 *             "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
 *             "nominalCode": "090",
 *             "name": "Business Bank Account",
 *             #...
 *             "validDatatypeLinks": [
 *                 {
 *                     "property": "Id",
 *                     "links": [
 *                         "Payment.AccountRef.Id",
 *                         "BillPayment.AccountRef.Id",
 *                         "DirectIncome.LineItems.AccountRef.Id",
 *                         "DirectCost.LineItems.AccountRef.Id"
 *                     ]
 *                 }
 *             ]
 *         }
 * ```
 *
 *
 *
 * ## Support for `validDatatypeLinks`
 *
 * Codat currently supports `validDatatypeLinks` for some data types on our Xero, QuickBooks Online, QuickBooks Desktop, Exact (NL), and Sage Business Cloud integrations.
 *
 * If you'd like us to extend support to more data types or integrations, suggest or vote for this on our <a href="https://portal.productboard.com/codat/5-product-roadmap">Product Roadmap</a>.
 */
export class ValidDataTypeLinks extends SpeakeasyBase {
    /**
     * Supported `dataTypes` that the record can be linked to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "links" })
    links?: string[];

    /**
     * The property from the account that can be linked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "property" })
    property?: string;
}

export class AccountPrototype extends SpeakeasyBase {
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
     * Current balance in the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currentBalance" })
    currentBalance?: number;

    /**
     * Description for the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Full category of the account.
     *
     * @remarks
     *
     * For example, `Liability.Current` or `Income.Revenue`. To determine a list of possible categories for each integration, see our examples, follow our [Create, update, delete data](https://docs.codat.io/using-the-api/push) guide, or refer to the integration's own documentation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fullyQualifiedCategory" })
    fullyQualifiedCategory?: string;

    /**
     * Full name of the account, for example:
     *
     * @remarks
     * - `Cash On Hand`
     * - `Rents Held In Trust`
     * - `Fixed Asset`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fullyQualifiedName" })
    fullyQualifiedName?: string;

    /**
     * Confirms whether the account is a bank account or not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isBankAccount" })
    isBankAccount?: boolean;

    /**
     * Name of the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nominalCode" })
    nominalCode?: string;

    /**
     * Status of the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AccountStatus;

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

    /**
     * Type of account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: AccountType;

    /**
     * The validDatatypeLinks can be used to determine whether an account can be correctly mapped to another object; for example, accounts with a `type` of `income` might only support being used on an Invoice and Direct Income. For more information, see [Valid Data Type Links](/sync-for-expenses-api#/schemas/ValidDataTypeLinks).
     */
    @SpeakeasyMetadata({ elemType: ValidDataTypeLinks })
    @Expose({ name: "validDatatypeLinks" })
    @Type(() => ValidDataTypeLinks)
    validDatatypeLinks?: ValidDataTypeLinks[];
}
