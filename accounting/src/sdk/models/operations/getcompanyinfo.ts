import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompanyInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompanyInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetCompanyInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyInfoPathParams;

  @SpeakeasyMetadata()
  security: GetCompanyInfoSecurity;
}
export enum GetCompanyInfoCompanyInfoAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class GetCompanyInfoCompanyInfoAddresses extends SpeakeasyBase {
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
  type: GetCompanyInfoCompanyInfoAddressesTypeEnum;
}
export enum GetCompanyInfoCompanyInfoPhoneNumbersTypeEnum {
    Unknown = "Unknown",
    Primary = "Primary",
    Landline = "Landline",
    Mobile = "Mobile",
    Fax = "Fax"
}

export class GetCompanyInfoCompanyInfoPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompanyInfoCompanyInfoPhoneNumbersTypeEnum;
}
export enum GetCompanyInfoCompanyInfoWebLinksTypeEnum {
    Unknown = "Unknown",
    Website = "Website",
    Social = "Social"
}

export class GetCompanyInfoCompanyInfoWebLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompanyInfoCompanyInfoWebLinksTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export class GetCompanyInfoCompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingPlatformRef" })
  accountingPlatformRef?: string;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: GetCompanyInfoCompanyInfoAddresses })
  addresses?: GetCompanyInfoCompanyInfoAddresses[];

  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=financialYearStartDate" })
  financialYearStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ledgerLockDate" })
  ledgerLockDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: GetCompanyInfoCompanyInfoPhoneNumbers })
  phoneNumbers?: GetCompanyInfoCompanyInfoPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: GetCompanyInfoCompanyInfoWebLinks })
  webLinks?: GetCompanyInfoCompanyInfoWebLinks[];
}

export class GetCompanyInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyInfo?: GetCompanyInfoCompanyInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}