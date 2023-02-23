import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CheckDataStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class CheckDataStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckDataStatusPathParams;
}

export class CheckDataStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}