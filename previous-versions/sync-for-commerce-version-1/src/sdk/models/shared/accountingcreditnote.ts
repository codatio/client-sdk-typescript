/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingCustomerRef } from "./accountingcustomerref";
import { CreditNoteLineItem } from "./creditnotelineitem";
import { CreditNoteStatus } from "./creditnotestatus";
import { Metadata } from "./metadata";
import { PaymentAllocationsitems } from "./paymentallocationsitems";
import { SupplementalData } from "./supplementaldata";
import { WithholdingTaxitems } from "./withholdingtaxitems";
import { Expose, Type } from "class-transformer";

/**
 * > View the coverage for credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * Think of a credit note as a voucher issued to a customer. It is a reduction that can be applied against one or multiple invoices. A credit note can either reduce the amount owed or cancel out an invoice entirely.
 *
 * In the Codat system a credit note is issued to a [customer's](https://docs.codat.io/accounting-api#/schemas/Customer) accounts receivable.
 *
 * It contains details of:
 * * The amount of credit remaining and its status.
 * * Payment allocations against the payments type, in this case an invoice.
 * * Which customers the credit notes have been issued to.
 */
export class AccountingCreditNote extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "additionalTaxAmount" })
    additionalTaxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "additionalTaxPercentage" })
    additionalTaxPercentage?: number;

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
    @Expose({ name: "allocatedOnDate" })
    allocatedOnDate?: string;

    /**
     * Friendly reference for the credit note.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "creditNoteNumber" })
    creditNoteNumber?: string;

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
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => AccountingCustomerRef)
    customerRef?: AccountingCustomerRef;

    /**
     * Percentage rate (from 0 to 100) of discounts applied to the credit note.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountPercentage" })
    discountPercentage: number;

    /**
     * Identifier for the credit note, unique to the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

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

    @SpeakeasyMetadata({ elemType: CreditNoteLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => CreditNoteLineItem)
    lineItems?: CreditNoteLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Any additional information about the credit note. Where possible, Codat links to a data field in the accounting platform that is publicly available. This means that the contents of the note field are included when a credit note is emailed from the accounting platform to the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    note?: string;

    /**
     * An array of payment allocations.
     */
    @SpeakeasyMetadata({ elemType: PaymentAllocationsitems })
    @Expose({ name: "paymentAllocations" })
    @Type(() => PaymentAllocationsitems)
    paymentAllocations?: PaymentAllocationsitems[];

    /**
     * Unused balance of totalAmount originally raised.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remainingCredit" })
    remainingCredit: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: CreditNoteStatus;

    /**
     * Value of the credit note, including discounts and excluding tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal: number;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/additional-data) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;

    /**
     * Total amount of credit that has been applied to the customer's accounts receivable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount: number;

    /**
     * Any discounts applied to the credit note amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalDiscount" })
    totalDiscount: number;

    /**
     * Any tax applied to the credit note amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxAmount" })
    totalTaxAmount: number;

    @SpeakeasyMetadata({ elemType: WithholdingTaxitems })
    @Expose({ name: "withholdingTax" })
    @Type(() => WithholdingTaxitems)
    withholdingTax?: WithholdingTaxitems[];
}
