import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostInvoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostInvoiceSourceModifiedDateCustomerRef
/** 
 * Reference to the customer the invoice has been issued to.
**/
export class PostInvoiceSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostInvoiceSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostInvoiceSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostInvoiceSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostInvoiceSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostInvoiceSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostInvoiceSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoiceSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
export enum PostInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}
export enum PostInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}

export class PostInvoiceSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoiceSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostInvoiceSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostInvoiceSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostInvoiceSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostInvoiceSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectIncome" })
  isDirectIncome?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostInvoiceSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostInvoiceSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostInvoiceSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostInvoiceSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostInvoiceSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoiceSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class PostInvoiceSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostInvoiceSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostInvoiceSourceModifiedDatePaymentAllocationsPayment;
}
export enum PostInvoiceSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void"
}

export class PostInvoiceSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class PostInvoiceSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// PostInvoiceSourceModifiedDate
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
export class PostInvoiceSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostInvoiceSourceModifiedDateCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostInvoiceSourceModifiedDateLineItems })
  lineItems?: PostInvoiceSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostInvoiceSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostInvoiceSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostInvoiceSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostInvoiceSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostInvoiceSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostInvoiceSourceModifiedDateWithholdingTax })
  withholdingTax?: PostInvoiceSourceModifiedDateWithholdingTax[];
}

export class PostInvoiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInvoicePathParams;

  @SpeakeasyMetadata()
  queryParams: PostInvoiceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostInvoiceSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostInvoiceSecurity;
}

export class PostInvoice200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum PostInvoice200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostInvoice200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostInvoice200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostInvoice200ApplicationJSONChangesTypeEnum;
}

// PostInvoice200ApplicationJSONSourceModifiedDateCustomerRef
/** 
 * Reference to the customer the invoice has been issued to.
**/
export class PostInvoice200ApplicationJSONSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
export enum PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}
export enum PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}

export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectIncome" })
  isDirectIncome?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostInvoice200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}
export enum PostInvoice200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void"
}

export class PostInvoice200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class PostInvoice200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// PostInvoice200ApplicationJSONSourceModifiedDate
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
export class PostInvoice200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostInvoice200ApplicationJSONSourceModifiedDateCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostInvoice200ApplicationJSONSourceModifiedDateLineItems })
  lineItems?: PostInvoice200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostInvoice200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostInvoice200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostInvoice200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostInvoice200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostInvoice200ApplicationJSONSourceModifiedDateWithholdingTax })
  withholdingTax?: PostInvoice200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum PostInvoice200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostInvoice200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostInvoice200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostInvoice200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostInvoice200ApplicationJSONValidationValidationItem })
  errors?: PostInvoice200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostInvoice200ApplicationJSONValidationValidationItem })
  warnings?: PostInvoice200ApplicationJSONValidationValidationItem[];
}

export class PostInvoice200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostInvoice200ApplicationJSONChanges })
  changes?: PostInvoice200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostInvoice200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostInvoice200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostInvoice200ApplicationJSONValidation;
}

export class PostInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postInvoice200ApplicationJSONObject?: PostInvoice200ApplicationJSON;
}