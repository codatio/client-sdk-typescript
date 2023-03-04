import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommercePaymentMethodsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommercePaymentMethodsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommercePaymentMethodsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommercePaymentMethodsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommercePaymentMethodsLinksLinksCurrent)
  current: ListCommercePaymentMethodsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommercePaymentMethodsLinksLinksNext)
  next?: ListCommercePaymentMethodsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommercePaymentMethodsLinksLinksPrevious)
  previous?: ListCommercePaymentMethodsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommercePaymentMethodsLinksLinksSelf)
  self: ListCommercePaymentMethodsLinksLinksSelf;
}
export enum ListCommercePaymentMethodsLinksSourceModifiedDateStatusEnum {
    Active = "Active",
    Archived = "Archived",
    Unknown = "Unknown"
}

export class ListCommercePaymentMethodsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommercePaymentMethodsLinksSourceModifiedDateStatusEnum;
}

// ListCommercePaymentMethodsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommercePaymentMethodsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommercePaymentMethodsLinksLinks)
  links: ListCommercePaymentMethodsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommercePaymentMethodsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommercePaymentMethodsLinksSourceModifiedDate)
  results?: ListCommercePaymentMethodsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommercePaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCommercePaymentMethodsLinks;
}