import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCreditNotesRequest extends SpeakeasyBase {
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

export class ListCreditNotesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCreditNotesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCreditNotesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCreditNotesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCreditNotesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCreditNotesLinksLinksCurrent)
  current: ListCreditNotesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCreditNotesLinksLinksNext)
  next?: ListCreditNotesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCreditNotesLinksLinksPrevious)
  previous?: ListCreditNotesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCreditNotesLinksLinksSelf)
  self: ListCreditNotesLinksLinksSelf;
}

// ListCreditNotesLinksSourceModifiedDateCustomerRef
/**
 * Reference to the customer the credit note has been issued to.
 **/
export class ListCreditNotesLinksSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// ListCreditNotesLinksSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class ListCreditNotesLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListCreditNotesLinksSourceModifiedDateLineItemsItemRef
/**
 * Reference to the item the line is linked to.
 **/
export class ListCreditNotesLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class ListCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum ListCreditNotesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}
export enum ListCreditNotesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Project = "Project",
}

export class ListCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListCreditNotesLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(
    () => ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  categoryRefs: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(
    () => ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef
  )
  customerRef?: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListCreditNotesLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListCreditNotesLinksSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListCreditNotesLinksSourceModifiedDateLineItemsItemRef;

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
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItemsTracking)
  tracking?: ListCreditNotesLinksSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType:
      ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: ListCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class ListCreditNotesLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class ListCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class ListCreditNotesLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(
    () => ListCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation
  )
  allocation: ListCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment)
  payment: ListCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment;
}
export enum ListCreditNotesLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  Paid = "Paid",
  Void = "Void",
  PartiallyPaid = "PartiallyPaid",
}

// ListCreditNotesLinksSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class ListCreditNotesLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class ListCreditNotesLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// ListCreditNotesLinksSourceModifiedDate
/**
 * > View the coverage for credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes" target="_blank">Data coverage explorer</a>.
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
 **/
export class ListCreditNotesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "creditNoteNumber" })
  creditNoteNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateCustomerRef)
  customerRef?: ListCreditNotesLinksSourceModifiedDateCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  @SpeakeasyMetadata({
    elemType: ListCreditNotesLinksSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateLineItems)
  lineItems?: ListCreditNotesLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateMetadata)
  metadata?: ListCreditNotesLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: ListCreditNotesLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => ListCreditNotesLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations?: ListCreditNotesLinksSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListCreditNotesLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListCreditNotesLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({
    elemType: ListCreditNotesLinksSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => ListCreditNotesLinksSourceModifiedDateWithholdingTax)
  withholdingTax?: ListCreditNotesLinksSourceModifiedDateWithholdingTax[];
}

// ListCreditNotesLinks
/**
 * Codat's Paging Model
 **/
export class ListCreditNotesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCreditNotesLinksLinks)
  links: ListCreditNotesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCreditNotesLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCreditNotesLinksSourceModifiedDate)
  results?: ListCreditNotesLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCreditNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCreditNotesLinks;
}
