import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListBillsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBillsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBillsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBillsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBillsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBillsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBillsLinksLinksCurrent)
  current: ListBillsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBillsLinksLinksNext)
  next?: ListBillsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBillsLinksLinksPrevious)
  previous?: ListBillsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBillsLinksLinksSelf)
  self: ListBillsLinksLinksSelf;
}

// ListBillsLinksSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class ListBillsLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListBillsLinksSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product, service type, or inventory item to which the line item is linked.
 **/
export class ListBillsLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListBillsLinksSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class ListBillsLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}
export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListBillsLinksSourceModifiedDateLineItemsTracking
/**
 * Categories, and a project and customer, against which the item is tracked.
 **/
export class ListBillsLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListBillsLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListBillsLinksSourceModifiedDateLineItemsAccountRef;

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
  @Expose({ name: "isDirectCost" })
  isDirectCost?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListBillsLinksSourceModifiedDateLineItemsItemRef;

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
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListBillsLinksSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTracking)
  tracking?: ListBillsLinksSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class ListBillsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class ListBillsLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation)
  allocation: ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocationsPayment)
  payment: ListBillsLinksSourceModifiedDatePaymentAllocationsPayment;
}

export class ListBillsLinksSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum ListBillsLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Open = "Open",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
  Draft = "Draft",
}

// ListBillsLinksSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class ListBillsLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// ListBillsLinksSourceModifiedDateSupplierRef
/**
 * Reference to the supplier the bill was received from.
 **/
export class ListBillsLinksSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class ListBillsLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "amountDue" })
  amountDue?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  @SpeakeasyMetadata({ elemType: ListBillsLinksSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItems)
  lineItems?: ListBillsLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListBillsLinksSourceModifiedDateMetadata)
  metadata?: ListBillsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations?: ListBillsLinksSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDatePurchaseOrderRefs,
  })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => ListBillsLinksSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: ListBillsLinksSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListBillsLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListBillsLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListBillsLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => ListBillsLinksSourceModifiedDateSupplierRef)
  supplierRef?: ListBillsLinksSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => ListBillsLinksSourceModifiedDateWithholdingTax)
  withholdingTax?: ListBillsLinksSourceModifiedDateWithholdingTax[];
}

// ListBillsLinks
/**
 * Codat's Paging Model
 **/
export class ListBillsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBillsLinksLinks)
  links: ListBillsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListBillsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListBillsLinksSourceModifiedDate)
  results?: ListBillsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBillsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListBillsLinks;
}
