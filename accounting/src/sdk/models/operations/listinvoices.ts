/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListInvoicesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListInvoicesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListInvoicesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListInvoicesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListInvoicesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListInvoicesLinksLinksCurrent)
  current: ListInvoicesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListInvoicesLinksLinksNext)
  next?: ListInvoicesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListInvoicesLinksLinksPrevious)
  previous?: ListInvoicesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListInvoicesLinksLinksSelf)
  self: ListInvoicesLinksLinksSelf;
}

/**
 * Reference to the customer the invoice has been issued to.
 */
export class ListInvoicesLinksSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class ListInvoicesLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the item the line is linked to.
 */
export class ListInvoicesLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class ListInvoicesLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * 'id' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListInvoicesLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

export enum ListInvoicesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export enum ListInvoicesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export class ListInvoicesLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class ListInvoicesLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: ListInvoicesLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: ListInvoicesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: ListInvoicesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: ListInvoicesLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListInvoicesLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListInvoicesLinksSourceModifiedDateLineItemsAccountRef;

  /**
   * Friendly name of the goods or services provided.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Numerical value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "isDirectIncome" })
  isDirectIncome?: boolean;

  /**
   * Reference to the item the line is linked to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListInvoicesLinksSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units of goods or services provided.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * Amount of the line, inclusive of discounts but exclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Amount of tax for the line.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Reference to the tax rate to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListInvoicesLinksSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTracking)
  tracking?: ListInvoicesLinksSourceModifiedDateLineItemsTracking;

  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  @SpeakeasyMetadata({
    elemType: ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: ListInvoicesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit of goods or services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class ListInvoicesLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class ListInvoicesLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  /**
   * The date the payment was allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  allocatedOnDate?: string;

  /**
   * The currency of the transaction.
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

  /**
   * The total amount that has been allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

/**
 * The account that the allocated payment is made from or to.
 */
export class ListInvoicesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListInvoicesLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  /**
   * The account that the allocated payment is made from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => ListInvoicesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: ListInvoicesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  /**
   * Currency the payment has been made in.
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

  /**
   * Identifier of the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Notes attached to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * The date the payment was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  paidOnDate?: string;

  /**
   * Reference to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * Total amount that was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class ListInvoicesLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => ListInvoicesLinksSourceModifiedDatePaymentAllocationsAllocation)
  allocation: ListInvoicesLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => ListInvoicesLinksSourceModifiedDatePaymentAllocationsPayment)
  payment: ListInvoicesLinksSourceModifiedDatePaymentAllocationsPayment;
}

/**
 * Current state of the invoice:
 *
 * @remarks
 *
 * - `Draft` - Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.
 * - `Submitted` - Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (amountDue == totalAmount).
 * - `PartiallyPaid` - The balance paid against the invoice is positive, but less than the total invoice amount (0 < amountDue < totalAmount).
 * - `Paid` - Invoice is paid in full. This includes if the invoice has been credited or overpaid (amountDue == 0).
 * - `Void` - An invoice can become Void when it's deleted, refunded, written off, or cancelled. A voided invoice may still be PartiallyPaid, and so all outstanding amounts on voided invoices are removed from the accounts receivable account.
 */
export enum ListInvoicesLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class ListInvoicesLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class ListInvoicesLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

/**
 * > View the coverage for invoices in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
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
 * > **Invoices or bills?**
 * >
 * > In Codat, invoices represent accounts receivable only. For accounts payable invoices, see [Bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 *
 * > **Invoice PDF downloads**
 * >
 * > You can <a className="external" href="https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__data_invoices__invoiceId__pdf" target="_blank">download a PDF version</a> of an invoice for supported integrations.
 * >
 * > The filename will be invoice-{number}.pdf.
 */
export class ListInvoicesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  /**
   * Amount outstanding on the invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amountDue" })
  amountDue: number;

  /**
   * Currency of the invoice.
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

  /**
   * Reference to the customer the invoice has been issued to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListInvoicesLinksSourceModifiedDateCustomerRef)
  customerRef?: ListInvoicesLinksSourceModifiedDateCustomerRef;

  /**
   * Percentage rate (from 0 to 100) of discounts applied to the invoice. For example: A 5% discount will return a value of `5`, not `0.05`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Date the customer is due to be paid by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  dueDate?: string;

  /**
   * Identifier for the invoice, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Friendly reference for the invoice. If available, this appears in the file name of invoice attachments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceNumber" })
  invoiceNumber?: string;

  /**
   * Date of the invoice as recorded in the accounting system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate: string;

  /**
   * An array of line items.
   */
  @SpeakeasyMetadata({ elemType: ListInvoicesLinksSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => ListInvoicesLinksSourceModifiedDateLineItems)
  lineItems?: ListInvoicesLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListInvoicesLinksSourceModifiedDateMetadata)
  metadata?: ListInvoicesLinksSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Any additional information about the invoice. Where possible, Codat links to a data field in the accounting platform that is publicly available. This means that the contents of the note field are included when an invoice is emailed from the accounting platform to the customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * Date the invoice was marked as paid in the accounting system. If this field is not available from the accounting software, it is calculated by Codat using associated payments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  paidOnDate?: string;

  /**
   *
   *
   * @remarks
   * An array of payment allocations.
   */
  @SpeakeasyMetadata({
    elemType: ListInvoicesLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => ListInvoicesLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations?: ListInvoicesLinksSourceModifiedDatePaymentAllocations[];

  /**
   * List of references to related Sales orders.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the invoice:
   *
   * @remarks
   *
   * - `Draft` - Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.
   * - `Submitted` - Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (amountDue == totalAmount).
   * - `PartiallyPaid` - The balance paid against the invoice is positive, but less than the total invoice amount (0 < amountDue < totalAmount).
   * - `Paid` - Invoice is paid in full. This includes if the invoice has been credited or overpaid (amountDue == 0).
   * - `Void` - An invoice can become Void when it's deleted, refunded, written off, or cancelled. A voided invoice may still be PartiallyPaid, and so all outstanding amounts on voided invoices are removed from the accounts receivable account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListInvoicesLinksSourceModifiedDateStatusEnum;

  /**
   * Total amount of the invoice excluding any taxes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListInvoicesLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListInvoicesLinksSourceModifiedDateSupplementalData;

  /**
   * Amount of the invoice, inclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  /**
   * Numerical value of discounts applied to the invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  /**
   * Amount of tax on the invoice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({
    elemType: ListInvoicesLinksSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => ListInvoicesLinksSourceModifiedDateWithholdingTax)
  withholdingTax?: ListInvoicesLinksSourceModifiedDateWithholdingTax[];
}

/**
 * Codat's Paging Model
 */
export class ListInvoicesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListInvoicesLinksLinks)
  links: ListInvoicesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListInvoicesLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListInvoicesLinksSourceModifiedDate)
  results?: ListInvoicesLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  links?: ListInvoicesLinks;
}
