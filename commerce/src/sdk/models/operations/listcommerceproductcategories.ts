import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceProductCategoriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceProductCategoriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceProductCategoriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceProductCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommerceProductCategoriesLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommerceProductCategoriesLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommerceProductCategoriesLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommerceProductCategoriesLinksLinksSelf;
}

export class ListCommerceProductCategoriesLinksProductCategoryRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

// ListCommerceProductCategoriesLinksProductCategory
/** 
 * Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.
**/
export class ListCommerceProductCategoriesLinksProductCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestorRefs", elemType: ListCommerceProductCategoriesLinksProductCategoryRecordRef })
  ancestorRefs?: ListCommerceProductCategoriesLinksProductCategoryRecordRef[];

  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

// ListCommerceProductCategoriesLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceProductCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommerceProductCategoriesLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommerceProductCategoriesLinksProductCategory })
  results?: ListCommerceProductCategoriesLinksProductCategory[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
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