import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdPathParams;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesTypeEnum;
}
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem)
  errors?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem)
  warnings?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem[];
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges)
  changes?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

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
  status: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONStatusEnum;

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
  @Type(() => DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation)
  validation?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONObject?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSON;
}