import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// CreateItemSourceModifiedDateBillItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class CreateItemSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateItemSourceModifiedDateBillItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class CreateItemSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
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

// CreateItemSourceModifiedDateBillItem
/**
 * Item details that are only for bills.
 **/
export class CreateItemSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateItemSourceModifiedDateBillItemAccountRef)
  accountRef?: CreateItemSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CreateItemSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: CreateItemSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// CreateItemSourceModifiedDateInvoiceItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class CreateItemSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateItemSourceModifiedDateInvoiceItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class CreateItemSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
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

// CreateItemSourceModifiedDateInvoiceItem
/**
 * Item details that are only for bills.
 **/
export class CreateItemSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateItemSourceModifiedDateInvoiceItemAccountRef)
  accountRef?: CreateItemSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CreateItemSourceModifiedDateInvoiceItemTaxRateRef)
  taxRateRef?: CreateItemSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum CreateItemSourceModifiedDateItemStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class CreateItemSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum CreateItemSourceModifiedDateTypeEnum {
  Unknown = "Unknown",
  Inventory = "Inventory",
  NonInventory = "NonInventory",
  Service = "Service",
}

// CreateItemSourceModifiedDate
/**
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 *
 **/
export class CreateItemSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => CreateItemSourceModifiedDateBillItem)
  billItem?: CreateItemSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => CreateItemSourceModifiedDateInvoiceItem)
  invoiceItem?: CreateItemSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: CreateItemSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateItemSourceModifiedDateMetadata)
  metadata?: CreateItemSourceModifiedDateMetadata;

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
  type: CreateItemSourceModifiedDateTypeEnum;
}

export class CreateItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: CreateItemSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class CreateItem200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateItem200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateItem200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateItem200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateItem200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateItem200ApplicationJSONChangesTypeEnum;
}

// CreateItem200ApplicationJSONSourceModifiedDateBillItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateBillItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef extends SpeakeasyBase {
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

// CreateItem200ApplicationJSONSourceModifiedDateBillItem
/**
 * Item details that are only for bills.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDateBillItemAccountRef)
  accountRef?: CreateItem200ApplicationJSONSourceModifiedDateBillItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef)
  taxRateRef?: CreateItem200ApplicationJSONSourceModifiedDateBillItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

// CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef
/**
 * Reference of the account to which the item is linked.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef
/**
 * Reference of the tax rate to which the item is linked.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef extends SpeakeasyBase {
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

// CreateItem200ApplicationJSONSourceModifiedDateInvoiceItem
/**
 * Item details that are only for bills.
 **/
export class CreateItem200ApplicationJSONSourceModifiedDateInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef
  )
  accountRef?: CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(
    () => CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef
  )
  taxRateRef?: CreateItem200ApplicationJSONSourceModifiedDateInvoiceItemTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum CreateItem200ApplicationJSONSourceModifiedDateItemStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class CreateItem200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum CreateItem200ApplicationJSONSourceModifiedDateTypeEnum {
  Unknown = "Unknown",
  Inventory = "Inventory",
  NonInventory = "NonInventory",
  Service = "Service",
}

// CreateItem200ApplicationJSONSourceModifiedDate
/**
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 *
 **/
export class CreateItem200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDateBillItem)
  billItem?: CreateItem200ApplicationJSONSourceModifiedDateBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDateInvoiceItem)
  invoiceItem?: CreateItem200ApplicationJSONSourceModifiedDateInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: CreateItem200ApplicationJSONSourceModifiedDateItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateItem200ApplicationJSONSourceModifiedDateMetadata;

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
  type: CreateItem200ApplicationJSONSourceModifiedDateTypeEnum;
}
export enum CreateItem200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateItem200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateItem200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class CreateItem200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateItem200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateItem200ApplicationJSONValidationValidationItem)
  errors?: CreateItem200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateItem200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateItem200ApplicationJSONValidationValidationItem)
  warnings?: CreateItem200ApplicationJSONValidationValidationItem[];
}

export class CreateItem200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateItem200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateItem200ApplicationJSONChanges)
  changes?: CreateItem200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateItem200ApplicationJSONSourceModifiedDate)
  data?: CreateItem200ApplicationJSONSourceModifiedDate;

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
  status: CreateItem200ApplicationJSONStatusEnum;

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
  @Type(() => CreateItem200ApplicationJSONValidation)
  validation?: CreateItem200ApplicationJSONValidation;
}

export class CreateItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createItem200ApplicationJSONObject?: CreateItem200ApplicationJSON;
}
