import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListSyncsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListSyncsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSyncsPathParams;
}

export class ListSyncs200ApplicationJSON extends SpeakeasyBase {
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

export class ListSyncsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: ListSyncs200ApplicationJSON })
  listSyncs200ApplicationJSONObjects?: ListSyncs200ApplicationJSON[];
}