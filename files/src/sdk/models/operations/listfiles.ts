import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListFilesPathParams;

  @SpeakeasyMetadata()
  security: ListFilesSecurity;
}

export class ListFilesFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=uploaded" })
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