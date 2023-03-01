import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillCreditNoteSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostBillCreditNoteSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostBillCreditNoteSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillCreditNoteSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillCreditNoteSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostBillCreditNoteSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostBillCreditNoteSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostBillCreditNoteSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostBillCreditNoteSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostBillCreditNoteSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNoteSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillCreditNoteSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillCreditNoteSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostBillCreditNoteSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillCreditNoteSourceModifiedDateSupplierRef
/** 
 * Supplier that issued the bill credit note.
**/
export class PostBillCreditNoteSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}

export class PostBillCreditNoteSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostBillCreditNoteSourceModifiedDateLineItems })
  lineItems?: PostBillCreditNoteSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostBillCreditNoteSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostBillCreditNoteSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostBillCreditNoteSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostBillCreditNoteSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostBillCreditNoteSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostBillCreditNoteSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostBillCreditNoteSourceModifiedDateWithholdingTax })
  withholdingTax?: PostBillCreditNoteSourceModifiedDateWithholdingTax[];
}

export class PostBillCreditNoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostBillCreditNote200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostBillCreditNote200ApplicationJSONChangesTypeEnum;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the item the line is linked to.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  categoryRefs: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingProjectRef;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
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
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Supplier that issued the bill credit note.
**/
export class PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}

export class PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems })
  lineItems?: PostBillCreditNote200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostBillCreditNote200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations })
  paymentAllocations?: PostBillCreditNote200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostBillCreditNote200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostBillCreditNote200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax })
  withholdingTax?: PostBillCreditNote200ApplicationJSONSourceModifiedDateWithholdingTax[];
}
export enum PostBillCreditNote200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBillCreditNote200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostBillCreditNote200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBillCreditNote200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostBillCreditNote200ApplicationJSONValidationValidationItem })
  errors?: PostBillCreditNote200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostBillCreditNote200ApplicationJSONValidationValidationItem })
  warnings?: PostBillCreditNote200ApplicationJSONValidationValidationItem[];
}

export class PostBillCreditNote200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostBillCreditNote200ApplicationJSONChanges })
  changes?: PostBillCreditNote200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostBillCreditNote200ApplicationJSONSourceModifiedDate;

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
  status: PostBillCreditNote200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
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