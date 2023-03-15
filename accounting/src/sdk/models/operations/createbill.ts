import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateBillPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class CreateBillQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

// CreateBillSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class CreateBillSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBillSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product, service type, or inventory item to which the line item is linked.
 **/
export class CreateBillSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBillSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class CreateBillSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBillSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum CreateBillSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}
export enum CreateBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export class CreateBillSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBillSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CreateBillSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: CreateBillSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: CreateBillSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CreateBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => CreateBillSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: CreateBillSourceModifiedDateLineItemsTrackingProjectRef;
}

export class CreateBillSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateBillSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreateBillSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => CreateBillSourceModifiedDateLineItemsItemRef)
  itemRef?: CreateBillSourceModifiedDateLineItemsItemRef;

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
  @Type(() => CreateBillSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreateBillSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateBillSourceModifiedDateLineItemsTracking)
  tracking?: CreateBillSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType: CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: CreateBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateBillSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateBillSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class CreateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBillSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef)
  accountRef?: CreateBillSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateBillSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => CreateBillSourceModifiedDatePaymentAllocationsAllocation)
  allocation: CreateBillSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => CreateBillSourceModifiedDatePaymentAllocationsPayment)
  payment: CreateBillSourceModifiedDatePaymentAllocationsPayment;
}

export class CreateBillSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum CreateBillSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Open = "Open",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
  Draft = "Draft",
}

// CreateBillSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateBillSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateBillSourceModifiedDateSupplierRef
/**
 * Reference to the supplier the bill was received from.
 **/
export class CreateBillSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class CreateBillSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// CreateBillSourceModifiedDate
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
export class CreateBillSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: CreateBillSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => CreateBillSourceModifiedDateLineItems)
  lineItems?: CreateBillSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBillSourceModifiedDateMetadata)
  metadata?: CreateBillSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: CreateBillSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CreateBillSourceModifiedDatePaymentAllocations)
  paymentAllocations?: CreateBillSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({
    elemType: CreateBillSourceModifiedDatePurchaseOrderRefs,
  })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => CreateBillSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: CreateBillSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateBillSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateBillSourceModifiedDateSupplementalData)
  supplementalData?: CreateBillSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CreateBillSourceModifiedDateSupplierRef)
  supplierRef?: CreateBillSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ elemType: CreateBillSourceModifiedDateWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => CreateBillSourceModifiedDateWithholdingTax)
  withholdingTax?: CreateBillSourceModifiedDateWithholdingTax[];
}

export class CreateBillRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBillPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateBillQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateBillSourceModifiedDate;
}

export class CreateBill200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateBill200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateBill200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateBill200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateBill200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateBill200ApplicationJSONChangesTypeEnum;
}

// CreateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product, service type, or inventory item to which the line item is linked.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}
export enum CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBill200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  categoryRefs: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef
  )
  customerRef?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef
  )
  projectRef?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class CreateBill200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateLineItemsTracking)
  tracking?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({
    elemType:
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: CreateBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateBill200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation
  )
  allocation: CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(
    () =>
      CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment
  )
  payment: CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

export class CreateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}
export enum CreateBill200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Open = "Open",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
  Draft = "Draft",
}

// CreateBill200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateBill200ApplicationJSONSourceModifiedDateSupplierRef
/**
 * Reference to the supplier the bill was received from.
 **/
export class CreateBill200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class CreateBill200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// CreateBill200ApplicationJSONSourceModifiedDate
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
export class CreateBill200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: CreateBill200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateBill200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocations)
  paymentAllocations?: CreateBill200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs,
  })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: CreateBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateBill200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: CreateBill200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: CreateBill200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDateWithholdingTax)
  withholdingTax?: CreateBill200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum CreateBill200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateBill200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateBill200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class CreateBill200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateBill200ApplicationJSONValidationValidationItem)
  errors?: CreateBill200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateBill200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateBill200ApplicationJSONValidationValidationItem)
  warnings?: CreateBill200ApplicationJSONValidationValidationItem[];
}

export class CreateBill200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateBill200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateBill200ApplicationJSONChanges)
  changes?: CreateBill200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateBill200ApplicationJSONSourceModifiedDate)
  data?: CreateBill200ApplicationJSONSourceModifiedDate;

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
  status: CreateBill200ApplicationJSONStatusEnum;

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
  @Type(() => CreateBill200ApplicationJSONValidation)
  validation?: CreateBill200ApplicationJSONValidation;
}

export class CreateBillResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createBill200ApplicationJSONObject?: CreateBill200ApplicationJSON;
}
