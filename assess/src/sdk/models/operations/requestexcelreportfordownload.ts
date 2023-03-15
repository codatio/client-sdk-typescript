import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class RequestExcelReportForDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}
export enum RequestExcelReportForDownloadReportTypeEnum {
  Audit = "audit",
}

export class RequestExcelReportForDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportType",
  })
  reportType: RequestExcelReportForDownloadReportTypeEnum;
}

export class RequestExcelReportForDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestExcelReportForDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestExcelReportForDownloadQueryParams;
}

export class RequestExcelReportForDownload200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "inProgress" })
  inProgress?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "lastGenerated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastGenerated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "lastInvocationId" })
  lastInvocationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "queued" })
  queued?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reportType" })
  reportType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: boolean;
}

export class RequestExcelReportForDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  requestExcelReportForDownload200ApplicationJSONObject?: RequestExcelReportForDownload200ApplicationJSON;
}
