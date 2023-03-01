import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListItemsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListItemsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListItemsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListItemsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListItemsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListItemsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListItemsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListItemsLinksLinksSelf;
}

// ListItemsLinksSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class ListItemsLinksSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: ListItemsLinksSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: ListItemsLinksSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}

// ListItemsLinksSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// ListItemsLinksSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class ListItemsLinksSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: ListItemsLinksSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: ListItemsLinksSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum ListItemsLinksSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class ListItemsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
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
  @SpeakeasyMetadata({ data: "json, name=billItem" })
  billItem?: ListItemsLinksSourceModifiedDateBillItem;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItem" })
  invoiceItem?: ListItemsLinksSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemStatus" })
  itemStatus: ListItemsLinksSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListItemsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListItemsLinksSourceModifiedDateTypeEnum;
}

// ListItemsLinks
/** 
 * Codat's Paging Model
**/
export class ListItemsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListItemsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListItemsLinksSourceModifiedDate })
  results?: ListItemsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
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