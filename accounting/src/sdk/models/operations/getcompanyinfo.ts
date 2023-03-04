import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetCompanyInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompanyInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyInfoPathParams;
}
export enum GetCompanyInfoCompanyInfoAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class GetCompanyInfoCompanyInfoAddresses extends SpeakeasyBase {
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
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompanyInfoCompanyInfoPhoneNumbersTypeEnum;
}
export enum GetCompanyInfoCompanyInfoWebLinksTypeEnum {
    Unknown = "Unknown",
    Website = "Website",
    Social = "Social"
}

export class GetCompanyInfoCompanyInfoWebLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompanyInfoCompanyInfoWebLinksTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class GetCompanyInfoCompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountingPlatformRef" })
  accountingPlatformRef?: string;

  @SpeakeasyMetadata({ elemType: GetCompanyInfoCompanyInfoAddresses })
  @Expose({ name: "addresses" })
  @Type(() => GetCompanyInfoCompanyInfoAddresses)
  addresses?: GetCompanyInfoCompanyInfoAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "baseCurrency" })
  baseCurrency?: string;

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
  @Expose({ name: "financialYearStartDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  financialYearStartDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "ledgerLockDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  ledgerLockDate?: Date;

  @SpeakeasyMetadata({ elemType: GetCompanyInfoCompanyInfoPhoneNumbers })
  @Expose({ name: "phoneNumbers" })
  @Type(() => GetCompanyInfoCompanyInfoPhoneNumbers)
  phoneNumbers?: GetCompanyInfoCompanyInfoPhoneNumbers[];

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;

  @SpeakeasyMetadata({ elemType: GetCompanyInfoCompanyInfoWebLinks })
  @Expose({ name: "webLinks" })
  @Type(() => GetCompanyInfoCompanyInfoWebLinks)
  webLinks?: GetCompanyInfoCompanyInfoWebLinks[];
}

export class GetCompanyInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyInfo?: GetCompanyInfoCompanyInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}