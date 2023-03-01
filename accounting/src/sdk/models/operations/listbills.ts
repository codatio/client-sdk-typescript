import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListBillsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListBillsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBillsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListBillsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBillsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBillsQueryParams;

  @SpeakeasyMetadata()
  security: ListBillsSecurity;
}

export class ListBillsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBillsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBillsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListBillsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListBillsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListBillsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListBillsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListBillsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListBillsLinksLinksSelf;
}

// ListBillsLinksSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class ListBillsLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListBillsLinksSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class ListBillsLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListBillsLinksSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class ListBillsLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListBillsLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: ListBillsLinksSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectCost" })
  isDirectCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: ListBillsLinksSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: ListBillsLinksSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: ListBillsLinksSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class ListBillsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class ListBillsLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: ListBillsLinksSourceModifiedDatePaymentAllocationsPayment;
}

export class ListBillsLinksSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum ListBillsLinksSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Open = "Open",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void",
    Draft = "Draft"
}

export class ListBillsLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// ListBillsLinksSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class ListBillsLinksSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}

export class ListBillsLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// ListBillsLinksSourceModifiedDate
/** 
 * > **Invoices or bills?**
 * >
 * > In Codat, bills are for accounts payable only. For the accounts receivable equivalent of bills, see [Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 * 
 * View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * In Codat, a bill contains details of:
 * * When the bill was recorded in the accounting system.
 * * How much the bill is for and the currency of the amount.
 * * Who the bill was received from — the *supplier*.
 * * What the bill is for — the *line items*.
 * 
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's *expenses*.
 * 
 * You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
**/
export class ListBillsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: ListBillsLinksSourceModifiedDateLineItems })
  lineItems?: ListBillsLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListBillsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: ListBillsLinksSourceModifiedDatePaymentAllocations })
  paymentAllocations?: ListBillsLinksSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderRefs", elemType: ListBillsLinksSourceModifiedDatePurchaseOrderRefs })
  purchaseOrderRefs?: ListBillsLinksSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListBillsLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: ListBillsLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: ListBillsLinksSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: ListBillsLinksSourceModifiedDateWithholdingTax })
  withholdingTax?: ListBillsLinksSourceModifiedDateWithholdingTax[];
}

// ListBillsLinks
/** 
 * Codat's Paging Model
**/
export class ListBillsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListBillsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListBillsLinksSourceModifiedDate })
  results?: ListBillsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListBillsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListBillsLinks;
}