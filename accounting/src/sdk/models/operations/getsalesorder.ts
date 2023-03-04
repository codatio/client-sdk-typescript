import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetSalesOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=salesOrderId" })
  salesOrderId: string;
}

export class GetSalesOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSalesOrderPathParams;
}

// GetSalesOrderSourceModifiedDateCustomerRef
/** 
 * The customer that the sales order is recorded against in the accounting system.
**/
export class GetSalesOrderSourceModifiedDateCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
export enum GetSalesOrderSourceModifiedDateInvoicingStatusEnum {
    Unknown = "Unknown",
    PartiallyInvoiced = "PartiallyInvoiced",
    Invoiced = "Invoiced",
    NotInvoiced = "NotInvoiced"
}

// GetSalesOrderSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class GetSalesOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetSalesOrderSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product or inventory item to which the line item is linked.
**/
export class GetSalesOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetSalesOrderSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class GetSalesOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class GetSalesOrderSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "recordRefs" })
  recordRefs?: string[];
}

export class GetSalesOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetSalesOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: GetSalesOrderSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => GetSalesOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: GetSalesOrderSourceModifiedDateLineItemsItemRef;

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
  @Type(() => GetSalesOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: GetSalesOrderSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => GetSalesOrderSourceModifiedDateLineItemsTracking)
  tracking?: GetSalesOrderSourceModifiedDateLineItemsTracking;

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class GetSalesOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetSalesOrderSourceModifiedDateShipToAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// GetSalesOrderSourceModifiedDateShipToAddress
/** 
 * Delivery address for any goods that have been ordered.
**/
export class GetSalesOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: GetSalesOrderSourceModifiedDateShipToAddressTypeEnum;
}

// GetSalesOrderSourceModifiedDateShipToContact
/** 
 * Details of the named contact at the delivery address.
**/
export class GetSalesOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
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

// GetSalesOrderSourceModifiedDateShipTo
/** 
 * Delivery details for any goods that have been ordered.
**/
export class GetSalesOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => GetSalesOrderSourceModifiedDateShipToAddress)
  address?: GetSalesOrderSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => GetSalesOrderSourceModifiedDateShipToContact)
  contact?: GetSalesOrderSourceModifiedDateShipToContact;
}
export enum GetSalesOrderSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void"
}

// GetSalesOrderSourceModifiedDate
/** 
 * > View the coverage for sales orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=salesOrders" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A sales order represents a customer's intention to purchase goods or services from a seller and usually includes information such as the expected delivery date and shipping details. This information can be used to provide visibility on a business's expected receivables and to track sales through the full procurement process.
 * 
 * A sales order is typically converted to an [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) after approval.
**/
export class GetSalesOrderSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "customerPurchaseOrderNumber" })
  customerPurchaseOrderNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => GetSalesOrderSourceModifiedDateCustomerRef)
  customerRef?: GetSalesOrderSourceModifiedDateCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoicingStatus" })
  invoicingStatus?: GetSalesOrderSourceModifiedDateInvoicingStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  @SpeakeasyMetadata({ elemType: GetSalesOrderSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => GetSalesOrderSourceModifiedDateLineItems)
  lineItems?: GetSalesOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetSalesOrderSourceModifiedDateMetadata)
  metadata?: GetSalesOrderSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "salesOrderNumber" })
  salesOrderNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipTo" })
  @Type(() => GetSalesOrderSourceModifiedDateShipTo)
  shipTo?: GetSalesOrderSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetSalesOrderSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

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

export class GetSalesOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetSalesOrderSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}