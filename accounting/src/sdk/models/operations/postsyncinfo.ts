import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostSyncInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PostSyncInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSyncInfoPathParams;
}
export enum PostSyncInfo200ApplicationJSONStatusEnum {
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
    NotSupported = "NotSupported",
    RateLimitError = "RateLimitError",
    PermissionsError = "PermissionsError",
    PrerequisiteNotMet = "PrerequisiteNotMet"
}

export class PostSyncInfo200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completed?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetLogsUrl" })
  datasetLogsUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

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
  status: PostSyncInfo200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validationinformationUrl" })
  validationinformationUrl?: string;
}

export class PostSyncInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postSyncInfo200ApplicationJSONObject?: PostSyncInfo200ApplicationJSON;
}