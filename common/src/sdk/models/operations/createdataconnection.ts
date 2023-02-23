import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateDataConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class CreateDataConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDataConnectionPathParams;
}

export class CreateDataConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}