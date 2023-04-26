/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountStatusEnum } from "./accountstatusenum";
import { AccountTypeEnum } from "./accounttypeenum";
import { Metadata } from "./metadata";
import { ValidDataTypeLinks } from "./validdatatypelinks";
import { Expose, Type } from "class-transformer";

/**
 * > **Language tip:** Accounts are also referred to as **chart of accounts**, **nominal accounts**, and **general ledger**.
 *
 * @remarks
 *
 * View the coverage for accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Accounts are the categories a business uses to record accounting transactions. From the Accounts endpoints, you can retrieve a list of all accounts for a specified company.
 *
 * The categories for an account include:
 *   * Asset
 *   * Expense
 *   * Income
 *   * Liability
 *   * Equity.
 *
 * > **Accounts with no category**
 * >
 * > If an account is pulled from the chart of accounts and its nominal code does not lie within the category layout for the company's accounts, then the **type** is `Unknown`. The **fullyQualifiedCategory** and **fullyQualifiedName** fields return `null`.
 * >
 * > This approach gives a true representation of the company's accounts whilst preventing distorting financials such as a company's profit and loss and balance sheet reports.
 */
export class Account extends SpeakeasyBase {
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
   * Full category of the account. For example:
   *
   * @remarks
   * Liability.Current or Income.Revenue. See example data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fullyQualifiedCategory" })
  fullyQualifiedCategory?: string;

  /**
   * Full name of the account, for example:
   *
   * @remarks
   * - `Liability.Current.VAT`
   * - `Income.Revenue.Sales`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fullyQualifiedName" })
  fullyQualifiedName?: string;

  /**
   * Identifier for the account, unique for the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Confirms whether the account is a bank account or not.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isBankAccount" })
  isBankAccount: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => Metadata)
  metadata?: Metadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

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

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of the account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: AccountStatusEnum;

  /**
   * Type of account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: AccountTypeEnum;

  /**
   * The validDatatypeLinks can be used to determine whether an account can be correctly mapped to another object; for example, accounts with a `type` of `income` might only support being used on an Invoice and Direct Income. For more information, see [Valid Data Type Links](/accounting-api#/schemas/ValidDataTypeLinks).
   */
  @SpeakeasyMetadata({ elemType: ValidDataTypeLinks })
  @Expose({ name: "validDatatypeLinks" })
  @Type(() => ValidDataTypeLinks)
  validDatatypeLinks?: ValidDataTypeLinks[];
}
