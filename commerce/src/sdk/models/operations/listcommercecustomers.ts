import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class ListCommerceCustomersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceCustomersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommerceCustomersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceCustomersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceCustomersQueryParams;
}

export class ListCommerceCustomersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceCustomersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceCustomersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceCustomersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceCustomersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceCustomersLinksLinksCurrent)
  current: ListCommerceCustomersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceCustomersLinksLinksNext)
  next?: ListCommerceCustomersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceCustomersLinksLinksPrevious)
  previous?: ListCommerceCustomersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceCustomersLinksLinksSelf)
  self: ListCommerceCustomersLinksLinksSelf;
}

export class ListCommerceCustomersLinksSourceModifiedDateAddress extends SpeakeasyBase {
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
  type?: any;
}

// ListCommerceCustomersLinksSourceModifiedDate
/** 
 * Represents a customer who has placed an order in the commerce system"
**/
export class ListCommerceCustomersLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListCommerceCustomersLinksSourceModifiedDateAddress })
  @Expose({ name: "addresses" })
  @Type(() => ListCommerceCustomersLinksSourceModifiedDateAddress)
  addresses?: ListCommerceCustomersLinksSourceModifiedDateAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

// ListCommerceCustomersLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceCustomersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceCustomersLinksLinks)
  links: ListCommerceCustomersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceCustomersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommerceCustomersLinksSourceModifiedDate)
  results?: ListCommerceCustomersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCommerceCustomersLinks;
}