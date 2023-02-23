import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCommercePaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommercePaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommercePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommercePaymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommercePaymentsQueryParams;
}

export class ListCommercePaymentsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommercePaymentsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommercePaymentsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommercePaymentsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommercePaymentsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommercePaymentsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommercePaymentsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommercePaymentsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommercePaymentsLinksLinksSelf;
}

// ListCommercePaymentsLinksSourceModifiedDateNameRef
/** 
 * The payment method the payment is linked to in the commerce platform.
**/
export class ListCommercePaymentsLinksSourceModifiedDateNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
export enum ListCommercePaymentsLinksSourceModifiedDateStatusEnum {
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled",
    Unknown = "Unknown"
}

// ListCommercePaymentsLinksSourceModifiedDate
/** 
 * A payment made in a commerce platform
**/
export class ListCommercePaymentsLinksSourceModifiedDate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=paymentMethodRef" })
  paymentMethodRef?: ListCommercePaymentsLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata({ data: "json, name=paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListCommercePaymentsLinksSourceModifiedDateStatusEnum;
}

// ListCommercePaymentsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommercePaymentsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommercePaymentsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommercePaymentsLinksSourceModifiedDate })
  results?: ListCommercePaymentsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCommercePaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommercePaymentsLinks;
}