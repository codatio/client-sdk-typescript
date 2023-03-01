import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpdatePurchaseOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=purchaseOrderId" })
  purchaseOrderId: string;
}

export class UpdatePurchaseOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class UpdatePurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// UpdatePurchaseOrderSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class UpdatePurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

// UpdatePurchaseOrderSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class UpdatePurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}

// UpdatePurchaseOrderSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class UpdatePurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UpdatePurchaseOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: UpdatePurchaseOrderSourceModifiedDateShipToContact;
}
export enum UpdatePurchaseOrderSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// UpdatePurchaseOrderSourceModifiedDateSupplierRef
/** 
 * Supplier that the purchase order is recorded against in the accounting system.
**/
export class UpdatePurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
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
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expectedDeliveryDate" })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: UpdatePurchaseOrderSourceModifiedDateLineItems })
  lineItems?: UpdatePurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UpdatePurchaseOrderSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDueDate" })
  paymentDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: UpdatePurchaseOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdatePurchaseOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: UpdatePurchaseOrderSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}

export class UpdatePurchaseOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class UpdatePurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePurchaseOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdatePurchaseOrderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdatePurchaseOrderSourceModifiedDate;

  @SpeakeasyMetadata()
  security: UpdatePurchaseOrderSecurity;
}

export class UpdatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum UpdatePurchaseOrder200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class UpdatePurchaseOrder200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: UpdatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdatePurchaseOrder200ApplicationJSONChangesTypeEnum;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact;
}
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Supplier that the purchase order is recorded against in the accounting system.
**/
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
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
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expectedDeliveryDate" })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems })
  lineItems?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDueDate" })
  paymentDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}
export enum UpdatePurchaseOrder200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class UpdatePurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// UpdatePurchaseOrder200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class UpdatePurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem })
  errors?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem })
  warnings?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];
}

export class UpdatePurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: UpdatePurchaseOrder200ApplicationJSONChanges })
  changes?: UpdatePurchaseOrder200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  status: UpdatePurchaseOrder200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: UpdatePurchaseOrder200ApplicationJSONValidation;
}

export class UpdatePurchaseOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePurchaseOrder200ApplicationJSONObject?: UpdatePurchaseOrder200ApplicationJSON;
}