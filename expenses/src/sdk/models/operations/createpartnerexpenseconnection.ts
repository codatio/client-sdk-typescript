import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class CreatePartnerexpenseConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class CreatePartnerexpenseConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePartnerexpenseConnectionPathParams;
}

export class CreatePartnerexpenseConnectionConnectionConnectionInfo extends SpeakeasyBase {
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

export class CreatePartnerexpenseConnectionConnectionDataConnectionErrors extends SpeakeasyBase {
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
export enum CreatePartnerexpenseConnectionConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum CreatePartnerexpenseConnectionConnectionDataConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// CreatePartnerexpenseConnectionConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class CreatePartnerexpenseConnectionConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionInfo" })
  @Type(() => CreatePartnerexpenseConnectionConnectionConnectionInfo)
  connectionInfo?: CreatePartnerexpenseConnectionConnectionConnectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata({ elemType: CreatePartnerexpenseConnectionConnectionDataConnectionErrors })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => CreatePartnerexpenseConnectionConnectionDataConnectionErrors)
  dataConnectionErrors?: CreatePartnerexpenseConnectionConnectionDataConnectionErrors[];

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
  sourceType: CreatePartnerexpenseConnectionConnectionSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreatePartnerexpenseConnectionConnectionDataConnectionStatusEnum;
}

export class CreatePartnerexpenseConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: CreatePartnerexpenseConnectionConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}