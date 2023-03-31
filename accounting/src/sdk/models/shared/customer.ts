/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Addressesitems } from "./addressesitems";
import { Contact } from "./contact";
import { CustomerStatusEnum } from "./customerstatusenum";
import { Metadata } from "./metadata";
import { SupplementalData } from "./supplementaldata";
import { Expose, Type } from "class-transformer";

/**
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 */
export class Customer extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({ elemType: Addressesitems })
  @Expose({ name: "addresses" })
  @Type(() => Addressesitems)
  addresses?: Addressesitems[];

  /**
   * Name of the main contact for the identified customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * An array of Contacts.
   */
  @SpeakeasyMetadata({ elemType: Contact })
  @Expose({ name: "contacts" })
  @Type(() => Contact)
  contacts?: Contact[];

  /**
   * Name of the customer as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

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
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the customer, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => Metadata)
  metadata?: Metadata;

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
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number. In the UK, this is typically the Companies House company registration number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

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
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CustomerStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => SupplementalData)
  supplementalData?: SupplementalData;

  /**
   * Company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}
