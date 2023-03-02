import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostItemSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItemSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
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

// PostItemSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class PostItemSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostItemSourceModifiedDateBillItemAccountRef)
  accountRef?: PostItemSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostItemSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: PostItemSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// PostItemSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItemSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostItemSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItemSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
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

// PostItemSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class PostItemSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostItemSourceModifiedDateInvoiceItemAccountRef)
  accountRef?: PostItemSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostItemSourceModifiedDateInvoiceItemTaxRateRef)
  taxRateRef?: PostItemSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum PostItemSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostItemSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => PostItemSourceModifiedDateBillItem)
  billItem?: PostItemSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => PostItemSourceModifiedDateInvoiceItem)
  invoiceItem?: PostItemSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: PostItemSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostItemSourceModifiedDateMetadata)
  metadata?: PostItemSourceModifiedDateMetadata;

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
  type: PostItemSourceModifiedDateTypeEnum;
}

export class PostItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
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
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostItem200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostItem200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostItem200ApplicationJSONChangesTypeEnum;
}

// PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
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

// PostItem200ApplicationJSONSourceModifiedDateBillItem
/** 
 * Item details that are only for bills.
**/
export class PostItem200ApplicationJSONSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef)
  accountRef?: PostItem200ApplicationJSONSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: PostItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef
/** 
 * Reference of the account to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef
/** 
 * Reference of the tax rate to which the item is linked.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
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

// PostItem200ApplicationJSONSourceModifiedDateInvoiceItem
/** 
 * Item details that are only for bills.
**/
export class PostItem200ApplicationJSONSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef)
  accountRef?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef)
  taxRateRef?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum PostItem200ApplicationJSONSourceModifiedDateItemStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostItem200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateBillItem)
  billItem?: PostItem200ApplicationJSONSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateInvoiceItem)
  invoiceItem?: PostItem200ApplicationJSONSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: PostItem200ApplicationJSONSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostItem200ApplicationJSONSourceModifiedDateMetadata;

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
  type: PostItem200ApplicationJSONSourceModifiedDateTypeEnum;
}
export enum PostItem200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostItem200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// PostItem200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostItem200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostItem200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostItem200ApplicationJSONValidationValidationItem)
  errors?: PostItem200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostItem200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostItem200ApplicationJSONValidationValidationItem)
  warnings?: PostItem200ApplicationJSONValidationValidationItem[];
}

export class PostItem200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostItem200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostItem200ApplicationJSONChanges)
  changes?: PostItem200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostItem200ApplicationJSONSourceModifiedDate)
  data?: PostItem200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostItem200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => PostItem200ApplicationJSONValidation)
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