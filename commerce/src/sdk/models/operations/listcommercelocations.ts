import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCommerceLocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceLocationsPathParams;
}

export class ListCommerceLocationsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceLocationsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceLocationsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceLocationsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceLocationsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommerceLocationsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommerceLocationsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommerceLocationsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommerceLocationsLinksLinksSelf;
}

// ListCommerceLocationsLinksSourceModifiedDateAddress
/** 
 * Address associated with the location
**/
export class ListCommerceLocationsLinksSourceModifiedDateAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}

// ListCommerceLocationsLinksSourceModifiedDate
/** 
 * The Locations datatype holds information on geographic locations at which stocks of products may be held, as referenced in the Products data type.
 * 
 * Locations also holds information on geographic locations where orders were placed, as referenced in the Orders data type.
 * 
 * From the Locations endpoints you can retrieve:
 * 
 * A list of all the Locations of a commerce company: `GET /companies/{companyId}/connections/{connectionId}/data/commerce-locations`.
 * The details of an individual location: `GET /companies/{companyId}/connections/{connectionId}/data/commerce-locations/{locationId}`.
 * 
**/
export class ListCommerceLocationsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: ListCommerceLocationsLinksSourceModifiedDateAddress;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

// ListCommerceLocationsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceLocationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommerceLocationsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommerceLocationsLinksSourceModifiedDate })
  results?: ListCommerceLocationsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCommerceLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommerceLocationsLinks;
}