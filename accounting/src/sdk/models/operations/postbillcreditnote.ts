import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PostBillCreditNotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBillCreditNoteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostBillCreditNoteSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBillCreditNoteSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillCreditNoteSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostBillCreditNoteSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillCreditNoteSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostBillCreditNoteSourceModifiedDateLineItemsAccountRef;

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
  @Expose({ name: "itemRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsItemRef)
  itemRef?: PostBillCreditNoteSourceModifiedDateLineItemsItemRef;

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
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTracking)
  tracking?: PostBillCreditNoteSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class PostBillCreditNoteSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillCreditNoteSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => PostBillCreditNoteSourceModifiedDatePaymentAllocationsAllocation)
  allocation: PostBillCreditNoteSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => PostBillCreditNoteSourceModifiedDatePaymentAllocationsPayment)
  payment: PostBillCreditNoteSourceModifiedDatePaymentAllocationsPayment;
}
export enum PostBillCreditNoteSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    Paid = "Paid",
    Void = "Void",
    PartiallyPaid = "PartiallyPaid"
}

export class PostBillCreditNoteSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillCreditNoteSourceModifiedDateSupplierRef
/** 
 * Supplier that issued the bill credit note.
**/
export class PostBillCreditNoteSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class PostBillCreditNoteSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// PostBillCreditNoteSourceModifiedDate
/** 
 * > **Bill credit notes or credit notes?**
 * > 
 * > In Codat, bill credit notes represent accounts payable only. For accounts receivable, see [Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 * 
 * View the coverage for bill credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.
 * 
 * In the Codat API, a bill credit note is an accounts payable record issued by a [supplier](https://docs.codat.io/accounting-api#/schemas/Supplier). 
 * 
 * A bill credit note includes details of:
 * * The original and remaining credit.
 * * Any allocations of the credit against other records, such as [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 * * The supplier that issued the bill credit note.
**/
export class PostBillCreditNoteSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

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

  @SpeakeasyMetadata({ elemType: PostBillCreditNoteSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostBillCreditNoteSourceModifiedDateLineItems)
  lineItems?: PostBillCreditNoteSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBillCreditNoteSourceModifiedDateMetadata)
  metadata?: PostBillCreditNoteSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: PostBillCreditNoteSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => PostBillCreditNoteSourceModifiedDatePaymentAllocations)
  paymentAllocations?: PostBillCreditNoteSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostBillCreditNoteSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBillCreditNoteSourceModifiedDateSupplementalData)
  supplementalData?: PostBillCreditNoteSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBillCreditNoteSourceModifiedDateSupplierRef)
  supplierRef?: PostBillCreditNoteSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: PostBillCreditNoteSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => PostBillCreditNoteSourceModifiedDateWithholdingTax)
  withholdingTax?: PostBillCreditNoteSourceModifiedDateWithholdingTax[];
}

export class PostBillCreditNoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PostBillCreditNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBillCreditNotePathParams;

  @SpeakeasyMetadata()
  queryParams: PostBillCreditNoteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostBillCreditNoteSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostBillCreditNoteSecurity;
}

export class PostBillCreditNote200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostBillCreditNote200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostBillCreditNote200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostBillCreditNote200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostBillCreditNote200ApplicationJSONChangesTypeEnum;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Expose({ name: "itemRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTracking)
  tracking?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation)
  allocation: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment)
  payment: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}
export enum PostBillCreditNote200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    Paid = "Paid",
    Void = "Void",
    PartiallyPaid = "PartiallyPaid"
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Supplier that issued the bill credit note.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDate
/** 
 * > **Bill credit notes or credit notes?**
 * > 
 * > In Codat, bill credit notes represent accounts payable only. For accounts receivable, see [Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 * 
 * View the coverage for bill credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.
 * 
 * In the Codat API, a bill credit note is an accounts payable record issued by a [supplier](https://docs.codat.io/accounting-api#/schemas/Supplier). 
 * 
 * A bill credit note includes details of:
 * * The original and remaining credit.
 * * Any allocations of the credit against other records, such as [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 * * The supplier that issued the bill credit note.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

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

  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostBillCreditNote200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations)
  paymentAllocations?: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostBillCreditNote200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum PostBillCreditNote200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBillCreditNote200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostBillCreditNote200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBillCreditNote200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostBillCreditNote200ApplicationJSONValidationValidationItem)
  errors?: PostBillCreditNote200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostBillCreditNote200ApplicationJSONValidationValidationItem)
  warnings?: PostBillCreditNote200ApplicationJSONValidationValidationItem[];
}

export class PostBillCreditNote200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillCreditNote200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostBillCreditNote200ApplicationJSONChanges)
  changes?: PostBillCreditNote200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostBillCreditNote200ApplicationJSONSourceModifiedDate)
  data?: PostBillCreditNote200ApplicationJSONSourceModifiedDate;

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
  status: PostBillCreditNote200ApplicationJSONStatusEnum;

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
  @Type(() => PostBillCreditNote200ApplicationJSONValidation)
  validation?: PostBillCreditNote200ApplicationJSONValidation;
}

export class PostBillCreditNoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBillCreditNote200ApplicationJSONObject?: PostBillCreditNote200ApplicationJSON;
}