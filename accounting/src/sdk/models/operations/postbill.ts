import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class PostBillSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostBillSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostBillSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostBillSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostBillSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectCost" })
  isDirectCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostBillSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostBillSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostBillSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostBillSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostBillSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostBillSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostBillSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostBillSourceModifiedDatePaymentAllocationsPayment;
}

export class PostBillSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class PostBillSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}

export class PostBillSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
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

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostBillSourceModifiedDateLineItems })
  lineItems?: PostBillSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostBillSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostBillSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostBillSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderRefs", elemType: PostBillSourceModifiedDatePurchaseOrderRefs })
  purchaseOrderRefs?: PostBillSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostBillSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostBillSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostBillSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostBillSourceModifiedDateWithholdingTax })
  withholdingTax?: PostBillSourceModifiedDateWithholdingTax[];
}

export class PostBillSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostBill200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostBill200ApplicationJSONChangesTypeEnum;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBill200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=isDirectCost" })
  isDirectCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostBill200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostBill200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

export class PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostBill200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Reference to the supplier the bill was received from.
**/
export class PostBill200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}

export class PostBill200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
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

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostBill200ApplicationJSONSourceModifiedDateLineItems })
  lineItems?: PostBill200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostBill200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostBill200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderRefs", elemType: PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs })
  purchaseOrderRefs?: PostBill200ApplicationJSONSourceModifiedDatePurchaseOrderRefs[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostBill200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostBill200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostBill200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostBill200ApplicationJSONSourceModifiedDateWithholdingTax })
  withholdingTax?: PostBill200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum PostBill200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBill200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostBill200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBill200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostBill200ApplicationJSONValidationValidationItem })
  errors?: PostBill200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostBill200ApplicationJSONValidationValidationItem })
  warnings?: PostBill200ApplicationJSONValidationValidationItem[];
}

export class PostBill200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostBill200ApplicationJSONChanges })
  changes?: PostBill200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostBill200ApplicationJSONSourceModifiedDate;

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
  status: PostBill200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
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