import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetSyncFlowUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountingKey",
  })
  accountingKey: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=commerceKey",
  })
  commerceKey: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=merchantIdentifier",
  })
  merchantIdentifier?: string;
}

export class GetSyncFlowUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
