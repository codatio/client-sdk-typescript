/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Expose, Type } from "class-transformer";

/**
 * In Codat, a company represents a business sharing access to their data. Each company can have multiple [connections](https://docs.codat.io/sync-for-commerce-api#/schemas/Connection) to different data sources such as one connection to [Xero](https://docs.codat.io/integrations/accounting/xero/accounting-xero) for accounting data, two connections to [Plaid](https://docs.codat.io/integrations/banking/plaid/banking-plaid) for two bank accounts and a connection to [Zettle](https://docs.codat.io/integrations/commerce/zettle/commerce-zettle) for POS data.
 *
 * @remarks
 *
 * Typically each company is one of your customers.
 *
 * When you create a company, you can specify a `name` and we will automatically generate a unique `id` for the company. You can also add a `description` to store any additional information about the company.
 */
export class Company extends SpeakeasyBase {
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
    @Expose({ name: "created" })
    created?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserName" })
    createdByUserName?: string;

    @SpeakeasyMetadata({ elemType: Connection })
    @Expose({ name: "dataConnections" })
    @Type(() => Connection)
    dataConnections?: Connection[];

    /**
     * Additional information about the company. This can be used to store foreign IDs, references, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

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
    @Expose({ name: "lastSync" })
    lastSync?: string;

    /**
     * The name of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform?: string;

    /**
     * The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "redirect" })
    redirect: string;
}
