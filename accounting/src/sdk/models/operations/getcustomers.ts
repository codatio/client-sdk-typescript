import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


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

export class GetCustomersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersQueryParams;
}

export class GetCustomersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCustomersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCustomersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCustomersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCustomersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetCustomersLinksLinksCurrent)
  current: GetCustomersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetCustomersLinksLinksNext)
  next?: GetCustomersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetCustomersLinksLinksPrevious)
  previous?: GetCustomersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetCustomersLinksLinksSelf)
  self: GetCustomersLinksLinksSelf;
}
export enum GetCustomersLinksSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class GetCustomersLinksSourceModifiedDateAddresses extends SpeakeasyBase {
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
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCustomersLinksSourceModifiedDateContactsPhoneTypeEnum;
}
export enum GetCustomersLinksSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetCustomersLinksSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => GetCustomersLinksSourceModifiedDateContactsAddress)
  address?: GetCustomersLinksSourceModifiedDateContactsAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: GetCustomersLinksSourceModifiedDateContactsPhone })
  @Expose({ name: "phone" })
  @Type(() => GetCustomersLinksSourceModifiedDateContactsPhone)
  phone?: GetCustomersLinksSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCustomersLinksSourceModifiedDateContactsStatusEnum;
}

export class GetCustomersLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetCustomersLinksSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetCustomersLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
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
  @SpeakeasyMetadata({ elemType: GetCustomersLinksSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => GetCustomersLinksSourceModifiedDateAddresses)
  addresses?: GetCustomersLinksSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: GetCustomersLinksSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => GetCustomersLinksSourceModifiedDateContacts)
  contacts?: GetCustomersLinksSourceModifiedDateContacts[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetCustomersLinksSourceModifiedDateMetadata)
  metadata?: GetCustomersLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCustomersLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetCustomersLinksSourceModifiedDateSupplementalData)
  supplementalData?: GetCustomersLinksSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

// GetCustomersLinks
/** 
 * Codat's Paging Model
**/
export class GetCustomersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetCustomersLinksLinks)
  links: GetCustomersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetCustomersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => GetCustomersLinksSourceModifiedDate)
  results?: GetCustomersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: GetCustomersLinks;
}