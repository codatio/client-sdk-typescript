import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property1" })
  property1?: string;

  @SpeakeasyMetadata({ data: "json, name=property2" })
  property2?: string;

  @SpeakeasyMetadata({ data: "json, name=property3" })
  property3?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequestBody;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionSourceTypeEnum {
    Accounting = "Accounting",
    Banking = "Banking",
    Commerce = "Commerce",
    Other = "Other",
    Unknown = "Unknown"
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionStatusEnum {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized"
}

// GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnection
/** 
 * A connection represents the link between a `company` and a source of data.
**/
export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionDataConnectionErrors })
  dataConnectionErrors?: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionDataConnectionErrors[];

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
  sourceType: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnectionStatusEnum;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: GetCompaniesCompanyIdConnectionsConnectionIdAuthorizationConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}