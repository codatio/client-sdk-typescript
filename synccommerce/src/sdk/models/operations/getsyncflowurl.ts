import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetSyncFlowUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountingKey" })
  accountingKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commerceKey" })
  commerceKey: string;
}

export class GetSyncFlowUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=merchantIdentifier" })
  merchantIdentifier?: string;
}

export class GetSyncFlowUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncFlowUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSyncFlowUrlQueryParams;
}

export class GetSyncFlowUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}