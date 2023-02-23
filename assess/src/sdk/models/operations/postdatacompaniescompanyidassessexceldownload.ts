import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostDataCompaniesCompanyIdAssessExcelDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum PostDataCompaniesCompanyIdAssessExcelDownloadReportTypeEnum {
    Audit = "audit"
}

export class PostDataCompaniesCompanyIdAssessExcelDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: PostDataCompaniesCompanyIdAssessExcelDownloadReportTypeEnum;
}

export class PostDataCompaniesCompanyIdAssessExcelDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDataCompaniesCompanyIdAssessExcelDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDataCompaniesCompanyIdAssessExcelDownloadQueryParams;
}

export class PostDataCompaniesCompanyIdAssessExcelDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}