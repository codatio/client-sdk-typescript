import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class IntiateSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class IntiateSyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetIds" })
  datasetIds: string[];
}

export class IntiateSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntiateSyncPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IntiateSyncRequestBody;
}

export class IntiateSync200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=syncId" })
  syncId?: string;
}

export class IntiateSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  intiateSync200ApplicationJSONObject?: IntiateSync200ApplicationJSON;
}