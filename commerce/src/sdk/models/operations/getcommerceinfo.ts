import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetCommerceInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCommerceInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommerceInfoPathParams;
}

export class GetCommerceInfoSourceModifiedDateAccountBalances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pending" })
  pending?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reserved" })
  reserved?: number;
}

export class GetCommerceInfoSourceModifiedDateAddress extends SpeakeasyBase {
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
  type?: any;
}
export enum GetCommerceInfoSourceModifiedDatePhoneNumbersTypeEnum {
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax",
    Unknown = "Unknown"
}

export class GetCommerceInfoSourceModifiedDatePhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCommerceInfoSourceModifiedDatePhoneNumbersTypeEnum;
}

// GetCommerceInfoSourceModifiedDate
/** 
 * In the Codat system, company information includes standard commercial details about 
 * a linked company, such as their address, phone number, and company registration.
 * 
**/
export class GetCommerceInfoSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceInfoSourceModifiedDateAccountBalances })
  @Expose({ name: "accountBalances" })
  @Type(() => GetCommerceInfoSourceModifiedDateAccountBalances)
  accountBalances?: GetCommerceInfoSourceModifiedDateAccountBalances[];

  @SpeakeasyMetadata({ elemType: GetCommerceInfoSourceModifiedDateAddress })
  @Expose({ name: "addresses" })
  @Type(() => GetCommerceInfoSourceModifiedDateAddress)
  addresses?: GetCommerceInfoSourceModifiedDateAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commercePlatformRef" })
  commercePlatformRef?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ elemType: GetCommerceInfoSourceModifiedDatePhoneNumbers })
  @Expose({ name: "phoneNumbers" })
  @Type(() => GetCommerceInfoSourceModifiedDatePhoneNumbers)
  phoneNumbers?: GetCommerceInfoSourceModifiedDatePhoneNumbers[];

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "webLinks" })
  webLinks?: any[];
}

export class GetCommerceInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetCommerceInfoSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}