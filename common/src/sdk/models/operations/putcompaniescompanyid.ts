import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PutCompaniesCompanyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PutCompaniesCompanyIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PutCompaniesCompanyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutCompaniesCompanyIdRequestBody;
}

export class PutCompaniesCompanyId401ApplicationJSON extends SpeakeasyBase {
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

export class PutCompaniesCompanyIdCompanyConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

export class PutCompaniesCompanyIdCompanyConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
export enum PutCompaniesCompanyIdCompanyConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum PutCompaniesCompanyIdCompanyConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// PutCompaniesCompanyIdCompanyConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class PutCompaniesCompanyIdCompanyConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: PutCompaniesCompanyIdCompanyConnectionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: PutCompaniesCompanyIdCompanyConnectionDataConnectionErrors })
  dataConnectionErrors?: PutCompaniesCompanyIdCompanyConnectionDataConnectionErrors[];

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
  sourceType: PutCompaniesCompanyIdCompanyConnectionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PutCompaniesCompanyIdCompanyConnectionStatusEnum;
}

// PutCompaniesCompanyIdCompany
/** 
 * A company in Codat represent a small or medium sized business, whose data you wish to share
**/
export class PutCompaniesCompanyIdCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: PutCompaniesCompanyIdCompanyConnection })
  dataConnections?: PutCompaniesCompanyIdCompanyConnection[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect: string;
}

export class PutCompaniesCompanyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  company?: PutCompaniesCompanyIdCompany;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putCompaniesCompanyId401ApplicationJSONObject?: PutCompaniesCompanyId401ApplicationJSON;
}