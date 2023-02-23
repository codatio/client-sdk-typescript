import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetSyncTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
  syncId: string;
}

export class GetSyncTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}

export class GetSyncTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSyncTransactionsQueryParams;
}

export class GetSyncTransactions200TextJSONHalLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
export enum GetSyncTransactions200TextJSONResultsIntegrationTypeEnum {
    Expenses = "expenses",
    Bankfeeds = "bankfeeds"
}
export enum GetSyncTransactions200TextJSONResultsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    ValidationError = "ValidationError",
    Completed = "Completed",
    PushError = "PushError"
}

export class GetSyncTransactions200TextJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: GetSyncTransactions200TextJSONResultsIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetSyncTransactions200TextJSONResultsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}

export class GetSyncTransactions200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: GetSyncTransactions200TextJSONHalLink })
  links?: Record<string, GetSyncTransactions200TextJSONHalLink>;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetSyncTransactions200TextJSONResults })
  results?: GetSyncTransactions200TextJSONResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetSyncTransactions200ApplicationJSONHalLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
export enum GetSyncTransactions200ApplicationJSONResultsIntegrationTypeEnum {
    Expenses = "expenses",
    Bankfeeds = "bankfeeds"
}
export enum GetSyncTransactions200ApplicationJSONResultsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    ValidationError = "ValidationError",
    Completed = "Completed",
    PushError = "PushError"
}

export class GetSyncTransactions200ApplicationJSONResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: GetSyncTransactions200ApplicationJSONResultsIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetSyncTransactions200ApplicationJSONResultsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}

export class GetSyncTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: GetSyncTransactions200ApplicationJSONHalLink })
  links?: Record<string, GetSyncTransactions200ApplicationJSONHalLink>;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetSyncTransactions200ApplicationJSONResults })
  results?: GetSyncTransactions200ApplicationJSONResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class GetSyncTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyncTransactions200ApplicationJSONObject?: GetSyncTransactions200ApplicationJSON;

  @SpeakeasyMetadata()
  getSyncTransactions200TextJSONObject?: GetSyncTransactions200TextJSON;

  @SpeakeasyMetadata()
  getSyncTransactions200TextPlainObject?: string;
}