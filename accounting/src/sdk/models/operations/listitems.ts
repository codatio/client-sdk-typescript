import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class ListItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListItemsQueryParams;

  @SpeakeasyMetadata()
  security: ListItemsSecurity;
}

export class ListItemsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListItemsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListItemsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListItemsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListItemsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListItemsLinksLinksCurrent)
  current: ListItemsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListItemsLinksLinksNext)
  next?: ListItemsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListItemsLinksLinksPrevious)
  previous?: ListItemsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListItemsLinksLinksSelf)
  self: ListItemsLinksLinksSelf;
}

// ListItemsLinksSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class ListItemsLinksSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListItemsLinksSourceModifiedDateBillItemAccountRef)
  accountRef?: ListItemsLinksSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => ListItemsLinksSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: ListItemsLinksSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// ListItemsLinksSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListItemsLinksSourceModifiedDateInvoiceItemAccountRef)
  accountRef?: ListItemsLinksSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef)
  taxRateRef?: ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum ListItemsLinksSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class ListItemsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum ListItemsLinksSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Service = "Service"
}

// ListItemsLinksSourceModifiedDate
/** 
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 * 
**/
export class ListItemsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => ListItemsLinksSourceModifiedDateBillItem)
  billItem?: ListItemsLinksSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => ListItemsLinksSourceModifiedDateInvoiceItem)
  invoiceItem?: ListItemsLinksSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: ListItemsLinksSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListItemsLinksSourceModifiedDateMetadata)
  metadata?: ListItemsLinksSourceModifiedDateMetadata;

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
  @Expose({ name: "type" })
  type: ListItemsLinksSourceModifiedDateTypeEnum;
}

// ListItemsLinks
/** 
 * Codat's Paging Model
**/
export class ListItemsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListItemsLinksLinks)
  links: ListItemsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListItemsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListItemsLinksSourceModifiedDate)
  results?: ListItemsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListItemsLinks;
}