import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetPullOperationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=datasetId",
  })
  datasetId: string;
}

export class GetPullOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPullOperationPathParams;
}

export class GetPullOperation404ApplicationJSON extends SpeakeasyBase {
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

export class GetPullOperation401ApplicationJSON extends SpeakeasyBase {
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
export enum GetPullOperationPullOperationStatusEnum {
  Initial = "Initial",
  Queued = "Queued",
  Fetching = "Fetching",
  MapQueued = "MapQueued",
  Mapping = "Mapping",
  Complete = "Complete",
  FetchError = "FetchError",
  MapError = "MapError",
  InternalError = "InternalError",
  ProcessingQueued = "ProcessingQueued",
  Processing = "Processing",
  ProcessingError = "ProcessingError",
  ValidationQueued = "ValidationQueued",
  Validating = "Validating",
  ValidationError = "ValidationError",
  AuthError = "AuthError",
  Cancelled = "Cancelled",
  Routing = "Routing",
  RoutingError = "RoutingError",
  NotSupported = "NotSupported",
  RateLimitError = "RateLimitError",
  PermissionsError = "PermissionsError",
  PrerequisiteNotMet = "PrerequisiteNotMet",
}

// GetPullOperationPullOperation
/**
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
 **/
export class GetPullOperationPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "progress" })
  progress: number;

  @SpeakeasyMetadata()
  @Expose({ name: "requested" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requested: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetPullOperationPullOperationStatusEnum;
}

export class GetPullOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pullOperation?: GetPullOperationPullOperation;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getPullOperation401ApplicationJSONObject?: GetPullOperation401ApplicationJSON;

  @SpeakeasyMetadata()
  getPullOperation404ApplicationJSONObject?: GetPullOperation404ApplicationJSON;
}
