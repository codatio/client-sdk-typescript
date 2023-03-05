import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetCompaniesCompanyIdPushPushOperationKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pushOperationKey" })
  pushOperationKey: string;
}

export class GetCompaniesCompanyIdPushPushOperationKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdPushPushOperationKeyPathParams;
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesTypeEnum;
}
export enum GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem)
  errors?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem)
  warnings?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem[];
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges)
  changes?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation)
  validation?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation;
}

export class GetCompaniesCompanyIdPushPushOperationKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdPushPushOperationKey200ApplicationJSONObject?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSON;
}