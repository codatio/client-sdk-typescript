import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=customerId",
  })
  customerId: string;
}
export enum GetCustomerSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class GetCustomerSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: GetCustomerSourceModifiedDateAddressesTypeEnum;
}
export enum GetCustomerSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

// GetCustomerSourceModifiedDateContactsAddress
/**
 * An object of Address information.
 **/
export class GetCustomerSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: GetCustomerSourceModifiedDateContactsAddressTypeEnum;
}
export enum GetCustomerSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class GetCustomerSourceModifiedDateContactsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCustomerSourceModifiedDateContactsPhoneTypeEnum;
}
export enum GetCustomerSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class GetCustomerSourceModifiedDateContacts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => GetCustomerSourceModifiedDateContactsAddress)
  address?: GetCustomerSourceModifiedDateContactsAddress;

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

  @SpeakeasyMetadata({ elemType: GetCustomerSourceModifiedDateContactsPhone })
  @Expose({ name: "phone" })
  @Type(() => GetCustomerSourceModifiedDateContactsPhone)
  phone?: GetCustomerSourceModifiedDateContactsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCustomerSourceModifiedDateContactsStatusEnum;
}

export class GetCustomerSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetCustomerSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

// GetCustomerSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class GetCustomerSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// GetCustomerSourceModifiedDate
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
export class GetCustomerSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCustomerSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => GetCustomerSourceModifiedDateAddresses)
  addresses?: GetCustomerSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: GetCustomerSourceModifiedDateContacts })
  @Expose({ name: "contacts" })
  @Type(() => GetCustomerSourceModifiedDateContacts)
  contacts?: GetCustomerSourceModifiedDateContacts[];

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
  @Type(() => GetCustomerSourceModifiedDateMetadata)
  metadata?: GetCustomerSourceModifiedDateMetadata;

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
  status: GetCustomerSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetCustomerSourceModifiedDateSupplementalData)
  supplementalData?: GetCustomerSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

export class GetCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetCustomerSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
