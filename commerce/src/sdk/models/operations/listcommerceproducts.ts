import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCommerceProductsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
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
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceProductsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceProductsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceProductsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceProductsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommerceProductsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommerceProductsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommerceProductsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommerceProductsLinksLinksSelf;
}
export enum ListCommerceProductsLinksProductSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Published = "Published",
    Unpublished = "Unpublished"
}

// ListCommerceProductsLinksProductSourceModifiedDate
/** 
 * Represents a variation of a product available for sale, for example an item of clothing
 * may be available for sale in multiple sizes and colors
 * 
**/
export class ListCommerceProductsLinksProductSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: any[];

  @SpeakeasyMetadata({ data: "json, name=isTaxEnabled" })
  isTaxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prices" })
  prices?: any[];

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=shippingRequired" })
  shippingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListCommerceProductsLinksProductSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}

// ListCommerceProductsLinksProduct
/** 
 * A Product is an item in the company's inventory, and includes information
 * about the price and quantity of all products, and variants thereof, available for sale
 * 
**/
export class ListCommerceProductsLinksProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorization" })
  categorization?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isGiftCard" })
  isGiftCard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: ListCommerceProductsLinksProductSourceModifiedDate })
  variants?: ListCommerceProductsLinksProductSourceModifiedDate[];
}

// ListCommerceProductsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceProductsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommerceProductsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommerceProductsLinksProduct })
  results?: ListCommerceProductsLinksProduct[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCommerceProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommerceProductsLinks;
}