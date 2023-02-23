import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetSyncByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
  syncId: string;
}

export class GetSyncByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncByIdPathParams;
}

export class GetSyncById200TextJSON extends SpeakeasyBase {
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

export class GetSyncById200ApplicationJSON extends SpeakeasyBase {
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

export class GetSyncByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyncById200ApplicationJSONObject?: GetSyncById200ApplicationJSON;

  @SpeakeasyMetadata()
  getSyncById200TextJSONObject?: GetSyncById200TextJSON;

  @SpeakeasyMetadata()
  getSyncById200TextPlainObject?: string;
}