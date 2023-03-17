import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// CreateDirectCostSourceModifiedDateContactRef
/**
 * A customer or supplier associated with the direct cost.
 **/
export class CreateDirectCostSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateDirectCostSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class CreateDirectCostSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateDirectCostSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
 **/
export class CreateDirectCostSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateDirectCostSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the the line item is linked.
 **/
export class CreateDirectCostSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo
/**
 * Links to the underlying record or data type.
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 **/
export class CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs
/**
 * Links to the underlying record or data type.
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 **/
export class CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class CreateDirectCostSourceModifiedDateLineItemsInvoiceableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceTo" })
  @Type(
    () =>
      CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo
  )
  invoiceTo?: CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo;

  @SpeakeasyMetadata({
    elemType:
      CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs,
  })
  @Expose({ name: "recordRefs" })
  @Type(
    () =>
      CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs
  )
  recordRefs: CreateDirectCostSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs[];
}

// CreateDirectCostSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class CreateDirectCostSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateDirectCostSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateDirectCostSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreateDirectCostSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => CreateDirectCostSourceModifiedDateLineItemsItemRef)
  itemRef?: CreateDirectCostSourceModifiedDateLineItemsItemRef;

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
  @Type(() => CreateDirectCostSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreateDirectCostSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreateDirectCostSourceModifiedDateLineItemsInvoiceableTracking)
  tracking?: CreateDirectCostSourceModifiedDateLineItemsInvoiceableTracking;

  @SpeakeasyMetadata({
    elemType: CreateDirectCostSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CreateDirectCostSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: CreateDirectCostSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateDirectCostSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateDirectCostSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateDirectCostSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class CreateDirectCostSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateDirectCostSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => CreateDirectCostSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: CreateDirectCostSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateDirectCostSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => CreateDirectCostSourceModifiedDatePaymentAllocationsAllocation)
  allocation: CreateDirectCostSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => CreateDirectCostSourceModifiedDatePaymentAllocationsPayment)
  payment: CreateDirectCostSourceModifiedDatePaymentAllocationsPayment;
}

// CreateDirectCostSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateDirectCostSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateDirectCostSourceModifiedDate
/**
 * > **Language tip: ** Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting platforms.
 *
 * > View the coverage for direct costs in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct costs include:
 *   * Purchasing an item and paying it off at the point of the purchase
 *   * Receiving cash from a refunded item if the refund is made by the supplier
 *   * Withdrawing money from a bank account
 *   * Writing a cheque
 *
 * From the Direct Costs endpoints, you can:
 *
 *   * [Get a list of all direct costs for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts)
 *   * [Get a single direct cost for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts__directCostId_)
 *   * [Add a new direct cost to a specific company's accounting package](https://api.codat.io/swagger/index.html#/DirectCosts/post_companies__companyId__connections__connectionId__push_directCosts)
 *
 * Direct costs is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 **/
export class CreateDirectCostSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => CreateDirectCostSourceModifiedDateContactRef)
  contactRef?: CreateDirectCostSourceModifiedDateContactRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  @SpeakeasyMetadata({ elemType: CreateDirectCostSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => CreateDirectCostSourceModifiedDateLineItems)
  lineItems: CreateDirectCostSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateDirectCostSourceModifiedDateMetadata)
  metadata?: CreateDirectCostSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: CreateDirectCostSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CreateDirectCostSourceModifiedDatePaymentAllocations)
  paymentAllocations: CreateDirectCostSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateDirectCostSourceModifiedDateSupplementalData)
  supplementalData?: CreateDirectCostSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;
}

export class CreateDirectCostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: CreateDirectCostSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class CreateDirectCost200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateDirectCost200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateDirectCost200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateDirectCost200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateDirectCost200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateDirectCost200ApplicationJSONChangesTypeEnum;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateContactRef
/**
 * A customer or supplier associated with the direct cost.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the the line item is linked.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo
/**
 * Links to the underlying record or data type.
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs
/**
 * Links to the underlying record or data type.
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceTo" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo
  )
  invoiceTo?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo;

  @SpeakeasyMetadata({
    elemType:
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs,
  })
  @Expose({ name: "recordRefs" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs
  )
  recordRefs: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs[];
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateDirectCost200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsAccountRef
  )
  accountRef?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(
    () => CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsItemRef
  )
  itemRef?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
  )
  taxRateRef?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTracking
  )
  tracking?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsInvoiceableTracking;

  @SpeakeasyMetadata({
    elemType:
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class CreateDirectCost200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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

// CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/**
 * The account that the allocated payment is made from or to.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation
  )
  allocation: CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(
    () =>
      CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment
  )
  payment: CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateDirectCost200ApplicationJSONSourceModifiedDate
/**
 * > **Language tip: ** Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting platforms.
 *
 * > View the coverage for direct costs in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct costs include:
 *   * Purchasing an item and paying it off at the point of the purchase
 *   * Receiving cash from a refunded item if the refund is made by the supplier
 *   * Withdrawing money from a bank account
 *   * Writing a cheque
 *
 * From the Direct Costs endpoints, you can:
 *
 *   * [Get a list of all direct costs for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts)
 *   * [Get a single direct cost for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts__directCostId_)
 *   * [Add a new direct cost to a specific company's accounting package](https://api.codat.io/swagger/index.html#/DirectCosts/post_companies__companyId__connections__connectionId__push_directCosts)
 *
 * Direct costs is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 **/
export class CreateDirectCost200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => CreateDirectCost200ApplicationJSONSourceModifiedDateContactRef)
  contactRef?: CreateDirectCost200ApplicationJSONSourceModifiedDateContactRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  @SpeakeasyMetadata({
    elemType: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => CreateDirectCost200ApplicationJSONSourceModifiedDateLineItems)
  lineItems: CreateDirectCost200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateDirectCost200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateDirectCost200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType:
      CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(
    () => CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocations
  )
  paymentAllocations: CreateDirectCost200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(
    () => CreateDirectCost200ApplicationJSONSourceModifiedDateSupplementalData
  )
  supplementalData?: CreateDirectCost200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;
}
export enum CreateDirectCost200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateDirectCost200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateDirectCost200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class CreateDirectCost200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateDirectCost200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateDirectCost200ApplicationJSONValidationValidationItem)
  errors?: CreateDirectCost200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateDirectCost200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateDirectCost200ApplicationJSONValidationValidationItem)
  warnings?: CreateDirectCost200ApplicationJSONValidationValidationItem[];
}

export class CreateDirectCost200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateDirectCost200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateDirectCost200ApplicationJSONChanges)
  changes?: CreateDirectCost200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateDirectCost200ApplicationJSONSourceModifiedDate)
  data?: CreateDirectCost200ApplicationJSONSourceModifiedDate;

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
  status: CreateDirectCost200ApplicationJSONStatusEnum;

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
  @Type(() => CreateDirectCost200ApplicationJSONValidation)
  validation?: CreateDirectCost200ApplicationJSONValidation;
}

export class CreateDirectCostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createDirectCost200ApplicationJSONObject?: CreateDirectCost200ApplicationJSON;
}
