/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingInvoice } from "./accountinginvoice";
import { DataType } from "./datatype";
import { PushOperationChange } from "./pushoperationchange";
import { PushOperationStatus } from "./pushoperationstatus";
import { Validation } from "./validation";
import { Expose, Type } from "class-transformer";

export class AccountingCreateInvoiceResponse extends SpeakeasyBase {
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

    /**
     * > **Invoices or bills?**
     *
     * @remarks
     * >
     * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company issued an invoice, and is owed money (accounts receivable) we call this an Invoice.
     * >
     * > See [Bills](https://docs.codat.io/accounting-api#/schemas/Bill) for the accounts payable equivalent of bills.
     *
     * View the coverage for invoices in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices" target="_blank">Data coverage explorer</a>.
     *
     * ## Overview
     *
     * An invoice is an itemized record of goods sold or services provided to a [customer](https://docs.codat.io/accounting-api#/schemas/Customer).
     *
     * In Codat, an invoice contains details of:
     *
     * - The timeline of the invoice—when it was raised, marked as paid, last edited, and so on.
     * - How much the invoice is for, what portion of the invoice is tax or discounts, and what currency the amounts are represented in.
     * - Who the invoice has been raised to; the _customer_.
     * - The breakdown of what the invoice is for; the _line items_.
     * - Any [payments](https://docs.codat.io/accounting-api#/schemas/Payment) assigned to the invoice; the _payment allocations_.
     *
     * > **Invoice PDF downloads**
     * >
     * > You can <a className="external" href="https://docs.codat.io/accounting-api#/operations/get-invoice-pdf" target="_blank">download a PDF version</a> of an invoice for supported integrations.
     * >
     * > The filename will be invoice-{number}.pdf.
     *
     * > **Referencing an invoice in Sage 50 and ClearBooks**
     * >
     * > In Sage 50 and ClearBooks, you may prefer to use the **invoiceNumber** to identify an invoice rather than the invoice **id**. Each time a draft invoice is submitted or printed, the draft **id** becomes void and a submitted invoice with a new **id** exists in its place. In both platforms, the **invoiceNumber** should remain the same.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => AccountingInvoice)
    data?: AccountingInvoice;

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
