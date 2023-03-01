import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchCompanyConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PatchCompanyConnectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class PatchCompanyConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCompanyConnectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchCompanyConnectionRequestBody;
}

export class PatchCompanyConnection404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

export class PatchCompanyConnection401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

export class PatchCompanyConnectionConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

export class PatchCompanyConnectionConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
export enum PatchCompanyConnectionConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum PatchCompanyConnectionConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// PatchCompanyConnectionConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class PatchCompanyConnectionConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: PatchCompanyConnectionConnectionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: PatchCompanyConnectionConnectionDataConnectionErrors })
  dataConnectionErrors?: PatchCompanyConnectionConnectionDataConnectionErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=integrationKey" })
  integrationKey: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType: PatchCompanyConnectionConnectionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PatchCompanyConnectionConnectionStatusEnum;
}

export class PatchCompanyConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: PatchCompanyConnectionConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchCompanyConnection401ApplicationJSONObject?: PatchCompanyConnection401ApplicationJSON;

  @SpeakeasyMetadata()
  patchCompanyConnection404ApplicationJSONObject?: PatchCompanyConnection404ApplicationJSON;
}