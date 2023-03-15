import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListPurchaseOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class ListPurchaseOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListPurchaseOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPurchaseOrdersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPurchaseOrdersQueryParams;
}

export class ListPurchaseOrdersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListPurchaseOrdersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListPurchaseOrdersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListPurchaseOrdersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListPurchaseOrdersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListPurchaseOrdersLinksLinksCurrent)
  current: ListPurchaseOrdersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListPurchaseOrdersLinksLinksNext)
  next?: ListPurchaseOrdersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListPurchaseOrdersLinksLinksPrevious)
  previous?: ListPurchaseOrdersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListPurchaseOrdersLinksLinksSelf)
  self: ListPurchaseOrdersLinksLinksSelf;
}

// ListPurchaseOrdersLinksSourceModifiedDateLineItemsAccountRef
/**
 * Reference to the account to which the line item is linked.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListPurchaseOrdersLinksSourceModifiedDateLineItemsItemRef
/**
 * Reference to the product or inventory item to which the line item is linked.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListPurchaseOrdersLinksSourceModifiedDateLineItemsTaxRateRef
/**
 * Reference to the tax rate to which the line item is linked.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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

export class ListPurchaseOrdersLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListPurchaseOrdersLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListPurchaseOrdersLinksSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListPurchaseOrdersLinksSourceModifiedDateLineItemsItemRef;

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
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListPurchaseOrdersLinksSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({
    elemType:
      ListPurchaseOrdersLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => ListPurchaseOrdersLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: ListPurchaseOrdersLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class ListPurchaseOrdersLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum ListPurchaseOrdersLinksSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// ListPurchaseOrdersLinksSourceModifiedDateShipToAddress
/**
 * Delivery address for any goods that have been ordered.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: ListPurchaseOrdersLinksSourceModifiedDateShipToAddressTypeEnum;
}

// ListPurchaseOrdersLinksSourceModifiedDateShipToContact
/**
 * Details of the named contact at the delivery address.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateShipToContact extends SpeakeasyBase {
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

// ListPurchaseOrdersLinksSourceModifiedDateShipTo
/**
 * Delivery details for any goods that have been ordered.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateShipToAddress)
  address?: ListPurchaseOrdersLinksSourceModifiedDateShipToAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateShipToContact)
  contact?: ListPurchaseOrdersLinksSourceModifiedDateShipToContact;
}
export enum ListPurchaseOrdersLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

// ListPurchaseOrdersLinksSourceModifiedDateSupplierRef
/**
 * Supplier that the purchase order is recorded against in the accounting system.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// ListPurchaseOrdersLinksSourceModifiedDate
/**
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
 *
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
 **/
export class ListPurchaseOrdersLinksSourceModifiedDate extends SpeakeasyBase {
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
    elemType: ListPurchaseOrdersLinksSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateLineItems)
  lineItems?: ListPurchaseOrdersLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateMetadata)
  metadata?: ListPurchaseOrdersLinksSourceModifiedDateMetadata;

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
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateShipTo)
  shipTo?: ListPurchaseOrdersLinksSourceModifiedDateShipTo;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListPurchaseOrdersLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDateSupplierRef)
  supplierRef?: ListPurchaseOrdersLinksSourceModifiedDateSupplierRef;

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

// ListPurchaseOrdersLinks
/**
 * Codat's Paging Model
 **/
export class ListPurchaseOrdersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListPurchaseOrdersLinksLinks)
  links: ListPurchaseOrdersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListPurchaseOrdersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListPurchaseOrdersLinksSourceModifiedDate)
  results?: ListPurchaseOrdersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListPurchaseOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListPurchaseOrdersLinks;
}
