import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListCommerceOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommerceOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceOrdersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceOrdersQueryParams;
}

export class ListCommerceOrdersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceOrdersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceOrdersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceOrdersLinksLinksCurrent)
  current: ListCommerceOrdersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceOrdersLinksLinksNext)
  next?: ListCommerceOrdersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceOrdersLinksLinksPrevious)
  previous?: ListCommerceOrdersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceOrdersLinksLinksSelf)
  self: ListCommerceOrdersLinksLinksSelf;
}

export class ListCommerceOrdersLinksSourceModifiedDateNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations })
  @Expose({ name: "discountAllocations" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations)
  discountAllocations?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "productRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef)
  productRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "productVariantRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef)
  productVariantRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxes" })
  taxes?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateStatusEnum {
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled",
    Unknown = "Unknown"
}
export enum ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateTypeEnum {
    Cash = "Cash",
    Card = "Card",
    Invoice = "Invoice",
    OnlineCard = "OnlineCard",
    Swish = "Swish",
    Vipps = "Vipps",
    Mobile = "Mobile",
    StoreCredit = "StoreCredit",
    Paypal = "Paypal",
    Custom = "Custom",
    Prepaid = "Prepaid",
    Unknown = "Unknown"
}

export class ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateTypeEnum;
}
export enum ListCommerceOrdersLinksSourceModifiedDateServiceChargesTypeEnum {
    Generic = "Generic",
    Shipping = "Shipping",
    Overpayment = "Overpayment",
    Unknown = "Unknown"
}

export class ListCommerceOrdersLinksSourceModifiedDateServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxes" })
  taxes?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceOrdersLinksSourceModifiedDateServiceChargesTypeEnum;
}

// ListCommerceOrdersLinksSourceModifiedDate
/** 
 * Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order.
 * 
 * From the Orders endpoints you can retrieve:
 * 
 * A list of all the orders for a commerce company:
 * `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders`.
 * The details of an individual order:
 * `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders/{orderId}`.
 * Note that for refunds `quantity` is a negative value and `unitPrice` is a positive value.
 * 
**/
export class ListCommerceOrdersLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "closedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  closedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateNameRef)
  customerRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateNameRef)
  locationRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems })
  @Expose({ name: "orderLineItems" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItems)
  orderLineItems?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate })
  @Expose({ name: "payments" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate)
  payments?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate[];

  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDateServiceCharges })
  @Expose({ name: "serviceCharges" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateServiceCharges)
  serviceCharges?: ListCommerceOrdersLinksSourceModifiedDateServiceCharges[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

// ListCommerceOrdersLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceOrdersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceOrdersLinksLinks)
  links: ListCommerceOrdersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDate)
  results?: ListCommerceOrdersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommerceOrdersLinks;
}