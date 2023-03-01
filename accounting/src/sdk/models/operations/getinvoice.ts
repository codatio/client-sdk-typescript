import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}

export class GetInvoiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoicePathParams;

  @SpeakeasyMetadata()
  security: GetInvoiceSecurity;
}

// GetInvoiceSourceModifiedDateCustomerRef
/** 
 * Reference to the customer the invoice has been issued to.
**/
export class GetInvoiceSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// GetInvoiceSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class GetInvoiceSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetInvoiceSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class GetInvoiceSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetInvoiceSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class GetInvoiceSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
export enum GetInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}
export enum GetInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Project = "Project"
}

export class GetInvoiceSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: GetInvoiceSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: GetInvoiceSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: GetInvoiceSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: GetInvoiceSourceModifiedDateLineItemsTrackingProjectRef;
}

export class GetInvoiceSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetInvoiceSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectIncome" })
  isDirectIncome?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: GetInvoiceSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: GetInvoiceSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: GetInvoiceSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: GetInvoiceSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class GetInvoiceSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class GetInvoiceSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetInvoiceSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetInvoiceSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class GetInvoiceSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: GetInvoiceSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: GetInvoiceSourceModifiedDatePaymentAllocationsPayment;
}
export enum GetInvoiceSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void"
}

export class GetInvoiceSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class GetInvoiceSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  customerRef?: GetInvoiceSourceModifiedDateCustomerRef;

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

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: GetInvoiceSourceModifiedDateLineItems })
  lineItems?: GetInvoiceSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetInvoiceSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: GetInvoiceSourceModifiedDatePaymentAllocations })
  paymentAllocations?: GetInvoiceSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=salesOrderRefs" })
  salesOrderRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetInvoiceSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: GetInvoiceSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: GetInvoiceSourceModifiedDateWithholdingTax })
  withholdingTax?: GetInvoiceSourceModifiedDateWithholdingTax[];
}

export class GetInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetInvoiceSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}