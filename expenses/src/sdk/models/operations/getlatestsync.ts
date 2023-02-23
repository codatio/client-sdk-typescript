import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetLatestSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetLatestSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLatestSyncPathParams;
}

export class GetLatestSync200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncId" })
  syncId?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatusCode" })
  syncStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=syncUtc" })
  syncUtc?: Date;
}

export class GetLatestSync200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=syncId" })
  syncId?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatusCode" })
  syncStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=syncUtc" })
  syncUtc?: Date;
}

export class GetLatestSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLatestSync200ApplicationJSONObject?: GetLatestSync200ApplicationJSON;

  @SpeakeasyMetadata()
  getLatestSync200TextJSONObject?: GetLatestSync200TextJSON;

  @SpeakeasyMetadata()
  getLatestSync200TextPlainObject?: string;
}