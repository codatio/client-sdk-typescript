import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostSyncInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PostSyncInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostSyncInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSyncInfoPathParams;

  @SpeakeasyMetadata()
  security: PostSyncInfoSecurity;
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
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: Date;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetLogsUrl" })
  datasetLogsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=requested" })
  requested: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostSyncInfo200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=validationinformationUrl" })
  validationinformationUrl?: string;
}

export class PostSyncInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSyncInfo200ApplicationJSONObject?: PostSyncInfo200ApplicationJSON;
}