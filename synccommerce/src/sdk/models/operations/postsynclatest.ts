import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostSyncLatestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PostSyncLatestApplicationWildcardPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncTo" })
  syncTo?: Date;
}

export class PostSyncLatestApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncTo" })
  syncTo?: Date;
}

export class PostSyncLatestApplicationJSONPatchPlusJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncTo" })
  syncTo?: Date;
}

export class PostSyncLatestTextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncTo" })
  syncTo?: Date;
}

export class PostSyncLatestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  object?: PostSyncLatestApplicationWildcardPlusJson;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object1?: PostSyncLatestApplicationJSON;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  object2?: PostSyncLatestApplicationJSONPatchPlusJSON;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  object3?: PostSyncLatestTextJSON;
}

export class PostSyncLatestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSyncLatestPathParams;

  @SpeakeasyMetadata()
  request?: PostSyncLatestRequests;
}

export class PostSyncLatest200TextJSONDataConnectionsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}

export class PostSyncLatest200TextJSONDataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: PostSyncLatest200TextJSONDataConnectionsDataConnectionErrors })
  dataConnectionErrors?: PostSyncLatest200TextJSONDataConnectionsDataConnectionErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class PostSyncLatest200TextJSONSyncDateRangeUtc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finish" })
  finish?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}

export class PostSyncLatest200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commerceSyncId" })
  commerceSyncId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: PostSyncLatest200TextJSONDataConnections })
  dataConnections?: PostSyncLatest200TextJSONDataConnections[];

  @SpeakeasyMetadata({ data: "json, name=dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncDateRangeUtc" })
  syncDateRangeUtc?: PostSyncLatest200TextJSONSyncDateRangeUtc;

  @SpeakeasyMetadata({ data: "json, name=syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatusCode" })
  syncStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=syncUtc" })
  syncUtc?: Date;
}

export class PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=erroredOnUtc" })
  erroredOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;
}

export class PostSyncLatest200ApplicationJSONDataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors })
  dataConnectionErrors?: PostSyncLatest200ApplicationJSONDataConnectionsDataConnectionErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class PostSyncLatest200ApplicationJSONSyncDateRangeUtc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finish" })
  finish?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}

export class PostSyncLatest200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commerceSyncId" })
  commerceSyncId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: PostSyncLatest200ApplicationJSONDataConnections })
  dataConnections?: PostSyncLatest200ApplicationJSONDataConnections[];

  @SpeakeasyMetadata({ data: "json, name=dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncDateRangeUtc" })
  syncDateRangeUtc?: PostSyncLatest200ApplicationJSONSyncDateRangeUtc;

  @SpeakeasyMetadata({ data: "json, name=syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatusCode" })
  syncStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=syncUtc" })
  syncUtc?: Date;
}

export class PostSyncLatestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSyncLatest200ApplicationJSONObject?: PostSyncLatest200ApplicationJSON;

  @SpeakeasyMetadata()
  postSyncLatest200TextJSONObject?: PostSyncLatest200TextJSON;

  @SpeakeasyMetadata()
  postSyncLatest200TextPlainObject?: string;
}