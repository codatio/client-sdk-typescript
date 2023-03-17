import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product or inventory item to which the line item is linked.
 **/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdatePurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({
    elemType:
      UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// UpdatePurchaseOrderSourceModifiedDateShipToAddress
/**
 * Delivery address for any goods that have been ordered.
 **/
export class UpdatePurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

// UpdatePurchaseOrderSourceModifiedDateShipToContact
/**
 * Details of the named contact at the delivery address.
 **/
export class UpdatePurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
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

// UpdatePurchaseOrderSourceModifiedDateShipTo
/**
 * Delivery details for any goods that have been ordered.
 **/
export class UpdatePurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipToAddress)
  address?: UpdatePurchaseOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipToContact)
  contact?: UpdatePurchaseOrderSourceModifiedDateShipToContact;
}
export enum UpdatePurchaseOrderSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

// UpdatePurchaseOrderSourceModifiedDateSupplierRef
/**
 * Supplier that the purchase order is recorded against in the accounting system.
 **/
export class UpdatePurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// UpdatePurchaseOrderSourceModifiedDate
/**
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
 *
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
 **/
export class UpdatePurchaseOrderSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrderSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItems)
  lineItems?: UpdatePurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateMetadata)
  metadata?: UpdatePurchaseOrderSourceModifiedDateMetadata;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipTo)
  shipTo?: UpdatePurchaseOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: UpdatePurchaseOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateSupplierRef)
  supplierRef?: UpdatePurchaseOrderSourceModifiedDateSupplierRef;

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

export class UpdatePurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdatePurchaseOrderSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=forceUpdate",
  })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=purchaseOrderId",
  })
  purchaseOrderId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class UpdatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum UpdatePurchaseOrder200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class UpdatePurchaseOrder200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef
  )
  recordRef?: UpdatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: UpdatePurchaseOrder200ApplicationJSONChangesTypeEnum;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product or inventory item to which the line item is linked.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
/**
 * References a category against which the item is tracked.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
  )
  accountRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
  )
  itemRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
  @Type(
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
  )
  taxRateRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({
    elemType:
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
/**
 * Delivery address for any goods that have been ordered.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
/**
 * Details of the named contact at the delivery address.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
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

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo
/**
 * Delivery details for any goods that have been ordered.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
  )
  address?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
  )
  contact?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact;
}
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
/**
 * Supplier that the purchase order is recorded against in the accounting system.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate
/**
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
 *
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
 **/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

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
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo)
  shipTo?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
  )
  supplierRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

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
export enum UpdatePurchaseOrder200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class UpdatePurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// UpdatePurchaseOrder200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class UpdatePurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidationValidationItem)
  errors?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidationValidationItem)
  warnings?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];
}

export class UpdatePurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdatePurchaseOrder200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONChanges)
  changes?: UpdatePurchaseOrder200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate)
  data?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  status: UpdatePurchaseOrder200ApplicationJSONStatusEnum;

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
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidation)
  validation?: UpdatePurchaseOrder200ApplicationJSONValidation;
}

export class UpdatePurchaseOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  updatePurchaseOrder200ApplicationJSONObject?: UpdatePurchaseOrder200ApplicationJSON;
}
