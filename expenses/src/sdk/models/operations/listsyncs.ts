import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListSyncsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListSyncsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSyncsPathParams;
}

export class ListSyncs200TextJSON extends SpeakeasyBase {
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

export class ListSyncs200ApplicationJSON extends SpeakeasyBase {
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

export class ListSyncsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: ListSyncs200ApplicationJSON })
  listSyncs200ApplicationJSONObjects?: ListSyncs200ApplicationJSON[];

  @SpeakeasyMetadata({ elemType: ListSyncs200TextJSON })
  listSyncs200TextJSONObjects?: ListSyncs200TextJSON[];

  @SpeakeasyMetadata()
  listSyncs200TextPlainArray?: string;
}