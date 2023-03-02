import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Transform, Type } from "class-transformer";


export class DownloadFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class DownloadFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  date?: Date;
}

export class DownloadFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class DownloadFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFilesPathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFilesQueryParams;

  @SpeakeasyMetadata()
  security: DownloadFilesSecurity;
}

export class DownloadFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}