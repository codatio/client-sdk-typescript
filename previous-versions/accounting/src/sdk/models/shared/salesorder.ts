/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingCustomerRef } from "./accountingcustomerref";
import { Items } from "./items";
import { Metadata } from "./metadata";
import { SalesOrderInvoiceStatus } from "./salesorderinvoicestatus";
import { SalesOrderLineItem } from "./salesorderlineitem";
import { SalesOrderStatus } from "./salesorderstatus";
import { Expose, Type } from "class-transformer";

/**
 * Details of the named contact at the delivery address.
 */
export class SalesOrderContact extends SpeakeasyBase {
    /**
     * Email address of the contact at the delivery address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Name of the contact at the delivery address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Phone number of the contact at the delivery address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;
}

/**
 * Delivery details for any goods that have been ordered.
 */
export class SalesOrderShipTo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Items)
    address?: Items;

    /**
     * Details of the named contact at the delivery address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contact" })
    @Type(() => SalesOrderContact)
    contact?: SalesOrderContact;
}

/**
 * > View the coverage for sales orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=salesOrders" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A sales order represents a customer's intention to purchase goods or services from a seller and usually includes information such as the expected delivery date and shipping details. This information can be used to provide visibility on a business's expected receivables and to track sales through the full procurement process.
 *
 * A sales order is typically converted to an [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) after approval.
 */
export class SalesOrder extends SpeakeasyBase {
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
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     *
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, include the required currency rate in the expense transaction.  |
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    /**
     * A customer-supplied identifier for the purchase order in the customer's system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerPurchaseOrderNumber" })
    customerPurchaseOrderNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => AccountingCustomerRef)
    customerRef?: AccountingCustomerRef;

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
    @Expose({ name: "expectedDeliveryDate" })
    expectedDeliveryDate?: string;

    /**
     * Identifier for the sales order, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * If the sales order is converted to an invoice, or will be in future, the invoicingStatus field indicates the current stage of the invoicing process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoicingStatus" })
    invoicingStatus?: SalesOrderInvoiceStatus;

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
    @Expose({ name: "issueDate" })
    issueDate?: string;

    /**
     * An array of line items.
     */
    @SpeakeasyMetadata({ elemType: SalesOrderLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => SalesOrderLineItem)
    lineItems?: SalesOrderLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Any additional information associated with the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    note?: string;

    /**
     * Friendly reference for the sales order, commonly generated by the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "salesOrderNumber" })
    salesOrderNumber?: string;

    /**
     * Delivery details for any goods that have been ordered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipTo" })
    @Type(() => SalesOrderShipTo)
    shipTo?: SalesOrderShipTo;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Current state of the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: SalesOrderStatus;

    /**
     * Total amount of the sales order, including discounts but excluding tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal?: number;

    /**
     * Total amount of the sales order, including discounts and tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * Total value of any discounts applied to the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalDiscount" })
    totalDiscount?: number;

    /**
     * Total amount of tax included in the sales order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxAmount" })
    totalTaxAmount?: number;
}
