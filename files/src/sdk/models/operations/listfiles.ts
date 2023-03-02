import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class ListFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListFilesPathParams;

  @SpeakeasyMetadata()
  security: ListFilesSecurity;
}

export class ListFilesFile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fileName" })
  fileName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uploaded" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  uploaded?: Date;
}

export class ListFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: ListFilesFile })
  files?: ListFilesFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}