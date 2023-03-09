import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class CreateInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class CreateInvoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// CreateInvoiceSourceModifiedDateCustomerRef
/** 
 * Reference to the customer the invoice has been issued to.
**/
export class CreateInvoiceSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateInvoiceSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class CreateInvoiceSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateInvoiceSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class CreateInvoiceSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateInvoiceSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class CreateInvoiceSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum CreateInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}
export enum CreateInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}

export class CreateInvoiceSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoiceSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: CreateInvoiceSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: CreateInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CreateInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: CreateInvoiceSourceModifiedDateLineItemsTrackingProjectRef;
}

export class CreateInvoiceSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreateInvoiceSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsItemRef)
  itemRef?: CreateInvoiceSourceModifiedDateLineItemsItemRef;

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
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreateInvoiceSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTracking)
  tracking?: CreateInvoiceSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: CreateInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateInvoiceSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateInvoiceSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class CreateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoiceSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: CreateInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateInvoiceSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => CreateInvoiceSourceModifiedDatePaymentAllocationsAllocation)
  allocation: CreateInvoiceSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => CreateInvoiceSourceModifiedDatePaymentAllocationsPayment)
  payment: CreateInvoiceSourceModifiedDatePaymentAllocationsPayment;
}
export enum CreateInvoiceSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void"
}

// CreateInvoiceSourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class CreateInvoiceSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class CreateInvoiceSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// CreateInvoiceSourceModifiedDate
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
export class CreateInvoiceSourceModifiedDate extends SpeakeasyBase {
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
  @Type(() => CreateInvoiceSourceModifiedDateCustomerRef)
  customerRef?: CreateInvoiceSourceModifiedDateCustomerRef;

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

  @SpeakeasyMetadata({ elemType: CreateInvoiceSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => CreateInvoiceSourceModifiedDateLineItems)
  lineItems?: CreateInvoiceSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateInvoiceSourceModifiedDateMetadata)
  metadata?: CreateInvoiceSourceModifiedDateMetadata;

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

  @SpeakeasyMetadata({ elemType: CreateInvoiceSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CreateInvoiceSourceModifiedDatePaymentAllocations)
  paymentAllocations?: CreateInvoiceSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateInvoiceSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateInvoiceSourceModifiedDateSupplementalData)
  supplementalData?: CreateInvoiceSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: CreateInvoiceSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => CreateInvoiceSourceModifiedDateWithholdingTax)
  withholdingTax?: CreateInvoiceSourceModifiedDateWithholdingTax[];
}

export class CreateInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateInvoicePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateInvoiceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateInvoiceSourceModifiedDate;
}

export class CreateInvoice200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateInvoice200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class CreateInvoice200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateInvoice200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateInvoice200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateInvoice200ApplicationJSONChangesTypeEnum;
}

// CreateInvoice200ApplicationJSONSourceModifiedDateCustomerRef
/** 
 * Reference to the customer the invoice has been issued to.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}
export enum CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking)
  tracking?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation)
  allocation: CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment)
  payment: CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}
export enum CreateInvoice200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void"
}

// CreateInvoice200ApplicationJSONSourceModifiedDateSupplementalData
/** 
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
**/
export class CreateInvoice200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class CreateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// CreateInvoice200ApplicationJSONSourceModifiedDate
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
export class CreateInvoice200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateCustomerRef)
  customerRef?: CreateInvoice200ApplicationJSONSourceModifiedDateCustomerRef;

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

  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: CreateInvoice200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateInvoice200ApplicationJSONSourceModifiedDateMetadata;

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

  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations)
  paymentAllocations?: CreateInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateInvoice200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: CreateInvoice200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: CreateInvoice200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum CreateInvoice200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class CreateInvoice200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateInvoice200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class CreateInvoice200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => CreateInvoice200ApplicationJSONValidationValidationItem)
  errors?: CreateInvoice200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => CreateInvoice200ApplicationJSONValidationValidationItem)
  warnings?: CreateInvoice200ApplicationJSONValidationValidationItem[];
}

export class CreateInvoice200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateInvoice200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateInvoice200ApplicationJSONChanges)
  changes?: CreateInvoice200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateInvoice200ApplicationJSONSourceModifiedDate)
  data?: CreateInvoice200ApplicationJSONSourceModifiedDate;

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
  status: CreateInvoice200ApplicationJSONStatusEnum;

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
  @Type(() => CreateInvoice200ApplicationJSONValidation)
  validation?: CreateInvoice200ApplicationJSONValidation;
}

export class CreateInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createInvoice200ApplicationJSONObject?: CreateInvoice200ApplicationJSON;
}