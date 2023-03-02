import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


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

export class GetSyncTransactions200ApplicationJSONHalLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "integrationType" })
  integrationType?: GetSyncTransactions200ApplicationJSONResultsIntegrationTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetSyncTransactions200ApplicationJSONResultsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionId" })
  transactionId?: string;
}

export class GetSyncTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetSyncTransactions200ApplicationJSONHalLink })
  @Expose({ name: "links" })
  @Transform(({ value }) => {
    const obj: Record<string, GetSyncTransactions200ApplicationJSONHalLink> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetSyncTransactions200ApplicationJSONHalLink,
        value[key] as GetSyncTransactions200ApplicationJSONHalLink,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  links?: Record<string, GetSyncTransactions200ApplicationJSONHalLink>;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetSyncTransactions200ApplicationJSONResults })
  @Expose({ name: "results" })
  @Type(() => GetSyncTransactions200ApplicationJSONResults)
  results?: GetSyncTransactions200ApplicationJSONResults[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetSyncTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyncTransactions200ApplicationJSONObject?: GetSyncTransactions200ApplicationJSON;
}