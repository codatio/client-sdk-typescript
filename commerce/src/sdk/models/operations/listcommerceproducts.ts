import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCommerceProductsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListCommerceProductsQueryParams extends SpeakeasyBase {
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

export class ListCommerceProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceProductsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceProductsQueryParams;
}

export class ListCommerceProductsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceProductsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceProductsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceProductsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceProductsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceProductsLinksLinksCurrent)
  current: ListCommerceProductsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceProductsLinksLinksNext)
  next?: ListCommerceProductsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceProductsLinksLinksPrevious)
  previous?: ListCommerceProductsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceProductsLinksLinksSelf)
  self: ListCommerceProductsLinksLinksSelf;
}
export enum ListCommerceProductsLinksProductSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Published = "Published",
  Unpublished = "Unpublished",
}

// ListCommerceProductsLinksProductSourceModifiedDate
/**
 * Represents a variation of a product available for sale, for example an item of clothing
 * may be available for sale in multiple sizes and colors
 *
 **/
export class ListCommerceProductsLinksProductSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "barcode" })
  barcode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inventory" })
  inventory?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "isTaxEnabled" })
  isTaxEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "prices" })
  prices?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "shippingRequired" })
  shippingRequired?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommerceProductsLinksProductSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "unitOfMeasure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vatPercentage" })
  vatPercentage?: number;
}

// ListCommerceProductsLinksProduct
/**
 * A Product is an item in the company's inventory, and includes information
 * about the price and quantity of all products, and variants thereof, available for sale
 *
 **/
export class ListCommerceProductsLinksProduct extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "categorization" })
  categorization?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isGiftCard" })
  isGiftCard?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({
    elemType: ListCommerceProductsLinksProductSourceModifiedDate,
  })
  @Expose({ name: "variants" })
  @Type(() => ListCommerceProductsLinksProductSourceModifiedDate)
  variants?: ListCommerceProductsLinksProductSourceModifiedDate[];
}

// ListCommerceProductsLinks
/**
 * Codat's Paging Model
 **/
export class ListCommerceProductsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceProductsLinksLinks)
  links: ListCommerceProductsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceProductsLinksProduct })
  @Expose({ name: "results" })
  @Type(() => ListCommerceProductsLinksProduct)
  results?: ListCommerceProductsLinksProduct[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCommerceProductsLinks;
}
