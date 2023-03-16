import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetLatestSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetLatestSync200ApplicationJSON extends SpeakeasyBase {
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

export class GetLatestSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getLatestSync200ApplicationJSONObject?: GetLatestSync200ApplicationJSON;
}
