import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpdateCustomerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}

export class UpdateCustomerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}
export enum UpdateCustomerSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class UpdateCustomerSourceModifiedDateAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomerSourceModifiedDateAddressesTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// UpdateCustomerSourceModifiedDateContactsAddress
/** 
 * An object of Address information.
**/
export class UpdateCustomerSourceModifiedDateContactsAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomerSourceModifiedDateContactsAddressTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class UpdateCustomerSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum;
}
export enum UpdateCustomerSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class UpdateCustomerSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UpdateCustomerSourceModifiedDateContactsAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone", elemType: UpdateCustomerSourceModifiedDateContactsPhone })
  phone?: UpdateCustomerSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateCustomerSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomerSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum UpdateCustomerSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class UpdateCustomerSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
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
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: UpdateCustomerSourceModifiedDateAddresses })
  addresses?: UpdateCustomerSourceModifiedDateAddresses[];

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: UpdateCustomerSourceModifiedDateContacts })
  contacts?: UpdateCustomerSourceModifiedDateContacts[];

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UpdateCustomerSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateCustomerSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: UpdateCustomerSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;
}

export class UpdateCustomerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class UpdateCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCustomerPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateCustomerQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateCustomerSourceModifiedDate;

  @SpeakeasyMetadata()
  security: UpdateCustomerSecurity;
}

export class UpdateCustomer200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum UpdateCustomer200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class UpdateCustomer200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: UpdateCustomer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateCustomer200ApplicationJSONChangesTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

// UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress
/** 
 * An object of Address information.
**/
export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone", elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone })
  phone?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
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
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses })
  addresses?: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses[];

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts })
  contacts?: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts[];

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;
}
export enum UpdateCustomer200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class UpdateCustomer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// UpdateCustomer200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class UpdateCustomer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdateCustomer200ApplicationJSONValidationValidationItem })
  errors?: UpdateCustomer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: UpdateCustomer200ApplicationJSONValidationValidationItem })
  warnings?: UpdateCustomer200ApplicationJSONValidationValidationItem[];
}

export class UpdateCustomer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: UpdateCustomer200ApplicationJSONChanges })
  changes?: UpdateCustomer200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: UpdateCustomer200ApplicationJSONSourceModifiedDate;

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
  status: UpdateCustomer200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: UpdateCustomer200ApplicationJSONValidation;
}

export class UpdateCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCustomer200ApplicationJSONObject?: UpdateCustomer200ApplicationJSON;
}