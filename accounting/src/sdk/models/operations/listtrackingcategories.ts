import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListTrackingCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListTrackingCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListTrackingCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListTrackingCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListTrackingCategoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTrackingCategoriesQueryParams;

  @SpeakeasyMetadata()
  security: ListTrackingCategoriesSecurity;
}

export class ListTrackingCategoriesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListTrackingCategoriesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListTrackingCategoriesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListTrackingCategoriesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListTrackingCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListTrackingCategoriesLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListTrackingCategoriesLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListTrackingCategoriesLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListTrackingCategoriesLinksLinksSelf;
}
export enum ListTrackingCategoriesLinksSourceModifiedDateTrackingCategoryStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// ListTrackingCategoriesLinksSourceModifiedDate
/** 
 * Details of a category used for tracking transactions.
 * 
 * > Language tip
 * >
 * > Parameters used to track types of spend in various parts of an organization can be called  **dimensions**, **projects**, **classes**, or **locations** in different accounting platforms. In Codat, we refer to these as tracking categories.
 * 
 * View the coverage for tracking categories in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.
 * 
 * From their accounting system, customers can: 
 * 
 * - Create and maintain tracking categories and tracking category types.
 * - View all tracking categories that are available for use.
 * - View the relationships between the categories.
 * - Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
 * - View the categories that a transaction belongs to.
 * - View all transactions in a tracking category.
**/
export class ListTrackingCategoriesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListTrackingCategoriesLinksSourceModifiedDateTrackingCategoryStatusEnum;
}

// ListTrackingCategoriesLinks
/** 
 * Codat's Paging Model
**/
export class ListTrackingCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListTrackingCategoriesLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListTrackingCategoriesLinksSourceModifiedDate })
  results?: ListTrackingCategoriesLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListTrackingCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListTrackingCategoriesLinks;
}