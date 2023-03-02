import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListAccountsCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListAccountsCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAccountsCategoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAccountsCategoriesQueryParams;
}

export class ListAccountsCategoriesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListAccountsCategoriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListAccountsCategoriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListAccountsCategoriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListAccountsCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListAccountsCategoriesLinksLinksCurrent)
  current: ListAccountsCategoriesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListAccountsCategoriesLinksLinksNext)
  next?: ListAccountsCategoriesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListAccountsCategoriesLinksLinksPrevious)
  previous?: ListAccountsCategoriesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListAccountsCategoriesLinksLinksSelf)
  self: ListAccountsCategoriesLinksLinksSelf;
}

// ListAccountsCategoriesLinksCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class ListAccountsCategoriesLinksCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListAccountsCategoriesLinksCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class ListAccountsCategoriesLinksCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountAccountRef)
  accountRef?: ListAccountsCategoriesLinksCategorisedAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountModifiedDate)
  confirmed?: ListAccountsCategoriesLinksCategorisedAccountModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountModifiedDate)
  suggested?: ListAccountsCategoriesLinksCategorisedAccountModifiedDate;
}

// ListAccountsCategoriesLinks
/** 
 * Codat's Paging Model
**/
export class ListAccountsCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListAccountsCategoriesLinksLinks)
  links: ListAccountsCategoriesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListAccountsCategoriesLinksCategorisedAccount })
  @Expose({ name: "results" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccount)
  results?: ListAccountsCategoriesLinksCategorisedAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListAccountsCategoriesLinks;
}