import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum UpdateCustomerSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class UpdateCustomerSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: UpdateCustomerSourceModifiedDateAddressesTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// UpdateCustomerSourceModifiedDateContactsAddress
/**
 * An object of Address information.
 **/
export class UpdateCustomerSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: UpdateCustomerSourceModifiedDateContactsAddressTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class UpdateCustomerSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class UpdateCustomerSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdateCustomerSourceModifiedDateContactsAddress)
  address?: UpdateCustomerSourceModifiedDateContactsAddress;

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

  @SpeakeasyMetadata({
    elemType: UpdateCustomerSourceModifiedDateContactsPhone,
  })
  @Expose({ name: "phone" })
  @Type(() => UpdateCustomerSourceModifiedDateContactsPhone)
  phone?: UpdateCustomerSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomerSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomerSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum UpdateCustomerSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

// UpdateCustomerSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class UpdateCustomerSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// UpdateCustomerSourceModifiedDate
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
export class UpdateCustomerSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateCustomerSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => UpdateCustomerSourceModifiedDateAddresses)
  addresses?: UpdateCustomerSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: UpdateCustomerSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => UpdateCustomerSourceModifiedDateContacts)
  contacts?: UpdateCustomerSourceModifiedDateContacts[];

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
  @Type(() => UpdateCustomerSourceModifiedDateMetadata)
  metadata?: UpdateCustomerSourceModifiedDateMetadata;

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
  status: UpdateCustomerSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateCustomerSourceModifiedDateSupplementalData)
  supplementalData?: UpdateCustomerSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

export class UpdateCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdateCustomerSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=customerId",
  })
  customerId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=forceUpdate",
  })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class UpdateCustomer200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum UpdateCustomer200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class UpdateCustomer200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => UpdateCustomer200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: UpdateCustomer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: UpdateCustomer200ApplicationJSONChangesTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress
/**
 * An object of Address information.
 **/
export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress)
  address?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress;

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

  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone,
  })
  @Expose({ name: "phone" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone)
  phone?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

// UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// UpdateCustomer200ApplicationJSONSourceModifiedDate
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
export class UpdateCustomer200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses,
  })
  @Expose({ name: "addresses" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses)
  addresses?: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts,
  })
  @Expose({ name: "contacts" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContacts)
  contacts?: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts[];

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
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata;

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
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(
    () => UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData
  )
  supplementalData?: UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}
export enum UpdateCustomer200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class UpdateCustomer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// UpdateCustomer200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class UpdateCustomer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => UpdateCustomer200ApplicationJSONValidationValidationItem)
  errors?: UpdateCustomer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => UpdateCustomer200ApplicationJSONValidationValidationItem)
  warnings?: UpdateCustomer200ApplicationJSONValidationValidationItem[];
}

export class UpdateCustomer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateCustomer200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdateCustomer200ApplicationJSONChanges)
  changes?: UpdateCustomer200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDate)
  data?: UpdateCustomer200ApplicationJSONSourceModifiedDate;

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
  status: UpdateCustomer200ApplicationJSONStatusEnum;

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
  @Type(() => UpdateCustomer200ApplicationJSONValidation)
  validation?: UpdateCustomer200ApplicationJSONValidation;
}

export class UpdateCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  updateCustomer200ApplicationJSONObject?: UpdateCustomer200ApplicationJSON;
}
