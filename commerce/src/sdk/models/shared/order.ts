/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerRef } from "./customerref";
import { LocationRef } from "./locationref";
import { OrderLineItem } from "./orderlineitem";
import { PaymentRef } from "./paymentref";
import { ServiceCharge } from "./servicecharge";
import { Expose, Type } from "class-transformer";

/**
 * Supplemental data is additional data you can include in our standard data types.
 *
 * @remarks
 *
 * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/additional-data) about supplemental data.
 */
export class OrderSupplementalData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: Record<string, Record<string, any>>;
}

/**
 * Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order. You can use data from the Orders endpoints to calculate key metrics, such as gross sales values and monthly recurring revenue (MRR).
 *
 * @remarks
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders) for this data type.
 *
 */
export class Order extends SpeakeasyBase {
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
    @Expose({ name: "closedDate" })
    closedDate?: string;

    /**
     * The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.
     *
     * @remarks
     *
     * Depending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model.
     *
     * For POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://docs.codat.io/codat-api#/operations/get-companies-companyId-connections-connectionId-push) endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

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
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Reference to the customer that placed the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => CustomerRef)
    customerRef?: CustomerRef;

    /**
     * A unique, persistent identifier for this record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Reference to the geographic location where the order was placed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locationRef" })
    @Type(() => LocationRef)
    locationRef?: LocationRef;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    @SpeakeasyMetadata({ elemType: OrderLineItem })
    @Expose({ name: "orderLineItems" })
    @Type(() => OrderLineItem)
    orderLineItems?: OrderLineItem[];

    /**
     * Friendly reference for the order in the commerce or point of sale platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "orderNumber" })
    orderNumber?: string;

    @SpeakeasyMetadata({ elemType: PaymentRef })
    @Expose({ name: "payments" })
    @Type(() => PaymentRef)
    payments?: PaymentRef[];

    @SpeakeasyMetadata({ elemType: ServiceCharge })
    @Expose({ name: "serviceCharges" })
    @Type(() => ServiceCharge)
    serviceCharges?: ServiceCharge[];

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/additional-data) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => OrderSupplementalData)
    supplementalData?: OrderSupplementalData;

    /**
     * Total amount of the order, including tax, net of any discounts and refunds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * Total amount of discount applied to the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalDiscount" })
    totalDiscount?: number;

    /**
     * Extra amount added to a bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalGratuity" })
    totalGratuity?: number;

    /**
     * Total amount refunded issued by a merchant on an order (always a negative value).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalRefund" })
    totalRefund?: number;

    /**
     * Total amount of tax applied to the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxAmount" })
    totalTaxAmount?: number;
}
