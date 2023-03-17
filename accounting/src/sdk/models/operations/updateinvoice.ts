import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// UpdateInvoiceSourceModifiedDateCustomerRef
/**
 * Reference to the customer the invoice has been issued to.
 **/
export class UpdateInvoiceSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// UpdateInvoiceSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class UpdateInvoiceSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoiceSourceModifiedDateLineItemsItemRef
/**
 * Reference to the item the line is linked to.
 **/
export class UpdateInvoiceSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoiceSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class UpdateInvoiceSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum UpdateInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}
export enum UpdateInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export class UpdateInvoiceSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoiceSourceModifiedDateLineItemsTracking
/**
 * Categories, and a project and customer, against which the item is tracked.
 **/
export class UpdateInvoiceSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: UpdateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: UpdateInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: UpdateInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: UpdateInvoiceSourceModifiedDateLineItemsTrackingProjectRef;
}

export class UpdateInvoiceSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsAccountRef)
  accountRef?: UpdateInvoiceSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdateInvoiceSourceModifiedDateLineItemsItemRef;

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
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: UpdateInvoiceSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTracking)
  tracking?: UpdateInvoiceSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType: UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: UpdateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class UpdateInvoiceSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class UpdateInvoiceSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// UpdateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class UpdateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateInvoiceSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => UpdateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: UpdateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class UpdateInvoiceSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => UpdateInvoiceSourceModifiedDatePaymentAllocationsAllocation)
  allocation: UpdateInvoiceSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => UpdateInvoiceSourceModifiedDatePaymentAllocationsPayment)
  payment: UpdateInvoiceSourceModifiedDatePaymentAllocationsPayment;
}
export enum UpdateInvoiceSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
}

// UpdateInvoiceSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class UpdateInvoiceSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class UpdateInvoiceSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// UpdateInvoiceSourceModifiedDate
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
export class UpdateInvoiceSourceModifiedDate extends SpeakeasyBase {
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
  @Type(() => UpdateInvoiceSourceModifiedDateCustomerRef)
  customerRef?: UpdateInvoiceSourceModifiedDateCustomerRef;

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

  @SpeakeasyMetadata({ elemType: UpdateInvoiceSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => UpdateInvoiceSourceModifiedDateLineItems)
  lineItems?: UpdateInvoiceSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateInvoiceSourceModifiedDateMetadata)
  metadata?: UpdateInvoiceSourceModifiedDateMetadata;

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
    elemType: UpdateInvoiceSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => UpdateInvoiceSourceModifiedDatePaymentAllocations)
  paymentAllocations?: UpdateInvoiceSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateInvoiceSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateInvoiceSourceModifiedDateSupplementalData)
  supplementalData?: UpdateInvoiceSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({
    elemType: UpdateInvoiceSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => UpdateInvoiceSourceModifiedDateWithholdingTax)
  withholdingTax?: UpdateInvoiceSourceModifiedDateWithholdingTax[];
}

export class UpdateInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdateInvoiceSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=forceUpdate",
  })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=invoiceId",
  })
  invoiceId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class UpdateInvoice200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum UpdateInvoice200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class UpdateInvoice200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => UpdateInvoice200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: UpdateInvoice200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: UpdateInvoice200ApplicationJSONChangesTypeEnum;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateCustomerRef
/**
 * Reference to the customer the invoice has been issued to.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef
/**
 * Reference to the item the line is linked to.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}
export enum UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking
/**
 * Categories, and a project and customer, against which the item is tracked.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  categoryRefs: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef
  )
  customerRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef
  )
  projectRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef
  )
  accountRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(
    () => UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
  )
  taxRateRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(
    () => UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking
  )
  tracking?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType:
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation
  )
  allocation: UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(
    () =>
      UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment
  )
  payment: UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}
export enum UpdateInvoice200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
}

// UpdateInvoice200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class UpdateInvoice200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class UpdateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// UpdateInvoice200ApplicationJSONSourceModifiedDate
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
export class UpdateInvoice200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateCustomerRef)
  customerRef?: UpdateInvoice200ApplicationJSONSourceModifiedDateCustomerRef;

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

  @SpeakeasyMetadata({
    elemType: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: UpdateInvoice200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdateInvoice200ApplicationJSONSourceModifiedDateMetadata;

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
    elemType:
      UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(
    () => UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations
  )
  paymentAllocations?: UpdateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateInvoice200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: UpdateInvoice200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({
    elemType: UpdateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: UpdateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum UpdateInvoice200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class UpdateInvoice200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// UpdateInvoice200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class UpdateInvoice200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdateInvoice200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => UpdateInvoice200ApplicationJSONValidationValidationItem)
  errors?: UpdateInvoice200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: UpdateInvoice200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => UpdateInvoice200ApplicationJSONValidationValidationItem)
  warnings?: UpdateInvoice200ApplicationJSONValidationValidationItem[];
}

export class UpdateInvoice200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateInvoice200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdateInvoice200ApplicationJSONChanges)
  changes?: UpdateInvoice200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => UpdateInvoice200ApplicationJSONSourceModifiedDate)
  data?: UpdateInvoice200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateInvoice200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => UpdateInvoice200ApplicationJSONValidation)
  validation?: UpdateInvoice200ApplicationJSONValidation;
}

export class UpdateInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  updateInvoice200ApplicationJSONObject?: UpdateInvoice200ApplicationJSON;
}
