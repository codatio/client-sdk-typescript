import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetSyncByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=syncId",
  })
  syncId: string;
}

export class GetSyncByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncByIdPathParams;
}

export class GetSyncById200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataPushed" })
  dataPushed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "syncExceptionMessage" })
  syncExceptionMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "syncId" })
  syncId?: string;

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

export class GetSyncByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getSyncById200ApplicationJSONObject?: GetSyncById200ApplicationJSON;
}
