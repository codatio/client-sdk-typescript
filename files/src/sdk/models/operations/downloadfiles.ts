import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Transform, Type } from "class-transformer";

export class DownloadFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class DownloadFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  date?: Date;
}

export class DownloadFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFilesPathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFilesQueryParams;
}

export class DownloadFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
