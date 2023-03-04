import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetExcelReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum GetExcelReportReportTypeEnum {
    Audit = "audit"
}

export class GetExcelReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: GetExcelReportReportTypeEnum;
}

export class GetExcelReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExcelReportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetExcelReportQueryParams;
}

export class GetExcelReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}