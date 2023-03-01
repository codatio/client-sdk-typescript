import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum CreatePullOperationDataTypeEnum {
    Invoices = "invoices",
    Accounts = "accounts",
    CommercePayments = "commerce-payments",
    BankingAccounts = "banking-accounts",
    Company = "company",
    ProfitAndLoss = "profitAndLoss",
    CommerceTransactions = "commerce-transactions",
    Bills = "bills",
    Customers = "customers"
}

export class CreatePullOperationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: CreatePullOperationDataTypeEnum;
}

export class CreatePullOperationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionId" })
  connectionId?: string;
}

export class CreatePullOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePullOperationPathParams;

  @SpeakeasyMetadata()
  queryParams: CreatePullOperationQueryParams;
}

export class CreatePullOperation404ApplicationJSON extends SpeakeasyBase {
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

export class CreatePullOperation401ApplicationJSON extends SpeakeasyBase {
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
export enum CreatePullOperationPullOperationStatusEnum {
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

// CreatePullOperationPullOperation
/** 
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
**/
export class CreatePullOperationPullOperation extends SpeakeasyBase {
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
  status: CreatePullOperationPullOperationStatusEnum;
}

export class CreatePullOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pullOperation?: CreatePullOperationPullOperation;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPullOperation401ApplicationJSONObject?: CreatePullOperation401ApplicationJSON;

  @SpeakeasyMetadata()
  createPullOperation404ApplicationJSONObject?: CreatePullOperation404ApplicationJSON;
}