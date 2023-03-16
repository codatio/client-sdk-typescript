import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompanyAuthorizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "property1" })
  property1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "property2" })
  property2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "property3" })
  property3?: string;
}

export class GetCompanyAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: GetCompanyAuthorizationRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetCompanyAuthorizationConnectionConnectionInfo extends SpeakeasyBase {
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

export class GetCompanyAuthorizationConnectionDataConnectionErrors extends SpeakeasyBase {
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
export enum GetCompanyAuthorizationConnectionSourceTypeEnum {
  Accounting = "Accounting",
  Banking = "Banking",
  Commerce = "Commerce",
  Other = "Other",
  Unknown = "Unknown",
}
export enum GetCompanyAuthorizationConnectionDataConnectionStatusEnum {
  PendingAuth = "PendingAuth",
  Linked = "Linked",
  Unlinked = "Unlinked",
  Deauthorized = "Deauthorized",
}

// GetCompanyAuthorizationConnection
/**
 * A connection represents the link between a `company` and a source of data.
 **/
export class GetCompanyAuthorizationConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionInfo" })
  @Type(() => GetCompanyAuthorizationConnectionConnectionInfo)
  connectionInfo?: GetCompanyAuthorizationConnectionConnectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata({
    elemType: GetCompanyAuthorizationConnectionDataConnectionErrors,
  })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => GetCompanyAuthorizationConnectionDataConnectionErrors)
  dataConnectionErrors?: GetCompanyAuthorizationConnectionDataConnectionErrors[];

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
  sourceType: GetCompanyAuthorizationConnectionSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompanyAuthorizationConnectionDataConnectionStatusEnum;
}

export class GetCompanyAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: GetCompanyAuthorizationConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
