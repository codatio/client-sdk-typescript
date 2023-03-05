import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetCompaniesCompanyIdDataStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdDataStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataStatusPathParams;
}

export class GetCompaniesCompanyIdDataStatus404ApplicationJSON extends SpeakeasyBase {
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

export class GetCompaniesCompanyIdDataStatus401ApplicationJSON extends SpeakeasyBase {
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

// GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus
/** 
 * Describes the state of data in the Codat cache for a company and data type
**/
export class GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currentStatus" })
  currentStatus: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSuccessfulSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSuccessfulSync: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "latestSuccessfulSyncId" })
  latestSuccessfulSyncId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "latestSyncId" })
  latestSyncId?: string;
}

export class GetCompaniesCompanyIdDataStatus200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType1" })
  @Type(() => GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus)
  dataType1?: GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType2" })
  @Type(() => GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus)
  dataType2?: GetCompaniesCompanyIdDataStatus200ApplicationJSONDataStatus;
}

export class GetCompaniesCompanyIdDataStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus200ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus200ApplicationJSON;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus401ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus401ApplicationJSON;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdDataStatus404ApplicationJSONObject?: GetCompaniesCompanyIdDataStatus404ApplicationJSON;
}