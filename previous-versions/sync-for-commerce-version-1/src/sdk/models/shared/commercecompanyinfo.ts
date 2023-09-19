/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountBalance } from "./accountbalance";
import { Items } from "./items";
import { PhoneNumbersitems } from "./phonenumbersitems";
import { WebLinksitems } from "./weblinksitems";
import { Expose, Type } from "class-transformer";

/**
 * In the Codat system, company information includes standard commercial details about
 *
 * @remarks
 * a linked company, such as their address, phone number, and company registration.
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=companyInfo) for this data type.
 *
 */
export class CommerceCompanyInfo extends SpeakeasyBase {
    /**
     * The available and current cash balances for the company's accounts
     */
    @SpeakeasyMetadata({ elemType: AccountBalance })
    @Expose({ name: "accountBalances" })
    @Type(() => AccountBalance)
    accountBalances?: AccountBalance[];

    /**
     * Addresses associated with the company
     */
    @SpeakeasyMetadata({ elemType: Items })
    @Expose({ name: "addresses" })
    @Type(() => Items)
    addresses?: Items[];

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
    @Expose({ name: "baseCurrency" })
    baseCurrency?: string;

    /**
     * Identifier or reference for the company in the commerce platform
     */
    @SpeakeasyMetadata()
    @Expose({ name: "commercePlatformRef" })
    commercePlatformRef?: string;

    /**
     * The full legal name of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyLegalName" })
    companyLegalName?: string;

    /**
     * The name of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName?: string;

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
    @Expose({ name: "createdDate" })
    createdDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Phone numbers associated with the company
     */
    @SpeakeasyMetadata({ elemType: PhoneNumbersitems })
    @Expose({ name: "phoneNumbers" })
    @Type(() => PhoneNumbersitems)
    phoneNumbers?: PhoneNumbersitems[];

    /**
     * The registration number of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "registrationNumber" })
    registrationNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * URL addresses for the originating system. For example, potential use cases include 'deeplinking' to the originating system
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceUrls" })
    sourceUrls?: Record<string, string>;

    /**
     * Weblinks associated with the company
     */
    @SpeakeasyMetadata({ elemType: WebLinksitems })
    @Expose({ name: "webLinks" })
    @Type(() => WebLinksitems)
    webLinks?: WebLinksitems[];
}