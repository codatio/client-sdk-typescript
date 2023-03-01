import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetPullOperationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class GetPullOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPullOperationPathParams;
}

export class GetPullOperation404ApplicationJSON extends SpeakeasyBase {
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

export class GetPullOperation401ApplicationJSON extends SpeakeasyBase {
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
    PrerequisiteNotMet = "PrerequisiteNotMet"
}

// GetPullOperationPullOperation
/** 
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
**/
export class GetPullOperationPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: string;

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
  getPullOperation401ApplicationJSONObject?: GetPullOperation401ApplicationJSON;

  @SpeakeasyMetadata()
  getPullOperation404ApplicationJSONObject?: GetPullOperation404ApplicationJSON;
}