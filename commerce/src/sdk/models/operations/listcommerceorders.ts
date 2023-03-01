import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceOrdersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceOrdersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommerceOrdersLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommerceOrdersLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommerceOrdersLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommerceOrdersLinksLinksSelf;
}

export class ListCommerceOrdersLinksSourceModifiedDateNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAllocations", elemType: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations })
  discountAllocations?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=productRef" })
  productRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  @SpeakeasyMetadata({ data: "json, name=productVariantRef" })
  productVariantRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
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
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateTypeEnum;
}
export enum ListCommerceOrdersLinksSourceModifiedDateServiceChargesTypeEnum {
    Generic = "Generic",
    Shipping = "Shipping",
    Overpayment = "Overpayment",
    Unknown = "Unknown"
}

export class ListCommerceOrdersLinksSourceModifiedDateServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
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
  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=locationRef" })
  locationRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems })
  orderLineItems?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate })
  payments?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=serviceCharges", elemType: ListCommerceOrdersLinksSourceModifiedDateServiceCharges })
  serviceCharges?: ListCommerceOrdersLinksSourceModifiedDateServiceCharges[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}

// ListCommerceOrdersLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceOrdersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommerceOrdersLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommerceOrdersLinksSourceModifiedDate })
  results?: ListCommerceOrdersLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
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