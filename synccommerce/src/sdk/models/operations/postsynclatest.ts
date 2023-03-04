import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class PostSyncLatestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PostSyncLatestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "syncTo" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  syncTo?: Date;
}

export class PostSyncLatestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSyncLatestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSyncLatestRequestBody;
}

export class PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "erroredOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusText" })
  statusText?: string;
}

export class PostSyncLatest200ApplicationJSONDataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata({ elemType: PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors)
  dataConnectionErrors?: PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class PostSyncLatest200ApplicationJSONSyncDateRangeUtc extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "finish" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  finish?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  start?: Date;
}

export class PostSyncLatest200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "commerceSyncId" })
  commerceSyncId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ elemType: PostSyncLatest200ApplicationJSONDataConnections })
  @Expose({ name: "dataConnections" })
  @Type(() => PostSyncLatest200ApplicationJSONDataConnections)
  dataConnections?: PostSyncLatest200ApplicationJSONDataConnections[];

  @SpeakeasyMetadata()
  @Expose({ name: "dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "syncDateRangeUtc" })
  @Type(() => PostSyncLatest200ApplicationJSONSyncDateRangeUtc)
  syncDateRangeUtc?: PostSyncLatest200ApplicationJSONSyncDateRangeUtc;

  @SpeakeasyMetadata()
  @Expose({ name: "syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "syncStatus" })
  syncStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "syncStatusCode" })
  syncStatusCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  syncUtc?: Date;
}

export class PostSyncLatestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postSyncLatest200ApplicationJSONObject?: PostSyncLatest200ApplicationJSON;
}