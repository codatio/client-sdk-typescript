import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum MakeRequestToDownloadExcelReportReportTypeEnum {
  Audit = "audit",
}

export class MakeRequestToDownloadExcelReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportType",
  })
  reportType: MakeRequestToDownloadExcelReportReportTypeEnum;
}

export class MakeRequestToDownloadExcelReport200ApplicationJSON extends SpeakeasyBase {
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

export class MakeRequestToDownloadExcelReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  makeRequestToDownloadExcelReport200ApplicationJSONObject?: MakeRequestToDownloadExcelReport200ApplicationJSON;
}
