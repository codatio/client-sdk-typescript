import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=itemId",
  })
  itemId: string;
}

export class GetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemPathParams;
}

// GetItemSourceModifiedDateBillItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class GetItemSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetItemSourceModifiedDateBillItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class GetItemSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
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

// GetItemSourceModifiedDateBillItem
/**
 * Item details that are only for bills.
 **/
export class GetItemSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetItemSourceModifiedDateBillItemAccountRef)
  accountRef?: GetItemSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => GetItemSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: GetItemSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// GetItemSourceModifiedDateInvoiceItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class GetItemSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetItemSourceModifiedDateInvoiceItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class GetItemSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
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

// GetItemSourceModifiedDateInvoiceItem
/**
 * Item details that are only for bills.
 **/
export class GetItemSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetItemSourceModifiedDateInvoiceItemAccountRef)
  accountRef?: GetItemSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => GetItemSourceModifiedDateInvoiceItemTaxRateRef)
  taxRateRef?: GetItemSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum GetItemSourceModifiedDateItemStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class GetItemSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetItemSourceModifiedDateTypeEnum {
  Unknown = "Unknown",
  Inventory = "Inventory",
  NonInventory = "NonInventory",
  Service = "Service",
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
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => GetItemSourceModifiedDateBillItem)
  billItem?: GetItemSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => GetItemSourceModifiedDateInvoiceItem)
  invoiceItem?: GetItemSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: GetItemSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetItemSourceModifiedDateMetadata)
  metadata?: GetItemSourceModifiedDateMetadata;

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
  type: GetItemSourceModifiedDateTypeEnum;
}

export class GetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetItemSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
