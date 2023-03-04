import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetPurchaseOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=purchaseOrderId" })
  purchaseOrderId: string;
}

export class GetPurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPurchaseOrderPathParams;
}

// GetPurchaseOrderSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class GetPurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetPurchaseOrderSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class GetPurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetPurchaseOrderSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class GetPurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class GetPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetPurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetPurchaseOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: GetPurchaseOrderSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => GetPurchaseOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: GetPurchaseOrderSourceModifiedDateLineItemsItemRef;

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
  @Type(() => GetPurchaseOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: GetPurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ elemType: GetPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => GetPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: GetPurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class GetPurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetPurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// GetPurchaseOrderSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class GetPurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: GetPurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

// GetPurchaseOrderSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class GetPurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
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

// GetPurchaseOrderSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class GetPurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => GetPurchaseOrderSourceModifiedDateShipToAddress)
  address?: GetPurchaseOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => GetPurchaseOrderSourceModifiedDateShipToContact)
  contact?: GetPurchaseOrderSourceModifiedDateShipToContact;
}
export enum GetPurchaseOrderSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// GetPurchaseOrderSourceModifiedDateSupplierRef
/** 
 * Supplier that the purchase order is recorded against in the accounting system.
**/
export class GetPurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// GetPurchaseOrderSourceModifiedDate
/** 
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.  
 * 
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
**/
export class GetPurchaseOrderSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: GetPurchaseOrderSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => GetPurchaseOrderSourceModifiedDateLineItems)
  lineItems?: GetPurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetPurchaseOrderSourceModifiedDateMetadata)
  metadata?: GetPurchaseOrderSourceModifiedDateMetadata;

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
  @Type(() => GetPurchaseOrderSourceModifiedDateShipTo)
  shipTo?: GetPurchaseOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetPurchaseOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => GetPurchaseOrderSourceModifiedDateSupplierRef)
  supplierRef?: GetPurchaseOrderSourceModifiedDateSupplierRef;

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

export class GetPurchaseOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetPurchaseOrderSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}