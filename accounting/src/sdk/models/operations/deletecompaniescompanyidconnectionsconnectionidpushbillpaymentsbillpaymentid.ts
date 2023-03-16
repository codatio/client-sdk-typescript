import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=billPaymentId",
  })
  billPaymentId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationRecordRef
  )
  recordRef?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesTypeEnum;
}
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem
  )
  errors?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem
  )
  warnings?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem[];
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges,
  })
  @Expose({ name: "changes" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges
  )
  changes?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges[];

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
  status: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONStatusEnum;

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
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation
  )
  validation?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONObject?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSON;
}
