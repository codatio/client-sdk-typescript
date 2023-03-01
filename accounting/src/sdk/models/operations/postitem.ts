import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostItemSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItemSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItemSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItemSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItemSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class PostItemSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostItemSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostItemSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}

// PostItemSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItemSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItemSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItemSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItemSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class PostItemSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostItemSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostItemSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum PostItemSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostItemSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum PostItemSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Service = "Service"
}

// PostItemSourceModifiedDate
/** 
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 * 
**/
export class PostItemSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billItem" })
  billItem?: PostItemSourceModifiedDateBillItem;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItem" })
  invoiceItem?: PostItemSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemStatus" })
  itemStatus: PostItemSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostItemSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostItemSourceModifiedDateTypeEnum;
}

export class PostItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostItemPathParams;

  @SpeakeasyMetadata()
  queryParams: PostItemQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostItemSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostItemSecurity;
}

export class PostItem200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum PostItem200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostItem200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostItem200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostItem200ApplicationJSONChangesTypeEnum;
}

// PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum PostItem200ApplicationJSONSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostItem200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum PostItem200ApplicationJSONSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Service = "Service"
}

// PostItem200ApplicationJSONSourceModifiedDate
/** 
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 * 
**/
export class PostItem200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billItem" })
  billItem?: PostItem200ApplicationJSONSourceModifiedDateBillItem;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItem" })
  invoiceItem?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemStatus" })
  itemStatus: PostItem200ApplicationJSONSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostItem200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostItem200ApplicationJSONSourceModifiedDateTypeEnum;
}
export enum PostItem200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostItem200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostItem200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostItem200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostItem200ApplicationJSONValidationValidationItem })
  errors?: PostItem200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostItem200ApplicationJSONValidationValidationItem })
  warnings?: PostItem200ApplicationJSONValidationValidationItem[];
}

export class PostItem200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostItem200ApplicationJSONChanges })
  changes?: PostItem200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostItem200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostItem200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostItem200ApplicationJSONValidation;
}

export class PostItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postItem200ApplicationJSONObject?: PostItem200ApplicationJSON;
}