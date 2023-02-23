import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCustomersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCustomersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetCustomersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetCustomersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersQueryParams;

  @SpeakeasyMetadata()
  security: GetCustomersSecurity;
}

export class GetCustomersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCustomersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCustomersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class GetCustomersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class GetCustomersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: GetCustomersLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetCustomersLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: GetCustomersLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: GetCustomersLinksLinksSelf;
}
export enum GetCustomersLinksSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class GetCustomersLinksSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: GetCustomersLinksSourceModifiedDateAddressesTypeEnum;
}
export enum GetCustomersLinksSourceModifiedDateContactsAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// GetCustomersLinksSourceModifiedDateContactsAddress
/** 
 * An object of Address information.
**/
export class GetCustomersLinksSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: GetCustomersLinksSourceModifiedDateContactsAddressTypeEnum;
}
export enum GetCustomersLinksSourceModifiedDateContactsPhoneTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class GetCustomersLinksSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCustomersLinksSourceModifiedDateContactsPhoneTypeEnum;
}
export enum GetCustomersLinksSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetCustomersLinksSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: GetCustomersLinksSourceModifiedDateContactsAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone", elemType: GetCustomersLinksSourceModifiedDateContactsPhone })
  phone?: GetCustomersLinksSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCustomersLinksSourceModifiedDateContactsStatusEnum;
}

export class GetCustomersLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum GetCustomersLinksSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetCustomersLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// GetCustomersLinksSourceModifiedDate
/** 
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 * 
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 * 
**/
export class GetCustomersLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: GetCustomersLinksSourceModifiedDateAddresses })
  addresses?: GetCustomersLinksSourceModifiedDateAddresses[];

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: GetCustomersLinksSourceModifiedDateContacts })
  contacts?: GetCustomersLinksSourceModifiedDateContacts[];

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetCustomersLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCustomersLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: GetCustomersLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;
}

// GetCustomersLinks
/** 
 * Codat's Paging Model
**/
export class GetCustomersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: GetCustomersLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetCustomersLinksSourceModifiedDate })
  results?: GetCustomersLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: GetCustomersLinks;
}