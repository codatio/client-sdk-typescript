import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdPathParams;
}

export class GetCompaniesCompanyId401ApplicationJSON extends SpeakeasyBase {
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

export class GetCompaniesCompanyIdCompanyConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

export class GetCompaniesCompanyIdCompanyConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
export enum GetCompaniesCompanyIdCompanyConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum GetCompaniesCompanyIdCompanyConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// GetCompaniesCompanyIdCompanyConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class GetCompaniesCompanyIdCompanyConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: GetCompaniesCompanyIdCompanyConnectionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: GetCompaniesCompanyIdCompanyConnectionDataConnectionErrors })
  dataConnectionErrors?: GetCompaniesCompanyIdCompanyConnectionDataConnectionErrors[];

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
  sourceType: GetCompaniesCompanyIdCompanyConnectionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCompaniesCompanyIdCompanyConnectionStatusEnum;
}

// GetCompaniesCompanyIdCompany
/** 
 * A company in Codat represent a small or medium sized business, whose data you wish to share
**/
export class GetCompaniesCompanyIdCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: GetCompaniesCompanyIdCompanyConnection })
  dataConnections?: GetCompaniesCompanyIdCompanyConnection[];

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

export class GetCompaniesCompanyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  company?: GetCompaniesCompanyIdCompany;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCompaniesCompanyId401ApplicationJSONObject?: GetCompaniesCompanyId401ApplicationJSON;
}