import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostCustomerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostCustomerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}
export enum PostCustomerSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class PostCustomerSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: PostCustomerSourceModifiedDateAddressesTypeEnum;
}
export enum PostCustomerSourceModifiedDateContactsAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// PostCustomerSourceModifiedDateContactsAddress
/** 
 * An object of Address information.
**/
export class PostCustomerSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: PostCustomerSourceModifiedDateContactsAddressTypeEnum;
}
export enum PostCustomerSourceModifiedDateContactsPhoneTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class PostCustomerSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PostCustomerSourceModifiedDateContactsPhoneTypeEnum;
}
export enum PostCustomerSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostCustomerSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PostCustomerSourceModifiedDateContactsAddress)
  address?: PostCustomerSourceModifiedDateContactsAddress;

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

  @SpeakeasyMetadata({ elemType: PostCustomerSourceModifiedDateContactsPhone })
  @Expose({ name: "phone" })
  @Type(() => PostCustomerSourceModifiedDateContactsPhone)
  phone?: PostCustomerSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostCustomerSourceModifiedDateContactsStatusEnum;
}

export class PostCustomerSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum PostCustomerSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostCustomerSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostCustomerSourceModifiedDate
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
export class PostCustomerSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostCustomerSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => PostCustomerSourceModifiedDateAddresses)
  addresses?: PostCustomerSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: PostCustomerSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => PostCustomerSourceModifiedDateContacts)
  contacts?: PostCustomerSourceModifiedDateContacts[];

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
  @Type(() => PostCustomerSourceModifiedDateMetadata)
  metadata?: PostCustomerSourceModifiedDateMetadata;

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
  status: PostCustomerSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostCustomerSourceModifiedDateSupplementalData)
  supplementalData?: PostCustomerSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

export class PostCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomerPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCustomerQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCustomerSourceModifiedDate;
}

export class PostCustomer200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostCustomer200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostCustomer200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostCustomer200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostCustomer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostCustomer200ApplicationJSONChangesTypeEnum;
}
export enum PostCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class PostCustomer200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: PostCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}
export enum PostCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// PostCustomer200ApplicationJSONSourceModifiedDateContactsAddress
/** 
 * An object of Address information.
**/
export class PostCustomer200ApplicationJSONSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: PostCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum;
}
export enum PostCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class PostCustomer200ApplicationJSONSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PostCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum;
}
export enum PostCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostCustomer200ApplicationJSONSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateContactsAddress)
  address?: PostCustomer200ApplicationJSONSourceModifiedDateContactsAddress;

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

  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONSourceModifiedDateContactsPhone })
  @Expose({ name: "phone" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateContactsPhone)
  phone?: PostCustomer200ApplicationJSONSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum;
}

export class PostCustomer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum PostCustomer200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class PostCustomer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostCustomer200ApplicationJSONSourceModifiedDate
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
export class PostCustomer200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateAddresses)
  addresses?: PostCustomer200ApplicationJSONSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateContacts)
  contacts?: PostCustomer200ApplicationJSONSourceModifiedDateContacts[];

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
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostCustomer200ApplicationJSONSourceModifiedDateMetadata;

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
  status: PostCustomer200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostCustomer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}
export enum PostCustomer200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostCustomer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostCustomer200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostCustomer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostCustomer200ApplicationJSONValidationValidationItem)
  errors?: PostCustomer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostCustomer200ApplicationJSONValidationValidationItem)
  warnings?: PostCustomer200ApplicationJSONValidationValidationItem[];
}

export class PostCustomer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostCustomer200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostCustomer200ApplicationJSONChanges)
  changes?: PostCustomer200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostCustomer200ApplicationJSONSourceModifiedDate)
  data?: PostCustomer200ApplicationJSONSourceModifiedDate;

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
  status: PostCustomer200ApplicationJSONStatusEnum;

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
  @Type(() => PostCustomer200ApplicationJSONValidation)
  validation?: PostCustomer200ApplicationJSONValidation;
}

export class PostCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postCustomer200ApplicationJSONObject?: PostCustomer200ApplicationJSON;
}