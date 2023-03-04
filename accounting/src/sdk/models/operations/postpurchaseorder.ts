import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostPurchaseOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostPurchaseOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostPurchaseOrderSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostPurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostPurchaseOrderSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class PostPurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostPurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostPurchaseOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostPurchaseOrderSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => PostPurchaseOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: PostPurchaseOrderSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ elemType: PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class PostPurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum PostPurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// PostPurchaseOrderSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class PostPurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PostPurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

// PostPurchaseOrderSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class PostPurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

// PostPurchaseOrderSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class PostPurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PostPurchaseOrderSourceModifiedDateShipToAddress)
  address?: PostPurchaseOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => PostPurchaseOrderSourceModifiedDateShipToContact)
  contact?: PostPurchaseOrderSourceModifiedDateShipToContact;
}
export enum PostPurchaseOrderSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// PostPurchaseOrderSourceModifiedDateSupplierRef
/** 
 * Supplier that the purchase order is recorded against in the accounting system.
**/
export class PostPurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// PostPurchaseOrderSourceModifiedDate
/** 
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.  
 * 
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
**/
export class PostPurchaseOrderSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deliveryDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deliveryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  @SpeakeasyMetadata({ elemType: PostPurchaseOrderSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostPurchaseOrderSourceModifiedDateLineItems)
  lineItems?: PostPurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostPurchaseOrderSourceModifiedDateMetadata)
  metadata?: PostPurchaseOrderSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentDueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paymentDueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipTo" })
  @Type(() => PostPurchaseOrderSourceModifiedDateShipTo)
  shipTo?: PostPurchaseOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: PostPurchaseOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostPurchaseOrderSourceModifiedDateSupplierRef)
  supplierRef?: PostPurchaseOrderSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

export class PostPurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPurchaseOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPurchaseOrderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPurchaseOrderSourceModifiedDate;
}

export class PostPurchaseOrder200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostPurchaseOrder200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostPurchaseOrder200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostPurchaseOrder200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostPurchaseOrder200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostPurchaseOrder200ApplicationJSONChangesTypeEnum;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef)
  accountRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef)
  itemRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ elemType: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress)
  address?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact)
  contact?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact;
}
export enum PostPurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Supplier that the purchase order is recorded against in the accounting system.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDate
/** 
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.  
 * 
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deliveryDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deliveryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  @SpeakeasyMetadata({ elemType: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentDueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paymentDueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipTo" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo)
  shipTo?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}
export enum PostPurchaseOrder200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostPurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostPurchaseOrder200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostPurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostPurchaseOrder200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostPurchaseOrder200ApplicationJSONValidationValidationItem)
  errors?: PostPurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostPurchaseOrder200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostPurchaseOrder200ApplicationJSONValidationValidationItem)
  warnings?: PostPurchaseOrder200ApplicationJSONValidationValidationItem[];
}

export class PostPurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostPurchaseOrder200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostPurchaseOrder200ApplicationJSONChanges)
  changes?: PostPurchaseOrder200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostPurchaseOrder200ApplicationJSONSourceModifiedDate)
  data?: PostPurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  status: PostPurchaseOrder200ApplicationJSONStatusEnum;

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
  @Type(() => PostPurchaseOrder200ApplicationJSONValidation)
  validation?: PostPurchaseOrder200ApplicationJSONValidation;
}

export class PostPurchaseOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postPurchaseOrder200ApplicationJSONObject?: PostPurchaseOrder200ApplicationJSON;
}