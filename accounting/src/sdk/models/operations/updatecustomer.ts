/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Type of the address.
 */
export enum UpdateCustomerSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class UpdateCustomerSourceModifiedDateAddresses extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomerSourceModifiedDateAddressesTypeEnum;
}

/**
 * Type of the address.
 */
export enum UpdateCustomerSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * An object of Address information.
 */
export class UpdateCustomerSourceModifiedDateContactsAddress extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomerSourceModifiedDateContactsAddressTypeEnum;
}

/**
 * Type of phone number.
 */
export enum UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class UpdateCustomerSourceModifiedDateContactsPhone extends SpeakeasyBase {
  /**
   * Phone number for a customer contact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Type of phone number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomerSourceModifiedDateContactsPhoneTypeEnum;
}

/**
 * Status of customer contacts.
 *
 * @remarks
 *
 * Customers can have multiple contacts.
 */
export enum UpdateCustomerSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class UpdateCustomerSourceModifiedDateContacts extends SpeakeasyBase {
  /**
   * An object of Address information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdateCustomerSourceModifiedDateContactsAddress)
  address?: UpdateCustomerSourceModifiedDateContactsAddress;

  /**
   * Email of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > 📘 Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Name of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * An array of Phone numbers.
   */
  @SpeakeasyMetadata({
    elemType: UpdateCustomerSourceModifiedDateContactsPhone,
  })
  @Expose({ name: "phone" })
  @Type(() => UpdateCustomerSourceModifiedDateContactsPhone)
  phone?: UpdateCustomerSourceModifiedDateContactsPhone[];

  /**
   * Status of customer contacts.
   *
   * @remarks
   *
   * Customers can have multiple contacts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomerSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomerSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Current state of the customer.
 */
export enum UpdateCustomerSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class UpdateCustomerSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 */
export class UpdateCustomerSourceModifiedDate extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({ elemType: UpdateCustomerSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => UpdateCustomerSourceModifiedDateAddresses)
  addresses?: UpdateCustomerSourceModifiedDateAddresses[];

  /**
   * Name of the main contact for the identified customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * An array of Contacts.
   */
  @SpeakeasyMetadata({ elemType: UpdateCustomerSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => UpdateCustomerSourceModifiedDateContacts)
  contacts?: UpdateCustomerSourceModifiedDateContacts[];

  /**
   * Name of the customer as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  /**
   * Default currency the transactional data of the customer is recorded in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the customer, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateCustomerSourceModifiedDateMetadata)
  metadata?: UpdateCustomerSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number. In the UK, this is typically the Companies House company registration number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomerSourceModifiedDateStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => UpdateCustomerSourceModifiedDateSupplementalData)
  supplementalData?: UpdateCustomerSourceModifiedDateSupplementalData;

  /**
   * Company tax number.
   */
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

/**
 * Type of the address.
 */
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}

/**
 * Type of the address.
 */
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * An object of Address information.
 */
export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum;
}

/**
 * Type of phone number.
 */
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone extends SpeakeasyBase {
  /**
   * Phone number for a customer contact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Type of phone number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum;
}

/**
 * Status of customer contacts.
 *
 * @remarks
 *
 * Customers can have multiple contacts.
 */
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateContacts extends SpeakeasyBase {
  /**
   * An object of Address information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress)
  address?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsAddress;

  /**
   * Email of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > 📘 Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Name of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * An array of Phone numbers.
   */
  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone,
  })
  @Expose({ name: "phone" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone)
  phone?: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsPhone[];

  /**
   * Status of customer contacts.
   *
   * @remarks
   *
   * Customers can have multiple contacts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateContactsStatusEnum;
}

export class UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Current state of the customer.
 */
export enum UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 */
export class UpdateCustomer200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses,
  })
  @Expose({ name: "addresses" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses)
  addresses?: UpdateCustomer200ApplicationJSONSourceModifiedDateAddresses[];

  /**
   * Name of the main contact for the identified customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * An array of Contacts.
   */
  @SpeakeasyMetadata({
    elemType: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts,
  })
  @Expose({ name: "contacts" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateContacts)
  contacts?: UpdateCustomer200ApplicationJSONSourceModifiedDateContacts[];

  /**
   * Name of the customer as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  /**
   * Default currency the transactional data of the customer is recorded in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the customer, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdateCustomer200ApplicationJSONSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number. In the UK, this is typically the Companies House company registration number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: UpdateCustomer200ApplicationJSONSourceModifiedDateStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(
    () => UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData
  )
  supplementalData?: UpdateCustomer200ApplicationJSONSourceModifiedDateSupplementalData;

  /**
   * Company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

/**
 * The status of the push operation.
 */
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

/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 */
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

/**
 * Success
 */
export class UpdateCustomer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateCustomer200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdateCustomer200ApplicationJSONChanges)
  changes?: UpdateCustomer200ApplicationJSONChanges[];

  /**
   * Unique identifier for your SMB in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  /**
   * The datetime when the push was completed, null if Pending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  completedOnUtc?: string;

  /**
   * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
   *
   * @remarks
   *
   * ## Overview
   *
   * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
   *
   * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => UpdateCustomer200ApplicationJSONSourceModifiedDate)
  data?: UpdateCustomer200ApplicationJSONSourceModifiedDate;

  /**
   * Unique identifier for a company's data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  /**
   * The type of data being pushed, eg invoices, customers.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  /**
   * The datetime when the push was requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  requestedOnUtc: string;

  /**
   * The status of the push operation.
   */
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

  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
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

  /**
   * Success
   */
  @SpeakeasyMetadata()
  updateCustomer200ApplicationJSONObject?: UpdateCustomer200ApplicationJSON;
}
