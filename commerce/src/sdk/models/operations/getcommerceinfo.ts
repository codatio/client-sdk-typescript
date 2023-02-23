import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=reserved" })
  reserved?: number;
}

export class GetCommerceInfoSourceModifiedDateAddress extends SpeakeasyBase {
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
  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCommerceInfoSourceModifiedDatePhoneNumbersTypeEnum;
}

// GetCommerceInfoSourceModifiedDate
/** 
 * In the Codat system, company information includes standard commercial details about 
 * a linked company, such as their address, phone number, and company registration.
 * 
**/
export class GetCommerceInfoSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountBalances", elemType: GetCommerceInfoSourceModifiedDateAccountBalances })
  accountBalances?: GetCommerceInfoSourceModifiedDateAccountBalances[];

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: GetCommerceInfoSourceModifiedDateAddress })
  addresses?: GetCommerceInfoSourceModifiedDateAddress[];

  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=commercePlatformRef" })
  commercePlatformRef?: string;

  @SpeakeasyMetadata({ data: "json, name=companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: GetCommerceInfoSourceModifiedDatePhoneNumbers })
  phoneNumbers?: GetCommerceInfoSourceModifiedDatePhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=webLinks" })
  webLinks?: any[];
}

export class GetCommerceInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetCommerceInfoSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}