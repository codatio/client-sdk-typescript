import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetLastSuccessfulSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetLastSuccessfulSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLastSuccessfulSyncPathParams;
}

export class GetLastSuccessfulSync200TextJSON extends SpeakeasyBase {
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

export class GetLastSuccessfulSync200ApplicationJSON extends SpeakeasyBase {
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

export class GetLastSuccessfulSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLastSuccessfulSync200ApplicationJSONObject?: GetLastSuccessfulSync200ApplicationJSON;

  @SpeakeasyMetadata()
  getLastSuccessfulSync200TextJSONObject?: GetLastSuccessfulSync200TextJSON;

  @SpeakeasyMetadata()
  getLastSuccessfulSync200TextPlainObject?: string;
}