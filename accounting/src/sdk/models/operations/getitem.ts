import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}

export class GetItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemPathParams;

  @SpeakeasyMetadata()
  security: GetItemSecurity;
}

// GetItemSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class GetItemSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetItemSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class GetItemSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetItemSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class GetItemSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetItemSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: GetItemSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}

// GetItemSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class GetItemSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetItemSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class GetItemSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetItemSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class GetItemSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetItemSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: GetItemSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum GetItemSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetItemSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum GetItemSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Service = "Service"
}

// GetItemSourceModifiedDate
/** 
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 * 
**/
export class GetItemSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billItem" })
  billItem?: GetItemSourceModifiedDateBillItem;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItem" })
  invoiceItem?: GetItemSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemStatus" })
  itemStatus: GetItemSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetItemSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetItemSourceModifiedDateTypeEnum;
}

export class GetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetItemSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}