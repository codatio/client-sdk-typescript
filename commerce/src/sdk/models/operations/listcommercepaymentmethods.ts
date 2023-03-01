import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCommercePaymentMethodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommercePaymentMethodsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommercePaymentMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommercePaymentMethodsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommercePaymentMethodsQueryParams;
}

export class ListCommercePaymentMethodsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommercePaymentMethodsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommercePaymentMethodsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommercePaymentMethodsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommercePaymentMethodsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommercePaymentMethodsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommercePaymentMethodsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommercePaymentMethodsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommercePaymentMethodsLinksLinksSelf;
}
export enum ListCommercePaymentMethodsLinksSourceModifiedDateStatusEnum {
    Active = "Active",
    Archived = "Archived",
    Unknown = "Unknown"
}

export class ListCommercePaymentMethodsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListCommercePaymentMethodsLinksSourceModifiedDateStatusEnum;
}

// ListCommercePaymentMethodsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommercePaymentMethodsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommercePaymentMethodsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommercePaymentMethodsLinksSourceModifiedDate })
  results?: ListCommercePaymentMethodsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCommercePaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommercePaymentMethodsLinks;
}