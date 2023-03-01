import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostPurchaseOrderSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class PostPurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostPurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostPurchaseOrderSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostPurchaseOrderSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostPurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount?: number;
}

export class PostPurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  type: PostPurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

// PostPurchaseOrderSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class PostPurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}

// PostPurchaseOrderSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class PostPurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostPurchaseOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata({ data: "json, name=contact" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
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

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostPurchaseOrderSourceModifiedDateLineItems })
  lineItems?: PostPurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostPurchaseOrderSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDueDate" })
  paymentDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: PostPurchaseOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostPurchaseOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostPurchaseOrderSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}

export class PostPurchaseOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostPurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPurchaseOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPurchaseOrderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPurchaseOrderSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostPurchaseOrderSecurity;
}

export class PostPurchaseOrder200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
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
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostPurchaseOrder200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostPurchaseOrder200ApplicationJSONChangesTypeEnum;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount?: number;
}

export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  type: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}

// PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata({ data: "json, name=contact" })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
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

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems })
  lineItems?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDueDate" })
  paymentDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: PostPurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}
export enum PostPurchaseOrder200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostPurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostPurchaseOrder200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostPurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostPurchaseOrder200ApplicationJSONValidationValidationItem })
  errors?: PostPurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostPurchaseOrder200ApplicationJSONValidationValidationItem })
  warnings?: PostPurchaseOrder200ApplicationJSONValidationValidationItem[];
}

export class PostPurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostPurchaseOrder200ApplicationJSONChanges })
  changes?: PostPurchaseOrder200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostPurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  status: PostPurchaseOrder200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostPurchaseOrder200ApplicationJSONValidation;
}

export class PostPurchaseOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPurchaseOrder200ApplicationJSONObject?: PostPurchaseOrder200ApplicationJSON;
}