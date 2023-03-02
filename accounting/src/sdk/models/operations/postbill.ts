import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PostBillPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBillQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostBillSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBillSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class PostBillSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBillSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostBillSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum PostBillSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum PostBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class PostBillSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => PostBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => PostBillSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: PostBillSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: PostBillSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: PostBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => PostBillSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: PostBillSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostBillSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => PostBillSourceModifiedDateLineItemsItemRef)
  itemRef?: PostBillSourceModifiedDateLineItemsItemRef;

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
  @Type(() => PostBillSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostBillSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => PostBillSourceModifiedDateLineItemsTracking)
  tracking?: PostBillSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class PostBillSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostBillSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => PostBillSourceModifiedDatePaymentAllocationsAllocation)
  allocation: PostBillSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => PostBillSourceModifiedDatePaymentAllocationsPayment)
  payment: PostBillSourceModifiedDatePaymentAllocationsPayment;
}

export class PostBillSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum PostBillSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Open = "Open",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void",
    Draft = "Draft"
}

export class PostBillSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class PostBillSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class PostBillSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// PostBillSourceModifiedDate
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
export class PostBillSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostBillSourceModifiedDateLineItems)
  lineItems?: PostBillSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBillSourceModifiedDateMetadata)
  metadata?: PostBillSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => PostBillSourceModifiedDatePaymentAllocations)
  paymentAllocations?: PostBillSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDatePurchaseOrderRefs })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => PostBillSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: PostBillSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostBillSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBillSourceModifiedDateSupplementalData)
  supplementalData?: PostBillSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBillSourceModifiedDateSupplierRef)
  supplierRef?: PostBillSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ elemType: PostBillSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => PostBillSourceModifiedDateWithholdingTax)
  withholdingTax?: PostBillSourceModifiedDateWithholdingTax[];
}

export class PostBillSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PostBillRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBillPathParams;

  @SpeakeasyMetadata()
  queryParams: PostBillQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostBillSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostBillSecurity;
}

export class PostBill200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostBill200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostBill200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostBill200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostBill200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostBill200ApplicationJSONChangesTypeEnum;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTracking)
  tracking?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class PostBill200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation)
  allocation: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment)
  payment: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

export class PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum PostBill200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Open = "Open",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void",
    Draft = "Draft"
}

export class PostBill200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBill200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class PostBill200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// PostBill200ApplicationJSONSourceModifiedDate
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
export class PostBill200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: PostBill200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostBill200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations)
  paymentAllocations?: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostBill200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostBill200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: PostBill200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: PostBill200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum PostBill200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBill200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostBill200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBill200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostBill200ApplicationJSONValidationValidationItem)
  errors?: PostBill200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostBill200ApplicationJSONValidationValidationItem)
  warnings?: PostBill200ApplicationJSONValidationValidationItem[];
}

export class PostBill200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBill200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostBill200ApplicationJSONChanges)
  changes?: PostBill200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostBill200ApplicationJSONSourceModifiedDate)
  data?: PostBill200ApplicationJSONSourceModifiedDate;

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
  status: PostBill200ApplicationJSONStatusEnum;

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
  @Type(() => PostBill200ApplicationJSONValidation)
  validation?: PostBill200ApplicationJSONValidation;
}

export class PostBillResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBill200ApplicationJSONObject?: PostBill200ApplicationJSON;
}