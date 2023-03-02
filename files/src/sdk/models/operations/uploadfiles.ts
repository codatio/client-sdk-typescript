import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class UploadFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class UploadFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class UploadFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFilesPathParams;

  @SpeakeasyMetadata()
  security: UploadFilesSecurity;
}

export class UploadFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}