import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class UpdateBillPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class UpdateBillQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// UpdateBillSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class UpdateBillSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateBillSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class UpdateBillSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateBillSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class UpdateBillSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBillSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum UpdateBillSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum UpdateBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class UpdateBillSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBillSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: UpdateBillSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: UpdateBillSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: UpdateBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: UpdateBillSourceModifiedDateLineItemsTrackingProjectRef;
}

export class UpdateBillSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsAccountRef)
  accountRef?: UpdateBillSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdateBillSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdateBillSourceModifiedDateLineItemsItemRef;

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
  @Type(() => UpdateBillSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: UpdateBillSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsTracking)
  tracking?: UpdateBillSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: UpdateBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class UpdateBillSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class UpdateBillSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// UpdateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class UpdateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBillSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: UpdateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class UpdateBillSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => UpdateBillSourceModifiedDatePaymentAllocationsAllocation)
  allocation: UpdateBillSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => UpdateBillSourceModifiedDatePaymentAllocationsPayment)
  payment: UpdateBillSourceModifiedDatePaymentAllocationsPayment;
}

export class UpdateBillSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum UpdateBillSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Open = "Open",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void",
    Draft = "Draft"
}

export class UpdateBillSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// UpdateBillSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class UpdateBillSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class UpdateBillSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// UpdateBillSourceModifiedDate
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
export class UpdateBillSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => UpdateBillSourceModifiedDateLineItems)
  lineItems?: UpdateBillSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateBillSourceModifiedDateMetadata)
  metadata?: UpdateBillSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => UpdateBillSourceModifiedDatePaymentAllocations)
  paymentAllocations?: UpdateBillSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDatePurchaseOrderRefs })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => UpdateBillSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: UpdateBillSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateBillSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateBillSourceModifiedDateSupplementalData)
  supplementalData?: UpdateBillSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => UpdateBillSourceModifiedDateSupplierRef)
  supplierRef?: UpdateBillSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ elemType: UpdateBillSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => UpdateBillSourceModifiedDateWithholdingTax)
  withholdingTax?: UpdateBillSourceModifiedDateWithholdingTax[];
}

export class UpdateBillSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class UpdateBillRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBillPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateBillQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateBillSourceModifiedDate;

  @SpeakeasyMetadata()
  security: UpdateBillSecurity;
}

export class UpdateBill200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum UpdateBill200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class UpdateBill200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => UpdateBill200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: UpdateBill200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: UpdateBill200ApplicationJSONChangesTypeEnum;
}

// UpdateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}
export enum UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
    Unknown = "Unknown",
    NotApplicable = "NotApplicable",
    Customer = "Customer",
    Project = "Project"
}

export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "categoryRefs" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class UpdateBill200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTracking)
  tracking?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: UpdateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class UpdateBill200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation)
  allocation: UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment)
  payment: UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

export class UpdateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum UpdateBill200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Open = "Open",
    PartiallyPaid = "PartiallyPaid",
    Paid = "Paid",
    Void = "Void",
    Draft = "Draft"
}

export class UpdateBill200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// UpdateBill200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class UpdateBill200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class UpdateBill200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// UpdateBill200ApplicationJSONSourceModifiedDate
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
export class UpdateBill200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: UpdateBill200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdateBill200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocations })
  @Expose({ name: "paymentAllocations" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocations)
  paymentAllocations?: UpdateBill200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: UpdateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateBill200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: UpdateBill200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: UpdateBill200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: UpdateBill200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum UpdateBill200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class UpdateBill200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// UpdateBill200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class UpdateBill200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => UpdateBill200ApplicationJSONValidationValidationItem)
  errors?: UpdateBill200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => UpdateBill200ApplicationJSONValidationValidationItem)
  warnings?: UpdateBill200ApplicationJSONValidationValidationItem[];
}

export class UpdateBill200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateBill200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdateBill200ApplicationJSONChanges)
  changes?: UpdateBill200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => UpdateBill200ApplicationJSONSourceModifiedDate)
  data?: UpdateBill200ApplicationJSONSourceModifiedDate;

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
  status: UpdateBill200ApplicationJSONStatusEnum;

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
  @Type(() => UpdateBill200ApplicationJSONValidation)
  validation?: UpdateBill200ApplicationJSONValidation;
}

export class UpdateBillResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBill200ApplicationJSONObject?: UpdateBill200ApplicationJSON;
}