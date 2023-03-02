import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListCommerceProductCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceProductCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommerceProductCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceProductCategoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceProductCategoriesQueryParams;
}

export class ListCommerceProductCategoriesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceProductCategoriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceProductCategoriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceProductCategoriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceProductCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceProductCategoriesLinksLinksCurrent)
  current: ListCommerceProductCategoriesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceProductCategoriesLinksLinksNext)
  next?: ListCommerceProductCategoriesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceProductCategoriesLinksLinksPrevious)
  previous?: ListCommerceProductCategoriesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceProductCategoriesLinksLinksSelf)
  self: ListCommerceProductCategoriesLinksLinksSelf;
}

export class ListCommerceProductCategoriesLinksProductCategoryRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

// ListCommerceProductCategoriesLinksProductCategory
/** 
 * Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.
**/
export class ListCommerceProductCategoriesLinksProductCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListCommerceProductCategoriesLinksProductCategoryRecordRef })
  @Expose({ name: "ancestorRefs" })
  @Type(() => ListCommerceProductCategoriesLinksProductCategoryRecordRef)
  ancestorRefs?: ListCommerceProductCategoriesLinksProductCategoryRecordRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

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
}

// ListCommerceProductCategoriesLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceProductCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceProductCategoriesLinksLinks)
  links: ListCommerceProductCategoriesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceProductCategoriesLinksProductCategory })
  @Expose({ name: "results" })
  @Type(() => ListCommerceProductCategoriesLinksProductCategory)
  results?: ListCommerceProductCategoriesLinksProductCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceProductCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommerceProductCategoriesLinks;
}