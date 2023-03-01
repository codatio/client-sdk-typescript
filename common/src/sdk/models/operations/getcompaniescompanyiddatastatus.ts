import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdDataStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdDataStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataStatusPathParams;
}

export class GetCompaniesCompanyIdDataStatus404ApplicationJSON extends SpeakeasyBase {
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

export class GetCompaniesCompanyIdDataStatus401ApplicationJSON extends SpeakeasyBase {
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

// GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus
/** 
 * Describes the state of data in the Codat cache for a company and data type
**/
export class GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: string;

  @SpeakeasyMetadata({ data: "json, name=lastSuccessfulSync" })
  lastSuccessfulSync: Date;

  @SpeakeasyMetadata({ data: "json, name=latestSuccessfulSyncId" })
  latestSuccessfulSyncId?: string;

  @SpeakeasyMetadata({ data: "json, name=latestSyncId" })
  latestSyncId?: string;
}

export class GetCompaniesCompanyIdDataStatus200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType1" })
  dataType1?: GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus;

  @SpeakeasyMetadata({ data: "json, name=dataType2" })
  dataType2?: GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus;
}

export class GetCompaniesCompanyIdDataStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus200ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus200ApplicationJSON;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus401ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus401ApplicationJSON;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus404ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus404ApplicationJSON;
}