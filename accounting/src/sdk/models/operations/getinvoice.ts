import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=invoiceId",
  })
  invoiceId: string;
}

// GetInvoiceSourceModifiedDateCustomerRef
/**
 * Reference to the customer the invoice has been issued to.
 **/
export class GetInvoiceSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// GetInvoiceSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class GetInvoiceSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetInvoiceSourceModifiedDateLineItemsItemRef
/**
 * Reference to the item the line is linked to.
 **/
export class GetInvoiceSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetInvoiceSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class GetInvoiceSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum GetInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}
export enum GetInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: GetInvoiceSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: GetInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: GetInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: GetInvoiceSourceModifiedDateLineItemsTrackingProjectRef;
}

export class GetInvoiceSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsAccountRef)
  accountRef?: GetInvoiceSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "isDirectIncome" })
  isDirectIncome?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsItemRef)
  itemRef?: GetInvoiceSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: GetInvoiceSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTracking)
  tracking?: GetInvoiceSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class GetInvoiceSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class GetInvoiceSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

// GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paidOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class GetInvoiceSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => GetInvoiceSourceModifiedDatePaymentAllocationsAllocation)
  allocation: GetInvoiceSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => GetInvoiceSourceModifiedDatePaymentAllocationsPayment)
  payment: GetInvoiceSourceModifiedDatePaymentAllocationsPayment;
}
export enum GetInvoiceSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
}

// GetInvoiceSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class GetInvoiceSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class GetInvoiceSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// GetInvoiceSourceModifiedDate
/**
 * > View the coverage for invoices in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices" target="_blank">Data coverage explorer</a>.
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
 **/
export class GetInvoiceSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "amountDue" })
  amountDue: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => GetInvoiceSourceModifiedDateCustomerRef)
  customerRef?: GetInvoiceSourceModifiedDateCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  @SpeakeasyMetadata({ elemType: GetInvoiceSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => GetInvoiceSourceModifiedDateLineItems)
  lineItems?: GetInvoiceSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetInvoiceSourceModifiedDateMetadata)
  metadata?: GetInvoiceSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paidOnDate?: Date;

  @SpeakeasyMetadata({
    elemType: GetInvoiceSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => GetInvoiceSourceModifiedDatePaymentAllocations)
  paymentAllocations?: GetInvoiceSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetInvoiceSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetInvoiceSourceModifiedDateSupplementalData)
  supplementalData?: GetInvoiceSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: GetInvoiceSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => GetInvoiceSourceModifiedDateWithholdingTax)
  withholdingTax?: GetInvoiceSourceModifiedDateWithholdingTax[];
}

export class GetInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetInvoiceSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
