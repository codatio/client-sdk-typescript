import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompanyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetCompanyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyPathParams;
}

export class GetCompany401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class GetCompanyCompanyConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp3" })
  additionalProp3?: string;
}

export class GetCompanyCompanyConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "erroredOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusText" })
  statusText?: string;
}
export enum GetCompanyCompanyConnectionSourceTypeEnum {
  Accounting = "Accounting",
  Banking = "Banking",
  Commerce = "Commerce",
  Other = "Other",
  Unknown = "Unknown",
}
export enum GetCompanyCompanyConnectionDataConnectionStatusEnum {
  PendingAuth = "PendingAuth",
  Linked = "Linked",
  Unlinked = "Unlinked",
  Deauthorized = "Deauthorized",
}

// GetCompanyCompanyConnection
/**
 * A connection represents the link between a `company` and a source of data.
 **/
export class GetCompanyCompanyConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionInfo" })
  @Type(() => GetCompanyCompanyConnectionConnectionInfo)
  connectionInfo?: GetCompanyCompanyConnectionConnectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata({
    elemType: GetCompanyCompanyConnectionDataConnectionErrors,
  })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => GetCompanyCompanyConnectionDataConnectionErrors)
  dataConnectionErrors?: GetCompanyCompanyConnectionDataConnectionErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationKey" })
  integrationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType: GetCompanyCompanyConnectionSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompanyCompanyConnectionDataConnectionStatusEnum;
}

// GetCompanyCompany
/**
 * A company in Codat represent a small or medium sized business, whose data you wish to share
 **/
export class GetCompanyCompany extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ elemType: GetCompanyCompanyConnection })
  @Expose({ name: "dataConnections" })
  @Type(() => GetCompanyCompanyConnection)
  dataConnections?: GetCompanyCompanyConnection[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platform" })
  platform?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect" })
  redirect: string;
}

export class GetCompanyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  company?: GetCompanyCompany;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCompany401ApplicationJSONObject?: GetCompany401ApplicationJSON;
}
